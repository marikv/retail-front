<template>
  <q-page class="flex flex-center">
    <img
      alt=""
      src="~assets/logo.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const $store = useStore();
    $store.commit('auth/updateActiveModule', 'Index');
  },
});
</script>
