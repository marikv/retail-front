<template>
  <q-page>
    <bids-list-for-calculator></bids-list-for-calculator>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import BidsListForCalculator from 'components/BidsListForCalculator';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'PageBids',
  components: { BidsListForCalculator },
  setup() {
    const $store = useStore();
    $store.commit('auth/updateActiveModule', 'Bids');
  },
});
</script>
