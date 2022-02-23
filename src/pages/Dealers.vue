<template>
  <q-page class="flex flex-block">
    <q-table
      class="full-width sticky-header-table"
      :flat="true"
      title="Dealeri"
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
               @click="showDealerModalSetValue(true)"
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
      <template v-slot:body-cell-logo="props">
        <q-td :props="props" class="props-td">
          <q-avatar
            @click="editRow(props)"
            class="cursor-pointer"
            style="border: 1px solid #dddddd;">
            <q-img :src="getLogo(props)" v-if="getLogo(props)" alt=""></q-img>
            <div v-else
                 :style="`color: ${getColorForLogo(props.row.name)}`">
              {{getInitialsForLogo(props.row.name)}}
            </div>
            <q-tooltip>Deschide</q-tooltip>
          </q-avatar>
        </q-td>
      </template>
    </q-table>
    <Dealer ref="DealerRef" @onCloseDialog="showDealerModalSetValue(false)"></Dealer>
  </q-page>
</template>

<script>
import {
  defineComponent,
  onMounted,
  ref,
  watchEffect,
} from 'vue';
import { useStore } from 'vuex';
import { api } from 'boot/axios';
import {
  baseURL,
  generateColorFromString,
  getInitials,
  getMiniPhotoFromServer,
  showNotify,
} from 'src/helpers';
import Dealer from 'components/modals/Dealer';
import { useQuasar } from 'quasar';

const columns = [
  {
    name: 'id', label: 'ID', field: 'id', sortable: true, style: 'width: 50px',
  },
  {
    name: 'logo', label: '', align: 'center', style: 'width: 80px',
  },
  {
    name: 'name', label: 'Nume', field: 'name', sortable: true, align: 'left',
  },
  {
    name: 'idno', label: 'IDNO', field: 'idno', sortable: true, align: 'left',
  },
  {
    name: 'phone1', label: 'Telefon', field: 'phone1', sortable: true, align: 'left',
  },
  {
    name: 'email', label: 'Email', field: 'email', sortable: true, align: 'left',
  },
  {
    name: 'created_at2', label: 'Adăugat', field: 'created_at2', sortable: true,
  },
  {
    name: 'actions', label: '', align: 'center', style: 'width: 60px',
  },
];

export default defineComponent({
  name: 'Dealers',

  components: { Dealer },

  setup() {
    const $q = useQuasar();
    const rows = ref([]);
    const DealerRef = ref(null);
    const filter = ref('');
    const loading = ref(false);
    const lastOnRequestProps = ref(null);
    const $store = useStore();
    const pagination = ref({
      sortBy: 'id',
      descending: true,
      page: 1,
      rowsPerPage: 30,
    });
    const getLogo = (props) => {
      if (props.row.logo) {
        const img = getMiniPhotoFromServer(props.row.logo);
        let $return = `${baseURL.replace('/api', '')}/${img}`;
        $return = $return.replace('//uploads', '/uploads');
        return $return;
      }
      return '';
    };
    const getInitialsForLogo = (str) => getInitials(str);
    const getColorForLogo = (str) => generateColorFromString(str);

    const onRequest = (props) => {
      loading.value = true;
      lastOnRequestProps.value = props;
      $store.commit('dealers/updateRefreshGrid', false);

      api.post('/dealers-list', { ...props })
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

    const onRequestWithLast = () => {
      onRequest(lastOnRequestProps.value);
    };

    const showDealerModalSetValue = (v, id = 0) => {
      $store.commit('dealers/updateOpenedDealerForm', v);
      $store.commit('dealers/updateOpenedDealerData', {});
      if (v && id > 0) {
        if (DealerRef.value) {
          DealerRef.value.getDataById(id);
        }
      }
    };

    const editRow = (props) => {
      showDealerModalSetValue(true, props.row.id);
    };
    const deleteRow = (props) => {
      $q.dialog({
        title: 'Atenție',
        message: 'Sunteți sigur că doriți să ștergeți?',
        cancel: true,
        persistent: true,
      }).onOk(() => {
        api.delete(`/dealers/${props.row.id}`).then(() => {
          onRequest(lastOnRequestProps.value);
        });
      });
    };

    watchEffect(() => {
      if ($store.getters['dealers/getRefreshGrid']) {
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
      showDealerModalSetValue,
      editRow,
      deleteRow,
      onRequest,
      DealerRef,
      getLogo,
      getColorForLogo,
      getInitialsForLogo,
      onRequestWithLast,
    };
  },
});
</script>
