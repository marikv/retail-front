<template>
  <q-page>
    <div class="row">

    </div>
  </q-page>
</template>

<script>
import {
  defineComponent,
  ref,
  onMounted,
} from 'vue';
import { api } from 'boot/axios';
import { hideLoading, showLoading, showNotify } from 'src/helpers';

export default defineComponent({
  name: 'PageSettingsGenerals',
  components: {},
  setup() {
    const dialogSettingsTypeCreditsRef = ref(null);
    const drawerLeft = ref(true);
    const rows = ref([]);
    const onRequest = () => {
      showLoading();
      api.post('/settings-list', {})
        .then((response) => {
          hideLoading();
          if (response.data.success) {
            rows.value = response.data.data.data;
          }
        })
        .catch((error) => {
          hideLoading();
          showNotify({}, error);
        });
    };

    onMounted(() => {
      onRequest();
    });

    return {
      drawerLeft,
      onRequest,
      rows,
      dialogSettingsTypeCreditsRef,
    };
  },
});
</script>
