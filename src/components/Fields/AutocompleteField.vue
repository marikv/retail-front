<template>
  <div>
    <q-select
      :filled="filled"
      :dense="dense"
      :outlined="outlined"
      :model-value="model"
      :readonly="readonly"
      :disable="disable"
      :error="error"
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      :options="options"
      @filter="filterFn"
      @filter-abort="abortFilterFn"
      @input-value="setModel"
      @blur="onBlur"
      @focus="onFocus"
      :hide-dropdown-icon="true"
      behavior="menu"
      :loading="loading"
      :hint="hint"
      :label="label"
      :autocomplete="`off-autocomplete-${uniqId}`"
    >
    </q-select>
  </div>
</template>

<script>
import { api } from 'boot/axios';

export default {
  name: 'AutocompleteField',
  props: {
    modelValue: {
      type: String,
      default: null,
      required: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    filled: {
      type: Boolean,
      default: false,
    },
    dense: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    disable: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    hint: {
      type: String,
      default: '',
    },
    what: {
      type: String,
      default: '',
    },
    forceValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      model: null,
      options: [],
      loading: false,
      uniqId: `id${Math.random().toString(16).slice(2)}`,
    };
  },
  emits: [
    'blur',
    'input',
    'focus',
  ],

  methods: {
    filterFn(val, update) {
      update(() => {
        this.loading = true;
        api.post('/autocomplete', {
          search: this.what ? this.what : this.label,
          q: this.model,
        }).then((response) => {
          this.loading = false;
          const stringOptions = [];
          if (response.data.data.data) {
            response.data.data.data.forEach((e) => {
              if (stringOptions.indexOf(e) === -1) {
                stringOptions.push(e.text);
              }
            });
          }
          this.options = stringOptions;
          update();
        }).catch(() => {
          this.loading = false;
        });
      });
    },
    abortFilterFn() {},

    setModel(val) {
      this.model = val;
    },
    onBlur($event) {
      this.$emit('blur', $event);
    },
    onFocus($event) {
      this.$emit('focus', $event);
    },
  },
  watch: {
    model(v) {
      this.$emit('update:modelValue', v);
      this.$emit('input', v);
    },
    value(v) {
      this.setModel(v);
    },
    modelValue(v) {
      this.setModel(v);
    },
  },
  mounted() {
    if (this.forceValue) {
      this.setModel(this.forceValue);
    }
  },
};

</script>

<style scoped>

</style>
