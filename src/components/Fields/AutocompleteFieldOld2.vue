<template>
  <div>
    <q-select
      :filled="filled"
      :dense="dense"
      :outlined="outlined"
      :value="model"
      :readonly="readonly"
      :disable="disable"
      :error="error"
      :model-value="model"
      :loading="loading"
      use-input
      hide-selected
      fill-input
      input-debounce="0"
      :options="options"
      @filter="filterFn"
      @input-value="setModel"
      :hint="hint"
      :hide-dropdown-icon="true"
      :label="label"
    >
      <!--    <template v-slot:no-option>-->
      <!--      <q-item>-->
      <!--        <q-item-section class="text-grey">-->
      <!--        </q-item-section>-->
      <!--      </q-item>-->
      <!--    </template>-->
    </q-select>
  </div>
</template>

<script>
import { api } from 'boot/axios';
import { ref } from 'vue';

export default {
  name: 'AutocompleteFieldOld2',
  props: {
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
  emits: [
    'blur',
    'input',
    'focus',
  ],
  setup(props, context) {
    const model = ref(null);
    const loading = ref(false);
    const options = ref([]);
    const setModel = (val) => {
      model.value = val;
      console.log('model', val);
      context.emit('update:modelValue', val);
    };
    const filterFn = (val, update) => {
      if (val) {
        update(() => {
          loading.value = true;
          api.post('/autocomplete', {
            search: props.what ? props.what : props.label,
            q: model.value,
          }).then((response) => {
            loading.value = false;
            const stringOptions = [];
            if (response.data.data.data) {
              response.data.data.data.forEach((e) => {
                if (stringOptions.indexOf(e) === -1) {
                  stringOptions.push(e.text);
                }
              });
            }
            options.value = stringOptions;
            // update();
          }).catch(() => {
            loading.value = false;
          });
        });
      }
    };

    return {
      loading,
      model,
      options,
      filterFn,
      setModel,
      uniqId: `id${Math.random().toString(16).slice(2)}`,
    };
  },
};

</script>

<style scoped>

</style>
