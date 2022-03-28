<template>
  <div>
    <input type="file"
           ref="file"
           multiple
           v-if="showJustFileInput"
           :id="uploadFieldId"
           :name="uploadFieldName"
           @change="onFileChange($event.target.name, $event.target.files)"
           value="Alege fișierul"
           style="font-size: 18px; padding: 25px; background: #5ddcc6;"
    >
    <template v-else
    >
      <input type="file"
             ref="file"
             multiple
             :id="uploadFieldId"
             :name="uploadFieldName"
             @change="onFileChange($event.target.name, $event.target.files)"
             style="display:none">
      <div
        v-if="hasButtonSlot"
        @click="launchFilePicker()"
      >
        <slot name="button"></slot>
      </div>
      <q-card
        @click="launchFilePicker()"
        v-else
        class="files-card bg-primary text-white cursor-pointer"
      >
        <div class="files-card__overlay"></div>
        <q-card-section class="text-center"  style="height: 100px;">
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
    </template>

  </div>
</template>

<script>
import { hideLoading, showLoading, showNotify } from 'src/helpers';
import { api } from 'boot/axios';

export default {
  name: 'FileUpload',
  props: {
    module: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: 0,
    },
    typeId: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      errorText: '',
      uploadFieldName: 'fileForUpload',
      maxSize: 20480,
    };
  },
  emits: ['onUploaded'],
  computed: {
    hasButtonSlot() {
      return !!this.$slots.button;
    },
    uploadFieldId() {
      return `id${Math.floor(Math.random() * 100000)}`;
    },
    showJustFileInput() {
      return this.$q.platform.is.ios;
    },
  },
  methods: {
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
              client_id: this.module === 'client_id' ? this.id : null,
              user_id: this.module === 'user_id' ? this.id : null,
              dealer_id: this.module === 'dealer_id' ? this.id : null,
              bid_id: this.module === 'bid_id' ? this.id : null,
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
                  const linkFileToData = {
                    ...linkFileToObj,
                    file_id: response.data.data.id,
                    type_id: this.typeId,
                  };
                  api.post('/files/linkFileTo', linkFileToData)
                    .then((response2) => {
                      this.$emit('onUploaded', {
                        response2,
                        response,
                        linkFileToData,
                      });
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
};
</script>
