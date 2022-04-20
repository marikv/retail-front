<template>
  <q-page>
    <q-layout view="lhh LpR lff" container style="height: calc(100vh - 60px)" class="bg-grey-2">
      <q-drawer
        v-model="drawerLeft"
        :width="220"
        bordered
      >
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <q-list>

              <q-item :key="item.component"
                v-for="item in components"
                v-ripple :class="getItemClass(item.component)">
                <q-item-section @click="setOpenedComponent(item.component)">
                  <q-item-label>
                    {{item.label}}
                  </q-item-label>
                </q-item-section>
                <q-item-section side @click="setOpenedComponent(item.component)">
                  <q-icon name="arrow_right" class="cursor-pointer" color="gray" ></q-icon>
                </q-item-section>
              </q-item>

            </q-list>
          </div>
        </q-scroll-area>
      </q-drawer>

      <q-btn icon="menu"
             round
             size="sm"
             v-if="!drawerLeft"
             @click="drawerLeft = !drawerLeft"
             color="primary"></q-btn>

      <q-page-container>
        <q-page style="padding-top: 20px" class="q-pa-md">
          <component :is="openedComponent"></component>
        </q-page>
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<script>
import {
  computed,
  defineComponent, onMounted,
  ref,
} from 'vue';
import PageSettingsTypeCredits from 'pages/SettingsTypeCredits';
import PageSettingsProducts from 'pages/SettingsProducts';
import PageSettingsGenerals from 'pages/SettingsGenerals';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'PageSettings',
  components: {
    PageSettingsGenerals,
    PageSettingsTypeCredits,
    PageSettingsProducts,
  },
  setup() {
    const drawerLeft = ref(true);
    const openedComponent = ref('page-settings-type-credits');
    const components = ref([
      { component: 'page-settings-type-credits', label: 'Tip credite' },
      { component: 'page-settings-products', label: 'Lista Produse' },
      { component: 'page-settings-generals', label: 'Generale' },
    ]);
    const $store = useStore();

    const getItemClass = computed(() => (component) => {
      let cl = 'cursor-pointer';
      if (component === openedComponent.value) {
        cl += ' text-primary text-weight-bold';
      }
      return cl;
    });

    const setOpenedComponent = (v) => {
      openedComponent.value = v;
    };

    onMounted(() => {
      $store.commit('auth/updateActiveModule', 'Settings');
    });

    return {
      drawerLeft,
      openedComponent,
      setOpenedComponent,
      components,
      getItemClass,
    };
  },
});
</script>
