<template>
  <div class="row">
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-xs">
      <avatar-upload-field
        :linkToCurrentImage="avatar"
        :isFor="'user'"
        :id="id"></avatar-upload-field>
    </div>
    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 row">
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
        <q-input
          outlined
          :error="nameHasError"
          @blur="nameHasError = false"
          @focus="nameHasError = false"
          v-model="name"
          label="Nume Prenume"/>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
        <q-input
          outlined
          :error="phone1HasError"
          @blur="phone1HasError = false"
          @focus="phone1HasError = false"
          v-model="phone1"
          label="Telefon 1"/>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
        <q-input
          outlined
          :error="emailHasError"
          @blur="emailHasError = false"
          @focus="emailHasError = false"
          v-model="email"
          label="Login/email"/>
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
        <q-input
          outlined
          :rules="passwordRule"
          :error="passwordHasError"
          @blur="passwordHasError = false"
          @focus="passwordHasError = false"
          v-model="password"
          label="Parola"/>
      </div>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-xs">
      <q-select outlined
                v-model="roleId"
                :options="roleOptions"
                emit-value
                map-options
                option-value="value"
                option-label="label"
                label="Rol" />
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  watchEffect,
} from 'vue';
import AvatarUploadField from 'components/Fields/AvatarUploadField';
import { api } from 'boot/axios';
import { useStore } from 'vuex';
import { hideLoading, showLoading, showNotify } from 'src/helpers';
import config from 'src/config';

export default defineComponent({

  name: 'UserGeneral',
  components: { AvatarUploadField },
  setup() {
    const $store = useStore();
    const name = ref('');
    const nameHasError = ref(false);
    const fullNameHasError = ref(false);
    const idnoHasError = ref(false);
    const phone1 = ref('');
    const phone1HasError = ref(false);
    const password = ref('');
    const passwordHasError = ref(false);
    const email = ref('');
    const roleId = ref('');
    const description = ref('');
    const emailHasError = ref(false);
    const id = ref(0);
    const userData = ref({});
    const avatar = ref('');
    const roleOptions = ref([]);
    const passwordRule = ref([]);

    Object.keys(config.USER_ROLES).forEach((k) => {
      roleOptions.value.push({
        label: config.USER_ROLES[k],
        value: String(k),
      });
    });

    watchEffect(() => {
      userData.value = $store.getters['users/getOpenedUserData'];
    });
    watchEffect(() => {
      if (password.value.length > 0) {
        passwordRule.value = [(val) => val.length >= 8 || 'Minimum 8 caractere'];
      } else {
        passwordRule.value = [];
      }
    });
    watchEffect(() => {
      id.value = userData.value.id || 0;
      name.value = userData.value.name || '';
      avatar.value = userData.value.avatar || '';
      phone1.value = userData.value.phone1 || '';
      password.value = userData.value.password || '';
      email.value = userData.value.email || '';
      description.value = userData.value.description || '';
      roleId.value = userData.value.role_id ? String(userData.value.role_id) : '2';
    });

    const save = () => {
      if (!name.value) {
        nameHasError.value = true;
      }
      if (!phone1.value) {
        phone1HasError.value = true;
      }
      passwordHasError.value = !id.value && password.value.length < 8;
      if (!nameHasError.value
        && !fullNameHasError.value
        && !idnoHasError.value
        && !phone1HasError.value
        && !passwordHasError.value
      ) {
        const data = {
          name: name.value,
          phone1: phone1.value,
          password: password.value,
          email: email.value,
          description: description.value,
          role_id: roleId.value,
        };
        showLoading();
        const idLocal = parseInt(String(id.value), 10);
        api.post(`/user-add-or-edit/${idLocal}`, data).then((response) => {
          hideLoading();
          if (response.data.success) {
            if (idLocal > 0) {
              $store.commit('users/updateOpenedUserData', {});
              $store.commit('users/updateOpenedUserForm', false);
            } else {
              $store.commit('users/updateOpenedUserData', response.data.data);
              $store.commit('users/updateOpenedUserForm', true);
            }
            $store.commit('users/updateRefreshGrid', true);
            passwordRule.value = [];
          } else {
            showNotify({ message: 'Eroare de update' });
          }
        }).catch((error) => {
          hideLoading();
          showNotify({}, error);
        });
      }
    };

    return {
      id,
      name,
      avatar,
      nameHasError,
      phone1,
      phone1HasError,
      password,
      passwordHasError,
      email,
      emailHasError,
      roleId,
      roleOptions,
      save,
      passwordRule,
    };
  },
});
</script>

<style scoped>

</style>
