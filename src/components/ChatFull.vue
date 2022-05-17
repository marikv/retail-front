<template>
  <div class="row">
    <q-list class="full-width"
            v-if="!openedChat"
            bordered separator>
      <q-item v-for="(chatItem, chatListIndex) in chatsList"
              :key="`chatListIndex${chatListIndex}`"
              clickable
              @click="openChat(chatItem)"
              v-ripple>
        <q-item-section avatar>
          <q-avatar
            class="cursor-pointer"
            style="border: 1px solid #dddddd;">
            <template v-if="chatItem.role_id !== undefined">
              <q-img :src="getAvatar(chatItem.avatar)"
                     v-if="getAvatar(chatItem.avatar)" alt=""></q-img>
              <div v-else
                   :style="`color: ${getColorForLogo(chatItem.name)}`">
                {{getInitialsForLogo(chatItem.name)}}
              </div>
            </template>
            <q-icon v-else name="gavel"></q-icon>
          </q-avatar>
        </q-item-section>
        <q-item-section>
          <q-item-label>
          <span v-if="chatItem.role_id !== undefined">
            {{chatItem.name}}
            <span class="text-grey">{{getRoleName(chatItem)}}</span>
          </span>
          <span v-else>Cerere №{{chatItem.id}}</span>
          </q-item-label>
          <q-item-label v-if="chatItem.lastMessage && chatItem.lastMessage.message" caption>
            {{chatItem.lastMessage.message.substr(0, 100)}}...
          </q-item-label>
        </q-item-section>
        <q-item-section
          side
          class="text-red"
          v-if="chatItem.newMessages">
          <q-badge color="negative"
                   text-color="white"
                   :label="chatItem.newMessages" />
        </q-item-section>
      </q-item>
    </q-list>
    <div v-else class="full-width">
      <q-list class="full-width"
              bordered separator>
        <q-item clickable
                @click="openChat(null)"
                v-ripple>
          <q-item-section avatar>
            <q-icon name="arrow_back_ios"></q-icon>
          </q-item-section>
          <q-item-section avatar>
            <q-avatar
              class="cursor-pointer"
              style="border: 1px solid #dddddd;">
              <template v-if="openedChat.role_id !== undefined">
                <q-img :src="getAvatar(openedChat.avatar)"
                       v-if="getAvatar(openedChat.avatar)" alt=""></q-img>
                <div v-else
                     :style="`color: ${getColorForLogo(openedChat.name)}`">
                  {{getInitialsForLogo(openedChat.name)}}
                </div>
              </template>
              <q-icon v-else name="gavel"></q-icon>
            </q-avatar>
          </q-item-section>
          <q-item-section>
            <q-item-label>
          <span v-if="openedChat.role_id !== undefined">
            {{openedChat.name}}
            <span class="text-grey">{{getRoleName(openedChat)}}</span>
          </span>
              <span v-else>Cerere №{{openedChat.id}}</span>
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <chat :bid_id="openedChatBidId" :user_id="openedChatUserId"></chat>
    </div>
  </div>
</template>

<script>
import { api } from 'boot/axios';
import { ref, watchEffect } from 'vue';
import { generateColorFromString, getInitials, getMiniPhotoFromServer } from 'src/helpers';
import config from 'src/config';
import Chat from 'components/Chat';
import { useStore } from 'vuex';

export default {
  name: 'ChatFull',
  components: { Chat },
  setup() {
    const $store = useStore();
    const chatsList = ref(null);
    const openedChat = ref(null);
    const openedChatBidId = ref(null);
    const openedChatUserId = ref(null);
    const getAvatar = (avatar) => {
      if (avatar) {
        const img = getMiniPhotoFromServer(avatar);
        const baseUrl = String(api.defaults.baseURL);
        return `${baseUrl.replace('/api', '')}/${img}`;
      }
      return '';
    };
    watchEffect(() => {
      openedChatBidId.value = null;
      openedChatUserId.value = null;
      if (openedChat.value && openedChat.value.role_id !== undefined) {
        openedChatUserId.value = openedChat.value.id;
      } else if (openedChat.value && openedChat.value.status_id !== undefined) {
        openedChatBidId.value = openedChat.value.id;
      }
    });
    const getInitialsForLogo = (str) => getInitials(str);
    const getColorForLogo = (str) => generateColorFromString(str);
    const getRoleName = (chatItem) => {
      if (chatItem.role_id) {
        return (chatItem && config.USER_ROLES[parseInt(chatItem.role_id, 10)]
          ? config.USER_ROLES[parseInt(chatItem.role_id, 10)] : config.USER_ROLES[1]);
      }
      return '';
    };
    const openChat = (chatItem) => {
      openedChat.value = chatItem;
    };
    const loadChats = () => {
      api.post('/chat-get-full-list').then((response) => {
        if (response.data.success) {
          chatsList.value = response.data.data;
          chatsList.value
            .sort((a, b) => (a.sortDate > b.sortDate ? -1 : ((b.sortDate > a.sortDate) ? 1 : 0)));
        }
      });
    };
    loadChats();

    watchEffect(() => {
      const getCheckNewMessages = $store.getters['auth/getCheckNewMessages'];
      if (chatsList.value) {
        chatsList.value.forEach((chatItemLocal, i) => {
          chatsList.value[i].newMessages = 0;
        });
      }
      if (getCheckNewMessages && getCheckNewMessages.unreadMessages) {
        getCheckNewMessages.unreadMessages.forEach((message) => {
          if (message.bid_id && chatsList.value) {
            chatsList.value.forEach((chatItemLocal, i) => {
              if (chatItemLocal.status_id !== undefined
                && chatItemLocal.id === message.bid_id
              ) {
                if (chatsList.value[i].newMessages === undefined) {
                  chatsList.value[i].newMessages = 0;
                }
                chatsList.value[i].newMessages += 1;
              }
            });
          }
          if (message.from_user_id && chatsList.value) {
            chatsList.value.forEach((chatItemLocal, i) => {
              if (chatItemLocal.status_id === undefined
                && chatItemLocal.id === message.from_user_id
              ) {
                if (chatsList.value[i].newMessages === undefined) {
                  chatsList.value[i].newMessages = 0;
                }
                chatsList.value[i].newMessages += 1;
              }
            });
          }
        });
      }
    });

    return {
      chatsList,
      openedChat,
      openChat,
      openedChatBidId,
      openedChatUserId,
      loadChats,
      getAvatar,
      getColorForLogo,
      getInitialsForLogo,
      getRoleName,
    };
  },
};
</script>

<style scoped>

</style>
