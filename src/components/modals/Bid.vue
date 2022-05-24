<template>
  <q-dialog ref="dialogRef"
            v-model="isOpenedLocal"
            full-height persistent>
    <q-card class="q-dialog-plugin" style="width: 100%; max-width: 1100px;">
      <q-toolbar :class="'q-pr-xs'">
        <q-toolbar-title>
          <span class="text-subtitle1">
            <span class="text-blue-grey" >Cerere</span>
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
        <q-tab-panels v-model="tab" animated :keep-alive="false">
          <q-tab-panel name="general" class="q-pa-none">
            <div class="row">

              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-xs"></div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-xs text-center">
                <q-btn v-if="bidData && bidData.user_id
                 && statusId === BID_STATUS_NEW && (isExecutor || isAdmin)"
                       size="lg"
                       color="positive"
                       @click="setBidStatus(BID_STATUS_IN_WORK)"
                       label="Ia cererea în lucru"></q-btn>
              </div>
              <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 q-pa-xs"></div>

              <div class="col-xl-7 col-lg-7 col-md-6 col-sm-12 col-xs-12 q-pa-xs">
                <span class="text-primary text-h6" >
                  {{bidData && bidData.type_credit ? bidData.type_credit.name : ''}}
                </span>
<!--                <span class="text-grey q-mx-md">/</span>-->
<!--                <span class="text-black" style="font-size: 20px;">-->
<!--                  <span style="font-weight: bold;">-->
<!--                    {{bidData && bidData.months ? bidData.months : '0'}}-->
<!--                  </span>-->
<!--                  <span style="font-size: 16px;"> Luni</span>-->
<!--                </span>-->
                <span class="text-grey q-ml-lg">{{dateToDot(bidData.created_at)}}</span>
              </div>
              <div
                class="col-xl-5 col-lg-5 col-md-6 col-sm-12 col-xs-12 q-pa-xs text-right">
                <span class="text-red" style="font-size: 16px;">
                  <span style="font-size: 23px;">
                    <span style="font-weight: bold;">
                      {{bidData && bidData.imprumut ? bidData.imprumut : '0'}}
                    </span>
                  </span> Lei
                </span>
                  <q-btn v-if="!isDealer && (bidData.status_id === BID_STATUS_APPROVED
                || bidData.status_id === BID_STATUS_IN_WORK)"
                         color="primary"
                         class="q-ml-md"
                         @click="openPopupForSumChange"
                         label="Schimbă suma cererii"></q-btn>
              </div>
              <div class="col-12 q-pl-sm">
                <div class="bg-green-1 q-pa-sm text-grey-7
            full-height
             q-card--bordered rounded-borders text-caption">
                  {{bidData && bidData.type_credit ? bidData.type_credit.description_mini : ''}}
                </div>
              </div>
              <template v-if="bidData && bidData.bid_months">
                <div class="col-12" v-if="!showAllBidMonths" style="text-align: center;">
                  <q-badge color="positive"
                           style="margin: auto;"
                           class="cursor-pointer"
                           v-if="!showAllBidMonths"
                           @click="showAllBidMonths = true">
                    <span>Graficul de rambursare</span>
                    <q-icon name="expand_more"></q-icon>
                  </q-badge>
                </div>
                <div class="col-12" v-else>
                  <div style="max-width: 700px; width: 100%; margin: auto;" class="row">

                    <div class="col-2 text-subtitle2">Data plății</div>
                    <div class="col-2 text-subtitle2 text-right">Rambursări<br>suma de bază</div>
                    <div class="col-2 text-subtitle2 text-right">Dobânda</div>
                    <div class="col-2 text-subtitle2 text-right">Comision de<br>examinare</div>
                    <div class="col-2 text-subtitle2 text-right">Comision de<br>administrare</div>
                    <div class="col-2 text-subtitle2 text-right">Total de<br>plată</div>

                    <template v-for="(row, rowIndex) in bidData.bid_months"
                              :key="`res-${rowIndex}`">
                      <div class="col-2 ">{{dateToDot(row.date)}}</div>
                      <div class="col-2 text-right">{{row.imprumut_per_luna}}</div>
                      <div class="col-2 text-right">{{row.dobinda_per_luna}}</div>
                      <div class="col-2 text-right">{{row.comision_per_luna}}</div>
                      <div class="col-2 text-right">{{row.comision_admin_per_luna}}</div>
                      <div class="col-2 text-right">{{row.total_per_luna}}</div>
                    </template>
                    <div class="col-2 text-subtitle2">Total</div>
                    <div class="col-2 text-subtitle2 text-right">
                      {{bidData.imprumut}}</div>
                    <div class="col-2 text-subtitle2 text-right">
                      {{bidData.total_dobinda}}</div>
                    <div class="col-2 text-subtitle2 text-right">
                      {{bidData.total_comision}}</div>
                    <div class="col-2 text-subtitle2 text-right">
                      {{bidData.total_comision_admin}}</div>
                    <div class="col-2 text-subtitle2 text-right">
                      {{bidData.total}}</div>
                  </div>
                </div>
                <div class="col-12" v-if="showAllBidMonths" style="text-align: center;">
                  <q-badge color="positive"
                           style="margin: auto;"
                           class="cursor-pointer"
                           @click="showAllBidMonths = false">
                    <span>Închide Graficul de rambursare</span>
                    <q-icon name="expand_less"></q-icon>
                  </q-badge>
                </div>
              </template>
              <div class="col-12">
                <div
                  v-if="bidData.dealer">
                  <q-avatar size="md"
                    class="cursor-pointer bg-white q-mr-sm" style="border: 1px solid #cbcbcb;">
                    <q-img :src="getLogo(bidData.dealer.logo)"
                           v-if="getLogo(bidData.dealer.logo)" alt="" ></q-img>
                    <div v-else :style="`color: ${getColorForLogo(bidData.dealer.name)}`">
                      {{getInitialsForLogo(bidData.dealer.name)}}
                    </div>
                  </q-avatar>
                  <span class="text-primary" style="font-size: 18px;">{{bidData.dealer.name}}</span>
                  <span class="text-grey q-ml-lg">User: {{bidData.user.name}}</span>
                </div>
              </div>
              <div class="col-12 q-mt-md">
                <bid-client-form></bid-client-form>
              </div>
              <div class="col-12 q-mt-md q-mb-md">
                <bid-client-scoring v-if="!isDealer"></bid-client-scoring>
              </div>
              <div v-if="bidData.status_id === BID_STATUS_REFUSED"
                   class="col-12 text-red">
                Cerere refuzată
              </div>
              <div v-if="bidData.status_id === BID_STATUS_APPROVED"
                   class="col-12 text-green-8 text-subtitle1">
                Cerere aprobată

                <span class="text-green-10 text-subtitle2 q-ml-xl">
                  Suma maximă permisă: <strong>{{sumMaximPermis}}</strong>
                </span>
              </div>
              <div v-if="bidData.status_id === BID_STATUS_APPROVED && isDealer"
                   class="col-12 row">
                <div class="col-12">
                  <q-btn size="md"
                         @click="printContract()"
                         icon="print"
                         label="Print Contract"
                         class="q-ma-md"
                  ></q-btn>
                  <q-btn size="md"
                         @click="printAnexa()"
                         icon="print"
                         label="Print Anexa"
                         class="q-ma-md"
                  ></q-btn>
                </div>
                <div class="col-5">
                  <file-upload module="bid_id"
                               :typeId="`${fileTypeSignContract}`"
                               @onUploaded="onFileUploaded"
                               :id="id">
                    <template v-slot:button>
                      <q-btn size="md"
                             icon="attach_file"
                             label="Adaugă contractul semnat"
                             class="q-ma-md"
                      ></q-btn>
                    </template>
                  </file-upload>
                </div>
                <div class="col-7 q-pt-md">
                  {{
                    fileUploadedResponses[String(fileTypeSignContract)].name
                    ? fileUploadedResponses[String(fileTypeSignContract)].name
                    : ''
                  }}
                </div>
                <div class="col-5">
                  <file-upload module="bid_id"
                               :typeId="`${fileTypeAnexa}`"
                               @onUploaded="onFileUploaded"
                               :id="id">
                    <template v-slot:button>
                      <q-btn size="md"
                             icon="attach_file"
                             label="Adaugă anexa"
                             class="q-ma-md"
                      ></q-btn>
                    </template>
                  </file-upload>
                </div>
                <div class="col-7 q-pt-md">
                  {{
                    fileUploadedResponses[String(fileTypeAnexa)].name
                    ? fileUploadedResponses[String(fileTypeAnexa)].name
                    : ''
                  }}
                </div>
                <div class="col-5">
                  <file-upload module="bid_id"
                               :typeId="`${fileTypeBuletin1}`"
                               @onUploaded="onFileUploaded"
                               :id="id">
                    <template v-slot:button>
                      <q-btn size="md"
                             icon="attach_file"
                             label="Adaugă copia actului de identitate 1"
                             class="q-ma-md"
                      ></q-btn>
                    </template>
                  </file-upload>
                </div>
                <div class="col-7 q-pt-md">
                  {{
                    fileUploadedResponses[String(fileTypeBuletin1)].name
                      ? fileUploadedResponses[String(fileTypeBuletin1)].name
                      : ''
                  }}
                </div>
                <div class="col-5">
                  <file-upload module="bid_id"
                               :typeId="`${fileTypeBuletin2}`"
                               @onUploaded="onFileUploaded"
                               :id="id">
                    <template v-slot:button>
                      <q-btn size="md"
                             icon="attach_file"
                             label="Adaugă copia actului de identitate 2"
                             class="q-ma-md"
                      ></q-btn>
                    </template>
                  </file-upload>
                </div>
                <div class="col-7 q-pt-md">
                  {{
                    fileUploadedResponses[String(fileTypeBuletin2)].name
                      ? fileUploadedResponses[String(fileTypeBuletin2)].name
                      : ''
                  }}
                </div>
                <div class="col-5">
                  <file-upload module="bid_id"
                               :typeId="`${fileTypeOthers1}`"
                               @onUploaded="onFileUploaded"
                               :id="id">
                    <template v-slot:button>
                      <q-btn size="md"
                             icon="attach_file"
                             :label="`Adaugă orice alt fișier 1`"
                             class="q-ma-md"
                      ></q-btn>
                    </template>
                  </file-upload>
                </div>
                <div class="col-7 q-pt-md">
                  {{
                    fileUploadedResponses[String(fileTypeOthers1)].name
                      ? fileUploadedResponses[String(fileTypeOthers1)].name
                      : ''
                  }}
                </div>
                <div class="col-5">
                  <file-upload module="bid_id"
                               :typeId="`${fileTypeOthers2}`"
                               @onUploaded="onFileUploaded"
                               :id="id">
                    <template v-slot:button>
                      <q-btn size="md"
                             icon="attach_file"
                             :label="`Adaugă orice alt fișier 2`"
                             class="q-ma-md"
                      ></q-btn>
                    </template>
                  </file-upload>
                </div>
                <div class="col-7 q-pt-md">
                  {{
                    fileUploadedResponses[String(fileTypeOthers2)].name
                      ? fileUploadedResponses[String(fileTypeOthers2)].name
                      : ''
                  }}
                </div>
              </div>
              <div
                v-if="!isDealer && bidData.status_id === BID_STATUS_IN_WORK"
                class="col-12 rounded-borders bg-green-2 row  q-pa-md">
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-sm">
                  <q-input
                    outlined
                    type="number"
                    class="text-subtitle1 text-primary"
                    input-class=""
                    bg-color="white"
                    v-model="sumMaximPermis"
                    label="Suma maximă permisă">
                  </q-input>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-sm">
                  <q-btn label="Aprob"
                         size="lg"
                         @click="setBidStatus(BID_STATUS_APPROVED)"
                         color="positive"
                  ></q-btn>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-sm">
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-sm text-right">
                  <q-btn label="Refuz"
                         size="lg"
                         @click="setBidStatus(BID_STATUS_REFUSED)"
                         color="negative"
                  ></q-btn>
                </div>
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="payments" class="q-pa-none">
            <payments :bid_id="id"></payments>
          </q-tab-panel>
          <q-tab-panel name="chat" class="q-pa-none">
            <chat :bid_id="id"></chat>
          </q-tab-panel>
          <q-tab-panel name="files" class="q-pa-none">
            <files-form
              ref="FilesForm"
              :bid_id="id"></files-form>
          </q-tab-panel>
          <q-tab-panel name="user_tab_logs" class="q-pa-none">
            <logs-table-for-forms :entity_id="id"
                                  :entity_name="`bids`"></logs-table-for-forms>
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn label="Trimite contractul semnat / închide cererea"
               color="primary"
               v-if="bidData.status_id === BID_STATUS_APPROVED && isDealer"
               @click="sendBidToContract" />
        <q-btn label="Închide" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { computed, ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import {
  baseURL,
  BID_STATUS_APPROVED,
  BID_STATUS_IN_WORK,
  BID_STATUS_NEW,
  BID_STATUS_REFUSED, BID_STATUS_SIGNED_CONTRACT,
  dateToDot,
  downloadPDF,
  FILE_TYPE_BULETIN_1,
  FILE_TYPE_BULETIN_2,
  FILE_TYPE_OTHERS_1,
  FILE_TYPE_OTHERS_2,
  FILE_TYPE_SIGN_CONTRACT,
  FILE_TYPE_ANEXA,
  FILE_TYPE_UNSIGN_CONTRACT,
  generateColorFromString,
  getInitials,
  getMiniPhotoFromServer,
  hideLoading,
  showLoading,
  showNotify,
  USER_ROLE_ADMIN,
  USER_ROLE_DEALER,
  USER_ROLE_EXECUTOR,
} from 'src/helpers';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';
import Chat from 'components/Chat';
import HeaderTabsForForms from 'components/HeadersTabsForForms';
import LogsTableForForms from 'components/LogsTableForForms';
import FilesForm from 'components/FilesForm';
import FileUpload from 'components/Fields/FileUpload';
import BidClientScoring from 'components/BidClientScoring';
import BidClientForm from 'components/BidClientForm';
import Payments from 'pages/Payments';

export default {
  name: 'BidDialog',
  components: {
    Payments,
    BidClientForm,
    BidClientScoring,
    FileUpload,
    FilesForm,
    LogsTableForForms,
    HeaderTabsForForms,
    Chat,
  },
  setup() {
    const $store = useStore();
    const $q = useQuasar();
    const isOpenedLocal = ref(false);
    const id = ref(0);
    const statusId = ref(null);
    const bidData = ref({});
    const isExecutor = ref(false);
    const isAdmin = ref(false);
    const isDealer = ref(false);
    const showAllBidMonths = ref(false);
    const sumMaximPermis = ref(0);
    const sumMax = ref(0);
    const sumMin = ref(0);
    const disableSumMaximPermis = ref(true);
    const fileTypeSignContract = ref(FILE_TYPE_SIGN_CONTRACT);
    const fileTypeAnexa = ref(FILE_TYPE_ANEXA);
    const fileTypeUnSignContract = ref(FILE_TYPE_UNSIGN_CONTRACT);
    const fileTypeBuletin1 = ref(FILE_TYPE_BULETIN_1);
    const fileTypeBuletin2 = ref(FILE_TYPE_BULETIN_2);
    const fileTypeOthers1 = ref(FILE_TYPE_OTHERS_1);
    const fileTypeOthers2 = ref(FILE_TYPE_OTHERS_2);
    const fileUploadedResponsesObj = {};
    fileUploadedResponsesObj[String(FILE_TYPE_SIGN_CONTRACT)] = {};
    fileUploadedResponsesObj[String(FILE_TYPE_ANEXA)] = {};
    fileUploadedResponsesObj[String(FILE_TYPE_UNSIGN_CONTRACT)] = {};
    fileUploadedResponsesObj[String(FILE_TYPE_BULETIN_1)] = {};
    fileUploadedResponsesObj[String(FILE_TYPE_BULETIN_2)] = {};
    fileUploadedResponsesObj[String(FILE_TYPE_OTHERS_1)] = {};
    fileUploadedResponsesObj[String(FILE_TYPE_OTHERS_2)] = {};
    const fileUploadedResponses = ref({ ...fileUploadedResponsesObj });
    const user = computed(() => $store.getters['auth/getUser']);

    const getLogo = (logo) => {
      if (logo) {
        const img = getMiniPhotoFromServer(logo);
        let $return = `${baseURL.replace('/api', '')}/${img}`;
        $return = $return.replace('//uploads', '/uploads');
        return $return;
      }
      return '';
    };
    const getInitialsForLogo = (str) => getInitials(str);
    const getColorForLogo = (str) => generateColorFromString(str);

    const tabs = ref([{
      name: 'general',
      icon: 'store',
      label: 'Date generale',
    }, {
      name: 'payments',
      icon: 'payments',
      label: 'Plăți',
    }, {
      name: 'chat',
      icon: 'chat',
      label: 'Chat',
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

    watchEffect(() => {
      isExecutor.value = user.value.role_id === USER_ROLE_EXECUTOR;
      isAdmin.value = user.value.role_id === USER_ROLE_ADMIN;
      isDealer.value = user.value.role_id === USER_ROLE_DEALER;
    });
    watchEffect(() => {
      isOpenedLocal.value = $store.getters['bids/getOpenedBidForm'];
      if (isOpenedLocal.value) {
        if ($store.getters['bids/getLastBidTab'] === 'chat') {
          tab.value = 'chat';
        } else {
          tab.value = 'general';
        }
      }
    });
    watchEffect(() => {
      bidData.value = $store.getters['bids/getOpenedBidData'];
    });
    watchEffect(() => {
      if (bidData.value) {
        id.value = bidData.value.id ? bidData.value.id : 0;
        statusId.value = bidData.value.status_id ? parseInt(bidData.value.status_id, 10) : 0;
        sumMaximPermis.value = bidData.value.sum_max_permis;
        sumMax.value = bidData.value.sum_max;
        sumMin.value = bidData.value.sum_min;

        Object.keys(fileUploadedResponses.value).forEach((k) => {
          fileUploadedResponses.value[k] = {};
        });
        if (bidData.value.files
          && Array.isArray(bidData.value.files)
          && bidData.value.files.length
        ) {
          bidData.value.files.forEach((file) => {
            if (Object.keys(fileUploadedResponses.value).indexOf(String(file.type_id)) > -1) {
              fileUploadedResponses.value[String(file.type_id)] = file;
            }
          });
        }
      }
    });
    const onCancelClick = () => {
      $store.commit('bids/updateOpenedBidData', {});
      $store.commit('bids/updateOpenedBidForm', false);
    };
    const getDataById = (idLocal) => {
      id.value = idLocal;
      const oldData = { ...$store.getters['bids/getOpenedBidData'] };
      oldData.id = idLocal;
      $store.commit('bids/updateOpenedBidData', oldData);
      showLoading();
      api.get(`/bids/get-data-by-id/${idLocal}`).then((response) => {
        hideLoading();
        if (response.data.success) {
          $store.commit('bids/updateOpenedBidData', response.data.data);
          bidData.value = response.data.data;
        } else {
          showNotify({ message: response.data.data.message });
        }
      }).catch((error) => {
        hideLoading();
        showNotify({}, error);
      });
    };
    const setBidStatus = (statusIdLocal) => {
      if (bidData.value && bidData.value.id) {
        const doThis = () => {
          showLoading();
          api.post(`/bids/set-bid-status/${id.value}`, {
            status_id: statusIdLocal,
            sum_max_permis: sumMaximPermis.value,
          }).then((response) => {
            hideLoading();
            if (response.data.success) {
              $store.commit('bids/updateOpenedBidData', response.data.data);
              $store.commit('users/updateRefreshGridBidsCalculator', true);
            } else {
              showNotify({ message: response.data.data.message });
            }
          }).catch((error) => {
            hideLoading();
            showNotify({}, error);
          });
        };
        if (statusIdLocal === BID_STATUS_APPROVED || statusIdLocal === BID_STATUS_REFUSED) {
          let message = 'Sunteți sigur că doriți să aprobați cererea?';
          if (statusIdLocal === BID_STATUS_REFUSED) {
            message = 'Sunteți sigur că doriți să refuzați cererea?';
          }
          $q.dialog({
            title: 'Atenție',
            message,
            cancel: true,
            persistent: true,
          }).onOk(() => {
            doThis();
          });
        } else {
          doThis();
        }
      }
    };
    const sendBidToContract = () => {
      if (!fileUploadedResponses.value[String(FILE_TYPE_SIGN_CONTRACT)].name) {
        $q.dialog({
          title: 'Eroare',
          message: 'Nu ați atașat contractul semnat?',
          color: 'negative',
          cancel: false,
          persistent: true,
        });
      } else {
        $q.dialog({
          title: 'Atenție',
          message: 'Sunteți sigur că doriți să închideți cererea?',
          cancel: true,
          persistent: true,
        }).onOk(() => {
          setBidStatus(BID_STATUS_SIGNED_CONTRACT);
        });
      }
    };
    const openPopupForSumChange = () => {
      let sumMaxLocal = sumMax.value;
      if (sumMaximPermis.value > sumMin.value) {
        sumMaxLocal = sumMaximPermis.value;
      }
      $q.dialog({
        title: 'Suma cererii de credit',
        message: `Introdu suma nouă a cererii. min: ${sumMin.value}, max: ${sumMaxLocal}`,
        prompt: {
          model: '',
          type: 'number',
          isValid: (val) => parseInt(String(val), 10) <= sumMaxLocal
            && parseInt(String(val), 10) >= sumMin.value,
          outlined: true,
        },
        cancel: 'Închide',
        ok: {
          flat: false,
        },
        persistent: true,
      }).onOk((newSum) => {
        if (id.value) {
          showLoading();
          api.post(`/bid-change-sum/${id.value}`, {
            bid_id: id.value,
            new_sum: newSum,
          }).then((response) => {
            hideLoading();
            if (response.data.success) {
              $store.commit('bids/updateOpenedBidData', response.data.data);
            } else {
              showNotify({ message: response.data.data.message });
            }
          }).catch((error) => {
            hideLoading();
            showNotify({}, error);
          });
        } else {
          showNotify({ message: 'eroare de id cerere' });
        }
      });
    };

    const printContract = () => {
      downloadPDF(id.value, '/print/contract', 'contract');
    };
    const printAnexa = () => {
      downloadPDF(id.value, '/print/anexa', 'anexa');
    };

    const onFileUploaded = (fileData) => {
      if (fileData.response.data.data) {
        const t = String(fileData.linkFileToData.type_id);
        fileUploadedResponses.value[t] = fileData.response.data.data;
      }
    };

    return {
      id,
      bidData,
      isOpenedLocal,
      onCancelClick,
      getDataById,
      statusId,
      BID_STATUS_NEW,
      BID_STATUS_IN_WORK,
      BID_STATUS_APPROVED,
      BID_STATUS_REFUSED,
      isExecutor,
      isAdmin,
      isDealer,
      setBidStatus,
      dateToDot,
      showAllBidMonths,
      sumMaximPermis,
      disableSumMaximPermis,
      tabs,
      tab,
      openPopupForSumChange,
      getInitialsForLogo,
      getLogo,
      getColorForLogo,
      printContract,
      printAnexa,
      fileTypeSignContract,
      fileTypeAnexa,
      fileTypeUnSignContract,
      fileTypeBuletin1,
      fileTypeBuletin2,
      fileTypeOthers1,
      fileTypeOthers2,
      fileUploadedResponses,
      onFileUploaded,
      sendBidToContract,
    };
  },
};
</script>

<style scoped>

</style>
