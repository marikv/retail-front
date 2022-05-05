<template>
  <div class="full-width">
    <q-table
      class="full-width"
      :flat="true"
      title=""
      :rows="rows"
      :columns="columns"
      row-key="id"
      :filter="filter"
      v-model:pagination="pagination"
      :loading="loading"
      binary-state-sort
      no-data-label="Nu sunt înregistrări"
      rows-per-page-label="Înregistrări pe pagină"
      :rows-per-page-options="[30, 50, 100, 200, 500, 1000, 0]"
      @request="onRequest"
      card-class="text-primary"
      table-class="text-grey-8"
      table-header-class="bg-indigo-1 text-primary"
      bordered
    >
      <template v-slot:top-right>
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
               @click="onRequest"
               class="q-ml-lg"
               color="primary">
          <q-tooltip>Caută</q-tooltip>
        </q-btn>
      </template>
      <template v-slot:body-cell-id="props">
        <q-td :props="props" class="actions-td text-center">
          {{props.row.id}}<br>
          <q-btn dense round flat
                 size="md"
                 color="positive"
                 @click="editRow(props.row.id, false)"
                 :icon="props.row.status_id === bidStatusSignedContract ? 'visibility' : 'edit'">
            <q-tooltip>
              {{(props.row.status_id === bidStatusSignedContract ? 'Deschide' : 'Redactează')}}
            </q-tooltip>
          </q-btn><br>
          <q-btn dense round flat
                 size="md"
                 v-if="props.row.status_id !== bidStatusSignedContract"
                 :color="!unreadChats[props.row.id] ? 'positive' : 'negative'"
                 @click="editRow(props.row.id, true)"
                 :icon="!unreadChats[props.row.id] ? 'chat_bubble_outline' : 'chat_bubble'">
            <q-badge color="orange"
                     v-if="unreadChats[props.row.id]"
                     floating
                     transparent>
              {{unreadChats[props.row.id]}}
            </q-badge>
            <q-tooltip>Chat</q-tooltip>
          </q-btn><br>
          <q-btn dense round flat
                 size="md"
                 color="negative"
                 v-if="isAdmin"
                 @click="deleteRow(props)"
                 icon="delete">
            <q-tooltip>Șterge</q-tooltip>
          </q-btn>
        </q-td>
      </template>
      <template v-slot:body-cell-dealer_name="props">
        <q-td :props="props" class="props-td">
          <q-avatar
            size="md"
            @click="editRow(props.row.id)"
            class="cursor-pointer bg-white q-mr-sm"
            style="border: 1px solid white;">
            <q-img :src="getLogo(props.row.logo)" v-if="getLogo(props.row.logo)" alt="" ></q-img>
            <div v-else :style="`color: ${getColorForLogo(props.row.dealer_name)}`">
              {{getInitialsForLogo(props.row.dealer_name)}}
            </div>
            <q-tooltip>Deschide</q-tooltip>
          </q-avatar>
          <strong>{{props.row.dealer_name}}</strong><br>
          User: {{props.row.user_name}}<br>
          {{props.row.type_credits_name}}<br>
          {{props.row.created_at2}}
          <div
            class="text-red"
            v-if="props.row.sum_max_permis">
            <strong>
              Suma Maxima Permisa:
            </strong>
            {{props.row.sum_max_permis}}
          </div>
        </q-td>
      </template>
      <template v-slot:body-cell-phone1="props">
        <q-td :props="props" class="props-td">
          <strong>{{props.row.client_last_name}} {{props.row.client_first_name}}</strong><br>
          Tel: {{props.row.phone1}}<br>
          IDNP: {{props.row.buletin_idnp}}<br>
          <q-badge :color="getStatusBadgeColor(props.row.status_id)"
                   :text-color="getStatusBadgeTextColor(props.row.status_id)">
            {{getBidStatus(props.row.status_id)}}
          </q-badge><br>
          <strong>Suma:</strong> {{props.row.imprumut}}<br>
        </q-td>
      </template>
    </q-table>
    <bid-dialog ref="BidDialogRef"></bid-dialog>
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  ref,
  watchEffect,
  computed, onBeforeMount,
} from 'vue';
import { useStore } from 'vuex';
import { api } from 'boot/axios';
import {
  baseURL,
  BID_STATUS_APPROVED,
  BID_STATUS_IN_WORK,
  BID_STATUS_NEW,
  BID_STATUS_REFUSED,
  BID_STATUS_SIGNED_CONTRACT,
  generateColorFromString, getBidStatusName,
  getInitials,
  getMiniPhotoFromServer,
  showNotify, USER_ROLE_ADMIN, USER_ROLE_DEALER, USER_ROLE_EXECUTOR,
} from 'src/helpers';
import { useQuasar } from 'quasar';
import BidDialog from 'components/modals/Bid';

export default defineComponent({
  name: 'BidsListForCalculator',
  components: { BidDialog },
  setup() {
    const $store = useStore();
    const $q = useQuasar();
    const rows = ref([]);
    const unreadChats = ref([]);
    const loading = ref(false);
    const bidStatusSignedContract = ref(BID_STATUS_SIGNED_CONTRACT);
    const BidDialogRef = ref(null);
    const filter = ref('');
    const isExecutor = ref(false);
    const isAdmin = ref(false);
    const isDealer = ref(false);
    const user = computed(() => $store.getters['auth/getUser']);
    const paginationInit = {
      sortBy: 'id',
      descending: true,
      page: 1,
      rowsPerPage: 100,
    };
    const pagination = ref(paginationInit);

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
    const getBidStatus = (statusId) => getBidStatusName(statusId);
    const getRowClasses = (row) => {
      if (row.status_id === BID_STATUS_NEW) {
        return 'bg-white';
      }
      if (row.status_id === BID_STATUS_APPROVED) {
        return 'bg-green-2';
      }
      if (row.status_id === BID_STATUS_REFUSED) {
        return 'bg-red-2';
      }
      if (row.status_id === BID_STATUS_IN_WORK) {
        return 'bg-yellow-2';
      }
      return 'bg-white';
    };
    const getStatusBadgeColor = (statusId) => {
      if (statusId === BID_STATUS_NEW) {
        return 'white';
      }
      if (statusId === BID_STATUS_APPROVED) {
        return 'positive';
      }
      if (statusId === BID_STATUS_REFUSED) {
        return 'negative';
      }
      if (statusId === BID_STATUS_IN_WORK) {
        return 'yellow';
      }
      return 'white';
    };
    const getStatusBadgeTextColor = (statusId) => {
      if (statusId === BID_STATUS_NEW) {
        return 'black';
      }
      if (statusId === BID_STATUS_APPROVED) {
        return 'white';
      }
      if (statusId === BID_STATUS_REFUSED) {
        return 'white';
      }
      if (statusId === BID_STATUS_IN_WORK) {
        return 'black';
      }
      return 'black';
    };

    const onRequest = (props) => {
      $store.commit('users/updateRefreshGridBidsCalculator', false);
      if (!loading.value) {
        loading.value = true;

        api.post('/bids/get-list', {
          ...props,
          activeModule: $store.getters['auth/getActiveModule'],
          pagination: pagination.value,
        })
          .then((response) => {
            loading.value = false;
            if (response.data.success) {
              rows.value = [...response.data.data.data];
              pagination.value.page = response.data.data.current_page;
              pagination.value.rowsPerPage = response.data.data.per_page;
              pagination.value.rowsNumber = response.data.data.total;
            }
          })
          .catch((error) => {
            loading.value = false;
            showNotify({}, error);
          });
      }
    };

    const editRow = (id, openChatTab = false) => {
      $store.commit('bids/updateOpenedBidData', { id });
      $store.commit('bids/updateOpenedBidForm', true);
      $store.commit('bids/updateLastBidTab', openChatTab ? 'chat' : 'general');
      if (id > 0) {
        if (BidDialogRef.value) {
          BidDialogRef.value.getDataById(id);
        }
      }
    };
    const deleteRow = (props) => {
      $q.dialog({
        title: 'Atenție',
        message: 'Sunteți sigur că doriți să ștergeți?',
        cancel: true,
        persistent: true,
      }).onOk(() => {
        api.delete(`/bids/${props.row.id}`).then(() => {
          onRequest();
        });
      });
    };
    watchEffect(() => {
      isExecutor.value = user.value.role_id === USER_ROLE_EXECUTOR;
      isAdmin.value = user.value.role_id === USER_ROLE_ADMIN;
      isDealer.value = user.value.role_id === USER_ROLE_DEALER;
    });
    watchEffect(() => {
      if ($store.getters['users/getRefreshGridBidsCalculator'] === true) {
        $store.commit('users/updateRefreshGridBidsCalculator', false);
        if (!loading.value) {
          setTimeout(() => {
            onRequest();
          }, 10);
        }
      }
    });
    watchEffect(() => {
      const getCheckNewMessages = $store.getters['auth/getCheckNewMessages'];
      if (getCheckNewMessages && getCheckNewMessages.unreadMessages) {
        const unreadChatsLocal = [];
        getCheckNewMessages.unreadMessages.forEach((message) => {
          if (message.bid_id) {
            if (unreadChatsLocal[message.bid_id] === undefined) {
              unreadChatsLocal[message.bid_id] = 0;
            }
            unreadChatsLocal[message.bid_id] += 1;
          }
        });
        unreadChats.value = unreadChatsLocal;

        if (getCheckNewMessages.bids) {
          getCheckNewMessages.bids.forEach((bid) => {
            let found = false;
            rows.value.forEach((row, i) => {
              if (row.id === bid.id) {
                found = true;
                if (row.status_id !== bid.status_id || row.imprumut !== bid.imprumut) {
                  rows.value[i] = bid;
                }
              }
            });
            if (!found) {
              rows.value = [bid, ...rows.value];
              $store.commit('users/updateRefreshGridBidsCalculator', true);
            }
          });
        }
      }
    });
    onMounted(() => {
      onRequest();
    });
    onBeforeMount(() => {
      rows.value = [];
    });

    const columns = [
      {
        name: 'id',
        label: 'ID',
        field: 'id',
        sortable: true,
        style: 'width: 20px',
        align: 'center',
        classes: (row) => getRowClasses(row),
      },
      {
        name: 'dealer_name',
        label: 'Dealer',
        field: 'dealer_name',
        sortable: true,
        align: 'left',
        classes: (row) => getRowClasses(row),
      },
      {
        name: 'phone1',
        label: 'Client',
        field: 'phone1',
        sortable: true,
        align: 'left',
        classes: (row) => getRowClasses(row),
      },
      // {
      //   name: 'actions',
      //   label: '',
      //   align: 'center',
      //   style: 'width: 60px',
      //   classes: (row) => getRowClasses(row),
      // },
    ];

    return {
      loading,
      pagination,
      columns,
      rows,
      onRequest,
      filter,
      getLogo,
      getInitialsForLogo,
      getColorForLogo,
      editRow,
      deleteRow,
      getBidStatus,
      getRowClasses,
      getStatusBadgeColor,
      getStatusBadgeTextColor,
      BidDialogRef,
      unreadChats,
      isExecutor,
      isDealer,
      isAdmin,
      bidStatusSignedContract,
    };
  },
});
</script>

<style scoped>

</style>
