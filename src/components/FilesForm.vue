<template>
  <div class="files-form">
    <div class="row" v-if="idExist">

      <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 q-pa-sm">
        <file-upload :module="module" :id="id" @onUploaded="load"></file-upload>
      </div>

      <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 q-pa-sm"
           v-for="card in files"
           :key="card.title">
        <q-card
          class="files-card"
        >
          <a :href="card.downloadLink" download target="_blank">
          <q-img :src="card.cardSrc"
                 style="height: 100px;cursor: pointer;">
            <div class="absolute-bottom">
              <div class="">{{ card.name }}</div>
            </div>
            <q-tooltip content-class="bg-positive"
                       content-style="font-size: 16px"
                       :offset="[10, 10]"
                       v-if="card.id > 0"
                       anchor="bottom middle"
                       self="bottom middle">
              <q-icon name="visibility"></q-icon>
              Deschide
            </q-tooltip>
          </q-img>
          </a>
          <q-card-actions align="around">
            <span class="text-blue-grey-5 text-caption"
            >
              {{ card.created_at2 }}
            </span>
            <q-btn dense size="sm"
                   v-if="card.id > 0"
                   @click="deleteFile(card.id)"
                   icon="delete"
                   color="blue-grey-3"
                   round flat>
              <q-tooltip>Șterge</q-tooltip>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
    <div v-else>
      Fișierele pot fi adăugate doar după ce documentul va fi salvat
    </div>

  </div>
</template>

<script>
import {
  getMiniPhotoFromServer,
} from 'src/helpers';
import { api } from 'boot/axios';
import FileUpload from 'components/Fields/FileUpload';

export default {
  name: 'FilesForm',
  props: {
    client_id: {
      type: Number,
      default: 0,
    },
    bid_id: {
      type: Number,
      default: 0,
    },
    user_id: {
      type: Number,
      default: 0,
    },
    dealer_id: {
      type: Number,
      default: 0,
    },
  },
  components: { FileUpload },
  data: () => ({
    files: [],
  }),
  computed: {
    idExist() {
      return this.bid_id
        || this.user_id
        || this.client_id
        || this.dealer_id;
    },
    module() {
      if (this.bid_id) {
        return 'bid_id';
      }
      if (this.user_id) {
        return 'user_id';
      }
      if (this.client_id) {
        return 'client_id';
      }
      if (this.dealer_id) {
        return 'dealer_id';
      }
      return '';
    },
    id() {
      if (this.bid_id) {
        return this.bid_id;
      }
      if (this.user_id) {
        return this.user_id;
      }
      if (this.client_id) {
        return this.client_id;
      }
      if (this.dealer_id) {
        return this.dealer_id;
      }
      return 0;
    },
  },
  methods: {
    load() {
      this.files = [];
      if (this.idExist) {
        api.post('/files/getFiles', {
          client_id: this.client_id,
          user_id: this.user_id,
          dealer_id: this.dealer_id,
          bid_id: this.bid_id,
        })
          .then((response) => {
            if (response.data.success) {
              this.files = response.data.data.data;
              this.files.map((f) => {
                if (f.extension.toLowerCase() === 'jpg' || f.extension.toLowerCase() === 'jpeg'
                  || f.extension.toLowerCase() === 'gif' || f.extension.toLowerCase() === 'png'
                  || f.extension.toLowerCase() === 'bmp'
                ) {
                  f.cardSrc = getMiniPhotoFromServer(f.web_path);
                } else if (f.extension.toLowerCase() === 'pdf') {
                  f.cardSrc = 'img/file-pdf.jpg';
                } else if (f.extension.toLowerCase() === 'doc' || f.extension.toLowerCase() === 'docx') {
                  f.cardSrc = 'img/file-doc.jpg';
                } else if (f.extension.toLowerCase() === 'xls'
                  || f.extension.toLowerCase() === 'xlsx'
                  || f.extension.toLowerCase() === 'csv'
                ) {
                  f.cardSrc = 'img/file-xls.jpg';
                } else if (f.extension.toLowerCase() === 'txt') {
                  f.cardSrc = 'img/file-txt.jpg';
                } else if (f.extension.toLowerCase() === 'rar') {
                  f.cardSrc = 'img/file-rar.jpg';
                } else if (f.extension.toLowerCase() === 'zip') {
                  f.cardSrc = 'img/file-zip.jpg';
                } else {
                  f.cardSrc = 'img/file-other.jpg';
                }
                const baseURL = String(api.defaults.baseURL).replace('/api', '');
                f.cardSrc = `${baseURL}/${f.cardSrc}`;
                f.downloadLink = `${baseURL}/${f.web_path}`;
                return f;
              });
            }
          });
      }
    },
    deleteFile(id) {
      this.$q.dialog({
        title: 'Atenție',
        message: 'Sunteți sigur că doriți să ștergeți?',
        ok: {
          label: 'Șterge',
          flat: false,
          size: 'lg',
        },
        cancel: {
          label: 'Închide',
          flat: true,
        },
        persistent: true,
      })
        .onOk(() => {
          api.post('/files/deleteFile', { id })
            .then(() => {
              this.load();
            });
        });
    },
  },
  watch: {
    client_id() {
      this.load();
    },
    user_id() {
      this.load();
    },
  },
  mounted() {
    this.load();
  },
};
</script>
