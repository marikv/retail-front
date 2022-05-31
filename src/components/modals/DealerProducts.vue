<template>
  <div class="row"
       v-if="dealer_id > 0">
    <div
      v-if="dealer_id > 0"
      class="col-xs-12 row text-subtitle1 text-primary q-pa-xs">
      Produse
    </div>
    <div
      v-if="dealer_id > 0"
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
        @update:model-value="save"
        label=""
      />
    </div>
    <template
      :key="`dtiIndex${dtiIndex}`"
      v-for="(dealerTypeCredit, dtiIndex) in dealerTypeCredits">
      <template
        v-if="dealerProducts.indexOf(typeCreditProductIds[dtiIndex]) > -1"
      >
        <div
          class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12
         row text-primary q-pa-xs q-pt-md text-right">
          {{dealerTypeCredit.name}}
        </div>
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-12 q-pa-xs">
          <q-input type="number"
                   v-model="percentComisionMagazin[dtiIndex]"
                   outlined
                   label="Procent comision magazin"
          ></q-input>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-12 q-pa-xs">
          <q-input type="number"
                   v-model="percentBonusMagazin[dtiIndex]"
                   outlined
                   label="Procent bonus magazin"
          ></q-input>
        </div>
        <div
          class="col-xl-2 col-lg-2 col-md-1 col-sm-1 col-xs-12
         row text-subtitle1 text-primary q-pa-xs">
          <q-btn color="positive"
                 @click="savePercent(dtiIndex)"
                 icon="save"></q-btn>
        </div>
      </template>
    </template>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  watchEffect,
  onMounted,
} from 'vue';
import { api } from 'boot/axios';
import {
  hideLoading,
  showLoading,
  showNotify,
} from 'src/helpers';

export default defineComponent({

  name: 'DealerProducts',
  props: {
    dealer_id: {
      type: Number,
      default: null,
    },
  },
  components: {},
  setup(props) {
    const dealerProducts = ref([]);
    const dealerProductsOptions = ref([]);
    const dealerTypeCredits = ref([]);
    const dealerTypeCreditsIds = ref({});
    const typeCreditsIds = ref({});
    const typeCreditProductIds = ref({});
    const percentBonusMagazin = ref({});
    const percentComisionMagazin = ref({});

    const loadProducts = () => {
      api.get(`/dealer-products/${props.dealer_id}`).then((response) => {
        if (response.data.success) {
          dealerProducts.value = [];
          response.data.data.DealerProducts.forEach((v) => {
            dealerProducts.value.push(v.product_id);
          });
          dealerProductsOptions.value = response.data.data.Products;
          dealerTypeCredits.value = response.data.data.DealerTypeCredits;
          if (response.data.data.DealerTypeCredits) {
            response.data.data.DealerTypeCredits.forEach((dtc, i) => {
              percentBonusMagazin.value[i] = null;
              percentComisionMagazin.value[i] = null;
              dealerTypeCreditsIds.value[i] = null;
              typeCreditsIds.value[i] = dtc.id;
              typeCreditProductIds.value[i] = dtc.product_id;
              if (dtc.DealerTypeCredits && dtc.DealerTypeCredits.id) {
                percentBonusMagazin.value[i] = dtc.DealerTypeCredits.percent_bonus_magazin;
                percentComisionMagazin.value[i] = dtc.DealerTypeCredits.percent_comision_magazin;
                dealerTypeCreditsIds.value[i] = dtc.DealerTypeCredits.id;
              }
            });
          }
        }
      });
    };

    onMounted(() => {
      loadProducts();
    });

    watchEffect(() => {
      if (props.dealer_id) {
        loadProducts();
      }
    });
    const savePercent = (i) => {
      showLoading();
      const id = dealerTypeCreditsIds.value[i] ? dealerTypeCreditsIds.value[i] : 0;
      api.post(`/dealer-type-credits/${id}`, {
        percent_bonus_magazin: percentBonusMagazin.value[i],
        percent_comision_magazin: percentComisionMagazin.value[i],
        type_credit_id: typeCreditsIds.value[i],
        dealer_id: props.dealer_id,
      }).then((response) => {
        hideLoading();
        if (response.data.success) {
          loadProducts();
        } else {
          showNotify({ message: 'Eroare de update' });
        }
      }).catch((error) => {
        hideLoading();
        showNotify({}, error);
      });
    };

    const save = () => {
      showLoading();
      api.post(`/edit-dealer-products/${props.dealer_id}`, {
        products: dealerProducts.value,
      }).then((response) => {
        hideLoading();
        if (response.data.success) {
          loadProducts();
        } else {
          showNotify({ message: 'Eroare de update' });
        }
      }).catch((error) => {
        hideLoading();
        showNotify({}, error);
      });
    };

    return {
      save,
      dealerProducts,
      dealerProductsOptions,
      dealerTypeCredits,
      percentBonusMagazin,
      percentComisionMagazin,
      typeCreditProductIds,
      savePercent,
    };
  },
});
</script>

<style scoped>

</style>
