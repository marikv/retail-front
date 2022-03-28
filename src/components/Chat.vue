<template>
  <div class="col-12 row flex column relative-position"
       style="min-height: calc(100vh - 200px);max-height: calc(100vh - 200px);">
    <q-scroll-area
      visible
      ref="scrollAreaRef"
      @scroll="scrollHandlerArea"
      style="min-height: calc(100vh - 250px);
      max-height: calc(100vh - 250px);
      height: calc(100vh - 250px);">
      <div
        v-if="chatMessagesLoad"
        class="q-pa-md column col-12 text-center justify-center">
        <q-circular-progress
          indeterminate
          size="50px"
          color="primary"
          class="q-mx-auto q-my-auto"
        />
      </div>
      <div class="q-pa-md column col justify-end"
           id="chatArea"
           style=""
           :class="{'invisible': false}">
        <q-chat-message
          :key="key"
          v-for="(message, key) in messages"
          :text="[message.message]"
          :sent="message.from_user_id === currentUser.id"
          :name="getChatMessageUser(message)"
          name-html
          :text-html="!!message.file_id"
          :stamp="message.created_at2"
          :bg-color="message.from_user_id === currentUser.id ? 'green-2'
           : `${message.read ? 'indigo-2' : 'indigo-3'}`"
        >
          <template v-slot:avatar>
            <img
              :src="getAvatar(message.from_user_avatar)"
              :class="`q-message-avatar
               q-message-avatar--${message.from_user_id === currentUser.id ? 'sent': 'received'}`"
              v-if="getAvatar(message.from_user_avatar)" alt=""/>
            <div v-else
                 :class="`q-message-avatar
               q-message-avatar--${message.from_user_id === currentUser.id ? 'sent': 'received'}`"
                 :style="`color: ${getColorForLogo(message.from_user_name)}`">
              {{getInitialsForLogo(message.from_user_name)}}
            </div>
          </template>
        </q-chat-message>
      </div>
    </q-scroll-area>
    <q-toolbar
      class=""
      style="position: absolute;bottom: 0;">
      <div class="full-width flex no-wrap items-end">
        <q-input
          ref="newMessageRef"
          bg-color="green-2"
          rounded
          v-model="newMessage"
          placeholder="Message"
          class="full-width"
          dense
          outlined
          type="textarea"
          autogrow>
          <template v-slot:before>
            <q-btn flat
                   round
                   color="primary"
                   class="q-mt-sm"
                   @click="launchFilePicker()"
                   icon="attach_file">
              <q-tooltip>Adaugă fișier</q-tooltip>
            </q-btn>
          </template>
          <template v-slot:after>
            <q-btn round dense
                   color="primary"
                   flat
                   @click="sendMessage"
                   icon="send" >
              <q-tooltip>Trimite</q-tooltip>
            </q-btn>
          </template>
        </q-input>
      </div>
    </q-toolbar>
    <input type="file"
           ref="file"
           multiple
           :id="uploadFieldId"
           :name="uploadFieldName"
           @change="onFileChange($event.target.name, $event.target.files)"
           style="display:none">
  </div>
</template>

<script>
import {
  computed,
  onMounted,
  onUnmounted,
  ref,
} from 'vue';
import { useStore } from 'vuex';
import { api } from 'boot/axios';
import {
  baseURL,
  generateColorFromString,
  getInitials,
  getMiniPhotoFromServer,
  hideLoading,
  showLoading,
  showNotify,
} from 'src/helpers';

export default {
  name: 'Chat',
  props: {
    bid_id: {
      type: Number,
      default: null,
    },
  },

  setup(props) {
    const $store = useStore();
    const messages = ref([]);
    const userDetails = ref({});
    const otherUserDetails = ref({});
    const scrollVerticalPercentage = ref(0);
    const scrollAreaRef = ref(null);
    const chatMessagesLoad = ref(false);
    const uploadFieldId = ref(null);
    const uploadFieldName = ref('fileForUpload');
    const maxSize = ref(40480);
    const newMessage = ref('');
    const currentUser = computed(() => $store.getters['auth/getUser']);
    const scrollDown = () => {
      scrollAreaRef.value.setScrollPosition('vertical', 999999999, 1000);
    };

    const getAvatar = (avatar) => {
      if (avatar) {
        const img = getMiniPhotoFromServer(avatar);
        let $return = `${baseURL.replace('/api', '')}/${img}`;
        $return = $return.replace('//uploads', '/uploads');
        return $return;
      }
      return '';
    };
    const getInitialsForLogo = (str) => getInitials(str);
    const getColorForLogo = (str) => generateColorFromString(str);

    const getThumbFile = (message) => {
      let linkToBig = `${baseURL.replace('/api', '')}/${message.file_web_path}`;
      linkToBig = linkToBig.replace('//uploads', '/uploads');
      let html = `<a href="${linkToBig}" target="_blank"><img src="`;

      let img = getMiniPhotoFromServer(message.file_web_path);
      if (message.file_extension) {
        const extension = message.file_extension;
        if (extension.toLowerCase() === 'jpg' || extension.toLowerCase() === 'jpeg'
          || extension.toLowerCase() === 'gif' || extension.toLowerCase() === 'png'
          || extension.toLowerCase() === 'bmp'
        ) {
          img = getMiniPhotoFromServer(message.file_web_path);
        } else if (extension.toLowerCase() === 'pdf') {
          img = 'img/file-pdf.jpg';
        } else if (extension.toLowerCase() === 'doc' || extension.toLowerCase() === 'docx') {
          img = 'img/file-doc.jpg';
        } else if (extension.toLowerCase() === 'xls'
          || extension.toLowerCase() === 'xlsx'
          || extension.toLowerCase() === 'csv'
        ) {
          img = 'img/file-xls.jpg';
        } else if (extension.toLowerCase() === 'txt') {
          img = 'img/file-txt.jpg';
        } else if (extension.toLowerCase() === 'rar') {
          img = 'img/file-rar.jpg';
        } else if (extension.toLowerCase() === 'zip') {
          img = 'img/file-zip.jpg';
        } else {
          img = 'img/file-other.jpg';
        }
      }

      img = img.replace('//img/', '/img/');
      let link = `${baseURL.replace('/api', '')}/${img}`;
      link = link.replace('//uploads/', '/uploads/');
      link = link.replace('//img/', '/img/');
      html += link;
      html += '"/></a><br>';
      html += message.file_name;
      return html;
    };
    const getMessages = (scrollDownLocal, page = 1, showLoadingLocal) => {
      if (showLoadingLocal) {
        chatMessagesLoad.value = true;
      }
      api.post('/get-chat-messages', {
        bid_id: props.bid_id,
        rowsPerPage: 300,
        page,
      }).then((response) => {
        if (showLoadingLocal) {
          chatMessagesLoad.value = false;
        }
        messages.value = response.data.data.data.reverse();
        let hasUnreadMessages = false;
        if (messages.value && messages.value.length) {
          messages.value.forEach((message, i) => {
            if (message.file_id && message.file_web_path) {
              messages.value[i].message = getThumbFile(message);
            }
            if (!message.read) {
              hasUnreadMessages = true;
            }
          });
        }
        if (scrollDownLocal || (scrollVerticalPercentage.value >= 0.5 && hasUnreadMessages)) {
          scrollDown();
        }
      }).catch((error) => {
        if (showLoadingLocal) {
          chatMessagesLoad.value = false;
          showNotify({}, error);
        }
      });
    };

    const sendMessage = () => {
      messages.value.push({
        message: newMessage.value,
        from_user_id: currentUser.value.id,
        from_user_avatar: currentUser.value.avatar,
        from_user_name: currentUser.value.name,
      });
      scrollDown();
      api.post('/send-chat-message', {
        bid_id: props.bid_id,
        message: newMessage.value,
      }).then((response) => {
        if (response.data.success) {
          getMessages(false, 1, false);
          newMessage.value = '';
        } else {
          showNotify({ message: 'eroare de server' });
        }
      }).catch((error) => {
        showNotify({}, error);
      });
    };

    let intervalMess = null;
    onMounted(() => {
      uploadFieldId.value = `id${Math.floor(Math.random() * 100000)}`;
      getMessages(true, 1, true);
      intervalMess = setInterval(() => {
        getMessages(false, 1, false);
      }, 14000);
    });
    onUnmounted(() => {
      clearInterval(intervalMess);
    });

    const scrollHandlerArea = (scrollData) => {
      scrollVerticalPercentage.value = scrollData.verticalPercentage;
    };

    const getChatMessageUser = (message) => {
      let className = message.read ? 'text-blue-grey-3' : 'text-subtitle2';
      if (message.from_user_id === currentUser.value.id) {
        className = 'text-blue-grey-3';
      }
      return `<span class='${className}'>${message.from_user_name}</span>`;
    };
    const launchFilePicker = () => {
      document.getElementById(uploadFieldId.value).click();
    };
    const onFileChange = (fieldName, file) => {
      for (let ii = 0; ii < file.length; ii += 1) {
        const imageFile = file[ii];

        if (file.length > 0) {
          const size = imageFile.size / maxSize.value / maxSize.value;

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
              message: `Fișierul este prea mare! Alegeți un fișier mai mic ${maxSize.value / 1024}Мб`,
            });
          } else {
            const linkFileToObj = {
              client_id: props.client_id || null,
              user_id: props.user_id || null,
              dealer_id: props.dealer_id || null,
              bid_id: props.bid_id || null,
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
                    add_to_chat: true,
                  })
                    .then(() => {
                      getMessages(true, 1, false);
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
    };
    return {
      messages,
      userDetails,
      otherUserDetails,
      newMessage,
      sendMessage,
      currentUser,
      scrollAreaRef,
      getChatMessageUser,
      getAvatar,
      getInitialsForLogo,
      getColorForLogo,
      chatMessagesLoad,
      launchFilePicker,
      uploadFieldId,
      uploadFieldName,
      onFileChange,
      scrollHandlerArea,
    };
  },
};
</script>

<style scoped>

</style>
