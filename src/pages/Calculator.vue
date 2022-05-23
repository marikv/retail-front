<template>
  <q-page>
    <q-banner v-if="!authenticated"></q-banner>
    <div v-else class="row content-start" >
      <q-splitter
        class="full-width"
        v-model="splitterModel"
        unit="px"
        reverse
        separator-class="bg-indigo-3"
        separator-style="width: 2px"
      >
        <template v-slot:before>
          <div class="q-pa-md">
            <div class="row" style="max-width: 600px;margin: auto;">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <h6 class="q-pa-none q-ma-none text-primary">Calculator</h6>
              </div>
              <div v-if="!isDealer"
                   class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
                <q-select
                  outlined
                  color="primary"
                  v-model="dealer"
                  :options="dealerOptions"
                  emit-value
                  map-options
                  option-value="id"
                  option-label="name"
                  label="Dealer" >
                  <template v-slot:label>
                    <span class="text-primary">Dealer</span>
                  </template>
                </q-select>
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
                <q-select outlined
                          color="primary"
                          :disable="disableInputs"
                          v-model="product"
                          :options="productOptions"
                          emit-value
                          map-options
                          option-value="id"
                          option-label="name"
                          label="Tip credit" >
                  <template v-slot:label>
                    <span class="text-primary">Tip credit</span>
                  </template>
                </q-select>
              </div>
              <div v-if="typeCreditsSelected && typeCreditsSelected.id"
                   class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
                <div class="bg-green-1 q-pa-sm text-grey-7
           q-card--bordered rounded-borders text-caption">
                  {{typeCreditsSelected.name}} {{typeCreditsSelected.description_mini}}
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs">
                <q-select outlined
                          color="primary"
                          :disable="disableInputs"
                          v-model="creditMonths"
                          :options="creditMonthsOptions"
                          @update:model-value="creditMonthsChanged"
                          label="Termenul creditului (luni)" >
                  <template v-slot:label>
                    <span class="text-primary">Termenul creditului (luni)</span>
                  </template>
                </q-select>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs">
                <q-input outlined
                         readonly
                         :disable="disableInputs"
                         v-model="creditDate"
                         label="Data cererii"
                         mask="##.##.####">
<!--                  <template v-slot:append>-->
<!--                    <q-icon name="event"-->
<!--                            color="primary"-->
<!--                            class="cursor-pointer">-->
<!--                      <q-popup-proxy ref="qDateProxy"-->
<!--                                     v-if="!disableInputs"-->
<!--                                     cover transition-show="scale" transition-hide="scale">-->
<!--                        <q-date v-model="creditDate"-->
<!--                                lang="ro"-->
<!--                                :options="calendarOptions"-->
<!--                                mask="DD.MM.YYYY"-->
<!--                                :locale="calendarLocaleRoLocal">-->
<!--                          <div class="row items-center justify-end">-->
<!--                            <q-btn v-close-popup label="Închide" color="primary" flat />-->
<!--                          </div>-->
<!--                        </q-date>-->
<!--                      </q-popup-proxy>-->
<!--                    </q-icon>-->
<!--                  </template>-->
                </q-input>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs">
                <q-input
                  outlined
                  :disable="disableInputs"
                  type="number"
                  label="Suma creditului (MDL)"
                  v-model="creditSum">
                  <template v-slot:label>
                    <span class="text-primary">Suma creditului (MDL)</span>
                  </template>
                </q-input>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 q-pa-xs">
                <q-btn size="lg"
                       @click="calculate()"
                       class="full-height full-width"
                       label="Calculează"
                       color="primary"
                ></q-btn>
              </div>
            </div>
            <div class="row" style="max-width: 800px;margin: auto;">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
                <q-banner v-if="calcError" class="bg-red-2 rounded-borders">
                  {{calcError}}
                </q-banner>
                <div v-else-if="calcResultsExist" class="row">
                  <div class="col-xl-2 col-lg-2 col-md-2 col-sm-3 col-xs-3 q-pt-lg">
                    DAE: <span v-if="calcResults">{{calcResults.DAE}}%</span>
                  </div>
                  <div class="col-xl-10 col-lg-10 col-md-10 col-sm-9 col-xs-9 text-right q-py-md">
<!--                    <q-btn size="md"-->
<!--                           @click="printPreContract()"-->
<!--                           icon="print"-->
<!--                           label="Pre-Contract"-->
<!--                           class="q-mr-md"-->
<!--                    ></q-btn>-->
                    <q-btn size="md"
                           @click="clearCalcResults()"
                           icon="clear"
                           label="Anulează"
                    ></q-btn>
                  </div>
                  <div class="q-table__container q-table--horizontal-separator
                   column no-wrap q-table--dense q-table--no-wrap full-width">
                    <table class="q-table">
                      <thead>
                      <tr>
                        <th>Număr<br>rate</th>
                        <th>Data plății</th>
                        <th class="text-right">Rambursări<br>suma de bază</th>
                        <th class="text-right">Dobânda</th>
                        <th class="text-right">Comision de<br>examinare</th>
                        <th class="text-right">Comision de<br>administrare</th>
                        <th class="text-right">Total de<br>plată</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td></td>
                        <td class="text-center">{{creditDate}}</td>
                        <td></td>
                        <td></td>
                        <td class="text-right">0</td>
                        <td></td>
                        <td class="text-right">0</td>
                      </tr>
                      <tr v-for="(row, rowIndex) in calcResults.tabel" :key="`res-${rowIndex}`">
                        <td class="text-center">{{rowIndex}}</td>
                        <td class="text-center">{{row.data}}</td>
                        <td class="text-right">{{row.imprumtPerLuna}}</td>
                        <td class="text-right">{{row.dobindaPerLuna}}</td>
                        <td class="text-right">{{row.comisionPerLuna}}</td>
                        <td class="text-right">{{row.comisionAdminPerLuna}}</td>
                        <td class="text-right">{{row.totalPerLuna}}</td>
                      </tr>
                      <tr>
                        <td class="text-right" colspan="2">Total</td>
                        <td class="text-right">{{calcResults.tabelTotal.imprumut}}</td>
                        <td class="text-right">{{calcResults.tabelTotal.dobinda}}</td>
                        <td class="text-right">{{calcResults.tabelTotal.comision}}</td>
                        <td class="text-right">{{calcResults.tabelTotal.comisionAdmin}}</td>
                        <td class="text-right">{{calcResults.tabelTotal.total}}</td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 row q-pb-xl q-mb-xl" v-show="calcResultsExist && isDealer">
              <div class="col-12">
                <h6 class="q-pa-none q-ma-none text-primary">Adaugă o cerere nouă</h6>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientBuletinSNHasError"
                  @blur="clientBuletinSNHasError = false"
                  @focus="clientBuletinSNHasError = false"
                  type="text"
                  :rules="[(val) => val && val.length === 9 || '9 caractere']"
                  label="Buletin S/N"
                  @keyup="findClientBy('buletin_sn')"
                  v-model="clientBuletinSN">
                  <template v-if="showBuletinSNDropdown">
                    <q-menu v-model="showBuletinSNDropdown"  class="bg-teal-1">
                      <q-list v-for="(foundedClient, ind) in foundedClients"
                              :key="`fd${ind}`"
                              style="min-width: 250px;">
                        <q-item clickable
                                @click="selectFoundedClient(foundedClient)"
                                v-close-popup>
                          <q-item-section>
                            <div>
                              {{foundedClient.last_name}} {{foundedClient.first_name}}
                            </div>
                            <div>
                              <span class="text-grey">S/N:</span> {{foundedClient.buletin_sn}}
                            </div>
                            <div>
                              <span class="text-grey">IDNP:</span> {{foundedClient.buletin_idnp}}
                            </div>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </template>
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientBuletinIDNPHasError"
                  @blur="clientBuletinIDNPHasError = false"
                  @focus="clientBuletinIDNPHasError = false"
                  type="text"
                  :rules="[(val) => val.length === 13 || '13 cifre']"
                  label="Buletin IDNP"
                  @keyup="findClientBy('buletin_idnp')"
                  v-model="clientBuletinIDNP">
                  <template v-if="showBuletinIDNPDropdown">
                    <q-menu v-model="showBuletinIDNPDropdown"  class="bg-teal-1">
                      <q-list v-for="(foundedClient, ind) in foundedClients"
                              :key="`fdIDNP${ind}`"
                              style="min-width: 250px;">
                        <q-item clickable
                                @click="selectFoundedClient(foundedClient)"
                                v-close-popup>
                          <q-item-section>
                            <div>
                              {{foundedClient.last_name}} {{foundedClient.first_name}}
                            </div>
                            <div>
                              <span class="text-grey">S/N:</span> {{foundedClient.buletin_sn}}
                            </div>
                            <div>
                              <span class="text-grey">IDNP:</span> {{foundedClient.buletin_idnp}}
                            </div>
                          </q-item-section>
                        </q-item>
                      </q-list>
                    </q-menu>
                  </template>
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientBuletinOfficeHasError"
                  @blur="clientBuletinOfficeHasError = false"
                  @focus="clientBuletinOfficeHasError = false"
                  type="text"
                  label="Buletin eliberat de"
                  what="buletin_office"
                  v-model="clientBuletinOffice">
                </autocomplete-field>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientBuletinDateTillHasError"
                  @blur="clientBuletinDateTillHasError = false"
                  @focus="clientBuletinDateTillHasError = false"
                  type="text"
                  mask="##.##.####"
                  label="Data eliberării"
                  :autocomplete="`off-autocomplete-${uniqId}`"
                  v-model="clientBuletinDateTill">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientFirstNameHasError"
                  @blur="clientFirstNameHasError = false"
                  @focus="clientFirstNameHasError = false"
                  type="text"
                  label="Nume client"
                  what="first_name"
                  v-model="clientFirstName">
                </autocomplete-field>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientLastNameHasError"
                  @blur="clientLastNameHasError = false"
                  @focus="clientLastNameHasError = false"
                  type="text"
                  label="Prenume client"
                  what="last_name"
                  v-model="clientLastName">
                </autocomplete-field>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientPhoneHasError"
                  @blur="clientPhoneHasError = false"
                  @focus="clientPhoneHasError = false"
                  type="text"
                  label="Telefon"
                  :autocomplete="`off-autocomplete-${uniqId}`"
                  v-model="clientPhone">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientEmailHasError"
                  @blur="clientEmailHasError = false"
                  @focus="clientEmailHasError = false"
                  type="email"
                  label="Email"
                  :autocomplete="`off-autocomplete-${uniqId}`"
                  v-model="clientEmail">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientBirthDateHasError"
                  @blur="clientBirthDateHasError = false"
                  @focus="clientBirthDateHasError = false"
                  type="text"
                  mask="##.##.####"
                  label="Data de naștere"
                  :autocomplete="`off-autocomplete-${uniqId}`"
                  v-model="clientBirthDate">
                </q-input>
              </div>

              <div class="col-12 text-primary">Adresa de reședință (buletin)</div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientRegionRegHasError"
                  @blur="clientRegionRegHasError = false"
                  @focus="clientRegionRegHasError = false"
                  type="text"
                  label="Raion"
                  what="region"
                  v-model="clientRegionReg">
                </autocomplete-field>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientLocalitateRegHasError"
                  @blur="clientLocalitateRegHasError = false"
                  @focus="clientLocalitateRegHasError = false"
                  type="text"
                  label="Localitate"
                  what="localitate"
                  v-model="clientLocalitateReg">
                </autocomplete-field>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Strada"
                  what="street"
                  v-model="clientStreetReg">
                </autocomplete-field>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Bloc"
                  :autocomplete="`off-autocomplete-${uniqId}`"
                  v-model="clientHouseReg">
                </q-input>
              </div>
              <div class="col-xl-1 col-lg-1 col-md-1 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Apartament"
                  :autocomplete="`off-autocomplete-${uniqId}`"
                  v-model="clientFlatReg">
                </q-input>
              </div>

              <div class="col-12 text-primary">Adresa domiciliu
                <q-checkbox v-model="clientSameAddresses"
                            label="Adresa domiciliului coincide cu cea de reședință"></q-checkbox>
              </div>
              <div v-if="!clientSameAddresses"
                   class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientRegionHasError"
                  @blur="clientRegionHasError = false"
                  @focus="clientRegionHasError = false"
                  type="text"
                  label="Raion"
                  what="region"
                  v-model="clientRegion">
                </autocomplete-field>
              </div>
              <div v-if="!clientSameAddresses"
                   class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  :error="clientLocalitateHasError"
                  @blur="clientLocalitateHasError = false"
                  @focus="clientLocalitateHasError = false"
                  type="text"
                  label="Localitate"
                  what="localitate"
                  v-model="clientLocalitate">
                </autocomplete-field>
              </div>
              <div v-if="!clientSameAddresses"
                   class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Strada"
                  what="street"
                  v-model="clientStreet">
                </autocomplete-field>
              </div>
              <div v-if="!clientSameAddresses"
                   class="col-xl-2 col-lg-2 col-md-2 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Bloc"
                  :autocomplete="`off-autocomplete-${uniqId}`"
                  v-model="clientHouse">
                </q-input>
              </div>
              <div v-if="!clientSameAddresses"
                   class="col-xl-1 col-lg-1 col-md-1 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Apartament"
                  :autocomplete="`off-autocomplete-${uniqId}`"
                  v-model="clientFlat">
                </q-input>
              </div>

              <div class="col-12 text-primary">Persoana de contact 1</div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Nume"
                  what="first_name"
                  v-model="clientFirstNameContPers1">
                </autocomplete-field>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Prenume"
                  what="last_name"
                  v-model="clientLastNameContPers1">
                </autocomplete-field>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Telefon"
                  :autocomplete="`off-autocomplete-${uniqId}`"
                  v-model="clientPhoneContPers1">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Cine este"
                  what="who_is_cont_pers"
                  v-model="clientWhoIsContPers1">
                </autocomplete-field>
              </div>

              <div class="col-12 text-primary">Persoana de contact 2</div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Nume"
                  what="first_name"
                  v-model="clientFirstNameContPers2">
                </autocomplete-field>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Prenume"
                  what="last_name"
                  v-model="clientLastNameContPers2">
                </autocomplete-field>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <q-input
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Telefon"
                  :autocomplete="`off-autocomplete-${uniqId}`"
                  v-model="clientPhoneContPers2">
                </q-input>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label="Cine este"
                  what="who_is_cont_pers"
                  v-model="clientWhoIsContPers2">
                </autocomplete-field>
              </div>
              <div class="col-12 text-primary">Produsul sau serviciul comercializat</div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs">
                <autocomplete-field
                  dense
                  outlined
                  :disable="!calcResultsExist || disableInputs"
                  type="text"
                  label=""
                  what="client_produs"
                  v-model="clientProdus">
                </autocomplete-field>
              </div>
              <div class="col-5">
                <file-upload module="bid_id"
                             :typeId="`${fileTypeBuletin1}`"
                             @onUploaded="onFileUploaded"
                             :id="0">
                  <template v-slot:button>
                    <q-btn size="md"
                           icon="attach_file"
                           label="Adaugă copia actului de identitate 1"
                           class="q-ma-md"
                    ></q-btn>
                  </template>
                </file-upload>
              </div>
              <div class="col-7 q-pt-md">
                {{
                  fileUploadedResponses[String(fileTypeBuletin1)].name
                    ? fileUploadedResponses[String(fileTypeBuletin1)].name
                    : ''
                }}
              </div>
              <div class="col-5">
                <file-upload module="bid_id"
                             :typeId="`${fileTypeBuletin2}`"
                             @onUploaded="onFileUploaded"
                             :id="0">
                  <template v-slot:button>
                    <q-btn size="md"
                           icon="attach_file"
                           label="Adaugă copia actului de identitate 2"
                           class="q-ma-md"
                    ></q-btn>
                  </template>
                </file-upload>
              </div>
              <div class="col-7 q-pt-md">
                {{
                  fileUploadedResponses[String(fileTypeBuletin2)].name
                    ? fileUploadedResponses[String(fileTypeBuletin2)].name
                    : ''
                }}
              </div>
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 q-pa-xs text-caption">
                <q-checkbox size="sm"
                            :disable="!calcResultsExist || disableInputs"
                            keep-color
                            :color="clientCbHasError ? 'red' : 'primary'"
                            @blur="clientCbHasError = false"
                            @focus="clientCbHasError = false"
                            v-model="clientCb"
                ></q-checkbox>
                <span :class="clientCbHasError ? 'text-red' : 'text-gray-6'">
                  "Accept" confirm că eu: am citit și am acceptat
                  <span class="text-blue"
                        @click="openTermeniConditii"
                        style="text-decoration: underline;cursor: pointer">
                    Termeni și condiții
                  </span>,
                  am dat consimțământul pentru folosirea datelor personale, am evaluat
                  oferta CreditBox
                  <termeni-conditii></termeni-conditii>
                </span>
              </div>
              <div class="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12 q-pa-xs text-right">
                <q-banner class="bg-positive rounded-borders text-white text-left"
                          inline-actions
                          v-if="bidSuccess">
                  {{bidSuccess}}
                  <template v-slot:action>
                    <q-btn flat color="white"
                           @click="bidSuccess = ''"
                           round icon="close" />
                  </template>
                </q-banner>
                <q-banner class="bg-negative rounded-borders text-white text-left"
                          inline-actions
                          v-if="bidError">
                  {{bidError}}
                  <template v-slot:action>
                    <q-btn flat color="white"
                           @click="bidSuccess = ''"
                           round icon="close" />
                  </template>
                </q-banner>
              </div>
              <div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-12 q-pa-xs text-right">
                <q-btn color="primary"
                       size="md"
                       :disable="!calcResultsExist || disableInputs"
                       @click="addNewBid()"
                       label="Trimite"
                ></q-btn>
              </div>
            </div>
          </div>
        </template>

        <template v-slot:separator>
          <q-icon color="indigo-4" size="25px" name="more_vert" />
        </template>

        <template v-slot:after>
          <calculator-right-panel></calculator-right-panel>
        </template>

      </q-splitter>
    </div>
  </q-page>
</template>

<script>
import {
  computed,
  defineComponent,
  onMounted,
  ref,
  watchEffect,
} from 'vue';
import { api } from 'boot/axios';
import {
  calendarLocaleRo,
  dateFormat,
  downloadPDF,
  FILE_TYPE_BULETIN_1,
  FILE_TYPE_BULETIN_2,
  hideLoading,
  showLoading,
  showNotify,
  USER_ROLE_ADMIN,
  USER_ROLE_DEALER,
  USER_ROLE_EXECUTOR,
} from 'src/helpers';
import { useStore } from 'vuex';
import CalculatorRightPanel from 'components/CalculatorRightPanel';
import AutocompleteField from 'components/Fields/AutocompleteField';
import FileUpload from 'components/Fields/FileUpload';
import TermeniConditii from 'components/modals/TermeniConditii';

export default defineComponent({
  name: 'Calculator',
  components: {
    TermeniConditii,
    FileUpload,
    AutocompleteField,
    CalculatorRightPanel,
  },
  setup() {
    const splitterModel = ref(580);
    // 470px
    const $store = useStore();
    const isAdmin = ref(false);
    const isExecutor = ref(false);
    const isDealer = ref(false);
    const authenticated = computed(() => !!$store.getters['auth/getToken']);
    const calcResults = ref(null);
    const uniqId = `id${Math.random().toString(16).slice(2)}`;
    const calcError = ref('');
    const product = ref(null);
    const productOptionsAll = ref([]);
    const productOptions = ref([]);
    const typeCredits = ref(null);
    const creditMonthsOptions = ref([]);
    const typeCreditsSelected = ref({});
    const typeCreditsOptions = ref([]);
    const dealerOptions = ref([]);
    const creditSum = ref(0);
    const creditMonths = ref(0);
    const disableInputs = ref(false);
    const today = new Date();
    const creditDate = ref(dateFormat(today, 'DD.MM.YYYY'));
    const minDate = ref(dateFormat(today, 'YYYY/MM/DD'));
    const maxDate = ref(dateFormat(new Date(today.setMonth(today.getMonth() + 1)), 'YYYY/MM/DD'));
    const calcResultsExist = ref(false);

    const fileTypeBuletin1 = ref(FILE_TYPE_BULETIN_1);
    const fileTypeBuletin2 = ref(FILE_TYPE_BULETIN_2);
    let fileUploadedResponsesObj = {};
    fileUploadedResponsesObj[String(FILE_TYPE_BULETIN_1)] = {};
    fileUploadedResponsesObj[String(FILE_TYPE_BULETIN_2)] = {};
    const fileUploadedResponses = ref({ ...fileUploadedResponsesObj });

    const clientId = ref(0);
    const clientFirstName = ref('');
    const clientFirstNameHasError = ref(false);
    const clientLastName = ref('');
    const clientLastNameHasError = ref(false);
    const clientPhone = ref('');
    const clientPhoneHasError = ref(false);
    const clientEmail = ref('');
    const clientEmailHasError = ref(false);
    const clientBuletinSN = ref('');
    const clientBuletinSNHasError = ref(false);
    const clientBuletinIDNP = ref('');
    const clientBuletinIDNPHasError = ref(false);
    const clientBuletinOffice = ref('');
    const clientBuletinOfficeHasError = ref(false);
    const clientBuletinDateTill = ref('');
    const clientBuletinDateTillHasError = ref(false);
    const clientBirthDate = ref('');
    const clientBirthDateHasError = ref(false);
    const clientRegion = ref('');
    const clientRegionHasError = ref(false);
    const clientLocalitate = ref('');
    const clientLocalitateHasError = ref(false);
    const clientStreet = ref('');
    const clientHouse = ref('');
    const clientFlat = ref('');
    const clientRegionReg = ref('');
    const clientRegionRegHasError = ref(false);
    const clientLocalitateReg = ref('');
    const clientLocalitateRegHasError = ref(false);
    const clientStreetReg = ref('');
    const clientHouseReg = ref('');
    const clientFlatReg = ref('');
    const clientSameAddresses = ref(true);
    const dealer = ref(0);
    const dealerData = ref({});
    const clientWhoIsContPers1 = ref('');
    const clientPhoneContPers1 = ref('');
    const clientLastNameContPers1 = ref('');
    const clientFirstNameContPers1 = ref('');
    const clientProdus = ref('');
    const clientWhoIsContPers2 = ref('');
    const clientPhoneContPers2 = ref('');
    const clientLastNameContPers2 = ref('');
    const clientFirstNameContPers2 = ref('');
    const clientCb = ref(false);
    const clientCbHasError = ref(false);
    const bidError = ref('');
    const bidSuccess = ref('');
    const showBuletinSNDropdown = ref(false);
    const showBuletinIDNPDropdown = ref(false);
    const foundedClients = ref([]);
    const lastFoundedClientIDNP = ref(null);
    const lastFoundedClientSN = ref(null);
    const user = computed(() => $store.getters['auth/getUser']);

    watchEffect(() => {
      isExecutor.value = user.value.role_id === USER_ROLE_EXECUTOR;
      isAdmin.value = user.value.role_id === USER_ROLE_ADMIN;
      isDealer.value = user.value.role_id === USER_ROLE_DEALER;
    });

    const calendarLocaleRoLocal = computed(() => calendarLocaleRo);

    $store.commit('auth/updateActiveModule', 'Calculator');

    const printPreContract = () => {
      downloadPDF(1, '/print/pre-contract', 'pre-contract');
    };

    const clearCalcResults = () => {
      calcResults.value = null;
      disableInputs.value = false;
      calcError.value = '';
      clientId.value = 0;
      clientFirstName.value = '';
      clientLastName.value = '';
      clientPhone.value = '';
      clientEmail.value = '';
      clientBuletinSN.value = '';
      clientBuletinIDNP.value = '';
      clientBuletinOffice.value = '';
      clientBuletinDateTill.value = '';
      clientBirthDate.value = '';
      clientRegion.value = '';
      clientLocalitate.value = '';
      clientStreet.value = '';
      clientHouse.value = '';
      clientFlat.value = '';
      clientRegionReg.value = '';
      clientLocalitateReg.value = '';
      clientStreetReg.value = '';
      clientHouseReg.value = '';
      clientFlatReg.value = '';
      clientSameAddresses.value = true;
      clientCb.value = false;
      clientCbHasError.value = false;
      clientWhoIsContPers1.value = '';
      clientPhoneContPers1.value = '';
      clientLastNameContPers1.value = '';
      clientFirstNameContPers1.value = '';
      clientProdus.value = '';
      clientWhoIsContPers2.value = '';
      clientPhoneContPers2.value = '';
      clientLastNameContPers2.value = '';
      clientFirstNameContPers2.value = '';

      fileUploadedResponsesObj = {};
      fileUploadedResponsesObj[String(FILE_TYPE_BULETIN_1)] = {};
      fileUploadedResponsesObj[String(FILE_TYPE_BULETIN_2)] = {};
      fileUploadedResponses.value = { ...fileUploadedResponsesObj };
    };

    const dealerChanged = () => {
      if (dealer.value) {
        showLoading();
        api.get(`/dealers/get-data-by-id/${dealer.value}`).then((response) => {
          hideLoading();
          if (response.data.success) {
            $store.commit('dealers/updateOpenedDealerData', response.data.data);
            dealerData.value = response.data.data;
            if (dealerData.value.dealer_products) {
              productOptions.value = [];
              Object.keys(dealerData.value.dealer_products).forEach((k) => {
                const productId = dealerData.value.dealer_products[k].product_id;
                productOptionsAll.value.forEach((opt, index) => {
                  if (opt.id === productId) {
                    productOptions.value.push(opt);
                  }
                  if (index === 0) {
                    product.value = productId;
                  }
                });
              });
            }
          } else {
            showNotify({ message: response.data.data.message });
          }
        }).catch((error) => {
          hideLoading();
          showNotify({}, error);
        });
      }
    };

    const productChanged = () => {
      clearCalcResults();
      typeCreditsSelected.value = {};
      creditMonthsOptions.value = [];
      productOptions.value.forEach((v) => {
        if (v && v.id === product.value) {
          typeCreditsOptions.value.forEach((v2) => {
            if (v2 && v2.product_id === v.id) {
              typeCreditsSelected.value = v2;
              creditMonths.value = v2.months_fix;
              creditMonthsOptions.value.push(v2.months_fix);
              creditSum.value = v2.sum_min > 1 ? v2.sum_min : 1000;
            }
          });
        }
      });
    };

    const creditMonthsChanged = () => {
      clearCalcResults();
      productOptions.value.forEach((v) => {
        if (v && v.id === product.value) {
          typeCreditsOptions.value.forEach((v2) => {
            if (v2 && v2.product_id === v.id && creditMonths.value === v2.months_fix) {
              typeCreditsSelected.value = v2;
            }
          });
        }
      });
    };

    const calendarOptions = (dateStr) => {
      if (maxDate.value && minDate.value) {
        // return dateStr >= '2019/02/03' && dateStr <= '2019/02/15';
        return dateStr >= minDate.value && dateStr <= maxDate.value;
      }
      if (maxDate.value) {
        return dateStr <= maxDate.value;
      }
      if (minDate.value) {
        return dateStr <= minDate.value;
      }
      return true;
    };

    const calculate = () => {
      disableInputs.value = true;
      calcError.value = '';
      bidError.value = '';
      bidSuccess.value = '';
      api.post('/type-credits-calculate', {
        sum: creditSum.value,
        date: creditDate.value,
        type: typeCreditsSelected.value.id,
        months: creditMonths.value,
      })
        .then((response) => {
          disableInputs.value = false;
          if (response.data.success) {
            calcResults.value = response.data.data;
          } else {
            calcError.value = response.data.data.message;
          }
        })
        .catch((error) => {
          disableInputs.value = false;
          showNotify({}, error);
        });
    };

    const addNewBid = () => {
      clientCbHasError.value = false;
      if (!clientFirstName.value) {
        clientFirstNameHasError.value = true;
      }
      if (!clientLastName.value) {
        clientLastNameHasError.value = true;
      }
      if (!clientPhone.value) {
        clientPhoneHasError.value = true;
      }
      if (!clientBuletinSN.value) {
        clientBuletinSNHasError.value = true;
      }
      if (!clientBuletinIDNP.value || clientBuletinIDNP.value.length !== 13) {
        clientBuletinIDNPHasError.value = true;
      }
      if (!clientBirthDate.value) {
        clientBirthDateHasError.value = true;
      } else {
        const expl = clientBirthDate.value.split('.');
        if (expl[0] && parseInt(expl[0], 10) > 31) {
          clientBirthDateHasError.value = true;
        }
        if (expl[1] && parseInt(expl[1], 10) > 12) {
          clientBirthDateHasError.value = true;
        }
        if (expl[2] && parseInt(expl[2], 10) < 1930) {
          clientBirthDateHasError.value = true;
        }
        if (expl[2] && parseInt(expl[2], 10) > 2022) {
          clientBirthDateHasError.value = true;
        }
      }
      if (!clientRegion.value && !clientLocalitate.value) {
        clientLocalitateHasError.value = true;
      }
      if (!clientRegionReg.value && !clientLocalitateReg.value) {
        clientLocalitateRegHasError.value = true;
      }
      if (!clientCb.value) {
        clientCbHasError.value = true;
      }
      bidSuccess.value = '';
      bidError.value = '';
      if (!clientFirstNameHasError.value
        && !clientLastNameHasError.value
        && !clientPhoneHasError.value
        && !clientBuletinSNHasError.value
        && !clientBuletinIDNPHasError.value
        && !clientBirthDateHasError.value
        && !clientLocalitateHasError.value
        && !clientLocalitateRegHasError.value
        && !clientRegionHasError.value
        && !clientCbHasError.value
        && calcResultsExist.value
        && typeCreditsSelected.value
        && typeCreditsSelected.value.id
      ) {
        if ((lastFoundedClientIDNP.value && lastFoundedClientIDNP.value !== clientBuletinIDNP.value)
            || (lastFoundedClientSN.value && lastFoundedClientSN.value !== clientBuletinSN.value)
        ) {
          clientId.value = 0;
        }

        const formData = {
          client_id: clientId.value,
          first_name: clientFirstName.value,
          last_name: clientLastName.value,
          phone1: clientPhone.value,
          email: clientEmail.value,
          birth_date: clientBirthDate.value,
          buletin_sn: clientBuletinSN.value,
          buletin_idnp: clientBuletinIDNP.value,
          buletin_office: clientBuletinOffice.value,
          buletin_date_till: clientBuletinDateTill.value,
          localitate: clientLocalitate.value,
          region: clientRegion.value,
          street: clientStreet.value,
          house: clientHouse.value,
          flat: clientFlat.value,
          localitate_reg: clientLocalitateReg.value,
          region_reg: clientRegionReg.value,
          street_reg: clientStreetReg.value,
          house_reg: clientHouseReg.value,
          flat_reg: clientFlatReg.value,
          same_addresses: clientSameAddresses.value,
          dealer: dealer.value,
          who_is_cont_pers1: clientWhoIsContPers1.value,
          phone_cont_pers1: clientPhoneContPers1.value,
          last_name_cont_pers1: clientLastNameContPers1.value,
          first_name_cont_pers1: clientFirstNameContPers1.value,
          who_is_cont_pers2: clientWhoIsContPers2.value,
          produs: clientProdus.value,
          phone_cont_pers2: clientPhoneContPers2.value,
          last_name_cont_pers2: clientLastNameContPers2.value,
          first_name_cont_pers2: clientFirstNameContPers2.value,
          type_credit_id: typeCreditsSelected.value.id,
          type_credit_name: typeCreditsSelected.value.name,
          calc_results: calcResults.value,
          bid_date: creditDate.value,
          months: creditMonths.value,
          imprumut: creditSum.value,
          total_dobinda: calcResults.value.tabelTotal.dobinda,
          total_comision: calcResults.value.tabelTotal.comision,
          total_comision_admin: calcResults.value.tabelTotal.comisionAdmin,
          fileUploadedResponses: fileUploadedResponses.value,
        };
        disableInputs.value = true;
        api.post('/bids/add-or-edit/0', formData).then((response) => {
          disableInputs.value = false;
          if (response.data.success) {
            bidSuccess.value = 'Cererea a fost trimisă cu succes! În scurt timp (5-7min) clientul va primi un apel telefonic';
            clearCalcResults();
            $store.commit('users/updateRefreshGridBidsCalculator', true);
          } else {
            bidError.value = response.data.data.message;
          }
        }).catch((error) => {
          disableInputs.value = false;
          showNotify({}, error);
        });
      }
    };

    const loadProducts = () => {
      api.post('/type-credits-list', {})
        .then((response) => {
          hideLoading();
          if (response.data.success) {
            api.post('/products-list').then((response2) => {
              if (response2.data.success) {
                productOptionsAll.value = response2.data.data.data;
                productOptions.value = response2.data.data.data;
                productOptions.value.forEach((row2, i2) => {
                  if (i2 === 0) {
                    product.value = row2.id;
                    response.data.data.data.forEach((row) => {
                      typeCreditsOptions.value.push(row);
                      if (row.product_id === row2.id) {
                        typeCredits.value = row.id;
                      }
                    });
                  }
                });
              } else {
                showNotify({ message: response.data.data.message });
              }
            }).catch((error) => {
              showNotify({}, error);
            });
          }
        })
        .catch((error) => {
          hideLoading();
          showNotify({}, error);
        });
    };

    watchEffect(() => {
      if (product.value) {
        productChanged();
      }
    });

    watchEffect(() => {
      if (dealer.value) {
        dealerChanged();
      }
    });

    watchEffect(() => {
      calcResultsExist.value = calcResults.value && calcResults.value.tabel;
    });

    onMounted(() => {
      loadProducts();
      api.post('/dealers-list', {})
        .then((response) => {
          hideLoading();
          if (response.data.success) {
            response.data.data.data.forEach((row, i) => {
              dealerOptions.value.push(row);
              if (i === 0) {
                dealer.value = row.id;
              }
            });
          }
        })
        .catch((error) => {
          hideLoading();
          showNotify({}, error);
        });
    });

    const findClientBy = (column) => {
      showBuletinSNDropdown.value = false;
      showBuletinIDNPDropdown.value = false;
      foundedClients.value = [];
      if (column) {
        let filter = column === 'buletin_sn' && clientBuletinSN.value && clientBuletinSN.value.length === 9 ? clientBuletinSN.value : '';
        filter = column === 'buletin_idnp' && clientBuletinIDNP.value && clientBuletinIDNP.value.length === 13 ? clientBuletinIDNP.value : filter;
        if (filter) {
          foundedClients.value = [];
          api.post('/clients-list', { filter, column })
            .then((response) => {
              if (response.data.success) {
                foundedClients.value = response.data.data.data;
                showBuletinSNDropdown.value = column === 'buletin_sn' && foundedClients.value.length > 0;
                showBuletinIDNPDropdown.value = column === 'buletin_idnp' && foundedClients.value.length > 0;
              }
            })
            .catch((error) => {
              showNotify({}, error);
            });
        }
      }
    };

    const selectFoundedClient = (client) => {
      clientId.value = client && client.id ? client.id : 0;
      clientFirstName.value = client && client.first_name ? client.first_name : null;
      clientLastName.value = client && client.last_name ? client.last_name : null;
      clientPhone.value = client && client.phone1 ? client.phone1 : null;
      clientEmail.value = client && client.email ? client.email : null;
      clientBuletinSN.value = client && client.buletin_sn ? client.buletin_sn : null;
      clientBuletinIDNP.value = client && client.buletin_idnp ? client.buletin_idnp : null;
      clientBuletinOffice.value = client && client.buletin_office ? client.buletin_office : null;
      clientBuletinDateTill.value = client && client.buletin_date_till2
        ? client.buletin_date_till2 : null;
      clientBirthDate.value = client && client.birth_date2 ? client.birth_date2 : null;
      clientRegion.value = client && client.region ? client.region : null;
      clientLocalitate.value = client && client.localitate ? client.localitate : null;
      clientStreet.value = client && client.street ? client.street : null;
      clientHouse.value = client && client.house ? client.house : null;
      clientFlat.value = client && client.flat ? client.flat : null;

      lastFoundedClientIDNP.value = clientBuletinIDNP.value;
      lastFoundedClientSN.value = clientBuletinSN.value;
    };

    const onFileUploaded = (fileData) => {
      if (fileData.response.data.data) {
        const t = String(fileData.linkFileToData.type_id);
        fileUploadedResponses.value[t] = fileData.response.data.data;
      }
    };
    const openTermeniConditii = () => {
      $store.commit('bids/updateTermeniConditii', true);
    };

    return {
      isExecutor,
      isAdmin,
      isDealer,
      authenticated,
      typeCredits,
      typeCreditsOptions,
      typeCreditsSelected,
      creditMonths,
      creditSum,
      creditDate,
      disableInputs,
      calendarOptions,
      calendarLocaleRoLocal,
      calculate,
      calcError,
      calcResults,
      calcResultsExist,
      printPreContract,
      clearCalcResults,
      clientFirstName,
      clientFirstNameHasError,
      clientLastName,
      clientLastNameHasError,
      clientPhone,
      clientPhoneHasError,
      clientEmail,
      clientEmailHasError,
      clientBuletinSN,
      clientBuletinSNHasError,
      clientBuletinIDNP,
      clientBuletinIDNPHasError,
      clientBuletinOffice,
      clientBuletinOfficeHasError,
      clientBuletinDateTill,
      clientBuletinDateTillHasError,
      clientBirthDate,
      clientBirthDateHasError,
      clientRegion,
      clientRegionHasError,
      clientLocalitate,
      clientLocalitateHasError,
      clientStreet,
      clientHouse,
      clientFlat,
      clientRegionReg,
      clientRegionRegHasError,
      clientLocalitateReg,
      clientLocalitateRegHasError,
      clientStreetReg,
      clientHouseReg,
      clientFlatReg,
      clientSameAddresses,
      dealer,
      clientWhoIsContPers1,
      clientPhoneContPers1,
      clientLastNameContPers1,
      clientFirstNameContPers1,
      clientProdus,
      clientWhoIsContPers2,
      clientPhoneContPers2,
      clientLastNameContPers2,
      clientFirstNameContPers2,
      clientCb,
      clientCbHasError,
      addNewBid,
      bidError,
      bidSuccess,
      splitterModel,
      openTermeniConditii,
      dealerOptions,
      productOptions,
      product,
      dealerChanged,
      creditMonthsOptions,
      creditMonthsChanged,
      showBuletinSNDropdown,
      showBuletinIDNPDropdown,
      findClientBy,
      foundedClients,
      selectFoundedClient,
      uniqId,
      fileTypeBuletin1,
      fileTypeBuletin2,
      fileUploadedResponses,
      onFileUploaded,
    };
  },
});
</script>

<style scoped>

</style>
