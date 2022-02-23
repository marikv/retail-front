<template>
  <div>
    <q-table
      class="full-width sticky-header-table"
      title=""
      :data="data"
      :columns="columns"
      row-key="id"
      :flat="true"
      :dense="true"
      :loading="loading"
      selection="none"
      v-model:pagination="pagination"
      no-data-label=" "
      :hide-bottom="false"
      rows-per-page-label=" "
      :rows-per-page-options="[100, 200, 500, 1000, 0]"
      @request="onRequest"
    >
      <template v-slot:body-cell-description="props">
        <q-td :props="props">
          <div v-html="getDesc(props.row.description)"></div>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<script>
import { baseURL, getEntityName } from 'src/helpers';

export default {
  props: {
    entity_id: {
      type: Number,
    },
    entity_name: {
      type: String,
    },
  },
  components: {},
  data() {
    return {
      dataLink: '/logs',
      loading: false,
      selected: [],
      filter: '',
      baseURL,
      pagination: {
        sortBy: 'id',
        descending: true,
        page: 1,
        rowsPerPage: 100,
        rowsNumber: 0,
      },
      data: [],
      operationItems: [
        {
          value: 'e',
          text: 'Editare',
        },
        {
          value: 'a',
          text: 'Adăugare',
        },
        {
          value: 'd',
          text: 'Ștergere',
        },
        {
          value: 'l',
          text: 'Login',
        },
        {
          value: 'o',
          text: 'Logout',
        },
      ],
    };
  },
  computed: {
    columns() {
      return [
        {
          name: 'id',
          label: 'id',
          align: 'center',
          sortable: true,
          field: (row) => row.id,
          format: (val) => val,
          style: 'width: 40px',
        },
        {
          name: 'created_at2',
          label: 'Data',
          align: 'center',
          field: (row) => row.created_at2,
          format: (val) => `${val}`,
        },
        {
          name: 'user_name',
          required: true,
          label: 'Utilizator',
          align: 'left',
          field: (row) => row.user_name,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: 'ip',
          required: true,
          label: 'IP',
          align: 'left',
          field: (row) => row.ip,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          name: 'operation',
          required: true,
          label: 'Operație',
          align: 'left',
          field: (row) => row.operation_name,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          label: 'Modul',
          align: 'left',
          name: 'entity_name',
          field: (row) => row.entity_name2,
          format: (val) => `${val}`,
          sortable: true,
        },
        {
          label: 'ID Unitate',
          align: 'left',
          name: 'entity_id',
          field: (row) => row.entity_id,
          sortable: true,
        },
        {
          label: 'Descriere',
          align: 'left',
          name: 'description',
          field: (row) => row.description,
          format: (val) => `${val}`,
          sortable: false,
        },
      ];
    },
  },
  methods: {
    getOperationName(op) {
      let name = op;
      if (op === 'e') {
        name = 'editare';
      } else if (op === 'a') {
        name = 'adaugare';
      } else if (op === 'd') {
        name = 'stergere';
      } else if (op === 'l') {
        name = 'login';
      } else if (op === 'o') {
        name = 'logout';
      }
      return name;
    },
    getEntityName(op) {
      return getEntityName(op);
    },
    getDesc(desc) {
      desc = desc !== null && desc && desc.length
        ? desc
          .split('<< >>')
          .join('<strong style="color:#000;">-</strong>')
          .split('<<>>')
          .join('<strong style="color:#000;">-</strong>')
          .split('<<')
          .join('<strong style="color:#000;">')
          .split('>>')
          .join('</strong>') : '';
      return desc ? `<span style="color:#999;">${desc}</span>` : '';
    },
    onRequest(props = {}, additionalDataForRequest = {}) {
      const { filter } = this;
      const { pagination } = this;
      if (props && props.pagination) {
        const {
          rowsPerPage,
          sortBy,
          descending,
        } = props.pagination;
        pagination.sortBy = sortBy;
        pagination.descending = descending;
        if (props.pagination.page) {
          pagination.page = props.pagination.page;
        }
        pagination.rowsPerPage = rowsPerPage;
      }

      this.loading = true;
      this.$axios.post(this.dataLink, {
        pagination,
        filter,
        filters: {
          entity_id: this.entity_id,
          entity_name: this.entity_name,
        },
        ...additionalDataForRequest,
      })
        .then((response) => {
          if (response.data.success) {
            this.data = response.data.data.data;
            this.pagination.page = response.data.data.current_page;
            this.pagination.rowsPerPage = response.data.data.per_page;
            this.pagination.rowsNumber = response.data.data.total;
          }
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
  },
  watch: {
    entity_id() {
      this.onRequest();
    },
  },
  mounted() {
    this.onRequest();
  },
};
</script>
