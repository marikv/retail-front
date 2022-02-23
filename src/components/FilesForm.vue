<template>
  <div class="files-form">
    <div class="row" v-if="idExist">

      <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-xs-12 q-pa-sm">
        <input type="file"
               ref="file"
               multiple
               v-if="showJustFileInput"
               :id="uploadFieldId"
               :name="uploadFieldName"
               @change="onFileChange($event.target.name, $event.target.files)"
               value="Alege fisierul"
               style="font-size: 18px; padding: 25px; background: #5ddcc6;"
        >
        <q-card
          v-else
          class="files-card bg-primary text-white cursor-pointer"
          @click="launchFilePicker()"
        >
          <div class="files-card__overlay"></div>
          <q-card-section class="text-center"  style="height: 100px;">
            <input type="file"
                   ref="file"
                   multiple
                   :id="uploadFieldId"
                   :name="uploadFieldName"
                   @change="onFileChange($event.target.name, $event.target.files)"
                   style="display:none">
            <div class="text-subtitle1">Adaugă fișier nou</div>
            <q-icon class=""
                    name="add"
                    size="xl"></q-icon>
          </q-card-section>
          <q-card-actions align="around">
            <q-btn dense size="sm" icon="" flat></q-btn>
            <q-btn dense size="sm" icon="" flat></q-btn>
          </q-card-actions>
        </q-card>
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
  hideLoading,
  showLoading,
  showNotify,
} from 'src/helpers';
import { api } from 'boot/axios';

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
    contract_id: {
      type: Number,
      default: 0,
    },
  },
  components: {},
  data: () => ({
    errorText: '',
    uploadFieldName: 'fileForUpload',
    maxSize: 20480,
    files: [],
  }),
  computed: {
    uploadFieldId() {
      return `id${Math.floor(Math.random() * 100000)}`;
    },
    showJustFileInput() {
      return this.$q.platform.is.ios;
    },
    idExist() {
      return this.bid_id
        || this.user_id
        || this.client_id
        || this.dealer_id
        || this.contract_id;
    },
  },
  methods: {
    autoClickAddButton() {
      this.launchFilePicker();
    },
    load() {
      this.files = [];
      if (this.idExist) {
        api.post('/files/getFiles', {
          client_id: this.client_id,
          user_id: this.user_id,
          dealer_id: this.dealer_id,
          bid_id: this.bid_id,
          contract_id: this.contract_id,
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
    loadFiles() {
      this.load();
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
    launchFilePicker() {
      document.getElementById(this.uploadFieldId).click();
    },
    onFileChange(fieldName, file) {
      const { maxSize } = this;
      for (let ii = 0; ii < file.length; ii += 1) {
        const imageFile = file[ii];

        if (file.length > 0) {
          const size = imageFile.size / maxSize / maxSize;

          if (
            !imageFile.type.match('image.*')
            && imageFile.type !== 'application/pdf'
            && imageFile.type !== 'application/doc'
            && imageFile.type !== 'text/plain'
            && !imageFile.type.match('.*officedocument.*')
            && !imageFile.type.match('.*excel.*')
            && !imageFile.type.match('.*msword.*')
            && !imageFile.type.match('.*ms-doc.*')
            && !imageFile.type.match('.*zip-compressed.*')
            && !imageFile.name.match('.*rar')
          ) {
            showNotify({
              message: 'Extensie inacceptabilă. (jpg, jpeg, png, bmp, gif, rar, zip, doc, docx, xls, xlsx, pdf, txt, csv) ',
            });
          } else if (size > 1) {
            showNotify({
              message: `Fișierul este prea mare! Alegeți un fișier mai mic ${this.maxSize / 1024}Мб`,
            });
          } else {
            const linkFileToObj = {
              client_id: this.client_id,
              user_id: this.user_id,
              dealer_id: this.dealer_id,
              bid_id: this.bid_id,
              contract_id: this.contract_id,
            };
            const formData = new FormData();
            formData.append(fieldName, imageFile);
            showLoading();
            api.post('/files/uploadFile', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            })
              .then((response) => {
                hideLoading();
                if (response.data.success) {
                  api.post('/files/linkFileTo', {
                    ...linkFileToObj,
                    file_id: response.data.data.id,
                  })
                    .then(() => {
                      this.load();
                    });
                } else {
                  showNotify({
                    message: 'Eroare de încărcare a fișierului pe server!',
                  });
                }
              })
              .catch(async (error) => {
                hideLoading();
                showNotify({
                  message: 'Eroare de încărcare a fișierului pe server',
                }, error);
              });
          }
        }
      }
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

<style scoped>

</style>
