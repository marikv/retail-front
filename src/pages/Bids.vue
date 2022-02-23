<template>
  <q-page>
    <bids-list-for-calculator></bids-list-for-calculator>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import BidsListForCalculator from 'components/BidsListForCalculator';

export default defineComponent({
  name: 'PageBids',
  components: { BidsListForCalculator },
});
</script>
