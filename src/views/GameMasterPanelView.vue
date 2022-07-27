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
            intelligence: 10,
            focus: 9,
            health: 5,
            mana: 1,
            dead: false,
            type: 'enemy',
            dead: false
          },
        ],
        entityForm: {
          name: '',
          type: 'enemy',
          rank: 1,
          combatType: 'light'
        }
      }
    },
    methods: {
      sortEntities () {
        this.entities.sort((a, b) => {
            if (a.agility < b.agility) return 1;
            else if (a.agility > b.agility) return -1;
            return 0;
          });
      },
      addEntity () {

        // Strength and Agility
        let bodyStats = (this.entityForm.combatType != 'magic') ? 
          parseInt(this.entityForm.rank) * 4 :
          parseInt(this.entityForm.rank) * 2;

        // Intelligence and Focus
        let mindStats = (this.entityForm.combatType != 'magic') ?
          parseInt(this.entityForm.rank) * 2 :
          parseInt(this.entityForm.rank) * 4;

        console.log(this.entityForm.combatType, mindStats, bodyStats);

        let newEntity = {
          name: this.entityForm.name,
          strength: bodyStats,
          agility: bodyStats,
          intelligence: mindStats,
          focus: mindStats,
          health: parseInt(this.entityForm.rank) * 5,
          mana: Math.floor(mindStats / 3),
          dead: false,
          type: this.entityForm.type,
          combatType: this.entityForm.combatType
        };

        this.entities.push(newEntity);
      },
      increaseRank () {
        
      }
    },
    computed: {
      // To avoid using deep watch for entity sorting purposes
      agilityStats () {
        let returner = [];

        this.entities.forEach(entity => {
          returner.push(entity.agility);
        });

        console.log(returner);

        return returner;
      }
    },
    mounted() {
      this.sortEntities();

      setInterval(() => {
        console.log(this.entityForm);
      }, 10000);
    },
    watch: {
      agilityStats: {
        handler () {
          this.sortEntities();
        },
      }
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
              <p class="title is-4 pb-4 mb-2">
                Organizator Walki
              </p>
            </div>

            <div class="tile is-child is-12">
              <p class="title is-5 pb-4">
                Dodaj postać
              </p>
            </div>

            <div class="tile is-child is-12">
              <div class="field is-grouped is-grouped-multiline">

                <div class="field has-addons is-gruped mr-2">
                  <p class="control" style="min-width: 120px;">
                      <input class="input" type="text" placeholder="Nazwa postaci" @change="entityForm.name = $event.target.value">
                  </p>
                </div>

                <div class="field mr-2" style="min-width: 120px">
                  <div class="select" style="width: 100%">
                      <select style="width: 100%" @change="entityForm.type = $event.target.value">
                          <option value="enemy" :selected="entityForm.type == 'enemy'">Wróg</option>
                          <option value="ally" :selected="entityForm.type == 'neutral'">Niezależny</option>
                          <option value="neutral" :selected="entityForm.type == 'ally'">Przyjaciel</option>
                      </select>
                  </div>
                </div>

                <div class="field mr-2" style="min-width: 120px">
                  <div class="select" style="width: 100%">
                      <select style="width: 100%" @change="entityForm.rank = $event.target.value">
                        <option v-for="index in 7" :key="index" :value="index" :selected="entityForm.rank == index">Ranga {{index}}</option>
                      </select>
                  </div>
                </div>

                <div class="field mr-2" style="min-width: 120px">
                  <div class="select mr-3" style="width: 100%">
                      <select style="width: 100%" @change="entityForm.combatType = $event.target.value">
                          <option value="light" :selected="entityForm.combatType == 'light'">Lekki</option>
                          <option value="heavy" :selected="entityForm.combatType == 'heavy'">Ciężki</option>
                          <option value="magic" :selected="entityForm.combatType == 'magic'">Magiczny</option>
                      </select>
                  </div>
                </div>

                <div class="field mr-2">
                  <div class="control">
                      <button class="button" title="Dodaj postać" @click="addEntity()">
                          <span class="icon is-small">
                              <i class="fa-solid fa-plus"></i>
                          </span>
                      </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <Entity v-for="(entity, key) in entities" :key="key" :entity="entities[key]" @update:entity="value => entities[key] = value" />
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