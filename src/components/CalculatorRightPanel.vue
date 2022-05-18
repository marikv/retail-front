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
          :label="tab.label">
          <q-badge
            floating
            color="negative"
            v-if="tab.name === 'ChatFull' && getCountNewMessages"
            :label="getCountNewMessages"></q-badge>
        </q-tab>
      </template>
    </q-tabs>
    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="Bids" class="q-pa-none">
        <bids-list-for-calculator></bids-list-for-calculator>
      </q-tab-panel>
      <q-tab-panel name="Contracts" class="q-pa-none">
        <bids-list-for-calculator></bids-list-for-calculator>
      </q-tab-panel>
      <q-tab-panel name="ChatFull" class="q-pa-none">
        <chat-full></chat-full>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import BidsListForCalculator from 'components/BidsListForCalculator';
import { ref, watchEffect } from 'vue';
import { useStore } from 'vuex';
import ChatFull from 'components/ChatFull';

export default {
  name: 'CalculatorRightPanel',
  components: { ChatFull, BidsListForCalculator },
  setup() {
    const $store = useStore();
    const tab = ref('Bids');
    const getCountNewMessages = ref(0);
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
      name: 'ChatFull',
      label: 'Chat',
      icon: '',
      hidden: false,
    }]);
    const setModel = (tabName) => {
      $store.commit('auth/updateActiveModule', tabName);
      tab.value = tabName;
      // $store.commit('users/updateRefreshGridBidsCalculator', true);
    };
    watchEffect(() => {
      getCountNewMessages.value = $store.getters['auth/getCountNewMessages'];
    });
    setModel('Bids');
    return {
      tab,
      tabs,
      setModel,
      getCountNewMessages,
    };
  },
};
</script>

<style scoped>

</style>
