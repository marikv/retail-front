<template>
  <q-page class="flex flex-block">
    <q-table
      class="full-width sticky-header-table"
      :flat="true"
      title="Payments"
      :rows="rows"
      :columns="columns"
      row-key="id"
      v-model:pagination="pagination"
      :loading="loading"
      :filter="filter"
      binary-state-sort
      no-data-label="Nu sunt înregistrări"
      rows-per-page-label="Înregistrări pe pagină"
      :rows-per-page-options="[30, 50, 100, 200, 500, 1000, 0]"
      @request="onRequest"
    >
      <template v-slot:top-right>
        <q-select outlined
                 bg-color="white"
                 dense debounce="0"
                 v-model="paymentsInWaiting"
                  :options="[
                    { label: 'Toate', value: null },
                    { label: 'Efectuate', value: 1 },
                    { label: 'În așteptare', value: 2 },
                  ]"
                  emit-value
                  map-options
                  style="width: 150px;"
                  @change="onRequest"
                 class="q-mr-xs"
                 label="Tip achitări">
        </q-select>
        <q-input outlined
                 bg-color="white"
                 dense debounce="300"
                 v-model="contractNumber"
                 @keyup.enter="onRequest"
                 class="q-mr-xs"
                 label="Nr contract">
        </q-input>
        <q-input outlined
                 bg-color="white"
                 dense debounce="300"
                 v-model="filter"
                 @keyup.enter="onRequest"
                 placeholder="Caută">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
                <q-btn icon="search"
                       round
                       @click="onRequestWithLast"
                       class="q-ml-lg"
                       color="primary">
                  <q-tooltip>Caută</q-tooltip>
                </q-btn>
        <q-btn icon="add"
               round
               @click="showPaymentModalSetValue(true)"
               class="q-ml-lg"
               color="positive">
          <q-tooltip>Adaugă</q-tooltip>
        </q-btn>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props" class="actions-td">
          <q-btn dense round flat
                 size="sm"
                 color="positive"
                 @click="editRow(props)"
                 icon="edit">
            <q-tooltip>Redactează</q-tooltip>
          </q-btn>
          <q-btn dense round flat
                 size="sm"
                 color="negative"
                 @click="deleteRow(props)"
                 icon="delete">
            <q-tooltip>Șterge</q-tooltip>
          </q-btn>
        </q-td>
      </template>
      <template v-slot:body-cell-dealer_name="props">
        <q-td :props="props" class="props-td">
          <q-avatar
            style="border: 1px solid #dddddd;">
            <q-img :src="getAvatar(props.row.logo)"
                   v-if="getAvatar(props.row.logo)" alt=""></q-img>
            <div v-else
                 :style="`color: ${getColorForLogo(props.row.dealer_name)}`">
              {{getInitialsForLogo(props.row.dealer_name)}}
            </div>
          </q-avatar>
          {{props.row.dealer_name}}
        </q-td>
      </template>
    </q-table>
    <Payment ref="PaymentRef" @onCloseDialog="showPaymentModalSetValue(false)"></Payment>
  </q-page>
</template>

<script>
import {
  ref,
  onMounted,
  defineComponent,
  watchEffect,
} from 'vue';
import { useStore } from 'vuex';
import { api } from 'boot/axios';
import {
  dateTimeToDot,
  dateToDot,
  generateColorFromString,
  getInitials,
  getMiniPhotoFromServer,
  showNotify,
} from 'src/helpers';
import Payment from 'components/modals/Payment';
import { useQuasar } from 'quasar';

const columns = [
  {
    name: 'id', label: 'ID', field: 'id', sortable: true, style: 'width: 50px',
  },
  {
    name: 'bid_id', label: 'Contract', field: 'bid_id', sortable: true, align: 'center', style: 'width: 50px',
  },
  {
    name: 'dealer_name', label: 'Dealer', field: 'dealer_name', sortable: true, align: 'center', style: 'width: 50px',
  },
  {
    name: 'date_time', label: 'Data așteptată', field: 'date_time', sortable: true, align: 'center', style: 'width: 80px', format: (val) => (val ? dateToDot(val) : ''),
  },
  {
    name: 'date_time_fact', label: 'Data facto', field: 'date_time_fact', sortable: true, align: 'center', style: 'width: 80px', format: (val) => (val ? dateTimeToDot(val) : ''),
  },
  {
    name: 'beznal', label: 'Banca/Numerar', field: 'beznal', sortable: true, align: 'left', format: (val) => (val ? 'Banca' : 'Numerar'),
  },
  {
    name: 'payment_sum', label: 'Suma rata', field: 'payment_sum', sortable: true, align: 'left',
  },
  {
    name: 'payment_sum_fact', label: 'Suma facto', field: 'payment_sum_fact', sortable: true, align: 'left',
  },
  {
    name: 'client_last_name', label: 'Client', field: 'client_last_name', sortable: true, align: 'left', format: (val, row) => (val ? `${row.client_last_name} ${row.client_first_name}` : ''),
  },
  {
    name: 'created_at2', label: 'Adăugat', field: 'created_at2', sortable: true,
  },
  {
    name: 'actions', label: '', align: 'center', style: 'width: 60px',
  },
];

export default defineComponent({
  name: 'Payments',

  components: { Payment },

  setup() {
    const $q = useQuasar();
    const rows = ref([]);
    const PaymentRef = ref(null);
    const filter = ref('');
    const contractNumber = ref(null);
    const paymentsInWaiting = ref(null);
    const loading = ref(false);
    const $store = useStore();
    const lastOnRequestProps = ref(null);
    $store.commit('auth/updateActiveModule', 'Payments');
    const pagination = ref({
      sortBy: 'id',
      descending: true,
      page: 1,
      rowsPerPage: 30,
    });
    const getAvatar = (avatar) => {
      if (avatar) {
        const img = getMiniPhotoFromServer(avatar);
        const baseUrl = String(api.defaults.baseURL);
        return `${baseUrl.replace('/api', '')}/${img}`;
      }
      return '';
    };
    const getInitialsForLogo = (str) => getInitials(str);
    const getColorForLogo = (str) => generateColorFromString(str);

    const onRequest = (props) => {
      loading.value = true;
      lastOnRequestProps.value = props;
      $store.commit('payments/updateRefreshGrid', false);

      api.post('/payments-list', {
        ...props,
        contractNumber: contractNumber.value,
        paymentsInWaiting: paymentsInWaiting.value,
      })
        .then((response) => {
          loading.value = false;
          if (response.data.success) {
            rows.value = response.data.data.data;
            pagination.value.page = response.data.data.current_page;
            pagination.value.rowsPerPage = response.data.data.per_page;
            pagination.value.rowsNumber = response.data.data.total;
          }
        })
        .catch((error) => {
          loading.value = false;
          showNotify({}, error);
        });
    };

    const showPaymentModalSetValue = (v, id = 0) => {
      $store.commit('payments/updateOpenedPaymentForm', v);
      $store.commit('payments/updateOpenedPaymentData', {});
      if (v && id > 0) {
        if (PaymentRef.value) {
          PaymentRef.value.getDataById(id);
        }
      }
    };

    const editRow = (props) => {
      showPaymentModalSetValue(true, props.row.id);
    };
    const deleteRow = (props) => {
      $q.dialog({
        title: 'Atenție',
        message: 'Sunteți sigur că doriți să ștergeți?',
        cancel: true,
        persistent: true,
      }).onOk(() => {
        api.delete(`/payments/${props.row.id}`).then(() => {
          onRequest(lastOnRequestProps.value);
        });
      });
    };
    const onRequestWithLast = () => {
      onRequest(lastOnRequestProps.value);
    };

    watchEffect(() => {
      if ($store.getters['payments/getRefreshGrid']) {
        onRequest(lastOnRequestProps.value);
      }
    });

    onMounted(() => {
      onRequest({
        pagination: pagination.value,
        filter: undefined,
      });
    });

    return {
      filter,
      loading,
      pagination,
      columns,
      rows,
      showPaymentModalSetValue,
      editRow,
      deleteRow,
      onRequest,
      contractNumber,
      paymentsInWaiting,
      PaymentRef,
      getAvatar,
      getColorForLogo,
      getInitialsForLogo,
      onRequestWithLast,
    };
  },
});
</script>
