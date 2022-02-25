<template>
  <q-page class="flex flex-center">
    <q-card class="full-width" style="max-width: 500px">
      <q-card-section class="q-pb-none">
        <q-input v-model="email"
                 outlined
                 @keyup.enter="login"
                 :error-message="emailError"
                 :error="emailError.length > 0"
                 label="Nume utilizator"
                 type="text"
                 class="q-ma-lg"></q-input>
        <q-input v-model="password"
                 outlined
                 @keyup.enter="login"
                 :error-message="passwordError"
                 :error="passwordError.length > 0"
                 label="Parola"
                 type="password"
                 class="q-ma-lg"></q-input>
      </q-card-section>
      <q-card-section class="text-right q-pt-none">
        <q-btn color="primary"
               icon="login"
               size="lg"
               label="Login"
               class="q-ma-lg"
               @click="login" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import {
  defineComponent,
  ref,
  watchEffect,
} from 'vue';
import { useStore } from 'vuex';
import { api } from 'boot/axios';
import {
  hideLoading,
  myStorage,
  showLoading,
  showNotify, USER_ROLE_DEALER, USER_ROLE_EXECUTOR,
} from 'src/helpers';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'PageAuth',
  setup() {
    const $store = useStore();
    const email = ref('');
    const password = ref('');
    const emailError = ref('');
    const passwordError = ref('');
    const $router = useRouter();

    $store.commit('auth/updateActiveModule', 'Auth');
    watchEffect(() => {
      if (email.value) {
        emailError.value = '';
      }
      if (password.value) {
        passwordError.value = '';
      }
    });

    const login = () => {
      emailError.value = '';
      passwordError.value = '';

      if (email.value.length === 0) {
        emailError.value += 'Numele utilizatorului nu poate fi gol';
      }

      if (password.value.length < 8) {
        passwordError.value = 'Parola nu poate fi mai mică de 8 caractere';
      }

      if (emailError.value === '' && passwordError.value === '') {
        showLoading();

        api.post('/login', { email: email.value, password: password.value })
          .then((response) => {
            hideLoading();
            if (response.data.success) {
              myStorage.set('token', response.data.data.token);
              api.defaults.headers.common.Authorization = `Bearer ${response.data.data.token}`;
              $store.commit('auth/updateToken', response.data.data.token);
              $store.commit('auth/updateUser', response.data.data.user);
              if (response.data.data.user.role_id === USER_ROLE_DEALER) {
                $router.push({ path: '/calculator' });
              } else if (response.data.data.user.role_id === USER_ROLE_EXECUTOR) {
                $router.push({ path: '/bids' });
              } else {
                $router.push({ path: '/' });
              }
            } else {
              showNotify({
                message: response.data.data.message,
              });
            }
          }).catch((error) => {
            hideLoading();
            showNotify({}, error);
          });
      }
    };

    return {
      login,
      email,
      password,
      emailError,
      passwordError,
    };
  },
});
</script>
