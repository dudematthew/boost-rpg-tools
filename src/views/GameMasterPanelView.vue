<script>
  import Select from '@/components/Select.vue'
  import Entity from '@/components/game-master-panel/Entity'
  import VueMultiselect from 'vue-multiselect'

  import ls from 'local-storage'
  import md5 from 'crypto-js/md5'

  export default {
    name: 'CharacterSheetView',
    components: {
      Entity
    },
    props: [
      'abilityPoints',
      'classList',
      'spellList',
      'backgroundList',
      'chosenPoints',
      'other'
    ],
    data() {
      return {
        entities: [
          {
            name: "Wróg",
            strength: 12,
            agility: 11,
            inteligence: 10,
            focus: 9,
            health: 5,
            mana: 1,
            dead: false,
            type: 'enemy'
          },
          {
            name: "Przyjaciel",
            strength: 12,
            agility: 11,
            inteligence: 10,
            focus: 9,
            health: 5,
            mana: 1,
            dead: false,
            type: 'ally'
          },
        ]
      }
    },
    methods: {
    },
    computed: {
    },
    mounted() {
    },
    watch: {
    }
  }
</script>

<template>

  <section class="hero is-primary mb-5">
    <div class="hero-body">
      <p class="heading">BETA</p>
      <p class="title">
        Panel Mistrza Gry
      </p>
      <p class="subtitle">
        Wszystko czego potrzebujesz do prowadzenia.
      </p>
    </div>
  </section>

  <section>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-12 is-vertical">
        <div class="tile is-child notification is-info">
          <div class="tile is-parent is-12 p-0">

            <div class="tile is-child is-12">
              <p class="title is-4 pb-4">
                Organizator Walki
              </p>
            </div>

            <div class="tile is-child is-12">
              <div class="field is-grouped is-grouped-multiline">

                <div class="select m-1">
                    <select>
                        <option>Wróg</option>
                        <option>Przyjaciel</option>
                        <option>Niezależny</option>
                    </select>
                </div>

                <div class="select m-1">
                    <select>
                        <option>Ranga 1</option>
                        <option>Ranga 2</option>
                        <option>Ranga 3</option>
                        <option>Ranga 4</option>
                        <option>Ranga 5</option>
                        <option>Ranga 6</option>
                        <option>Ranga 7</option>
                    </select>
                </div>

                <div class="select m-1">
                    <select>
                        <option>Magiczny</option>
                        <option>Lekki</option>
                        <option>Ciężki</option>
                    </select>
                </div>

                <div class="control m-1">
                    <button class="button">
                        <span class="icon is-small">
                            <i class="fa-solid fa-plus"></i>
                        </span>
                    </button>
                </div>

              </div>
            </div>
          </div>
        </div>
        <Entity v-for="(entity, key) in entities" :entity="entity" :key="key"></Entity>
      </div>
    </div>
  </section>

  <div class="field">
    <div class="control">
      <button class="button is-fullwidth is-large is-danger mt-3" @click="clearLocalStorage()">
        <span>Wyczyść Zapisane Dane</span>
      </button>
    </div>
  </div>

  <StatModal :throwStatistic="throwStatistic" @interface="getChildInterface"></StatModal>

  <DamageModal :other="other" :baseHP="chosenPoints.strength.value" @interface="getChildInterface"></DamageModal>
</template>