<template>
  <q-dialog ref="dialogRef"
            v-model="isOpenedLocal"
            @hide="onDialogHide"
            full-height persistent>
    <q-card class="q-dialog-plugin" style="width: 100%; max-width: 1300px;">
      <q-toolbar :class="'q-pr-xs'">
        <q-toolbar-title>
          <span class="text-subtitle1">
            <span class="text-blue-grey" >Dealer</span>
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
            <DealerGeneral ref="DealerGeneralRef"></DealerGeneral>
          </q-tab-panel>
          <q-tab-panel name="files" class="q-pa-none">
            <files-form
              ref="FilesForm"
              :dealer_id="id"></files-form>
          </q-tab-panel>
          <q-tab-panel name="payments" class="q-pa-none">
            <payments :dealer_id="id"></payments>
          </q-tab-panel>
          <q-tab-panel name="user_tab_logs" class="q-pa-none">
            <logs-table-for-forms :entity_id="id"
                                  :entity_name="`dealers`"></logs-table-for-forms>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
      <q-separator  v-if="tab === 'general'"/>
      <q-card-actions align="right" v-if="tab === 'general'">
        <q-btn v-if="id"
               @click="printContract()" icon="print" label="Contract"></q-btn>
        <q-btn v-if="id"
               @click="printAcord()" icon="print" label="Acord PDF"></q-btn>
        <q-btn v-if="id"
               :href="printAcord2"
               target="_blank"
               download
               icon="description" label="Acord PDF"></q-btn>
        <q-btn v-if="id"
               :href="acordWordLink"
               target="_blank"
               download
               icon="description" label="Acord WORD"></q-btn>
        <q-btn v-if="id"
               @click="printConsimtamant()" icon="print" label="Consimțământul"></q-btn>
        <q-btn color="primary"
               icon="save"
               label="Salvează" @click="onOKClick" />
        <q-btn label="Închide" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from 'quasar';
import { ref, watchEffect } from 'vue';
import HeaderTabsForForms from 'components/HeadersTabsForForms';
import DealerGeneral from 'components/modals/DealerGeneral';
import { api } from 'boot/axios';
import { useStore } from 'vuex';
import FilesForm from 'components/FilesForm';
import LogsTableForForms from 'components/LogsTableForForms';
import {
  downloadPDF,
  hideLoading,
  showLoading,
  showNotify,
} from 'src/helpers';
import Payments from 'pages/Payments';

export default {
  name: 'Dealer',
  components: {
    Payments,
    LogsTableForForms,
    FilesForm,
    DealerGeneral,
    HeaderTabsForForms,
  },
  props: {},

  emits: [
    ...useDialogPluginComponent.emits,
    'onCloseDialog',
  ],

  setup(props, context) {
    const acordWordLink = 'https://retail-php.creditbox.md/acord_dealer.docx';
    const printAcord2 = 'https://retail-php.creditbox.md/acord_dealer.pdf';
    const isOpenedLocal = ref(false);
    const DealerGeneralRef = ref(null);

    const tabs = ref([{
      name: 'general',
      icon: 'store',
      label: 'Date generale',
    }, {
      name: 'bids',
      icon: 'warning_amber',
      label: 'Cereri',
    }, {
      name: 'contracte',
      icon: 'gavel',
      label: 'Contracte',
    }, {
      name: 'payments',
      icon: 'payments',
      label: 'Plăți',
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
    const dealerData = ref({});

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
      isOpenedLocal.value = $store.getters['dealers/getOpenedDealerForm'];
    });
    watchEffect(() => {
      dealerData.value = $store.getters['dealers/getOpenedDealerData'];
      if (dealerData.value) {
        tab.value = 'general';
      }
    });
    watchEffect(() => {
      id.value = dealerData.value.id;
    });

    const getDataById = (idLocal = null) => {
      const oldData = { ...$store.getters['dealers/getOpenedDealerData'] };
      oldData.id = idLocal;
      $store.commit('dealers/updateOpenedDealerData', oldData);

      showLoading();

      api.get(`/dealers/get-data-by-id/${idLocal}`).then((response) => {
        hideLoading();
        if (response.data.success) {
          $store.commit('dealers/updateOpenedDealerData', response.data.data);
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
      if (typeof DealerGeneralRef.value !== 'undefined' && typeof DealerGeneralRef.value.save !== 'undefined') {
        DealerGeneralRef.value.save();
      }
    };

    const printContract = () => {
      downloadPDF(id.value, '/print/contractDealer', 'contract_colaborare');
    };
    const printConsimtamant = () => {
      downloadPDF(id.value, '/print/contractDealerConsimtamant', 'consimtamant_dealer');
    };
    const printAcord = () => {
      downloadPDF(id.value, '/print/contractDealerAcord', 'acord_dealer');
    };

    return {
      dialogRef,
      onDialogHide: onDialogHideLocal,
      onOKClick: onOKClickLocal,
      onCancelClick: onDialogCancel,
      isOpenedLocal,
      printContract,
      printConsimtamant,
      printAcord,
      printAcord2,
      id,
      tab,
      tabs,
      DealerGeneralRef,
      acordWordLink,
      getDataById,
    };
  },
};
</script>
