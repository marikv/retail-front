<template>
  <q-dialog ref="dialogRef"
            v-model="isOpenedLocal"
            @hide="onDialogHide"
            full-height persistent>
    <q-card class="q-dialog-plugin" style="width: 100%; max-width: 800px;">
      <q-toolbar :class="'q-pr-xs'">
        <q-toolbar-title>
          <span class="text-subtitle1">
            <span class="text-blue-grey" >Termeni si Conditii</span>
          </span>
        </q-toolbar-title>
        <q-space/>
        <q-btn icon="close" flat round dense @click="onCancelClick"/>
      </q-toolbar>
      <q-separator/>
      <q-card-section
        style="min-height: calc(100vh - 165px);max-height: calc(100vh - 165px);"
        class="scroll">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">

            <div>
              Prin bifarea acestei opțiuni, declar pe
              propria răspundere căci am fost adus la
              cunoștință că datele mele cu caracter personal colectate de către
              OCN „CREDIT BOX” SRL
              vor fi procesate și prelucrate, cu respectarea
              regimului de securitate
              și confidențialitate,
              în conformitate cu prevederile Legii nr. 133 din 8 iulie 2011 privind protecția
              datelor cu caracter personal, informația nefiind
              folosită în alte scopuri
              incompatibile sau remisă fără temei altor companii, urmând a fi păstrată
              doar pentru o perioadă de 3 ani, urmând ulterior a
              fi distrusă sau transformată
              în date anonime. Sunt conștient căci în conformitate cu art. 13-16 ale Legii
              nr. 133 din 8 iulie 2011 privind protecția datelor
              cu caracter personal am dreptul
              de acces, de intervenție, de opoziție, precum și de adresare în instanța
              de judecată,în contextul prelucrărilor efectuate asupra datelor cu caracter
              personal care mă vizează.
            </div>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn  label="Închide" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from 'quasar';
import { ref, watchEffect } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'TermeniConditii',
  components: {},
  props: {},

  emits: [
    ...useDialogPluginComponent.emits,
    'onCloseDialog',
  ],

  setup() {
    const $store = useStore();
    const isOpenedLocal = ref(false);

    const {
      dialogRef,
      onDialogHide,
      onDialogCancel,
    } = useDialogPluginComponent();

    const onDialogHideLocal = () => {
      $store.commit('bids/updateTermeniConditii', false);
      onDialogHide();
    };

    watchEffect(() => {
      isOpenedLocal.value = $store.getters['bids/getTermeniConditii'];
    });
    return {
      dialogRef,
      onDialogHide: onDialogHideLocal,
      onCancelClick: onDialogCancel,
      isOpenedLocal,
    };
  },
};
</script>
