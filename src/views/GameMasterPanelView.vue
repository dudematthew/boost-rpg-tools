<script>
  import Entity from '@/components/game-master-panel/Entity'
  import StatModal from '@/components/StatModal'
  import D6Button from '@/components/D6Button.vue'

  import ls from 'local-storage'
  import md5 from 'crypto-js/md5'

  export default {
    name: 'CharacterSheetView',
    components: {
    Entity,
    D6Button,
    StatModal,
    D6Button
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
        entities: [],
        entityForm: {
          name: '',
          type: 'enemy',
          rank: 1,
          combatType: 'light'
        },
        throwStatistic: this.chosenPoints.strength,
        showD20Additions: false,
      }
    },
    methods: {
      sortEntities() {
        this.entities.sort((a, b) => {
          a = parseInt(a.agility);
          b = parseInt(b.agility);

          if (a < b) return 1;
          else if (a > b) return -1;
          return 0;
        });
      },

      addEntity() {

        console.log(this.entityForm);

        // Strength and Agility
        let bodyStats = (this.entityForm.combatType != 'magic') ?
          parseInt(this.entityForm.rank) * 4 :
          parseInt(this.entityForm.rank) * 2;

        // inteligence and Focus
        let mindStats = (this.entityForm.combatType != 'magic') ?
          parseInt(this.entityForm.rank) * 2 :
          parseInt(this.entityForm.rank) * 4;

        let newEntity = {
          name: this.entityForm.name == "" ? "..." : this.entityForm.name,
          rank: this.entityForm.rank,
          combatType: this.entityForm.combatType,
          type: this.entityForm.type,
          bodyStats() {
            return (this.combatType != 'magic') ?
              parseInt(this.rank) * 4 :
              parseInt(this.rank) * 2;
          },
          mindStats() {
            return (this.combatType != 'magic') ?
              parseInt(this.rank) * 2 :
              parseInt(this.rank) * 4;
          },
          strength: bodyStats,
          agility: bodyStats,
          inteligence: mindStats,
          focus: mindStats,
          health: parseInt(this.entityForm.rank) * 5,
          mana: this.entityForm.rank,
          dead: false,
          notes: "",
          notesHidden: true,
          curses: {
            strength: false,
            agility: false,
            inteligence: false,
            focus: false,
          }
        };

        this.entities.push(newEntity);
      },

      showStatModal(stat) {
        let chosenPoints = this.chosenPoints;
        this.throwStatistic = {
          ...chosenPoints[stat.id],
          value: stat.value,
        }

        console.log("showing: ", stat, this.throwStatistic);

        this.$options.childInterface.showStatModal();
      },

      getChildInterface(childInterface) {
        this.$options.childInterface = Object.assign(this.$options.childInterface ?? {}, childInterface);
      },

      removeEntity(key) {
        console.log("removing: ", key);
        this.entities.splice(key, 1);
      },

      cloneEntity(key) {
        console.log("cloning: ", key);

        let entity = this.entities[key];
        this.entities.push(entity);
      },
      
    },
    computed: {
      // To avoid using deep watch for entity sorting purposes
      agilityStats() {
        let returner = [];

        this.entities.forEach(entity => {
          returner.push(entity.agility);
        });

        return returner;
      }
    },
    mounted() {
      this.sortEntities();
    },
    watch: {
      agilityStats: {
        handler() {
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
          <div class="tile is-parent is-12 p-0 pb-5 mb-5 is-vertical">
  
            <div class="tile is-child is-12">
              <p class="title is-4 mb-2">
                Narzędzia
              </p>
            </div>
  
            <div class="tile is-child is-12">
              <p class="title is-5">
                Rzuty kością
              </p>
            </div>
  
            <div class="tile is-child is-12">
              <div class="field is-grouped is-grouped-multiline">
            
                <div class="field has-addons is-gruped mr-2">
                  <div class="control">
                    <button class="button" @click="showD20Additions = !showD20Additions">
                      <span class="icon is-small">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </span>
                    </button>
                  </div>
                  <div class="control" v-if="showD20Additions">
                    <button class="button">
                      <span class="icon is-small">
                        <i class="fa-solid fa-arrow-up"></i>
                      </span>
                    </button>
                  </div>
                  <div class="control" v-if="showD20Additions">
                    <button class="button">
                      <span class="icon is-small">
                        <i class="fa-solid fa-arrow-down"></i>
                      </span>
                    </button>
                  </div>
                  <div class="control" style="min-width: 60px" v-if="showD20Additions">
                    <input class="input" type="number" placeholder="Modyfikator..." v-model="chosenPoints.agility.currentValue"
                      v-on:change="update()">
                  </div>
                  <div class="control">
                    <button class="button">
                      <span class="icon is-small">
                        <i class="fa-solid fa-dice-d20"></i>
                      </span>
                    </button>
                  </div>
                  <div class="control" style="min-width: 60px">
                    <input class="input" type="number" placeholder="Wynik..." v-model="chosenPoints.agility.currentValue"
                      v-on:change="update()" disabled>
                  </div>
                </div>
            
                <div class="field mr-2">
                  <div class="control">
                    <D6Button></D6Button>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div class="tile is-parent is-12 p-0 is-vertical">
  
            <div class="tile is-child is-12">
              <p class="title is-4 mb-2">
                Organizator Walki
              </p>
            </div>
  
            <div class="tile is-child is-12">
              <p class="title is-5">
                Dodaj postać
              </p>
            </div>
  
            <div class="tile is-child is-12">
              <div class="field is-grouped is-grouped-multiline">
  
                <div class="field has-addons is-gruped mr-2">
                  <p class="control" style="width: 100%; min-width: 120px;">
                    <input class="input" type="text" placeholder="Nazwa postaci"
                      @change="entityForm.name = $event.target.value" @keyup.enter="addEntity()">
                  </p>
                </div>
  
                <div class="field mr-2" style="min-width: 120px">
                  <div class="select" style="width: 100%">
                    <select style="width: 100%" @change="entityForm.type = $event.target.value">
                      <option value="enemy" :selected="entityForm.type == 'enemy'">Wróg</option>
                      <option value="neutral" :selected="entityForm.type == 'neutral'">Niezależny</option>
                      <option value="ally" :selected="entityForm.type == 'ally'">Przyjaciel</option>
                    </select>
                  </div>
                </div>
  
                <div class="field mr-2" style="min-width: 120px">
                  <div class="select" style="width: 100%">
                    <select style="width: 100%" @change="entityForm.rank = $event.target.value">
                      <option v-for="index in 7" :key="index" :value="index" :selected="entityForm.rank == index">Ranga
                        {{index}}</option>
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

        <Entity v-for="(entity, key) in entities" :key="key" :entity="entities[key]"
          @update:entity="value => entities[key] = value" @remove:entity="removeEntity(key)"
          @showStatModal="value => showStatModal(value)"
          @clone:entity="cloneEntity(key)" />

      </div>
    </div>
  </section>

  <!-- <div class="field">
    <div class="control">
      <button class="button is-fullwidth is-large is-danger mt-3" @click="clearLocalStorage()">
        <span>Wyczyść Zapisane Dane</span>
      </button>
    </div>
  </div> -->

  <StatModal :throwStatistic="throwStatistic" @interface="getChildInterface"></StatModal>

  <!-- <DamageModal :other="other" :baseHP="chosenPoints.strength.value" @interface="getChildInterface"></DamageModal> -->
</template>