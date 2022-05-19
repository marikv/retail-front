<template>
  <div class="row bg-blue-1 q-pa-sm rounded-borders">
    <div class="col-12 text-primary">
      <h6 class="q-pa-xs q-ma-xs">Credit Scoring Calculation</h6>
    </div>
    <div class="col-4 q-px-sm q-py-xs">
      <q-select
        outlined
        dense
        :disable="disableClientInputs"
        :class="studiiClass"
        v-model="studii"
        :options="studiiOptions"
        label="Nivelul studiilor"
        emit-value
        map-options
        @update:model-value="updateValue"
      />
    </div>
    <div class="col-4 q-px-sm q-py-xs">
      <q-select
        outlined
        dense
        :disable="disableClientInputs"
        :class="virstaClass"
        v-model="virsta"
        :options="virstaOptions"
        label="Vârsta"
        emit-value
        map-options
        @update:model-value="updateValue"
      />
    </div>
    <div class="col-4 q-px-sm q-py-xs">
      <q-select
        outlined
        dense
        :disable="disableClientInputs"
        :class="stareaCivilaClass"
        v-model="stareaCivila"
        :options="stareaCivilaOptions"
        label="Starea civilă"
        emit-value
        map-options
        @update:model-value="updateValue"
      />
    </div>
    <div class="col-4 q-px-sm q-py-xs">
      <q-select
        outlined
        dense
        :disable="disableClientInputs"
        :class="copiiClass"
        v-model="copii"
        :options="copiiOptions"
        label="Copii"
        emit-value
        map-options
        @update:model-value="updateValue"
      />
    </div>
    <div class="col-4 q-px-sm q-py-xs">
      <q-select
        outlined
        dense
        :disable="disableClientInputs"
        :class="locMuncaClass"
        v-model="locMunca"
        :options="locMuncaOptions"
        label="Locul de muncă"
        emit-value
        map-options
        @update:model-value="updateValue"
      />
    </div>
    <div class="col-4 q-px-sm q-py-xs">
      <q-select
        outlined
        dense
        :disable="disableClientInputs"
        :class="functieMuncaClass"
        v-model="functieMunca"
        :options="functieMuncaOptions"
        label="Locul de muncă"
        emit-value
        map-options
        @update:model-value="updateValue"
      />
    </div>
    <div class="col-4 q-px-sm q-py-xs">
      <q-select
        outlined
        dense
        :disable="disableClientInputs"
        :class="durataMuncaClass"
        v-model="durataMunca"
        :options="durataMuncaOptions"
        label="Durata contractului de muncă"
        emit-value
        map-options
        @update:model-value="updateValue"
      />
    </div>
    <div class="col-4 q-px-sm q-py-xs">
      <q-select
        outlined
        dense
        :disable="disableClientInputs"
        :class="bunuriImobileClass"
        v-model="bunuriImobile"
        :options="bunuriImobileOptions"
        label="Bunuri imobile în proprietate"
        emit-value
        map-options
        @update:model-value="updateValue"
      />
    </div>
    <div class="col-4 q-px-sm q-py-xs">
      <q-select
        outlined
        dense
        :disable="disableClientInputs"
        :class="bunuriMobileClass"
        v-model="bunuriMobile"
        :options="bunuriMobileOptions"
        label="Bunuri mobile în proprietate"
        emit-value
        map-options
        @update:model-value="updateValue"
      />
    </div>
    <div class="col-4 q-px-sm q-py-xs">
      <q-select
        outlined
        dense
        :disable="disableClientInputs"
        :class="salariuClass"
        v-model="salariu"
        :options="salariuOptions"
        label="Salariu"
        emit-value
        map-options
        @update:model-value="updateValue"
      />
    </div>
    <div class="col-4 q-px-sm q-py-xs">
      <q-select
        outlined
        dense
        :disable="disableClientInputs"
        :class="alteVenituriClass"
        v-model="alteVenituri"
        :options="alteVenituriOptions"
        label="Alte venituri"
        emit-value
        map-options
        @update:model-value="updateValue"
      />
    </div>
    <div class="col-4 q-px-sm q-py-xs">
      <q-select
        outlined
        dense
        :disable="disableClientInputs"
        :class="alteVenituriFamilieClass"
        v-model="alteVenituriFamilie"
        :options="alteVenituriFamilieOptions"
        label="Venituri ale altor membri ai familiei"
        emit-value
        map-options
        @update:model-value="updateValue"
      />
    </div>
    <div class="col-4 q-px-sm q-py-xs">
      <q-select
        outlined
        dense
        :disable="disableClientInputs"
        :class="istorieCreditClass"
        v-model="istorieCredit"
        :options="istorieCreditOptions"
        label="Calitatea istoriei creditare"
        emit-value
        map-options
        @update:model-value="updateValue"
      />
    </div>
    <div class="col-4 q-px-sm q-py-xs">
      <q-select
        outlined
        dense
        :disable="disableClientInputs"
        :class="datoriiClass"
        v-model="datorii"
        :options="datoriiOptions"
        label="Datorii curente"
        emit-value
        map-options
        @update:model-value="updateValue"
      />
    </div>
    <div class="col-4 q-px-sm q-py-xs">
      <q-input
        outlined
        dense
        v-if="datorii"
        :disable="disableClientInputs"
        :class="datoriiRataClass"
        v-model="datoriiRata"
        label="Rata lunara a datoriilor curente"
        @keyup="updateValue"
      />
    </div>
    <div class="col-4 q-px-sm q-py-xs">
      <q-select
        outlined
        dense
        :disable="disableClientInputs"
        :class="letigiiClass"
        v-model="letigii"
        :options="letigiiOptions"
        label="Litigii curente"
        emit-value
        map-options
        @update:model-value="updateValue"
      />
    </div>

    <div class="col-4 q-px-sm q-py-xs">
      <q-input
        outlined
        dense
        :disable="disableClientInputs"
        :class="infodebitScoringClass"
        v-model="infodebitScoring"
        label="Infodebit Scoring"
        @keyup="updateValueInfodebitScoring"
      />
    </div>
    <div :class="`col-4 q-px-sm q-py-xs text-${infodebitScoringTextColor}`">
      {{infodebitScoringText}}
    </div>
    <div class="col-12 q-pt-lg text-grey">
      Baremul minim prestabilit pe Companie  constituie {{barem}} puncte.
    </div>
    <div
      :class="`col-12 q-pt-lg text-subtitle1 ${barem < total ? 'text-positive' : 'text-negative'}`">
      Total puncte: {{total}} <strong>{{ourScoringText}}</strong>
      <div>Suma permisă {{ourScoringTextSumMaxim}}</div>
    </div>
  </div>
</template>

<script>
import {
  computed,
  ref,
  watchEffect,
} from 'vue';
import { api } from 'boot/axios';
import { useStore } from 'vuex';
import { BID_STATUS_SIGNED_CONTRACT } from 'src/helpers';

export default {
  name: 'BidClientScoring',

  props: {},

  setup() {
    const $store = useStore();
    const id = ref(0);
    const statusId = ref(null);
    const disableClientInputs = ref(false);
    const bidData = ref({});
    const barem = ref(20.5);
    const studii = ref(0);
    const studiiClass = ref('bg-white');
    const virsta = ref(0);
    const virstaClass = ref('bg-white');
    const stareaCivila = ref(0);
    const stareaCivilaClass = ref('bg-white');
    const copii = ref(0);
    const copiiClass = ref('bg-white');
    const locMunca = ref(0);
    const locMuncaClass = ref('bg-white');
    const functieMunca = ref(0);
    const functieMuncaClass = ref('bg-white');
    const durataMunca = ref(0);
    const durataMuncaClass = ref('bg-white');
    const bunuriImobile = ref(0);
    const bunuriImobileClass = ref('bg-white');
    const bunuriMobile = ref(0);
    const bunuriMobileClass = ref('bg-white');
    const salariu = ref(0);
    const salariuClass = ref('bg-white');
    const alteVenituri = ref(0);
    const alteVenituriClass = ref('bg-white');
    const alteVenituriFamilie = ref(0);
    const alteVenituriFamilieClass = ref('bg-white');
    const istorieCredit = ref(0);
    const istorieCreditClass = ref('bg-white');
    const datorii = ref(0);
    const datoriiRata = ref('');
    const datoriiClass = ref('bg-white');
    const datoriiRataClass = ref('bg-white');
    const infodebitScoring = ref(0);
    const infodebitScoringClass = ref('bg-white');
    const infodebitScoringText = ref('Risc sporit');
    const infodebitScoringTextColor = ref('negative');
    const ourScoringText = ref('');
    const ourScoringTextSumMaxim = ref('');
    const ourScoringTextColor = ref('negative');
    const letigii = ref(0);
    const letigiiClass = ref('bg-white');
    const studiiOptions = ref([
      {
        label: 'Studii medii',
        value: 0,
        fnc: '',
        bal: 0,
      },
      {
        label: 'Studii gimnaziale',
        value: 1,
        fnc: '',
        bal: 0.5,
      },
      {
        label: 'Studii Liceu',
        value: 2,
        fnc: '',
        bal: 1,
      },
      {
        label: 'Studii colegiu',
        value: 3,
        fnc: '',
        bal: 1.5,
      },
      {
        label: 'Superioare de licenta',
        value: 4,
        fnc: '',
        bal: 2.5,
      },
      {
        label: 'Superioare de master',
        value: 5,
        fnc: '',
        bal: 3,
      },
      {
        label: 'Doctorat',
        value: 6,
        fnc: '',
        bal: 4,
      },
    ]);
    const virstaOptions = ref([
      {
        label: '20 - 23 ani',
        value: 0,
        fnc: '',
        bal: 0.2,
      },
      {
        label: '24 - 27 ani',
        value: 1,
        fnc: '',
        bal: 1,
      },
      {
        label: '28 - 32 ani',
        value: 2,
        fnc: '',
        bal: 2,
      },
      {
        label: '33 - 35 ani',
        value: 3,
        fnc: '',
        bal: 2.5,
      },
      {
        label: '37 - 50 ani',
        value: 4,
        fnc: '',
        bal: 4,
      },
      {
        label: '51 -68 ani',
        value: 5,
        fnc: '',
        bal: 3,
      },
    ]);
    const stareaCivilaOptions = ref([
      {
        label: 'celibatar',
        value: 0,
        fnc: '',
        bal: 1.5,
      },
      {
        label: 'Căsătorit',
        value: 1,
        fnc: '',
        bal: 3,
      },
      {
        label: 'divorțat',
        value: 2,
        fnc: '',
        bal: 1.5,
      },
    ]);
    const copiiOptions = ref([
      {
        label: '0',
        value: 0,
        fnc: '',
        bal: 0,
      },
      {
        label: '1',
        value: 1,
        fnc: '',
        bal: -0.5,
      },
      {
        label: '2',
        value: 2,
        fnc: '',
        bal: -1,
      },
      {
        label: '3',
        value: 3,
        fnc: '',
        bal: -1.5,
      },
      {
        label: '4',
        value: 4,
        fnc: '',
        bal: -2,
      },
      {
        label: '5',
        value: 5,
        fnc: '',
        bal: -2.5,
      },
      {
        label: '6',
        value: 6,
        fnc: '',
        bal: -3,
      },
      {
        label: '7',
        value: 7,
        fnc: '',
        bal: -3.5,
      },
      {
        label: '8',
        value: 8,
        fnc: '',
        bal: -4,
      },
      {
        label: '9',
        value: 9,
        fnc: '',
        bal: -4.5,
      },
      {
        label: '10',
        value: 10,
        fnc: '',
        bal: -5,
      },
      {
        label: '11',
        value: 11,
        fnc: '',
        bal: -5.5,
      },
      {
        label: '12',
        value: 12,
        fnc: '',
        bal: -6,
      },
      {
        label: '13',
        value: 13,
        fnc: '',
        bal: -6.5,
      },
      {
        label: '14',
        value: 14,
        fnc: '',
        bal: -7,
      },
      {
        label: '15 sau mai mult',
        value: 15,
        fnc: '',
        bal: -100,
      },
    ]);
    const locMuncaOptions = ref([
      {
        label: '-',
        value: 0,
        fnc: '',
        bal: 0,
      },
      {
        label: 'Gospodărie Țărănească',
        value: 1,
        fnc: '',
        bal: 1.2,
      },
      {
        label: 'Întreprinzător individual',
        value: 2,
        fnc: '',
        bal: 1.2,
      },
      {
        label: 'Societatea in nume colectiv',
        value: 3,
        fnc: '',
        bal: 1.7,
      },
      {
        label: 'Societatea in comandita',
        value: 4,
        fnc: '',
        bal: 1.5,
      },
      {
        label: 'Societatea cu răspundere limitata',
        value: 5,
        fnc: '',
        bal: 3,
      },
      {
        label: 'Societatea pe acțiuni',
        value: 6,
        fnc: '',
        bal: 2.5,
      },
      {
        label: 'Cooperativă de producție',
        value: 7,
        fnc: '',
        bal: 1.5,
      },
      {
        label: 'Cooperativa de întreprinzător',
        value: 8,
        fnc: '',
        bal: 2,
      },
      {
        label: 'Întreprindere de stat. Întreprindere municipală',
        value: 9,
        fnc: '',
        bal: 3,
      },
    ]);
    const functieMuncaOptions = ref([
      {
        label: 'Muncitor',
        value: 0,
        fnc: '',
        bal: 1.5,
      },
      {
        label: 'Personal operativ',
        value: 1,
        fnc: '',
        bal: 1.6,
      },
      {
        label: 'Personal cu functie de executie',
        value: 2,
        fnc: '',
        bal: 2,
      },
      {
        label: 'Personal cu functie de conducere',
        value: 3,
        fnc: '',
        bal: 3,
      },
    ]);
    const durataMuncaOptions = ref([
      {
        label: '0 - 6 luni',
        value: 0,
        fnc: '',
        bal: 0,
      },
      {
        label: '0,6 - 1 ani',
        value: 1,
        fnc: '',
        bal: 1,
      },
      {
        label: '1,1 - 2 ani',
        value: 2,
        fnc: '',
        bal: 1.8,
      },
      {
        label: '2,1 - 3 ani',
        value: 3,
        fnc: '',
        bal: 2.2,
      },
      {
        label: '3 - 5 ani',
        value: 4,
        fnc: '',
        bal: 2.5,
      },
      {
        label: 'mai mult de 5 ani',
        value: 5,
        fnc: '',
        bal: 3,
      },
    ]);
    const bunuriImobileOptions = ref([
      {
        label: 'nu dispune',
        value: 0,
        fnc: '',
        bal: 0,
      },
      {
        label: 'chirie',
        value: 1,
        fnc: '',
        bal: 0.7,
      },
      {
        label: 'cu parintii sau rudele',
        value: 2,
        fnc: '',
        bal: 1.2,
      },
      {
        label: 'apartament',
        value: 3,
        fnc: '',
        bal: 2,
      },
      {
        label: 'casa de locuit',
        value: 4,
        fnc: '',
        bal: 3,
      },
      {
        label: '2 sau mai multe imobile',
        value: 5,
        fnc: '',
        bal: 3,
      },
    ]);
    const bunuriMobileOptions = ref([
      {
        label: 'nu dispune',
        value: 0,
        fnc: '',
        bal: 0,
      },
      {
        label: 'motocicleta',
        value: 1,
        fnc: '',
        bal: 0.5,
      },
      {
        label: 'tractor',
        value: 2,
        fnc: '',
        bal: 1.5,
      },
      {
        label: 'autoturism',
        value: 3,
        fnc: '',
        bal: 3,
      },
      {
        label: 'Microbus',
        value: 4,
        fnc: '',
        bal: 2,
      },
      {
        label: 'Autobus',
        value: 5,
        fnc: '',
        bal: 1.5,
      },
    ]);
    const salariuOptions = ref([
      {
        label: '0 - 1000',
        value: 0,
        fnc: '',
        bal: 0,
      },
      {
        label: '1000 - 2000',
        value: 1,
        fnc: '',
        bal: 0.5,
      },
      {
        label: '2500 - 3500',
        value: 2,
        fnc: '',
        bal: 1,
      },
      {
        label: '4000 - 5000',
        value: 3,
        fnc: '',
        bal: 1.5,
      },
      {
        label: '5000 - 6500',
        value: 4,
        fnc: '',
        bal: 2,
      },
      {
        label: '7000 - 8500',
        value: 5,
        fnc: '',
        bal: 3,
      },
      {
        label: '9000 - 11000',
        value: 6,
        fnc: '',
        bal: 3,
      },
      {
        label: '12000 si mai mult',
        value: 7,
        fnc: '',
        bal: 3,
      },
    ]);
    const alteVenituriOptions = ref([
      {
        label: '0 - 1000',
        value: 0,
        fnc: '',
        bal: 0,
      },
      {
        label: '1000 - 2000',
        value: 1,
        fnc: '',
        bal: 0.5,
      },
      {
        label: '2500 - 3500',
        value: 2,
        fnc: '',
        bal: 1,
      },
      {
        label: '4000 - 5000',
        value: 3,
        fnc: '',
        bal: 1.5,
      },
      {
        label: '5000 - 6500',
        value: 4,
        fnc: '',
        bal: 2,
      },
      {
        label: '7000 - 8500',
        value: 5,
        fnc: '',
        bal: 3,
      },
      {
        label: '9000 - 11000',
        value: 6,
        fnc: '',
        bal: 3,
      },
      {
        label: '12000 si mai mult',
        value: 7,
        fnc: '',
        bal: 3,
      },
    ]);
    const alteVenituriFamilieOptions = ref([
      {
        label: '0 - 1000',
        value: 0,
        fnc: '',
        bal: 0,
      },
      {
        label: '1000 - 2000',
        value: 1,
        fnc: '',
        bal: 0.5,
      },
      {
        label: '2500 - 3500',
        value: 2,
        fnc: '',
        bal: 1,
      },
      {
        label: '4000 - 5000',
        value: 3,
        fnc: '',
        bal: 1.5,
      },
      {
        label: '5000 - 6500',
        value: 4,
        fnc: '',
        bal: 2,
      },
      {
        label: '7000 - 8500',
        value: 5,
        fnc: '',
        bal: 3,
      },
      {
        label: '9000 - 11000',
        value: 6,
        fnc: '',
        bal: 3,
      },
      {
        label: '12000 si mai mult',
        value: 7,
        fnc: '',
        bal: 3,
      },
    ]);
    const istorieCreditOptions = ref([
      {
        label: '-',
        value: 0,
        fnc: '',
        bal: 0,
      },
      {
        label: 'rea',
        value: 1,
        fnc: '',
        bal: -4,
      },
      {
        label: '5000 - 10000',
        value: 2,
        fnc: '',
        bal: 1,
      },
      {
        label: '10000 - 20000',
        value: 3,
        fnc: '',
        bal: 1.5,
      },
      {
        label: '20000 - 35000',
        value: 4,
        fnc: '',
        bal: 2,
      },
      {
        label: '35000 - 50000',
        value: 5,
        fnc: '',
        bal: 2.5,
      },
      {
        label: '50000 - 70000',
        value: 6,
        fnc: '',
        bal: 3,
      },
      {
        label: '70000 si mai mult',
        value: 7,
        fnc: '',
        bal: 4,
      },
    ]);
    const datoriiOptions = ref([
      {
        label: 'nu dispune',
        value: 0,
        fnc: '',
        bal: 3,
      },
      {
        label: '5000 - 10000',
        value: 1,
        fnc: '',
        bal: 2.5,
      },
      {
        label: '10000 - 20000',
        value: 2,
        fnc: '',
        bal: 2,
      },
      {
        label: '20000 - 35000',
        value: 3,
        fnc: '',
        bal: 1.7,
      },
      {
        label: '35000 - 50000',
        value: 4,
        fnc: '',
        bal: 1.4,
      },
      {
        label: '50000 - 70000',
        value: 5,
        fnc: '',
        bal: 1,
      },
      {
        label: '70000 si mai mult',
        value: 6,
        fnc: '',
        bal: 0.5,
      },
    ]);
    const letigiiOptions = ref([
      {
        label: 'fara antecedente penale',
        value: 0,
        fnc: '',
        bal: 3,
      },
      {
        label: 'proces administrativ',
        value: 1,
        fnc: '',
        bal: 1,
      },
      {
        label: 'in proces de judecata',
        value: 2,
        fnc: '',
        bal: 0,
      },
      {
        label: 'fost condamnat',
        value: 3,
        fnc: '',
        bal: 0,
      },
    ]);

    const infodebitScoringOptions = ref([
      {
        label: 'Risc sporit',
        value: 0,
        minValue: 0,
        maxValue: 599,
        color: 'negative',
        fnc: '',
        bal: 0,
      },
      {
        label: 'Risc Mediu',
        value: 1,
        minValue: 600,
        maxValue: 649,
        color: 'orange',
        fnc: '',
        bal: 0,
      },
      {
        label: 'Echitabil',
        value: 2,
        minValue: 650,
        maxValue: 699,
        color: 'lime-9',
        fnc: '',
        bal: 0,
      },
      {
        label: 'Oportun',
        value: 3,
        minValue: 700,
        maxValue: 749,
        color: 'green',
        fnc: '',
        bal: 0,
      },
      {
        label: 'Excelent',
        value: 4,
        minValue: 750,
        maxValue: 999999999,
        color: 'positive',
        fnc: '',
        bal: 0,
      },
    ]);
    const ourScoringOptions = ref([
      {
        label: 'Excelent',
        value: 0,
        minValue: 40.001,
        maxValue: 999999,
        color: 'positive',
        ourScoringTextSumMaxim: '500 până la 50.000',
        fnc: '',
        bal: 0,
      },
      {
        label: 'Foarte bine',
        value: 1,
        minValue: 30.001,
        maxValue: 40,
        color: 'positive',
        ourScoringTextSumMaxim: '500 până la 25.000',
        fnc: '',
        bal: 0,
      },
      {
        label: 'Bine',
        value: 2,
        minValue: 25,
        maxValue: 30,
        color: 'lime-9',
        ourScoringTextSumMaxim: '500 până la 15.000',
        fnc: '',
        bal: 0,
      },
      {
        label: 'Satisfacator',
        value: 3,
        minValue: 20.6,
        maxValue: 24.999,
        color: 'orange',
        ourScoringTextSumMaxim: '500 până la 7.000',
        fnc: '',
        bal: 0,
      },
      {
        label: 'Refuz',
        value: 4,
        minValue: 0,
        maxValue: 20.5999,
        color: 'negative',
        ourScoringTextSumMaxim: '0',
        fnc: '',
        bal: 0,
      },
    ]);

    const inFnc = (t, optionsVar, valueVar) => {
      optionsVar.value.forEach((row) => {
        if (row.value === valueVar.value) {
          t += row.bal;
        }
      });
      return t;
    };

    const total = computed(() => {
      let t = 0;
      t = inFnc(t, studiiOptions, studii);
      t = inFnc(t, virstaOptions, virsta);
      t = inFnc(t, stareaCivilaOptions, stareaCivila);
      t = inFnc(t, copiiOptions, copii);
      t = inFnc(t, locMuncaOptions, locMunca);
      t = inFnc(t, functieMuncaOptions, functieMunca);
      t = inFnc(t, durataMuncaOptions, durataMunca);
      t = inFnc(t, bunuriImobileOptions, bunuriImobile);
      t = inFnc(t, bunuriMobileOptions, bunuriMobile);
      t = inFnc(t, salariuOptions, salariu);
      t = inFnc(t, alteVenituriOptions, alteVenituri);
      t = inFnc(t, alteVenituriFamilieOptions, alteVenituriFamilie);
      t = inFnc(t, istorieCreditOptions, istorieCredit);
      t = inFnc(t, datoriiOptions, datorii);
      t = inFnc(t, letigiiOptions, letigii);
      return parseFloat((Math.round(t * 100) / 100).toFixed(2));
    });

    const updateValue = () => {
      if (id.value) {
        api.post(`/update-scoring/${id.value}`, {
          studii: studii.value,
          virsta: virsta.value,
          stareaCivila: stareaCivila.value,
          copii: copii.value,
          locMunca: locMunca.value,
          functieMunca: functieMunca.value,
          durataMunca: durataMunca.value,
          bunuriImobile: bunuriImobile.value,
          bunuriMobile: bunuriMobile.value,
          salariu: salariu.value,
          alteVenituri: alteVenituri.value,
          alteVenituriFamilie: alteVenituriFamilie.value,
          istorieCredit: istorieCredit.value,
          datorii: datorii.value,
          datoriiRata: datoriiRata.value,
          infodebitScoring: infodebitScoring.value,
          letigii: letigii.value,
        });
      }
    };

    const getTextForInfodebit = () => {
      if (!infodebitScoring.value) {
        infodebitScoring.value = 0;
      }
      infodebitScoring.value = parseInt(String(infodebitScoring.value), 10);
      infodebitScoringOptions.value.forEach((option) => {
        if (option.minValue <= infodebitScoring.value
          && option.maxValue >= infodebitScoring.value
        ) {
          infodebitScoringText.value = option.label;
          infodebitScoringTextColor.value = option.color;
        }
      });
    };
    const updateValueInfodebitScoring = () => {
      getTextForInfodebit();
      updateValue();
    };

    watchEffect(() => {
      bidData.value = $store.getters['bids/getOpenedBidData'];
    });

    watchEffect(() => {
      if (!total.value) {
        total.value = 0;
      }
      total.value = parseFloat(String(total.value));
      ourScoringOptions.value.forEach((option) => {
        if (option.minValue <= total.value
          && option.maxValue >= total.value
        ) {
          ourScoringText.value = option.label;
          ourScoringTextColor.value = option.color;
          ourScoringTextSumMaxim.value = option.ourScoringTextSumMaxim;
        }
      });
    });

    watchEffect(() => {
      if (bidData.value && bidData.value.id) {
        id.value = bidData.value.id ? bidData.value.id : 0;
        statusId.value = bidData.value.status_id ? parseInt(bidData.value.status_id, 10) : 0;
        if (statusId.value === BID_STATUS_SIGNED_CONTRACT) {
          disableClientInputs.value = true;
        }
      }
    });

    watchEffect(() => {
      if (bidData.value
        && bidData.value.bid_scorings
        && bidData.value.bid_scorings[0]
        && bidData.value.bid_scorings[0].json_date
        && bidData.value.bid_scorings[0].json_date.length
      ) {
        const jsonData = JSON.parse(bidData.value.bid_scorings[0].json_date);
        if (jsonData && jsonData.studii !== undefined) {
          studii.value = jsonData.studii;
          virsta.value = jsonData.virsta;
          stareaCivila.value = jsonData.stareaCivila;
          copii.value = jsonData.copii;
          locMunca.value = jsonData.locMunca;
          functieMunca.value = jsonData.functieMunca;
          durataMunca.value = jsonData.durataMunca;
          bunuriImobile.value = jsonData.bunuriImobile;
          bunuriMobile.value = jsonData.bunuriMobile;
          salariu.value = jsonData.salariu;
          alteVenituri.value = jsonData.alteVenituri;
          alteVenituriFamilie.value = jsonData.alteVenituriFamilie;
          istorieCredit.value = jsonData.istorieCredit;
          datorii.value = jsonData.datorii;
          datoriiRata.value = jsonData.datoriiRata;
          infodebitScoring.value = jsonData.infodebitScoring;
          letigii.value = jsonData.letigii;
          setTimeout(() => {
            getTextForInfodebit();
          }, 100);
        }
      }
    });

    return {
      studiiOptions,
      studiiClass,
      studii,
      virstaOptions,
      virstaClass,
      virsta,
      stareaCivilaOptions,
      stareaCivilaClass,
      stareaCivila,
      copiiOptions,
      copiiClass,
      copii,
      locMuncaOptions,
      locMuncaClass,
      locMunca,
      functieMuncaOptions,
      functieMuncaClass,
      functieMunca,
      durataMuncaOptions,
      durataMuncaClass,
      durataMunca,
      bunuriImobileOptions,
      bunuriImobileClass,
      bunuriImobile,
      bunuriMobileOptions,
      bunuriMobileClass,
      bunuriMobile,
      salariuOptions,
      salariuClass,
      salariu,
      alteVenituriOptions,
      alteVenituriClass,
      alteVenituri,
      alteVenituriFamilieOptions,
      alteVenituriFamilieClass,
      alteVenituriFamilie,
      istorieCreditOptions,
      istorieCreditClass,
      istorieCredit,
      datoriiOptions,
      datoriiClass,
      datorii,
      datoriiRataClass,
      datoriiRata,
      ourScoringOptions,
      ourScoringText,
      ourScoringTextColor,
      ourScoringTextSumMaxim,
      infodebitScoringText,
      infodebitScoringTextColor,
      updateValueInfodebitScoring,
      infodebitScoringClass,
      infodebitScoring,
      letigiiOptions,
      letigiiClass,
      letigii,
      total,
      barem,
      updateValue,
      disableClientInputs,
    };
  },
};
</script>

<style scoped>

</style>
