<template>
  <div class="col-12 row q-mt-lg q-pa-sm bg-teal-1 rounded-borders">
    <div class="col-12 text-primary">
      <h6 class="q-pa-xs q-ma-xs">Date client</h6>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        :error="clientBuletinSNHasError"
        @blur="clientBuletinSNHasError = false"
        @focus="clientBuletinSNHasError = false"
        type="text"
        :rules="[(val) => val.length === 9 || '9 caractere']"
        label="Buletin S/N"
        v-model="clientBuletinSN">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        :error="clientBuletinIDNPHasError"
        @blur="clientBuletinIDNPHasError = false"
        @focus="clientBuletinIDNPHasError = false"
        type="text"
        :rules="[(val) => val.length === 13 || '13 cifre']"
        label="Buletin IDNP"
        v-model="clientBuletinIDNP">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        :error="clientBuletinOfficeHasError"
        @blur="clientBuletinOfficeHasError = false"
        @focus="clientBuletinOfficeHasError = false"
        type="text"
        label="Buletin Eliberat de"
        v-model="clientBuletinOffice">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        :error="clientBuletinDateTillHasError"
        @blur="clientBuletinDateTillHasError = false"
        @focus="clientBuletinDateTillHasError = false"
        type="text"
        mask="##.##.####"
        label="Data eliberării"
        v-model="clientBuletinDateTill">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        :error="clientFirstNameHasError"
        @blur="clientFirstNameHasError = false"
        @focus="clientFirstNameHasError = false"
        type="text"
        label="Nume"
        v-model="clientFirstName">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        :error="clientLastNameHasError"
        @blur="clientLastNameHasError = false"
        @focus="clientLastNameHasError = false"
        type="text"
        label="Prenume"
        v-model="clientLastName">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        :error="clientPhoneHasError"
        @blur="clientPhoneHasError = false"
        @focus="clientPhoneHasError = false"
        type="text"
        label="Telefon"
        v-model="clientPhone">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        :error="clientEmailHasError"
        @blur="clientEmailHasError = false"
        @focus="clientEmailHasError = false"
        type="email"
        label="Email"
        v-model="clientEmail">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        :error="clientBirthDateHasError"
        @blur="clientBirthDateHasError = false"
        @focus="clientBirthDateHasError = false"
        type="text"
        mask="##.##.####"
        label="Data de naștere"
        v-model="clientBirthDate">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        :error="clientRegionHasError"
        @blur="clientRegionHasError = false"
        @focus="clientRegionHasError = false"
        type="text"
        label="Raion"
        v-model="clientRegion">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        :error="clientLocalitateHasError"
        @blur="clientLocalitateHasError = false"
        @focus="clientLocalitateHasError = false"
        type="text"
        label="Localitate"
        v-model="clientLocalitate">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        type="text"
        label="Strada"
        v-model="clientStreet">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        type="text"
        label="Bloc"
        v-model="clientHouse">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        type="text"
        label="Apartament"
        v-model="clientFlat">
      </q-input>
    </div>
    <div class="col-12 text-primary">Persoana de contact 1</div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        type="text"
        label="Nume"
        v-model="clientFirstNameContPers1">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        type="text"
        label="Prenume"
        v-model="clientLastNameContPers1">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        type="text"
        label="Telefon"
        v-model="clientPhoneContPers1">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        type="text"
        label="Cine este"
        v-model="clientWhoIsContPers1">
      </q-input>
    </div>
    <div class="col-12 text-primary">Persoana de contact 2</div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        type="text"
        label="Nume"
        v-model="clientFirstNameContPers2">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        type="text"
        label="Prenume"
        v-model="clientLastNameContPers2">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        type="text"
        label="Telefon"
        v-model="clientPhoneContPers2">
      </q-input>
    </div>
    <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        type="text"
        label="Cine este"
        v-model="clientWhoIsContPers2">
      </q-input>
    </div>

    <div class="col-12 text-primary">Produsul sau serviciul comercializat</div>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
      <q-input
        dense
        outlined
        :disable="disableClientInputs"
        class="client-input" bg-color="white"
        type="text"
        label=""
        v-model="clientProdus">
      </q-input>
    </div>
    <div class="col-12 text-right q-my-sm">
      <q-btn color="teal-7"
             icon="save"
             v-if="!disableClientInputs"
             label="Salvează datele clientului"
             @click="saveClientData"></q-btn>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';
import {
  BID_STATUS_SIGNED_CONTRACT,
  dateToDot,
  hideLoading,
  showLoading,
  showNotify,
} from 'src/helpers';
import { useStore } from 'vuex';
import { api } from 'boot/axios';
import { useQuasar } from 'quasar';

export default {
  name: 'BidClientForm',
  props: {},

  setup() {
    const $q = useQuasar();
    const $store = useStore();
    const id = ref(0);
    const statusId = ref(null);
    const bidData = ref({});
    const clientFirstName = ref('');
    const clientFirstNameHasError = ref(false);
    const clientLastName = ref('');
    const clientLastNameHasError = ref(false);
    const clientPhone = ref('');
    const clientPhoneHasError = ref(false);
    const clientEmail = ref('');
    const clientEmailHasError = ref(false);
    const clientBuletinSN = ref('');
    const clientBuletinSNHasError = ref(false);
    const clientBuletinIDNP = ref('');
    const clientBuletinIDNPHasError = ref(false);
    const clientBuletinOffice = ref('');
    const clientBuletinOfficeHasError = ref(false);
    const clientBuletinDateTill = ref('');
    const clientBuletinDateTillHasError = ref(false);
    const clientBirthDate = ref('');
    const clientBirthDateHasError = ref(false);
    const clientRegion = ref('');
    const clientRegionHasError = ref(false);
    const clientLocalitate = ref('');
    const clientLocalitateHasError = ref(false);
    const clientStreet = ref('');
    const clientHouse = ref('');
    const clientFlat = ref('');
    const clientWhoIsContPers1 = ref('');
    const clientPhoneContPers1 = ref('');
    const clientLastNameContPers1 = ref('');
    const clientFirstNameContPers1 = ref('');
    const clientProdus = ref('');
    const clientWhoIsContPers2 = ref('');
    const clientPhoneContPers2 = ref('');
    const clientLastNameContPers2 = ref('');
    const clientFirstNameContPers2 = ref('');
    const disableClientInputs = ref(false);

    const saveClientData = () => {
      $q.dialog({
        title: 'Atenție',
        message: 'Sunteți sigur că doriți să salvați datele clientului?',
        cancel: 'Închide',
        ok: {
          flat: false,
          label: 'Da, sunt sigur',
        },
        persistent: true,
      }).onOk(() => {
        if (id.value) {
          showLoading();
          api.post(`/bid-save-client-data/${id.value}`, {
            first_name: clientFirstName.value,
            last_name: clientLastName.value,
            phone1: clientPhone.value,
            email: clientEmail.value,
            buletin_sn: clientBuletinSN.value,
            buletin_idnp: clientBuletinIDNP.value,
            buletin_office: clientBuletinOffice.value,
            buletin_date_till: clientBuletinDateTill.value,
            birth_date: clientBirthDate.value,
            region: clientRegion.value,
            localitate: clientLocalitate.value,
            street: clientStreet.value,
            house: clientHouse.value,
            flat: clientFlat.value,
            who_is_cont_pers1: clientWhoIsContPers1.value,
            phone_cont_pers1: clientPhoneContPers1.value,
            last_name_cont_pers1: clientLastNameContPers1.value,
            first_name_cont_pers1: clientFirstNameContPers1.value,
            who_is_cont_pers2: clientWhoIsContPers2.value,
            produs: clientProdus.value,
            phone_cont_pers2: clientPhoneContPers2.value,
            last_name_cont_pers2: clientLastNameContPers2.value,
            first_name_cont_pers2: clientFirstNameContPers2.value,
          }).then((response) => {
            hideLoading();
            if (response.data.success) {
              $store.commit('bids/updateOpenedBidData', response.data.data);
            } else {
              showNotify({ message: response.data.data.message });
            }
          }).catch((error) => {
            hideLoading();
            showNotify({}, error);
          });
        } else {
          showNotify({ message: 'eroare de id cerere' });
        }
      });
    };

    watchEffect(() => {
      bidData.value = $store.getters['bids/getOpenedBidData'];
    });

    watchEffect(() => {
      if (bidData.value && bidData.value.id) {
        id.value = bidData.value.id ? bidData.value.id : 0;
        statusId.value = bidData.value.status_id ? parseInt(bidData.value.status_id, 10) : 0;
        if (statusId.value === BID_STATUS_SIGNED_CONTRACT) {
          disableClientInputs.value = true;
        }
        clientFirstName.value = bidData.value.first_name;
        clientLastName.value = bidData.value.last_name;
        clientPhone.value = bidData.value.phone1;
        clientEmail.value = bidData.value.email;
        clientBuletinSN.value = bidData.value.buletin_sn;
        clientBuletinIDNP.value = bidData.value.buletin_idnp;
        clientBuletinOffice.value = bidData.value.buletin_office;
        clientBuletinDateTill.value = dateToDot(bidData.value.buletin_date_till);
        clientBirthDate.value = dateToDot(bidData.value.birth_date);
        clientRegion.value = bidData.value.region;
        clientLocalitate.value = bidData.value.localitate;
        clientStreet.value = bidData.value.street;
        clientHouse.value = bidData.value.house;
        clientFlat.value = bidData.value.flat;
        clientWhoIsContPers1.value = bidData.value.who_is_cont_pers1;
        clientPhoneContPers1.value = bidData.value.phone_cont_pers1;
        clientLastNameContPers1.value = bidData.value.last_name_cont_pers1;
        clientFirstNameContPers1.value = bidData.value.first_name_cont_pers1;
        clientProdus.value = bidData.value.produs;
        clientWhoIsContPers2.value = bidData.value.who_is_cont_pers2;
        clientPhoneContPers2.value = bidData.value.phone_cont_pers2;
        clientLastNameContPers2.value = bidData.value.last_name_cont_pers2;
        clientFirstNameContPers2.value = bidData.value.first_name_cont_pers2;
      }
    });

    return {
      clientFirstName,
      clientFirstNameHasError,
      clientLastName,
      clientLastNameHasError,
      clientEmail,
      clientEmailHasError,
      clientPhone,
      clientPhoneHasError,
      clientBuletinSN,
      clientBuletinSNHasError,
      clientBuletinIDNP,
      clientBuletinIDNPHasError,
      clientBuletinOffice,
      clientBuletinOfficeHasError,
      clientBuletinDateTill,
      clientBuletinDateTillHasError,
      clientBirthDate,
      clientBirthDateHasError,
      clientRegion,
      clientRegionHasError,
      clientLocalitate,
      clientLocalitateHasError,
      clientStreet,
      clientHouse,
      clientFlat,
      clientWhoIsContPers1,
      clientPhoneContPers1,
      clientLastNameContPers1,
      clientFirstNameContPers1,
      clientProdus,
      clientWhoIsContPers2,
      clientPhoneContPers2,
      clientLastNameContPers2,
      clientFirstNameContPers2,
      disableClientInputs,
      saveClientData,
    };
  },
};
</script>

<style scoped>

</style>
