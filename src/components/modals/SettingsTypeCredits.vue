<template>
  <q-dialog ref="dialogRef"
            v-model="isOpenedLocal"
            @hide="onDialogHide"
            full-height persistent>
    <q-card class="q-dialog-plugin" style="width: 100%; max-width: 800px;">
      <q-toolbar :class="'q-pr-xs'">
        <q-toolbar-title>
          <span class="text-subtitle1">
            <span class="text-blue-grey" >Tip credit</span>
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
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
            <q-input type="textarea"
                     v-model="descriptionMini"
                     outlined
                     autogrow
                     :error="false"
                     label="Descriere"
            ></q-input>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs">
            <div class="q-gutter-sm">
              <q-radio v-model="isDiapazon"
                       checked-icon="task_alt"
                       unchecked-icon="panorama_fish_eye"
                       :val="0"
                       label="Număr fix de luni" />
              <q-radio v-model="isDiapazon"
                       disable
                       checked-icon="task_alt"
                       unchecked-icon="panorama_fish_eye"
                       :val="1"
                       label="Periodă (Diapazon de luni)" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
            <q-input type="number"
                     v-model="monthsFix"
                     outlined
                     :error="monthsFixHasError"
                     @blur="monthsFixHasError = false"
                     @focus="monthsFixHasError = false"
                     :rules="[(val) => parseInt(String(val), 10) >= 1
                      && parseInt(String(val), 10) <= 24
                       || 'Minimum 1 luna, maximum 24 luni']"
                     label="Numărul de luni"
            ></q-input>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
            <q-input type="number"
                     v-model="sumMin"
                     outlined
                     :error="sumMinHasError"
                     @blur="sumMinHasError = false"
                     @focus="sumMinHasError = false"
                     label="Suma minimă"
            ></q-input>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
            <q-input type="number"
                     v-model="sumMax"
                     outlined
                     :error="sumMaxHasError"
                     @blur="sumMaxHasError = false"
                     @focus="sumMaxHasError = false"
                     label="Suma maximă"
            ></q-input>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
            <q-input type="number"
                     v-model="dobinda"
                     outlined
                     :error="dobindaHasError"
                     @blur="dobindaHasError = false"
                     @focus="dobindaHasError = false"
                     label="Dobânda"
            ></q-input>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs">
            <div class="q-gutter-sm">
              <q-radio v-model="dobindaIsPercent"
                       checked-icon="task_alt"
                       unchecked-icon="panorama_fish_eye"
                       :val="0"
                       label="Coeficient" />
              <q-radio v-model="dobindaIsPercent"
                       checked-icon="task_alt"
                       unchecked-icon="panorama_fish_eye"
                       :val="1"
                       label="Procent" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
            <q-input type="number"
                     v-model="comision"
                     outlined
                     :error="comisionHasError"
                     @blur="comisionHasError = false"
                     @focus="comisionHasError = false"
                     label="Comision de examinare"
            ></q-input>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs">
            <div class="q-gutter-sm">
              <q-radio v-model="comisionIsPercent"
                       checked-icon="task_alt"
                       unchecked-icon="panorama_fish_eye"
                       :val="0"
                       label="Coeficient" />
              <q-radio v-model="comisionIsPercent"
                       checked-icon="task_alt"
                       unchecked-icon="panorama_fish_eye"
                       :val="1"
                       label="Procent" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
            <q-input type="number"
                     v-model="comisionAdmin"
                     outlined
                     :error="comisionAdminHasError"
                     @blur="comisionAdminHasError = false"
                     @focus="comisionAdminHasError = false"
                     label="Comision de administrare"
            ></q-input>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs">
            <div class="q-gutter-sm">
              <q-radio v-model="comisionAdminIsPercent"
                       checked-icon="task_alt"
                       unchecked-icon="panorama_fish_eye"
                       :val="0"
                       label="Coeficient" />
              <q-radio v-model="comisionAdminIsPercent"
                       checked-icon="task_alt"
                       unchecked-icon="panorama_fish_eye"
                       :val="1"
                       label="Procent" />
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-6 q-pa-xs text-right q-pt-md">
            SHOP FEE
          </div>
          <div class="col-xl-10 col-lg-10 col-md-10 col-sm-6 col-xs-6 q-pa-xs">
            <div class="q-gutter-sm">
              <q-radio v-model="isShopFee"
                       checked-icon="task_alt"
                       unchecked-icon="panorama_fish_eye"
                       :val="1"
                       label="Da" />
              <q-radio v-model="isShopFee"
                       checked-icon="task_alt"
                       unchecked-icon="panorama_fish_eye"
                       :val="0"
                       label="Nu " />
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
            <q-input type="number"
                     v-model="percentComisionMagazin"
                     outlined
                     :error="percentComisionMagazinHasError"
                     @blur="percentComisionMagazinHasError = false"
                     @focus="percentComisionMagazinHasError = false"
                     label="Procent comision magazin"
            ></q-input>
          </div>
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
            <q-input type="number"
                     v-model="percentBonusMagazin"
                     outlined
                     :error="percentBonusMagazinHasError"
                     @blur="percentBonusMagazinHasError = false"
                     @focus="percentBonusMagazinHasError = false"
                     label="Procent bonus magazin"
            ></q-input>
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
  name: 'DialogSettingsTypeCredits',
  components: {},
  props: {},

  emits: [
    ...useDialogPluginComponent.emits,
    'onCloseDialog',
  ],

  setup() {
    const $store = useStore();
    const name = ref('');
    const description = ref('');
    const nameHasError = ref(false);
    const isOpenedLocal = ref(false);
    const isDiapazon = ref(0);
    const id = ref(0);
    const monthsFix = ref(1);
    const monthsFixHasError = ref(false);
    const sumMin = ref(0);
    const sumMinHasError = ref(false);
    const sumMax = ref(0);
    const sumMaxHasError = ref(false);
    const comisionIsPercent = ref(0);
    const comision = ref(0);
    const comisionHasError = ref(false);
    const comisionAdminIsPercent = ref(0);
    const isShopFee = ref(0);
    const comisionAdmin = ref(0);
    const comisionAdminHasError = ref(false);
    const dobindaIsPercent = ref(0);
    const dobinda = ref(0);
    const dobindaHasError = ref(false);
    const percentComisionMagazin = ref(0);
    const percentComisionMagazinHasError = ref(false);
    const percentBonusMagazin = ref(0);
    const percentBonusMagazinHasError = ref(false);
    const descriptionMini = ref('');
    const TypeCreditsData = ref({});

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
      isOpenedLocal.value = $store.getters['settingsTypeCredits/getOpenedSettingsDialogForm'];
    });
    watchEffect(() => {
      TypeCreditsData.value = $store.getters['settingsTypeCredits/getOpenedSettingsDialogData'];
    });
    watchEffect(() => {
      id.value = TypeCreditsData.value.id;
      name.value = TypeCreditsData.value.name;
      monthsFix.value = TypeCreditsData.value.months_fix;
      sumMin.value = TypeCreditsData.value.sum_min;
      sumMax.value = TypeCreditsData.value.sum_max;
      comisionIsPercent.value = TypeCreditsData.value.comision_is_percent ? 1 : 0;
      comision.value = TypeCreditsData.value.comision;
      comisionAdminIsPercent.value = TypeCreditsData.value.comision_admin_is_percent ? 1 : 0;
      isShopFee.value = TypeCreditsData.value.is_shop_fee ? 1 : 0;
      comisionAdmin.value = TypeCreditsData.value.comision_admin;
      dobindaIsPercent.value = TypeCreditsData.value.dobinda_is_percent ? 1 : 0;
      dobinda.value = TypeCreditsData.value.dobinda;
      percentComisionMagazin.value = TypeCreditsData.value.percent_comision_magazin;
      percentBonusMagazin.value = TypeCreditsData.value.percent_bonus_magazin;
      descriptionMini.value = TypeCreditsData.value.description_mini;
    });

    const getDataById = (idLocal = null) => {
      const oldData = { ...$store.getters['settingsTypeCredits/getOpenedSettingsDialogData'] };
      oldData.id = idLocal;
      $store.commit('settingsTypeCredits/updateOpenedSettingsDialogData', oldData);

      showLoading();

      api.get(`/type-credits/get-data-by-id/${idLocal}`).then((response) => {
        hideLoading();
        if (response.data.success) {
          $store.commit('settingsTypeCredits/updateOpenedSettingsDialogData', response.data.data);
          $store.commit('settingsTypeCredits/updateOpenedSettingsDialogForm', true);
        } else {
          showNotify({ message: response.data.data.message });
        }
      }).catch((error) => {
        hideLoading();
        showNotify({}, error);
      });
    };

    const onDialogHideLocal = () => {
      $store.commit('settingsTypeCredits/updateOpenedSettingsDialogData', {});
      $store.commit('settingsTypeCredits/updateOpenedSettingsDialogForm', false);
      onDialogHide();
    };

    const onOKClickLocal = () => {
      if (!name.value) {
        nameHasError.value = true;
      }
      if (!monthsFix.value) {
        monthsFixHasError.value = true;
      }
      if (!nameHasError.value && !monthsFixHasError.value) {
        const data = {
          name: name.value,
          description_mini: descriptionMini.value,
          months_fix: monthsFix.value,
          sum_min: sumMin.value,
          sum_max: sumMax.value,
          dobinda_is_percent: dobindaIsPercent.value,
          dobinda: dobinda.value,
          comision_is_percent: comisionIsPercent.value,
          comision: comision.value,
          comision_admin_is_percent: comisionAdminIsPercent.value,
          is_shop_fee: isShopFee.value,
          comision_admin: comisionAdmin.value,
          percent_comision_magazin: percentComisionMagazin.value,
          percent_bonus_magazin: percentBonusMagazin.value,
        };
        showLoading();
        const idLocal = parseInt(String(id.value), 10);
        api.post(`/type-credits/add-or-edit/${idLocal}`, data).then((response) => {
          hideLoading();
          if (response.data.success) {
            $store.commit('settingsTypeCredits/updateOpenedSettingsDialogData', {});
            $store.commit('settingsTypeCredits/updateOpenedSettingsDialogForm', false);
            $store.commit('settingsTypeCredits/updateRefreshGrid', true);
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
      description,
      name,
      nameHasError,
      isDiapazon,
      monthsFix,
      monthsFixHasError,
      sumMin,
      sumMinHasError,
      sumMax,
      sumMaxHasError,
      comision,
      comisionIsPercent,
      comisionAdminIsPercent,
      isShopFee,
      comisionHasError,
      comisionAdmin,
      comisionAdminHasError,
      dobindaIsPercent,
      dobinda,
      dobindaHasError,
      percentComisionMagazin,
      percentComisionMagazinHasError,
      percentBonusMagazin,
      percentBonusMagazinHasError,
      descriptionMini,
    };
  },
};
</script>
