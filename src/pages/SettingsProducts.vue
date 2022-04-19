<template>
  <q-page>
    <div class="row">
      <q-btn
        icon="add"
        color="primary"
        @click="openDialog(0)"
        label="Adaugă produs nou"></q-btn>

      <dialog-settings-products
        ref="dialogSettingsProductsRef">
      </dialog-settings-products>

      <template v-for="(tipCard, tipCardIndex) in rows" :key="`tipCard-${tipCardIndex}`">
        <div class="col-12 q-mt-lg">
          <q-card class="bg-green-1">
            <q-card-section>
              <div class="row">
                <div class="col-10">
                  <h6 class="text-primary q-ma-none q-pa-none">{{tipCard.name}}</h6>
                </div>
                <div class="col-2 text-right">
                  <q-btn icon="edit"
                         class="q-mr-md"
                         round
                         @click="openDialog(tipCard.id)"
                         color="positive"></q-btn>
                  <q-btn icon="delete"
                         round
                         @click="deleteRow(tipCard.id)"
                         color="negative"></q-btn>
                </div>
              </div>
            </q-card-section>
          </q-card>
        </div>
      </template>
    </div>
  </q-page>
</template>

<script>
import {
  watchEffect,
  defineComponent,
  ref,
  onMounted,
} from 'vue';
import DialogSettingsProducts from 'components/modals/SettingsProducts';
import { useStore } from 'vuex';
import { api } from 'boot/axios';
import { hideLoading, showLoading, showNotify } from 'src/helpers';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'PageSettingsProducts',
  components: { DialogSettingsProducts },
  setup() {
    const $q = useQuasar();
    const dialogSettingsProductsRef = ref(null);
    const drawerLeft = ref(true);
    const $store = useStore();
    const rows = ref([]);
    const onRequest = () => {
      $store.commit('settingsProducts/updateRefreshGrid', false);
      showLoading();
      api.post('/products-list', {})
        .then((response) => {
          hideLoading();
          if (response.data.success) {
            rows.value = response.data.data.data;
          }
        })
        .catch((error) => {
          hideLoading();
          showNotify({}, error);
        });
    };

    watchEffect(() => {
      if ($store.getters['settingsProducts/getRefreshGrid']) {
        onRequest();
      }
    });
    onMounted(() => {
      onRequest();
    });

    const openDialog = (id) => {
      if (!id) {
        $store.commit('settingsProducts/updateOpenedSettingsDialogData', {});
        $store.commit('settingsProducts/updateOpenedSettingsDialogForm', true);
      } else {
        dialogSettingsProductsRef.value.getDataById(id);
      }
    };

    const deleteRow = (id) => {
      $q.dialog({
        title: 'Atenție',
        message: 'Sunteți sigur că doriți să ștergeți?',
        cancel: true,
        persistent: true,
      }).onOk(() => {
        api.delete(`/products/${id}`).then(() => {
          onRequest();
        });
      });
    };

    return {
      drawerLeft,
      openDialog,
      onRequest,
      rows,
      dialogSettingsProductsRef,
      deleteRow,
    };
  },
});
</script>
