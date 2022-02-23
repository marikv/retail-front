<template>
  <q-page>
    <q-layout view="lhh LpR lff" container style="height: calc(100vh - 50px)" class="bg-grey-2">
      <q-drawer
        v-model="drawerLeft"
        :width="220"
        bordered
      >
        <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <q-list>

              <q-item
                @click="openedItem = 'page-settings-type-credits'"
                v-ripple class="cursor-pointer">
                <q-item-section>
                  <q-item-label>
                    Tip credite
                  </q-item-label>
                </q-item-section>
                <q-item-section side>
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

          <page-settings-type-credits
            v-if="openedItem === 'page-settings-type-credits'">
          </page-settings-type-credits>

        </q-page>
      </q-page-container>
    </q-layout>
  </q-page>
</template>

<script>
import {
  defineComponent,
  ref,
} from 'vue';
import PageSettingsTypeCredits from 'pages/SettingsTypeCredits';

export default defineComponent({
  name: 'PageSettings',
  components: { PageSettingsTypeCredits },
  setup() {
    const drawerLeft = ref(true);
    const openedItem = ref('page-settings-type-credits');

    return {
      drawerLeft,
      openedItem,
    };
  },
});
</script>
