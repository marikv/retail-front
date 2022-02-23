<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Retail CreditBox
        </q-toolbar-title>

        <div>
          <q-item class="text-white" >
            <q-item-section avatar >
              <q-icon name="account_circle" />
            </q-item-section>

            <q-item-section>
              <q-item-label>
                {{user.name}}
              </q-item-label>
              <q-item-label caption class="text-white">
                {{getRole(user.role_id)}}
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="logout" class="cursor-pointer" color="white" @click="logout" >
                <q-tooltip>Ieșire</q-tooltip>
              </q-icon>
            </q-item-section>
          </q-item>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="authenticated && hasPermisionToLeftMenu"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item class="bg-indigo-1"
                style="border-bottom: 1px solid #dddddd;height: 51px" >
          <q-item-section avatar ></q-item-section>
          <q-item-section>
            <q-item-label>
              &nbsp;
            </q-item-label>
          </q-item-section>
        </q-item>
        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Dealers',
    // caption: 'quasar.dev',
    icon: 'store',
    link: 'dealers',
  },
  {
    title: 'Calculator',
    // caption: 'quasar.dev',
    icon: 'functions',
    link: 'calculator',
  },
  {
    title: 'Cereri',
    // caption: 'chat.quasar.dev',
    icon: 'warning_amber',
    link: 'bids',
  },
  {
    title: 'Contracte clienți',
    // caption: 'github.com/quasarframework',
    icon: 'gavel',
    link: 'contracts',
  },
  {
    title: 'Utilizatori',
    // caption: 'Lista tuturor utilizatorilor',
    icon: 'people_alt',
    link: 'users',
  },
  {
    title: 'Forum/Chat',
    // caption: 'Întrebări/răspunsuri',
    icon: 'forum',
    link: 'forum-chat',
  },
  {
    title: 'Plăți',
    // caption: '@quasarframework',
    icon: 'payments',
    link: 'payments',
  },
  {
    title: 'Rapoarte',
    // caption: '@quasarframework',
    icon: 'bar_chart',
    link: 'reports',
  },
  {
    title: 'Settings',
    // caption: '@quasarframework',
    icon: 'settings',
    link: 'settings',
  },
];

import {
  computed,
  defineComponent,
  ref,
  watchEffect,
} from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { api } from 'boot/axios';
import { getRoleName, myStorage, USER_ROLE_DEALER } from 'src/helpers';

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const $router = useRouter();
    const leftDrawerOpen = ref(false);
    const hasPermisionToLeftMenu = ref(false);
    const $store = useStore();
    const authenticated = computed(() => !!$store.getters['auth/getToken']);
    const user = computed(() => $store.getters['auth/getUser']);
    const getRole = (roleId) => getRoleName(roleId);

    watchEffect(() => {
      if (!authenticated.value) {
        const token = myStorage.get('token');
        if (token) {
          // daca facem refresh la pagina, trebuie sa raminem logati
          api.defaults.headers.common.Authorization = `Bearer ${token}`;
          api.post('/checkToken').then((response) => {
            if (response.data.success && response.data.data && response.data.data.user) {
              $store.commit('auth/updateToken', token);
              $store.commit('auth/updateUser', response.data.data.user);
            } else {
              api.defaults.headers.common.Authorization = '';
              $router.push({ path: '/auth' });
            }
          }).catch(() => {
            api.defaults.headers.common.Authorization = '';
            $router.push({ path: '/auth' });
          });
        } else {
          api.defaults.headers.common.Authorization = '';
          $router.push({ path: '/auth' });
        }
      } else {
        api.defaults.headers.common.Authorization = `Bearer ${$store.getters['auth/getToken']}`;
      }
    });
    watchEffect(() => {
      hasPermisionToLeftMenu.value = !!(user.value && user.value.role_id !== USER_ROLE_DEALER);
      if (user.value && user.value.role_id === USER_ROLE_DEALER) {
        $router.push({ path: '/calculator' });
      }
    });

    const logout = () => {
      $store.commit('auth/updateToken', '');
      $store.commit('auth/updateUser', {});
      myStorage.set('token', '');
      api.post('/logout');
    };

    return {
      authenticated,
      linksList,
      leftDrawerOpen,
      logout,
      hasPermisionToLeftMenu,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      user,
      getRole,
    };
  },
});
</script>
