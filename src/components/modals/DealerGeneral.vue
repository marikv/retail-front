<template>
  <div class="row">
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-xs">
      <avatar-upload-field
        :linkToCurrentImage="logo"
        :isFor="'dealer'"
        :id="id"></avatar-upload-field>
    </div>
    <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 row">
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
        <q-input
          outlined
          :error="nameHasError"
          @blur="nameHasError = false"
          @focus="nameHasError = false"
          v-model="name"
          label="Nume (scurt)"/>
      </div>
      <div class="col-xl-9 col-lg-9 col-md-9 col-sm-6 col-xs-12 q-pa-xs">
        <q-input
          outlined
          :error="fullNameHasError"
          @blur="fullNameHasError = false"
          @focus="fullNameHasError = false"
          v-model="fullName"
          label="Nume Juridic"/>
      </div>
      <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
        <q-input
          outlined
          :error="idnoHasError"
          @blur="idnoHasError = false"
          @focus="idnoHasError = false"
          v-model="idno"
          label="IDNO"/>
      </div>
      <div class="col-xl-9 col-lg-9 col-md-9 col-sm-6 col-xs-12 q-pa-xs">
        <q-input
          outlined
          :error="addressJurHasError"
          @blur="addressJurHasError = false"
          @focus="addressJurHasError = false"
          v-model="addressJur"
          label="Adresa"/>
      </div>
    </div>
    <div class="col-xs-12 row text-subtitle1 text-primary q-pa-xs">
      Contacte
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        :error="phone1HasError"
        @blur="phone1HasError = false"
        @focus="phone1HasError = false"
        v-model="phone1"
        label="Telefon 1"/>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        :error="phone2HasError"
        @blur="phone2HasError = false"
        @focus="phone2HasError = false"
        v-model="phone2"
        label="Telefon 2"/>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        :error="faxHasError"
        @blur="faxHasError = false"
        @focus="faxHasError = false"
        v-model="fax"
        label="Fax"/>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        :error="emailHasError"
        @blur="emailHasError = false"
        @focus="emailHasError = false"
        v-model="email"
        label="Email"/>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        v-model="website"
        label="WEB site"/>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        v-model="directorGeneral"
        label="Director (Nume Prenume)"/>
    </div>
    <div class="col-xs-12 row text-subtitle1 text-primary q-pa-xs">
      Date bancare
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 q-pa-xs">
      <q-input
        outlined
        :error="addressJurHasError"
        @blur="addressJurHasError = false"
        @focus="addressJurHasError = false"
        v-model="bankName"
        label="Nume bancă, filiala"/>
    </div>
    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        v-model="bankCb"
        label="c/b"/>
    </div>
    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        v-model="bankIban"
        label="IBAN"/>
    </div>
    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        v-model="bankSwift"
        label="SWIFT"/>
    </div>
    <div class="col-xl-1 col-lg-1 col-md-1 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        v-model="bankValuta"
        label="Valuta"/>
    </div>
    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        v-model="bankTva"
        label="Cod TVA"/>
    </div>
    <div
      v-if="id > 0"
      class="col-xs-12 row text-subtitle1 text-primary q-pa-xs">
      Contract de colaborare
    </div>
    <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        v-model="contractDate"
        label="Data"/>
    </div>
    <div
      v-if="id > 0"
      class="col-xs-12 row text-subtitle1 text-primary q-pa-xs">
      Produse
    </div>
    <div
      v-if="id > 0"
      class="col-xs-12 q-pb-lg">
      <q-select
        outlined
        v-model="dealerProducts"
        multiple
        :options="dealerProductsOptions"
        use-chips
        stack-label
        emit-value
        map-options
        option-value="id"
        option-label="name"
        label=""
      />
    </div>
    <div
      v-if="id > 0"
      class="col-xs-12 row text-subtitle1 text-primary q-pa-xs">
      Utilizatori / Login

      <q-btn color="primary"
             icon="add"
             class="q-ml-lg"
             v-if="!addUserPressed"
             @click="addUserPressed = true"
             label="Adaugă utilizator"></q-btn>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        dense
        v-if="addUserPressed"
        :error="newUserError"
        @blur="newUserError = false"
        @focus="newUserError = false"
        v-model="newUser"
        :rules="[ val => val.length >= 5 || 'Minimum 5 caractere']"
        label="Login"/>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        dense
        v-model="newPassword"
        :error="newPasswordError"
        @blur="newPasswordError = false"
        @focus="newPasswordError = false"
        v-if="addUserPressed"
        :rules="[ val => val.length >= 8 || 'Minimum 8 caractere']"
        label="Parola"/>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
      <q-btn color="positive"
             icon="save"
             v-if="addUserPressed"
             @click="addNewUser"
             label="Adaugă"></q-btn>
    </div>
    <template v-for="(user, userIndex) in allUsers"  :key="`user-${userIndex}`">
      <div class="col-xs-12 row">
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
          <q-input
            outlined
            dense
            :readonly="!allUsers[userIndex].edit"
            v-model="allUsers[userIndex].email"
            :rules="[ val => val.length >= 5 || 'Minimum 5 caractere']"
            label="Login"/>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
          <q-input
            outlined
            dense
            :readonly="!allUsers[userIndex].edit"
            :disable="!allUsers[userIndex].edit"
            v-model="allUsers[userIndex].password"
            :rules="[ val => val.length >= 8 || 'Minimum 8 caractere']"
            label="Parola"/>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
          <q-icon name="edit"
                  class="cursor-pointer q-mt-xs"
                  size="sm"
                  v-if="!allUsers[userIndex].edit"
                  @click="allUsers[userIndex].edit = !allUsers[userIndex].edit"
                  color="indigo-4"></q-icon>
          <q-btn icon="save"
                 v-else
                 label="Salvează"
                 @click="saveUser(userIndex)"
                 color="positive"></q-btn>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import {
  defineComponent, onMounted,
  ref,
  watchEffect,
} from 'vue';
import AvatarUploadField from 'components/Fields/AvatarUploadField';
import { api } from 'boot/axios';
import { useStore } from 'vuex';
import { hideLoading, showLoading, showNotify } from 'src/helpers';

export default defineComponent({

  name: 'DealerGeneral',
  components: { AvatarUploadField },
  setup() {
    const $store = useStore();
    const name = ref('');
    const nameHasError = ref(false);
    const fullName = ref('');
    const fullNameHasError = ref(false);
    const idno = ref('');
    const idnoHasError = ref(false);
    const addressJur = ref('');
    const addressJurHasError = ref(false);
    const bankName = ref('');
    const bankNameHasError = ref(false);
    const bankCb = ref('');
    const bankIban = ref('');
    const bankSwift = ref('');
    const bankValuta = ref('');
    const bankTva = ref('');
    const contractDate = ref('');
    const phone1 = ref('');
    const phone1HasError = ref(false);
    const phone2 = ref('');
    const phone2HasError = ref(false);
    const fax = ref('');
    const faxHasError = ref(false);
    const website = ref('');
    const directorGeneral = ref('');
    const email = ref('');
    const description = ref('');
    const emailHasError = ref(false);
    const id = ref(0);
    const dealerData = ref({});
    const logo = ref('');
    const newUser = ref('');
    const newUserError = ref(false);
    const newPassword = ref('');
    const newPasswordError = ref(false);
    const addUserPressed = ref(false);
    const allUsers = ref([]);
    const dealerProducts = ref([]);
    const dealerProductsOptions = ref([]);

    const loadProducts = () => {
      api.get(`/dealer-products/${id.value}`).then((response) => {
        if (response.data.success) {
          dealerProducts.value = [];
          response.data.data.DealerProducts.forEach((v) => {
            dealerProducts.value.push(v.product_id);
          });
          dealerProductsOptions.value = response.data.data.Products;
        }
      });
    };

    onMounted(() => {
      loadProducts();
    });

    const loadUsers = () => {
      if (id.value > 0) {
        api.get(`/users-get-by-dealer/${id.value}`).then((response) => {
          if (response.data.success) {
            allUsers.value = response.data.data;
          }
        }).catch(() => {});
      }
    };

    const saveUser = (userIndex) => {
      if (id.value > 0) {
        api.put(`/users-edit-user-for-dealer/${id.value}`, {
          username: allUsers.value[userIndex].email,
          password: allUsers.value[userIndex].password,
          user_id: allUsers.value[userIndex].id,
        }).then((response) => {
          if (response.data.success) {
            loadUsers();
          }
        }).catch(() => {});
      }
    };

    watchEffect(() => {
      dealerData.value = $store.getters['dealers/getOpenedDealerData'];
    });
    watchEffect(() => {
      id.value = dealerData.value.id || 0;
      name.value = dealerData.value.name || '';
      fullName.value = dealerData.value.full_name || '';
      logo.value = dealerData.value.logo || '';
      idno.value = dealerData.value.idno || '';
      addressJur.value = dealerData.value.address_jju || '';
      bankName.value = dealerData.value.bank_name || '';
      bankCb.value = dealerData.value.bank_cb || '';
      bankIban.value = dealerData.value.bank_iban || '';
      bankSwift.value = dealerData.value.bank_swift || '';
      bankValuta.value = dealerData.value.bank_valuta || '';
      bankTva.value = dealerData.value.bank_tva || '';
      contractDate.value = dealerData.value.contract_date || '';
      phone1.value = dealerData.value.phone1 || '';
      phone2.value = dealerData.value.phone2 || '';
      phone2.value = dealerData.value.phone2 || '';
      fax.value = dealerData.value.fax || '';
      website.value = dealerData.value.website || '';
      directorGeneral.value = dealerData.value.director_general || '';
      email.value = dealerData.value.email || '';
      description.value = dealerData.value.description || '';
    });
    watchEffect(() => {
      if (id.value) {
        loadUsers();
        loadProducts();
      }
    });

    const save = () => {
      if (!name.value) {
        nameHasError.value = true;
      }
      if (!fullName.value) {
        fullNameHasError.value = true;
      }
      if (!idno.value) {
        idnoHasError.value = true;
      }
      if (!phone1.value) {
        phone1HasError.value = true;
      }
      if (!nameHasError.value
        && !fullNameHasError.value
        && !idnoHasError.value
        && !phone1HasError.value
      ) {
        const data = {
          name: name.value,
          full_name: fullName.value,
          idno: idno.value,
          address_jju: addressJur.value,
          address_fiz: null,
          phone1: phone1.value,
          phone2: phone1.value,
          fax: fax.value,
          website: website.value,
          director_general: directorGeneral.value,
          email: email.value,
          description: description.value,
          bank_name: bankName.value,
          bank_cb: bankCb.value,
          bank_iban: bankIban.value,
          bank_swift: bankSwift.value,
          bank_valuta: bankValuta.value,
          bank_tva: bankTva.value,
          contract_date: contractDate.value,
          products: dealerProducts.value,
        };
        showLoading();
        const idLocal = parseInt(String(id.value), 10);
        api.post(`/dealer-add-or-edit/${idLocal}`, data).then((response) => {
          hideLoading();
          if (response.data.success) {
            if (idLocal > 0) {
              $store.commit('dealers/updateOpenedDealerData', {});
              $store.commit('dealers/updateOpenedDealerForm', false);
            } else {
              $store.commit('dealers/updateOpenedDealerData', response.data.data);
              $store.commit('dealers/updateOpenedDealerForm', true);
            }
            $store.commit('dealers/updateRefreshGrid', true);
          } else {
            showNotify({ message: 'Eroare de update' });
          }
        }).catch((error) => {
          hideLoading();
          showNotify({}, error);
        });
      }
    };
    const addNewUser = () => {
      newUserError.value = false;
      newPasswordError.value = false;
      if (newUser.value.length < 5) {
        newUserError.value = true;
      }
      if (newPassword.value.length < 8) {
        newPasswordError.value = true;
      }
      if (!newUserError.value && !newPasswordError.value) {
        showLoading();
        api.post('/users-add-new-for-dealer', {
          username: newUser.value,
          password: newPassword.value,
          dealer_id: id.value,
        }).then((response) => {
          hideLoading();
          if (response.data.success) {
            loadUsers();
            addUserPressed.value = false;
            newUser.value = '';
            newPassword.value = '';
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
      logo,
      fullName,
      idno,
      addressJur,
      nameHasError,
      fullNameHasError,
      idnoHasError,
      addressJurHasError,
      phone1,
      phone1HasError,
      phone2,
      phone2HasError,
      website,
      directorGeneral,
      fax,
      faxHasError,
      email,
      emailHasError,
      bankName,
      bankNameHasError,
      bankCb,
      bankIban,
      bankSwift,
      bankValuta,
      bankTva,
      contractDate,
      save,
      newPassword,
      newUser,
      addUserPressed,
      dealerProducts,
      dealerProductsOptions,
      addNewUser,
      newUserError,
      newPasswordError,
      allUsers,
      saveUser,
    };
  },
});
</script>

<style scoped>

</style>
