<template>
  <q-dialog ref="dialogRef"
            v-model="isOpenedLocal"
            @hide="onDialogHide"
            full-height persistent>
    <q-card class="q-dialog-plugin" style="width: 100%; max-width: 800px;">
      <q-toolbar :class="'q-pr-xs'">
        <q-toolbar-title>
          <span class="text-subtitle1">
            <span class="text-blue-grey" >Produs</span>
            <strong  :class="'q-ml-md'">{{ id }}</strong>
          </span>
        </q-toolbar-title>
        <q-space/>
        <q-btn icon="close" flat round dense @click="onCancelClick"/>
      </q-toolbar>
      <q-separator/>
      <q-card-section
        style="min-height: calc(100vh - 165px);max-height: calc(100vh - 165px);"
        class="scroll">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
            <q-input
              outlined
              :error="nameHasError"
              @blur="nameHasError = false"
              @focus="nameHasError = false"
              v-model="name"
              :rules="[(val) => val.length >= 2 || 'Minimum 2 caractere']"
              label="Nume"/>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn color="primary" label="Salvează" @click="onOKClick" />
        <q-btn  label="Închide" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from 'quasar';
import { ref, watchEffect } from 'vue';
import { hideLoading, showLoading, showNotify } from 'src/helpers';
import { api } from 'boot/axios';
import { useStore } from 'vuex';

export default {
  name: 'DialogSettingsProducts',
  components: {},
  props: {},

  emits: [
    ...useDialogPluginComponent.emits,
    'onCloseDialog',
  ],

  setup() {
    const $store = useStore();
    const name = ref('');
    const nameHasError = ref(false);
    const isOpenedLocal = ref(false);
    const id = ref(0);
    const ProductsData = ref({});

    const {
      dialogRef,
      onDialogHide,
      onDialogCancel,
    } = useDialogPluginComponent();

    watchEffect(() => {
      isOpenedLocal.value = $store.getters['settingsProducts/getOpenedSettingsDialogForm'];
    });
    watchEffect(() => {
      ProductsData.value = $store.getters['settingsProducts/getOpenedSettingsDialogData'];
    });
    watchEffect(() => {
      id.value = ProductsData.value.id;
      name.value = ProductsData.value.name;
    });

    const getDataById = (idLocal = null) => {
      const oldData = { ...$store.getters['settingsProducts/getOpenedSettingsDialogData'] };
      oldData.id = idLocal;
      $store.commit('settingsProducts/updateOpenedSettingsDialogData', oldData);

      showLoading();

      api.get(`/products/get-data-by-id/${idLocal}`).then((response) => {
        hideLoading();
        if (response.data.success) {
          $store.commit('settingsProducts/updateOpenedSettingsDialogData', response.data.data);
          $store.commit('settingsProducts/updateOpenedSettingsDialogForm', true);
        } else {
          showNotify({ message: response.data.data.message });
        }
      }).catch((error) => {
        hideLoading();
        showNotify({}, error);
      });
    };

    const onDialogHideLocal = () => {
      $store.commit('settingsProducts/updateOpenedSettingsDialogData', {});
      $store.commit('settingsProducts/updateOpenedSettingsDialogForm', false);
      onDialogHide();
    };

    const onOKClickLocal = () => {
      if (!name.value) {
        nameHasError.value = true;
      }
      if (!nameHasError.value) {
        const data = {
          name: name.value,
        };
        showLoading();
        const idLocal = parseInt(String(id.value), 10);
        api.post(`/products/add-or-edit/${idLocal}`, data).then((response) => {
          hideLoading();
          if (response.data.success) {
            $store.commit('settingsProducts/updateOpenedSettingsDialogData', {});
            $store.commit('settingsProducts/updateOpenedSettingsDialogForm', false);
            $store.commit('settingsProducts/updateRefreshGrid', true);
          } else {
            showNotify({ message: 'Eroare de update' });
          }
        }).catch((error) => {
          hideLoading();
          showNotify({}, error);
        });
      }
    };

    return {
      dialogRef,
      onDialogHide: onDialogHideLocal,
      onOKClick: onOKClickLocal,
      onCancelClick: onDialogCancel,
      isOpenedLocal,
      id,
      getDataById,
      name,
      nameHasError,
    };
  },
};
</script>
