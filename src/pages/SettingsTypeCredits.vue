<template>
  <q-page>
    <div class="row">
      <q-btn
        icon="add"
        color="primary"
        @click="openDialog(0)"
        label="Adaugă tip nou"></q-btn>

      <dialog-settings-type-credits
        ref="dialogSettingsTypeCreditsRef">
      </dialog-settings-type-credits>

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
                <div class="col-12 text-grey">{{tipCard.description_mini}}</div>
                <div class="col-12">
                  <span class="text-grey">ID:</span>
                  <span class="text-black">{{tipCard.id}}</span>
                </div>
                <div class="col-12" v-if="tipCard.months_fix">
                  <span class="text-grey">Nr de luni:</span>
                  <span class="text-black">{{tipCard.months_fix || '0'}}</span>
                </div>
                <div class="col-12">
                  <span class="text-grey">Suma minima:</span>
                  <span class="text-black">{{tipCard.sum_min || '0'}}</span>
                </div>
                <div class="col-12">
                  <span class="text-grey">Suma maxima:</span>
                  <span class="text-black">{{tipCard.sum_max || '0'}}</span>
                </div>
                <div class="col-12">
                  <span class="text-grey">Dobânda
                    <span v-if="tipCard.dobinda_is_percent">(procent)</span>
                    <span v-else>(coeficient)</span>
                    :
                  </span>
                  <span class="text-black">{{tipCard.dobinda || '0'}}</span>
                </div>
                <div class="col-12">
                  <span class="text-grey">Comision
                    <span v-if="tipCard.comision_is_percent">(procent)</span>
                    <span v-else>(coeficient)</span>
                    :
                  </span>
                  <span class="text-black">{{tipCard.comision || '0'}}</span>
                </div>
                <div class="col-12">
                  <span class="text-grey">Comision de administrare
                    <span v-if="tipCard.comision_admin_is_percent">(procent)</span>
                    <span v-else>(coeficient)</span>
                    :
                  </span>
                  <span class="text-black">{{tipCard.comision_admin || '0'}}</span>
                </div>
                <div class="col-12">
                  <span class="text-grey">Procent comision magazin:</span>
                  <span class="text-black">{{tipCard.percent_comision_magazin || '0'}}</span>
                </div>
                <div class="col-12">
                  <span class="text-grey">Procent bonus magazin:</span>
                  <span class="text-black">{{tipCard.percent_bonus_magazin || '0'}}</span>
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
import DialogSettingsTypeCredits from 'components/modals/SettingsTypeCredits';
import { useStore } from 'vuex';
import { api } from 'boot/axios';
import { hideLoading, showLoading, showNotify } from 'src/helpers';
import { useQuasar } from 'quasar';

export default defineComponent({
  name: 'PageSettingsTypeCredits',
  components: { DialogSettingsTypeCredits },
  setup() {
    const $q = useQuasar();
    const dialogSettingsTypeCreditsRef = ref(null);
    const drawerLeft = ref(true);
    const $store = useStore();
    const rows = ref([]);
    const onRequest = () => {
      $store.commit('settingsTypeCredits/updateRefreshGrid', false);
      showLoading();
      api.post('/type-credits-list', {})
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
      if ($store.getters['settingsTypeCredits/getRefreshGrid']) {
        onRequest();
      }
    });
    onMounted(() => {
      onRequest();
    });

    const openDialog = (id) => {
      if (!id) {
        $store.commit('settingsTypeCredits/updateOpenedSettingsDialogData', {});
        $store.commit('settingsTypeCredits/updateOpenedSettingsDialogForm', true);
      } else {
        dialogSettingsTypeCreditsRef.value.getDataById(id);
      }
    };

    const deleteRow = (id) => {
      $q.dialog({
        title: 'Atenție',
        message: 'Sunteți sigur că doriți să ștergeți?',
        cancel: true,
        persistent: true,
      }).onOk(() => {
        api.delete(`/type-credits/${id}`).then(() => {
          onRequest();
        });
      });
    };

    return {
      drawerLeft,
      openDialog,
      onRequest,
      rows,
      dialogSettingsTypeCreditsRef,
      deleteRow,
    };
  },
});
</script>
