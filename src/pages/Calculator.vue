<template>
  <q-page>
    <q-banner v-if="!authenticated"></q-banner>
    <div v-else class="row content-start" >
      <q-splitter
        class="full-width"
        v-model="splitterModel"
        unit="px"
        reverse
        separator-class="bg-indigo-3"
        separator-style="width: 2px"
      >
        <template v-slot:before>
          <div class="q-pa-md">
            <div class="row" style="max-width: 600px;margin: auto;">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h6 class="q-pa-none q-ma-none text-primary">Calculator</h6>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
                <q-select outlined
                          color="primary"
                          :disable="disableInputs"
                          v-model="typeCredits"
                          :options="typeCreditsOptions"
                          emit-value
                          map-options
                          option-value="id"
                          option-label="name"
                          label="Tip credit" >
                  <template v-slot:label>
                    <span class="text-primary">Tip credit</span>
                  </template>
                </q-select>
              </div>
              <div v-if="typeCreditsSelected && typeCreditsSelected.id"
                   class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
                <div class="bg-green-1 q-pa-sm text-grey-7
           q-card--bordered rounded-borders text-caption">
                  {{typeCreditsSelected.description_mini}}
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs">
                <q-input
                  outlined
                  :disable="disableInputs"
                  :readonly="!!typeCreditsSelected.months_fix"
                  type="text"
                  label="Termenul creditului (luni)"
                  v-model="creditMonths">
                </q-input>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs">
                <q-input outlined
                         readonly
                         :disable="disableInputs"
                         v-model="creditDate"
                         label="Data cererii"
                         mask="##.##.####">
<!--                  <template v-slot:append>-->
<!--                    <q-icon name="event"-->
<!--                            color="primary"-->
<!--                            class="cursor-pointer">-->
<!--                      <q-popup-proxy ref="qDateProxy"-->
<!--                                     v-if="!disableInputs"-->
<!--                                     cover transition-show="scale" transition-hide="scale">-->
<!--                        <q-date v-model="creditDate"-->
<!--                                lang="ro"-->
<!--                                :options="calendarOptions"-->
<!--                                mask="DD.MM.YYYY"-->
<!--                                :locale="calendarLocaleRoLocal">-->
<!--                          <div class="row items-center justify-end">-->
<!--                            <q-btn v-close-popup label="Închide" color="primary" flat />-->
<!--                          </div>-->
<!--                        </q-date>-->
<!--                      </q-popup-proxy>-->
<!--                    </q-icon>-->
<!--                  </template>-->
                </q-input>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs">
                <q-input
                  outlined
                  :disable="disableInputs"
                  type="number"
                  label="Suma creditului (MDL)"
                  v-model="creditSum">
                  <template v-slot:label>
                    <span class="text-primary">Suma creditului (MDL)</span>
                  </template>
                </q-input>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs">
                <q-btn size="lg"
                       @click="calculate()"
                       class="full-height full-width"
                       label="Calculează"
                       color="primary"
                ></q-btn>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
                <q-banner v-if="calcError" class="bg-red-2 rounded-borders">
                  {{calcError}}
                </q-banner>
                <div v-else-if="calcResultsExist" class="row">
                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-3 q-pt-lg">
                    DAE: <span v-if="calcResults">{{calcResults.DAE}}%</span>
                  </div>
                  <div class="col-xl-10 col-lg-10 col-md-10 col-sm-9 col-xs-9 text-right q-py-md">
                    <q-btn size="md"
                           @click="printPreContract()"
                           icon="print"
                           label="Pre-Contract"
                           class="q-mr-md"
                    ></q-btn>
                    <q-btn size="md"
                           @click="clearCalcResults()"
                           icon="clear"
                           label="Anulează"
                    ></q-btn>
                  </div>
                  <div class="col-2 text-subtitle2">Data</div>
                  <div class="col-2 text-subtitle2 text-right">Suma</div>
                  <div class="col-2 text-subtitle2 text-right">Dob.</div>
                  <div class="col-2 text-subtitle2 text-right">Com.</div>
                  <div class="col-2 text-subtitle2 text-right">Com.admin</div>
                  <div class="col-2 text-subtitle2 text-right">Total</div>
                  <template v-for="(row, rowIndex) in calcResults.tabel" :key="`res-${rowIndex}`">
                    <div class="col-2 ">{{row.data}}</div>
                    <div class="col-2 text-right">{{row.imprumtPerLuna}}</div>
                    <div class="col-2 text-right">{{row.dobindaPerLuna}}</div>
                    <div class="col-2 text-right">{{row.comisionPerLuna}}</div>
                    <div class="col-2 text-right">{{row.comisionAdminPerLuna}}</div>
                    <div class="col-2 text-right">{{row.totalPerLuna}}</div>
                  </template>
                  <div class="col-2 text-subtitle2">Total</div>
                  <div class="col-2 text-subtitle2 text-right">
                    {{calcResults.tabelTotal.imprumut}}</div>
                  <div class="col-2 text-subtitle2 text-right">
                    {{calcResults.tabelTotal.dobinda}}</div>
                  <div class="col-2 text-subtitle2 text-right">
                    {{calcResults.tabelTotal.comision}}</div>
                  <div class="col-2 text-subtitle2 text-right">
                    {{calcResults.tabelTotal.comisionAdmin}}</div>
                  <div class="col-2 text-subtitle2 text-right">
                    {{calcResults.tabelTotal.total}}</div>
                </div>
              </div>
            </div>

            <div class="col-12 row q-pb-xl q-mb-xl" v-show="calcResultsExist">
              <div class="col-12">
                <h6 class="q-pa-none q-ma-none text-primary">Adaugă o cerere nouă</h6>
              </div>
              <div v-if="!isDealer" class="col-12 q-pa-xs q-mb-md">
                <q-select
                  dense
                  outlined
                  color="primary"
                  :disable="!calcResultsExist || disableInputs"
                  v-model="dealer"
                  :options="dealerOptions"
                  emit-value
                  map-options
                  option-value="id"
                  option-label="name"
                  label="Dealer" >
                  <template v-slot:label>
                    <span class="text-primary">Dealer</span>
                  </template>
                </q-select>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientFirstNameHasError"
                  @blur="clientFirstNameHasError = false"
                  @focus="clientFirstNameHasError = false"
                  type="text"
                  label="Nume client"
                  v-model="clientFirstName">
                </autocomplete-field>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientLastNameHasError"
                  @blur="clientLastNameHasError = false"
                  @focus="clientLastNameHasError = false"
                  type="text"
                  label="Prenume client"
                  v-model="clientLastName">
                </autocomplete-field>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientPhoneHasError"
                  @blur="clientPhoneHasError = false"
                  @focus="clientPhoneHasError = false"
                  type="text"
                  label="Telefon"
                  v-model="clientPhone">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientBirthDateHasError"
                  @blur="clientBirthDateHasError = false"
                  @focus="clientBirthDateHasError = false"
                  type="text"
                  mask="##.##.####"
                  label="Data de naștere"
                  v-model="clientBirthDate">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientBuletinSNHasError"
                  @blur="clientBuletinSNHasError = false"
                  @focus="clientBuletinSNHasError = false"
                  type="text"
                  :rules="[(val) => val.length === 9 || '9 caractere']"
                  label="Buletin S/N"
                  v-model="clientBuletinSN">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientBuletinIDNPHasError"
                  @blur="clientBuletinIDNPHasError = false"
                  @focus="clientBuletinIDNPHasError = false"
                  type="text"
                  :rules="[(val) => val.length === 13 || '13 cifre']"
                  label="Buletin IDNP"
                  v-model="clientBuletinIDNP">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientLocalitateHasError"
                  @blur="clientLocalitateHasError = false"
                  @focus="clientLocalitateHasError = false"
                  type="text"
                  label="Localitate"
                  v-model="clientLocalitate">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Strada"
                  v-model="clientStreet">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Bloc"
                  v-model="clientHouse">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Apartament"
                  v-model="clientFlat">
                </q-input>
              </div>

              <div class="col-12 text-primary">Persoana de contact</div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Nume"
                  v-model="clientFirstNameContPers1">
                </autocomplete-field>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Prenume"
                  v-model="clientLastNameContPers1">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Telefon"
                  v-model="clientPhoneContPers1">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Cine este"
                  v-model="clientWhoIsContPers1">
                </q-input>
              </div>

              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs text-caption">
                <q-checkbox size="sm"
                            :disable="!calcResultsExist || disableInputs"
                            keep-color
                            :color="clientCbHasError ? 'red' : 'primary'"
                            @blur="clientCbHasError = false"
                            @focus="clientCbHasError = false"
                            v-model="clientCb"
                ></q-checkbox>
                <span :class="clientCbHasError ? 'text-red' : 'text-gray-6'">
            Sunt de acord cu ............
            ....... . . ......
            ........... . . ................ ......... .........................
            ....... . . ......
            ........... . . ................ ......... .........................
            ....... . . ......
            ........... . . ................ ......... .........................
            ....... . . ......
            ........... . . ................ ......... .........................
            ....... . . ......
            ........... . . ................ ......... .............
            ........... . . ................ ......... .........................
            ....... . . ......
            ........... . . ................ ......... .........................
            ....... . . ......
            ........... . . ................ ......... .............
          </span>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12 q-pa-xs text-right">
                <q-banner class="bg-positive rounded-borders text-white text-left"
                          inline-actions
                          v-if="bidSuccess">
                  {{bidSuccess}}
                  <template v-slot:action>
                    <q-btn flat color="white"
                           @click="bidSuccess = ''"
                           round icon="close" />
                  </template>
                </q-banner>
                <q-banner class="bg-negative rounded-borders text-white text-left"
                          inline-actions
                          v-if="bidError">
                  {{bidError}}
                  <template v-slot:action>
                    <q-btn flat color="white"
                           @click="bidSuccess = ''"
                           round icon="close" />
                  </template>
                </q-banner>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12 q-pa-xs text-right">
                <q-btn color="primary"
                       size="md"
                       :disable="!calcResultsExist || disableInputs"
                       @click="addNewBid()"
                       label="Trimite"
                ></q-btn>
              </div>
            </div>
          </div>
        </template>

        <template v-slot:separator>
          <q-icon color="indigo-4" size="25px" name="more_vert" />
        </template>

        <template v-slot:after>
          <bids-list-for-calculator></bids-list-for-calculator>
        </template>

      </q-splitter>
    </div>
  </q-page>
</template>

<script>
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  watchEffect,
} from 'vue';
import { api } from 'boot/axios';
import {
  calendarLocaleRo,
  dateFormat, downloadPDF,
  hideLoading,
  showNotify,
  USER_ROLE_ADMIN,
  USER_ROLE_DEALER,
  USER_ROLE_EXECUTOR,
} from 'src/helpers';
import { useStore } from 'vuex';
import BidsListForCalculator from 'components/BidsListForCalculator';
import AutocompleteField from 'components/Fields/AutocompleteField';

export default defineComponent({
  name: 'Calculator',
  components: { AutocompleteField, BidsListForCalculator },
  setup() {
    const splitterModel = ref(580);
    // 470px
    const $store = useStore();
    const isAdmin = ref(false);
    const isExecutor = ref(false);
    const isDealer = ref(false);
    const authenticated = computed(() => !!$store.getters['auth/getToken']);
    const calcResults = ref(null);
    const calcError = ref('');
    const typeCredits = ref(null);
    const typeCreditsSelected = ref({});
    const typeCreditsOptions = ref([]);
    const dealerOptions = ref([]);
    const creditSum = ref(0);
    const creditMonths = ref(0);
    const disableInputs = ref(false);
    const today = new Date();
    const creditDate = ref(dateFormat(today, 'DD.MM.YYYY'));
    const minDate = ref(dateFormat(today, 'YYYY/MM/DD'));
    const maxDate = ref(dateFormat(new Date(today.setMonth(today.getMonth() + 1)), 'YYYY/MM/DD'));
    const calcResultsExist = ref(false);

    const clientFirstName = ref('');
    const clientFirstNameHasError = ref(false);
    const clientLastName = ref('');
    const clientLastNameHasError = ref(false);
    const clientPhone = ref('');
    const clientPhoneHasError = ref(false);
    const clientBuletinSN = ref('');
    const clientBuletinSNHasError = ref(false);
    const clientBuletinIDNP = ref('');
    const clientBuletinIDNPHasError = ref(false);
    const clientBirthDate = ref('');
    const clientBirthDateHasError = ref(false);
    const clientLocalitate = ref('');
    const clientLocalitateHasError = ref(false);
    const clientStreet = ref('');
    const clientHouse = ref('');
    const clientFlat = ref('');
    const clientWhoIsContPers1 = ref('');
    const dealer = ref(0);
    const clientPhoneContPers1 = ref('');
    const clientLastNameContPers1 = ref('');
    const clientFirstNameContPers1 = ref('');
    const clientCb = ref(false);
    const clientCbHasError = ref(false);
    const bidError = ref('');
    const bidSuccess = ref('');
    const user = computed(() => $store.getters['auth/getUser']);

    watchEffect(() => {
      isExecutor.value = user.value.role_id === USER_ROLE_EXECUTOR;
      isAdmin.value = user.value.role_id === USER_ROLE_ADMIN;
      isDealer.value = user.value.role_id === USER_ROLE_DEALER;
    });

    const calendarLocaleRoLocal = computed(() => calendarLocaleRo);

    $store.commit('auth/updateActiveModule', 'Calculator');

    const printPreContract = () => {
      downloadPDF(1, '/print/pre-contract', 'pre-contract');
    };

    const typeCreditsChanged = () => {
      typeCreditsOptions.value.forEach((v) => {
        if (v
          && v.id === typeCredits.value
          && (
            !typeCreditsSelected.value
            || !typeCreditsSelected.value.id
            || typeCreditsSelected.value.id !== v.id
          )
        ) {
          typeCreditsSelected.value = v;
          creditMonths.value = v.months_fix;
          if (!creditSum.value) {
            creditSum.value = v.sum_min > 1 ? v.sum_min : 1000;
          }
        }
      });
    };

    const calendarOptions = (dateStr) => {
      if (maxDate.value && minDate.value) {
        // return dateStr >= '2019/02/03' && dateStr <= '2019/02/15';
        return dateStr >= minDate.value && dateStr <= maxDate.value;
      }
      if (maxDate.value) {
        return dateStr <= maxDate.value;
      }
      if (minDate.value) {
        return dateStr <= minDate.value;
      }
      return true;
    };

    const calculate = () => {
      disableInputs.value = true;
      calcError.value = '';
      bidError.value = '';
      bidSuccess.value = '';
      api.post('/type-credits-calculate', {
        sum: creditSum.value,
        date: creditDate.value,
        type: typeCreditsSelected.value.id,
        months: creditMonths.value,
      })
        .then((response) => {
          disableInputs.value = false;
          if (response.data.success) {
            calcResults.value = response.data.data;
          } else {
            calcError.value = response.data.data.message;
          }
        })
        .catch((error) => {
          disableInputs.value = false;
          showNotify({}, error);
        });
    };

    const clearCalcResults = () => {
      calcResults.value = null;
      disableInputs.value = false;
      calcError.value = '';
      clientFirstName.value = '';
      clientLastName.value = '';
      clientPhone.value = '';
      clientBuletinSN.value = '';
      clientBuletinIDNP.value = '';
      clientBirthDate.value = '';
      clientLocalitate.value = '';
      clientCb.value = false;
      clientCbHasError.value = false;
    };

    const addNewBid = () => {
      clientCbHasError.value = false;
      if (!clientFirstName.value) {
        clientFirstNameHasError.value = true;
      }
      if (!clientLastName.value) {
        clientLastNameHasError.value = true;
      }
      if (!clientPhone.value) {
        clientPhoneHasError.value = true;
      }
      if (!clientBuletinSN.value) {
        clientBuletinSNHasError.value = true;
      }
      if (!clientBuletinIDNP.value || clientBuletinIDNP.value.length !== 13) {
        clientBuletinIDNPHasError.value = true;
      }
      if (!clientBirthDate.value) {
        clientBirthDateHasError.value = true;
      }
      if (!clientLocalitate.value) {
        clientLocalitateHasError.value = true;
      }
      if (!clientCb.value) {
        clientCbHasError.value = true;
      }
      bidSuccess.value = '';
      bidError.value = '';
      if (!clientFirstNameHasError.value
        && !clientLastNameHasError.value
        && !clientPhoneHasError.value
        && !clientBuletinSNHasError.value
        && !clientBuletinIDNPHasError.value
        && !clientBirthDateHasError.value
        && !clientLocalitateHasError.value
        && !clientCbHasError.value
        && calcResultsExist.value
        && typeCreditsSelected.value
        && typeCreditsSelected.value.id
      ) {
        const formData = {
          first_name: clientFirstName.value,
          last_name: clientLastName.value,
          phone1: clientPhone.value,
          birth_date: clientBirthDate.value,
          buletin_sn: clientBuletinSN.value,
          buletin_idnp: clientBuletinIDNP.value,
          localitate: clientLocalitate.value,
          street: clientStreet.value,
          house: clientHouse.value,
          flat: clientFlat.value,
          who_is_cont_pers1: clientWhoIsContPers1.value,
          dealer: dealer.value,
          phone_cont_pers1: clientPhoneContPers1.value,
          last_name_cont_pers1: clientLastNameContPers1.value,
          first_name_cont_pers1: clientFirstNameContPers1.value,
          type_credit_id: typeCreditsSelected.value.id,
          type_credit_name: typeCreditsSelected.value.name,
          calc_results: calcResults.value,
          first_pay_date: creditDate.value,
          months: creditMonths.value,
          imprumut: creditSum.value,
          total_dobinda: calcResults.value.tabelTotal.dobinda,
          total_comision: calcResults.value.tabelTotal.comision,
          total_comision_admin: calcResults.value.tabelTotal.comisionAdmin,
        };
        disableInputs.value = true;
        api.post('/bids/add-or-edit/0', formData).then((response) => {
          disableInputs.value = false;
          if (response.data.success) {
            bidSuccess.value = 'Cererea a fost trimisă cu succes! În scurt timp (5-7min) clientul va primi un apel telefonic';
            clearCalcResults();
            $store.commit('users/updateRefreshGridBidsCalculator', true);
          } else {
            bidError.value = response.data.data.message;
          }
        }).catch((error) => {
          disableInputs.value = false;
          showNotify({}, error);
        });
      }
    };

    watchEffect(() => {
      if (typeCredits.value) {
        typeCreditsChanged();
      }
    });
    watchEffect(() => {
      calcResultsExist.value = calcResults.value && calcResults.value.tabel;
    });

    onMounted(() => {
      api.post('/type-credits-list', {})
        .then((response) => {
          hideLoading();
          if (response.data.success) {
            response.data.data.data.forEach((row, i) => {
              typeCreditsOptions.value.push(row);
              if (i === 0) {
                typeCredits.value = row.id;
              }
            });
          }
        })
        .catch((error) => {
          hideLoading();
          showNotify({}, error);
        });
      api.post('/dealers-list', {})
        .then((response) => {
          hideLoading();
          if (response.data.success) {
            response.data.data.data.forEach((row, i) => {
              dealerOptions.value.push(row);
              if (i === 0) {
                dealer.value = row.id;
              }
            });
          }
        })
        .catch((error) => {
          hideLoading();
          showNotify({}, error);
        });
    });

    return {
      isExecutor,
      isAdmin,
      isDealer,
      authenticated,
      typeCredits,
      typeCreditsOptions,
      typeCreditsSelected,
      creditMonths,
      creditSum,
      creditDate,
      disableInputs,
      calendarOptions,
      calendarLocaleRoLocal,
      calculate,
      calcError,
      calcResults,
      calcResultsExist,
      printPreContract,
      clearCalcResults,
      clientFirstName,
      clientFirstNameHasError,
      clientLastName,
      clientLastNameHasError,
      clientPhone,
      clientPhoneHasError,
      clientBuletinSN,
      clientBuletinSNHasError,
      clientBuletinIDNP,
      clientBuletinIDNPHasError,
      clientBirthDate,
      clientBirthDateHasError,
      clientLocalitate,
      clientLocalitateHasError,
      clientStreet,
      clientHouse,
      clientFlat,
      dealer,
      clientWhoIsContPers1,
      clientPhoneContPers1,
      clientLastNameContPers1,
      clientFirstNameContPers1,
      clientCb,
      clientCbHasError,
      addNewBid,
      bidError,
      bidSuccess,
      splitterModel,
      dealerOptions,
    };
  },
});
</script>

<style scoped>

</style>
