<template>
  <div style="text-align: center;">
    <q-img :src="linkToImage"
           class="rounded-borders cursor-pointer"
           @click="launchFilePicker"
           v-if="linkToImage && isFor === 'dealer'"
           style="max-width: 100%;
           max-height: 140px;
           border: 1px solid rgba(79,76,78,0.35);
           margin: auto;"
           alt="">
      <q-tooltip>Schimbă imaginea</q-tooltip>
    </q-img>
    <q-btn v-else round @click="launchFilePicker">
      <q-avatar size="140px"
                class="cursor-pointer"
                style="border: 1px solid #4f4c4e;margin: auto;" >
        <q-tooltip>Schimbă imaginea</q-tooltip>
        <img :src="linkToImage" v-if="linkToImage" alt=""/>
        <div v-else-if="isFor === 'dealer'"
             style="color: #4f4c4e;font-size: 23px;text-align: center;">
          Logo Company
        </div>
        <q-icon v-else
                color="blue-grey-5"
                style="margin: auto;"
                name="person_outline"></q-icon>
      </q-avatar>
    </q-btn>
    <input type="file"
           ref="file"
           :id="uploadFieldId"
           :name="uploadFieldName"
           @change="onFileChange($event.target.name, $event.target.files)"
           style="display:none">
  </div>
</template>

<script>
import { api } from 'boot/axios';
import {
  getMiniPhotoFromServer,
  hideLoading,
  showLoading,
  showNotify,
} from 'src/helpers';

export default {
  name: 'AvatarUploadField',
  props: {
    id: {
      type: Number,
      default: 0,
    },
    linkToCurrentImage: {
      type: String,
      default: '',
    },
    isFor: {
      type: String,
      default: 'user',
    },
  },
  data() {
    return {
      maxSize: 80480,
      errorText: '',
      uploadFieldName: 'fileForUpload',
      linkToImageUpdatedNow: '',
    };
  },
  computed: {
    uploadFieldId() {
      return `id${Math.floor(Math.random() * 100000)}`;
    },
    linkToImage() {
      let img = '';
      if (this.linkToImageUpdatedNow) {
        img = this.linkToImageUpdatedNow;
      } else if (this.linkToCurrentImage) {
        img = this.linkToCurrentImage;
      }
      if (img !== '') {
        img = getMiniPhotoFromServer(img);
        const baseUrl = String(api.defaults.baseURL);
        return `${baseUrl.replace('/api', '')}/${img}`;
      }
      return '';
    },
  },
  methods: {
    launchFilePicker() {
      if (!this.id) {
        showNotify({
          message: 'Pentru a adăuga imaginea, mai întâi trebuie să salvați',
          color: 'info',
        });
      } else {
        document.getElementById(this.uploadFieldId).click();
      }
    },
    onFileChange(fieldName, file) {
      if (!this.id) {
        showNotify({
          message: 'Pentru a adăuga imaginea, mai întâi trebuie să salvați',
          color: 'info',
        });
      } else {
        const { maxSize } = this;
        for (let ii = 0; ii < file.length; ii += 1) {
          const imageFile = file[ii];

          if (file.length > 0) {
            const size = imageFile.size / maxSize / maxSize;

            if (!imageFile.type.match('image.*')) {
              showNotify({
                message: 'Extensie inacceptabilă. (jpg, jpeg, png, bmp, gif) ',
              });
            } else if (size > 1) {
              showNotify({
                message: `Fișierul este prea mare! Alegeți un fișier mai mic ${this.maxSize / 1024}Мб`,
              });
            } else {
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
                    this.file_id = response.data.data.id;
                    this.file_web_path = response.data.data.web_path;
                    this.linkToImageUpdatedNow = response.data.data.web_path;
                    const postData = {
                      file_id: response.data.data.id,
                      makeAvatar: 1,
                    };
                    if (this.isFor === 'dealer') {
                      postData.dealer_id = this.id;
                    } else {
                      postData.user_id = this.id;
                    }
                    api.post('/files/linkFileTo', postData);
                  } else {
                    showNotify({
                      message: 'Eroare de încărcare a fișierului pe server',
                    });
                  }
                })
                .catch(() => {
                  hideLoading();
                  showNotify({
                    message: 'Eroare de încărcare a fișierului pe server',
                  });
                });
            }
          }
        }
      }
    },
  },
};
</script>

<style scoped>

</style>
