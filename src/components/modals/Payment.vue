<template>
  <q-dialog ref="dialogRef"
            v-model="isOpenedLocal"
            @hide="onDialogHide"
            full-height persistent>
    <q-card class="q-dialog-plugin" style="width: 100%; max-width: 800px;">
      <q-toolbar :class="'q-pr-xs'">
        <q-toolbar-title>
          <span class="text-subtitle1">
            <span class="text-blue-grey" >Payment</span>
            <strong  :class="'q-ml-md'">{{ id }}</strong>
          </span>
        </q-toolbar-title>
        <header-tabs-for-forms v-model="tab" :tabs="tabs"></header-tabs-for-forms>
        <q-space/>
        <q-btn icon="close" flat round dense @click="onCancelClick"/>
      </q-toolbar>
      <q-separator/>
      <q-card-section
        style="min-height: calc(100vh - 165px);max-height: calc(100vh - 165px);"
        class="scroll">
        <q-tab-panels v-model="tab" animated keep-alive>
          <q-tab-panel name="general" class="q-pa-none">
            <PaymentGeneral ref="PaymentGeneralRef"></PaymentGeneral>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
      <q-separator  v-if="tab === 'general'"/>
      <q-card-actions align="right" v-if="tab === 'general'">
        <q-btn color="primary" label="Salvează" @click="onOKClick" />
        <q-btn  label="Închide" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from 'quasar';
import { ref, watchEffect } from 'vue';
import HeaderTabsForForms from 'components/HeadersTabsForForms';
import PaymentGeneral from 'components/modals/PaymentGeneral';
import { hideLoading, showLoading, showNotify } from 'src/helpers';
import { api } from 'boot/axios';
import { useStore } from 'vuex';

export default {
  name: 'Payment',
  components: {
    PaymentGeneral,
    HeaderTabsForForms,
  },
  props: {},

  emits: [
    ...useDialogPluginComponent.emits,
    'onCloseDialog',
  ],

  setup(props, context) {
    const isOpenedLocal = ref(false);
    const PaymentGeneralRef = ref(null);

    const tabs = ref([{
      name: 'general',
      icon: 'store',
      label: 'Date generale',
    }, {
      name: 'files',
      icon: 'folder_open',
      label: 'Fișiere',
    }, {
      name: 'logs',
      icon: 'history',
      label: 'Log',
    }]);
    const tab = ref('general');
    const id = ref(0);
    const $store = useStore();
    const paymentData = ref({});

    const {
      dialogRef,
      onDialogHide,
      onDialogCancel,
    } = useDialogPluginComponent();
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome

    watchEffect(() => {
      isOpenedLocal.value = $store.getters['payments/getOpenedPaymentForm'];
    });
    watchEffect(() => {
      paymentData.value = $store.getters['payments/getOpenedPaymentData'];
    });
    watchEffect(() => {
      id.value = paymentData.value.id;
    });

    const getDataById = (idLocal = null) => {
      const oldData = { ...$store.getters['payments/getOpenedPaymentData'] };
      oldData.id = idLocal;
      $store.commit('payments/updateOpenedPaymentData', oldData);

      showLoading();

      api.get(`/payments/get-data-by-id/${idLocal}`).then((response) => {
        hideLoading();
        if (response.data.success) {
          $store.commit('payments/updateOpenedPaymentData', response.data.data);
        } else {
          showNotify({ message: response.data.data.message });
        }
      }).catch((error) => {
        hideLoading();
        showNotify({}, error);
      });
    };

    const onDialogHideLocal = () => {
      context.emit('onCloseDialog', false);
      onDialogHide();
    };

    const onOKClickLocal = () => {
      if (typeof PaymentGeneralRef.value !== 'undefined' && typeof PaymentGeneralRef.value.save !== 'undefined') {
        PaymentGeneralRef.value.save();
      }
    };

    return {
      dialogRef,
      onDialogHide: onDialogHideLocal,
      onOKClick: onOKClickLocal,
      onCancelClick: onDialogCancel,
      isOpenedLocal,
      id,
      tab,
      tabs,
      PaymentGeneralRef,
      getDataById,
    };
  },
};
</script>
