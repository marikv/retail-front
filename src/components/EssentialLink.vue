<template>
  <q-item
    v-ripple
    :dense="dense"
    :clickable="false"
    tag="a"
    :to="name ? { name, exact: true, params } : { path: link, exact: true, params }"
    v-if="children.length === 0 && !hidden"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>
        {{ title }}
      </q-item-label>
      <q-item-label v-if="caption" caption>
        {{ caption }}
      </q-item-label>
      <q-badge v-if="badge"
               floating
               class="q-mt-md q-mr-lg"
               color="negative">{{badge}}</q-badge>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true,
    },
    dense: {
      type: Boolean,
      required: false,
    },

    caption: {
      type: String,
      default: '',
    },

    badge: {
      type: Number,
      default: 0,
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },

    name: {
      type: String,
      default: '',
    },

    params: {
      type: Object,
      default() {
        return {};
      },
    },
    hidden: {
      type: Boolean,
      default: false,
    },
    children: {
      type: Array,
      default() {
        return [];
      },
    },
  },
});
</script>
