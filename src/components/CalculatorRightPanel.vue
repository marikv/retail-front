<template>
  <div>
    <q-tabs
      v-model="tab"
      narrow-indicator
      dense
      align="justify"
      class="text-primary"
    >
      <template v-for="(tab, index) in tabs">
        <q-tab
          :key="`tab-${index}`"
          :ripple="false"
          @click="setModel(tab.name)"
          :name="tab.name"
          v-if="!tab.hidden"
          :icon="tab.icon"
          :label="tab.label" />
      </template>
    </q-tabs>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="Bids" class="q-pa-none">
        <bids-list-for-calculator></bids-list-for-calculator>
      </q-tab-panel>
      <q-tab-panel name="Contracts" class="q-pa-none">
        <bids-list-for-calculator></bids-list-for-calculator>
      </q-tab-panel>
      <q-tab-panel name="Chat" class="q-pa-none">
        <div class="q-ma-lg text-red">work in progress :) modul in lucru</div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import BidsListForCalculator from 'components/BidsListForCalculator';
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'CalculatorRightPanel',
  components: { BidsListForCalculator },
  setup() {
    const $store = useStore();
    const tab = ref('Bids');
    const tabs = ref([{
      name: 'Bids',
      label: 'Cereri',
      icon: '',
      hidden: false,
    }, {
      name: 'Contracts',
      label: 'Contracte',
      icon: '',
      hidden: false,
    }, {
      name: 'Chat',
      label: 'Chat',
      icon: '',
      hidden: false,
    }]);
    const setModel = (tabName) => {
      $store.commit('auth/updateActiveModule', tabName);
      tab.value = tabName;
      // $store.commit('users/updateRefreshGridBidsCalculator', true);
    };
    setModel('Bids');
    return {
      tab,
      tabs,
      setModel,
    };
  },
};
</script>

<style scoped>

</style>
