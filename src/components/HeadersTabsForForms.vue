<template>
  <q-tabs
    v-if="!isMobile"
    v-model="model"
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
  <q-btn-dropdown v-else
                  color="primary"
                  flat
                  dense
                  :icon="activeIcon"
                  :label="activeLabel">
    <q-list>
      <template v-for="(tab, index) in tabs">
        <q-item clickable
                v-if="!tab.hidden"
                v-close-popup
                @click="setModelObject(tab.name)"
                :key="`tabIcon-${index}`">
          <q-item-section avatar>
            <q-icon
              :name="tab.icon"
              color="primary"
              flat/>
          </q-item-section>
          <q-item-section>
            <q-item-label class="text-primary">{{tab.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </template>
    </q-list>
  </q-btn-dropdown>
</template>

<script>
export default {
  name: 'HeaderTabsForForms',
  props: {
    value: {
      type: String,
      default: '',
    },
    tabs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      model: '',
      activeIcon: '',
      activeName: '',
      activeLabel: '',
    };
  },
  emits: [
    'input',
  ],
  computed: {
    isMobile() {
      return this.$q.screen.lt.md;
    },
  },
  methods: {
    setModel(v) {
      this.model = v;
      this.$emit('input', this.model);
    },
    setModelObject(name) {
      this.tabs.forEach((tab) => {
        if (tab.name === name) {
          this.setModel(name);
          this.activeName = name;
          this.activeIcon = tab.icon;
          this.activeLabel = tab.label;
        }
      });
    },
  },
  watch: {
    model(v) {
      this.setModelObject(v);
    },
  },
  mounted() {
    this.setModelObject(this.value);
  },
};
</script>

<style scoped>

</style>
