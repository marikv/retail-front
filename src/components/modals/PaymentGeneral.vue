<template>
  <div class="row">
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        readonly
        v-model="clientName"
        label="Nume Prenume client"/>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        readonly
        v-model="phone1"
        label="Telefon 1"/>
    </div>
    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
      <q-input
        outlined
        readonly
        v-model="dealerName"
        label="Dealer">
        <template v-slot:prepend>
          <q-avatar
            style="border: 1px solid #dddddd;">
            <q-img :src="getAvatar(logo)"
                   v-if="getAvatar(logo)" alt=""></q-img>
            <div v-else
                 :style="`color: ${getColorForLogo(dealerName)}`">
              {{getInitialsForLogo(dealerName)}}
            </div>
          </q-avatar>
        </template>
      </q-input>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        readonly
        v-model="paymentSum"
        label="Suma rată"/>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        readonly
        v-model="paymentSumFact"
        label="Suma facto"/>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        readonly
        v-model="dateTime"
        label="Data așteptată"/>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 q-pa-xs">
      <q-input
        outlined
        readonly
        v-model="dateTimeFact"
        label="Data facto"/>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  watchEffect,
} from 'vue';
import { api } from 'boot/axios';
import { useStore } from 'vuex';
import {
  dateTimeToDot, dateToDot,
  generateColorFromString,
  getInitials,
  getMiniPhotoFromServer,
  hideLoading,
  showLoading,
  showNotify,
} from 'src/helpers';

export default defineComponent({

  name: 'PaymentGeneral',
  components: {},
  setup() {
    const $store = useStore();
    const clientName = ref('');
    const dealerName = ref('');
    const phone1 = ref('');
    const description = ref('');
    const id = ref(0);
    const paymentData = ref({});
    const logo = ref('');
    const paymentSum = ref(0);
    const paymentSumFact = ref(null);
    const dateTime = ref(null);
    const dateTimeFact = ref(null);
    const getAvatar = (avatar) => {
      if (avatar) {
        const img = getMiniPhotoFromServer(avatar);
        const baseUrl = String(api.defaults.baseURL);
        return `${baseUrl.replace('/api', '')}/${img}`;
      }
      return '';
    };
    const getInitialsForLogo = (str) => getInitials(str);
    const getColorForLogo = (str) => generateColorFromString(str);

    watchEffect(() => {
      paymentData.value = $store.getters['payments/getOpenedPaymentData'];
    });
    watchEffect(() => {
      id.value = paymentData.value.id || 0;
      clientName.value = paymentData.value.client_last_name ? `${paymentData.value.client_last_name} ${paymentData.value.client_first_name}` : '';
      logo.value = paymentData.value.logo || '';
      dealerName.value = paymentData.value.dealer_name || '';
      phone1.value = paymentData.value.phone1 || '';
      description.value = paymentData.value.description || '';
      paymentSum.value = paymentData.value.payment_sum || 0;
      paymentSumFact.value = paymentData.value.payment_sum_fact || null;
      dateTime.value = paymentData.value.date_time ? dateToDot(paymentData.value.date_time) : '';
      dateTimeFact.value = paymentData.value.date_time_fact
        ? dateTimeToDot(paymentData.value.date_time_fact) : null;
    });

    const save = () => {
      if (paymentSum.value) {
        const data = {
          phone1: phone1.value,
          description: description.value,
        };
        showLoading();
        const idLocal = parseInt(String(id.value), 10);
        api.post(`/payment-add-or-edit/${idLocal}`, data).then((response) => {
          hideLoading();
          if (response.data.success) {
            if (idLocal > 0) {
              $store.commit('payments/updateOpenedPaymentData', {});
              $store.commit('payments/updateOpenedPaymentForm', false);
            } else {
              $store.commit('payments/updateOpenedPaymentData', response.data.data);
              $store.commit('payments/updateOpenedPaymentForm', true);
            }
            $store.commit('payments/updateRefreshGrid', true);
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
      logo,
      clientName,
      phone1,
      save,
      paymentSumFact,
      paymentSum,
      dateTimeFact,
      dateTime,
      dealerName,
      getAvatar,
      getColorForLogo,
      getInitialsForLogo,
    };
  },
});
</script>

<style scoped>

</style>
