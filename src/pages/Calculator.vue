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
              <div v-if="!isDealer"
                   class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
                <q-select
                  outlined
                  color="primary"
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
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
                <q-select outlined
                          color="primary"
                          :disable="disableInputs"
                          v-model="product"
                          :options="productOptions"
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
                  {{typeCreditsSelected.name}} {{typeCreditsSelected.description_mini}}
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs">
                <q-select outlined
                          color="primary"
                          :disable="disableInputs"
                          v-model="creditMonths"
                          :options="creditMonthsOptions"
                          @update:model-value="creditMonthsChanged"
                          label="Termenul creditului (luni)" >
                  <template v-slot:label>
                    <span class="text-primary">Termenul creditului (luni)</span>
                  </template>
                </q-select>
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
            </div>
            <div class="row" style="max-width: 800px;margin: auto;">
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
                  <div class="q-table__container q-table--horizontal-separator
                   column no-wrap q-table--dense q-table--no-wrap full-width">
                    <table class="q-table">
                      <thead>
                      <tr>
                        <th>Număr<br>rate</th>
                        <th>Data plății</th>
                        <th class="text-right">Rambursări<br>suma de bază</th>
                        <th class="text-right">Dobânda</th>
                        <th class="text-right">Comision de<br>examinare</th>
                        <th class="text-right">Comision de<br>administrare</th>
                        <th class="text-right">Total de<br>plată</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td></td>
                        <td class="text-center">{{creditDate}}</td>
                        <td></td>
                        <td></td>
                        <td class="text-right">0</td>
                        <td></td>
                        <td class="text-right">0</td>
                      </tr>
                      <tr v-for="(row, rowIndex) in calcResults.tabel" :key="`res-${rowIndex}`">
                        <td class="text-center">{{rowIndex}}</td>
                        <td class="text-center">{{row.data}}</td>
                        <td class="text-right">{{row.imprumtPerLuna}}</td>
                        <td class="text-right">{{row.dobindaPerLuna}}</td>
                        <td class="text-right">{{row.comisionPerLuna}}</td>
                        <td class="text-right">{{row.comisionAdminPerLuna}}</td>
                        <td class="text-right">{{row.totalPerLuna}}</td>
                      </tr>
                      <tr>
                        <td class="text-right" colspan="2">Total</td>
                        <td class="text-right">{{calcResults.tabelTotal.imprumut}}</td>
                        <td class="text-right">{{calcResults.tabelTotal.dobinda}}</td>
                        <td class="text-right">{{calcResults.tabelTotal.comision}}</td>
                        <td class="text-right">{{calcResults.tabelTotal.comisionAdmin}}</td>
                        <td class="text-right">{{calcResults.tabelTotal.total}}</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 row q-pb-xl q-mb-xl" v-show="calcResultsExist">
              <div class="col-12">
                <h6 class="q-pa-none q-ma-none text-primary">Adaugă o cerere nouă</h6>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientFirstNameHasError"
                  @blur="clientFirstNameHasError = false"
                  @focus="clientFirstNameHasError = false"
                  type="text"
                  label="Nume client"
                  v-model="clientFirstName">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientLastNameHasError"
                  @blur="clientLastNameHasError = false"
                  @focus="clientLastNameHasError = false"
                  type="text"
                  label="Prenume client"
                  v-model="clientLastName">
                </q-input>
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
                  :error="clientRegionHasError"
                  @blur="clientRegionHasError = false"
                  @focus="clientRegionHasError = false"
                  type="text"
                  label="Region"
                  v-model="clientRegion">
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

              <div class="col-12 text-primary">Persoana de contact 1</div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Nume"
                  v-model="clientFirstNameContPers1">
                </q-input>
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

              <div class="col-12 text-primary">Persoana de contact 2</div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Nume"
                  v-model="clientFirstNameContPers2">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Prenume"
                  v-model="clientLastNameContPers2">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Telefon"
                  v-model="clientPhoneContPers2">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Cine este"
                  v-model="clientWhoIsContPers2">
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
                  Prin bifarea acestei opțiuni, declar pe propria răspundere căci am fost adus la
                  cunoștință că datele mele cu caracter personal colectate de către
                  OCN „CREDIT BOX” SRL
                  vor fi procesate și prelucrate, cu respectarea regimului de securitate
                  și confidențialitate,
                  în conformitate cu prevederile Legii nr. 133 din 8 iulie 2011 privind protecția
                  datelor cu caracter personal, informația nefiind folosită în alte scopuri
                  incompatibile sau remisă fără temei altor companii, urmând a fi păstrată
                  doar pentru o perioadă de 3 ani, urmând ulterior a fi distrusă sau transformată
                  în date anonime. Sunt conștient căci în conformitate cu art. 13-16 ale Legii
                  nr. 133 din 8 iulie 2011 privind protecția datelor cu caracter personal am dreptul
                  de acces, de intervenție, de opoziție, precum și de adresare în instanța
                  de judecată,în contextul prelucrărilor efectuate asupra datelor cu caracter
                  personal care mă vizează.
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
          <calculator-right-panel></calculator-right-panel>
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
  dateFormat,
  downloadPDF,
  hideLoading,
  showLoading,
  showNotify,
  USER_ROLE_ADMIN,
  USER_ROLE_DEALER,
  USER_ROLE_EXECUTOR,
} from 'src/helpers';
import { useStore } from 'vuex';
import CalculatorRightPanel from 'components/CalculatorRightPanel';

export default defineComponent({
  name: 'Calculator',
  components: { CalculatorRightPanel },
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
    const product = ref(null);
    const productOptionsAll = ref([]);
    const productOptions = ref([]);
    const typeCredits = ref(null);
    const creditMonthsOptions = ref([]);
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
    const clientRegion = ref('');
    const clientRegionHasError = ref(false);
    const clientLocalitate = ref('');
    const clientLocalitateHasError = ref(false);
    const clientStreet = ref('');
    const clientHouse = ref('');
    const clientFlat = ref('');
    const dealer = ref(0);
    const dealerData = ref({});
    const clientWhoIsContPers1 = ref('');
    const clientPhoneContPers1 = ref('');
    const clientLastNameContPers1 = ref('');
    const clientFirstNameContPers1 = ref('');
    const clientWhoIsContPers2 = ref('');
    const clientPhoneContPers2 = ref('');
    const clientLastNameContPers2 = ref('');
    const clientFirstNameContPers2 = ref('');
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
      clientRegion.value = '';
      clientCb.value = false;
      clientCbHasError.value = false;
    };

    const dealerChanged = () => {
      if (dealer.value) {
        showLoading();
        api.get(`/dealers/get-data-by-id/${dealer.value}`).then((response) => {
          hideLoading();
          if (response.data.success) {
            $store.commit('dealers/updateOpenedDealerData', response.data.data);
            dealerData.value = response.data.data;
            if (dealerData.value.dealer_products) {
              productOptions.value = [];
              Object.keys(dealerData.value.dealer_products).forEach((k) => {
                const productId = dealerData.value.dealer_products[k].product_id;
                productOptionsAll.value.forEach((opt, index) => {
                  if (opt.id === productId) {
                    productOptions.value.push(opt);
                  }
                  if (index === 0) {
                    product.value = productId;
                  }
                });
              });
            }
          } else {
            showNotify({ message: response.data.data.message });
          }
        }).catch((error) => {
          hideLoading();
          showNotify({}, error);
        });
      }
    };

    const productChanged = () => {
      clearCalcResults();
      typeCreditsSelected.value = {};
      creditMonthsOptions.value = [];
      productOptions.value.forEach((v) => {
        if (v && v.id === product.value) {
          typeCreditsOptions.value.forEach((v2) => {
            if (v2 && v2.product_id === v.id) {
              typeCreditsSelected.value = v2;
              creditMonths.value = v2.months_fix;
              creditMonthsOptions.value.push(v2.months_fix);
              creditSum.value = v2.sum_min > 1 ? v2.sum_min : 1000;
            }
          });
        }
      });
    };

    const creditMonthsChanged = () => {
      clearCalcResults();
      productOptions.value.forEach((v) => {
        if (v && v.id === product.value) {
          typeCreditsOptions.value.forEach((v2) => {
            if (v2 && v2.product_id === v.id && creditMonths.value === v2.months_fix) {
              typeCreditsSelected.value = v2;
            }
          });
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
      } else {
        const expl = clientBirthDate.value.split('.');
        if (expl[0] && parseInt(expl[0], 10) > 31) {
          clientBirthDateHasError.value = true;
        }
        if (expl[1] && parseInt(expl[1], 10) > 12) {
          clientBirthDateHasError.value = true;
        }
        if (expl[2] && parseInt(expl[2], 10) < 1930) {
          clientBirthDateHasError.value = true;
        }
        if (expl[2] && parseInt(expl[2], 10) > 2022) {
          clientBirthDateHasError.value = true;
        }
      }
      if (!clientRegion.value && !clientLocalitate.value) {
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
        && !clientRegionHasError.value
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
          region: clientRegion.value,
          street: clientStreet.value,
          house: clientHouse.value,
          flat: clientFlat.value,
          dealer: dealer.value,
          who_is_cont_pers1: clientWhoIsContPers1.value,
          phone_cont_pers1: clientPhoneContPers1.value,
          last_name_cont_pers1: clientLastNameContPers1.value,
          first_name_cont_pers1: clientFirstNameContPers1.value,
          who_is_cont_pers2: clientWhoIsContPers2.value,
          phone_cont_pers2: clientPhoneContPers2.value,
          last_name_cont_pers2: clientLastNameContPers2.value,
          first_name_cont_pers2: clientFirstNameContPers2.value,
          type_credit_id: typeCreditsSelected.value.id,
          type_credit_name: typeCreditsSelected.value.name,
          calc_results: calcResults.value,
          bid_date: creditDate.value,
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

    const loadProducts = () => {
      api.post('/type-credits-list', {})
        .then((response) => {
          hideLoading();
          if (response.data.success) {
            api.post('/products-list').then((response2) => {
              if (response2.data.success) {
                productOptionsAll.value = response2.data.data.data;
                productOptions.value = response2.data.data.data;
                productOptions.value.forEach((row2, i2) => {
                  if (i2 === 0) {
                    product.value = row2.id;
                    response.data.data.data.forEach((row) => {
                      typeCreditsOptions.value.push(row);
                      if (row.product_id === row2.id) {
                        typeCredits.value = row.id;
                      }
                    });
                  }
                });
              } else {
                showNotify({ message: response.data.data.message });
              }
            }).catch((error) => {
              showNotify({}, error);
            });
          }
        })
        .catch((error) => {
          hideLoading();
          showNotify({}, error);
        });
    };

    watchEffect(() => {
      if (product.value) {
        productChanged();
      }
    });

    watchEffect(() => {
      if (dealer.value) {
        dealerChanged();
      }
    });

    watchEffect(() => {
      calcResultsExist.value = calcResults.value && calcResults.value.tabel;
    });

    onMounted(() => {
      loadProducts();
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
      clientRegion,
      clientRegionHasError,
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
      clientWhoIsContPers2,
      clientPhoneContPers2,
      clientLastNameContPers2,
      clientFirstNameContPers2,
      clientCb,
      clientCbHasError,
      addNewBid,
      bidError,
      bidSuccess,
      splitterModel,
      dealerOptions,
      productOptions,
      product,
      dealerChanged,
      creditMonthsOptions,
      creditMonthsChanged,
    };
  },
});
</script>

<style scoped>

</style>
