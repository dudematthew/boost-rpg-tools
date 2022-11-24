<script>
  import Entity from '@/components/game-master-panel/Entity'
  import StatModal from '@/components/StatModal'
  import D6Button from '@/components/D6Button'
  import Randomizer from '@/lib/randomizer'
  import names from '@/assets/names.json'
  import AutoConfirmButton from '@/components/AutoConfirmButton'

  import ls from 'local-storage'
  import md5 from 'crypto-js/md5'

  let randomizer = new Randomizer();

  export default {
    name: 'CharacterSheetView',
    components: {
      Entity,
      D6Button,
      StatModal,
      D6Button,
      AutoConfirmButton
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
        groupActionForm: {
          type: 'all',
        },
        throwStatistic: this.chosenPoints.strength,
        showD20Additions: false,
        throwD20Result: 0,
        throwD20Modifier: 0,
        throwD3Result: 0,
        throwD2Result: 0,
        shakeD20: false,
        shakeD3: false,
        shakeD2: false,
        notes: [""],
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

      /**
       * Throw given "dice"
       */
      async throwDX(dice) {
        let randomNumber = await randomizer.getRandomNumber(1, dice);
        let diceThrow = () => {};

        switch (dice) {
          case 2:
            this.shakeD2 = true;
            diceThrow = () => {
              this.throwD2Result = randomNumber;

              this.shakeD2 = false;
            };
            break;

          case 3:
            this.shakeD3 = true;
            diceThrow = () => {
              this.throwD3Result = randomNumber;

              this.shakeD3 = false;
            };
            break;

          case 20:
            this.shakeD20 = true;
            diceThrow = () => {
              this.throwD20Result = parseInt(randomNumber) + parseInt(this.throwD20Modifier);
              this.shakeD20 = false;
            };
            break;

          default:
            break;
        }

        setTimeout(diceThrow, 500);
      },

      addEntity() {

        // Strength and Agility
        let bodyStats = (this.entityForm.combatType != 'magic') ?
          parseInt(this.entityForm.rank) * 4 :
          parseInt(this.entityForm.rank) * 2;

        // inteligence and Focus
        let mindStats = (this.entityForm.combatType != 'magic') ?
          parseInt(this.entityForm.rank) * 2 :
          parseInt(this.entityForm.rank) * 4;

        let newEntity = {
          name: this.entityForm.name == "" ? this.getRandomFantasyName() : this.entityForm.name,
          rank: this.entityForm.rank,
          combatType: this.entityForm.combatType,
          type: this.entityForm.type,
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

      /**
       * Perform action on group of entities
       */
      groupAction(action) {
        console.log("Group ", action);

        let entitiesToRemove = [];
        for (const key in this.entities) {
          let entity = this.entities[key];

          if (this.groupActionForm.type != 'all' && this.groupActionForm.type != entity.type)
            continue;

          actions:
            switch (action) {
              case "kill":
                entity.dead = true;
                break actions;

              case "revive":
                entity.dead = false;
                break actions;

              case "delete":
                entitiesToRemove.push(key);
                break actions;
            }
        };

        if (action != 'delete')
          return;

        // Reverse array to make it remove from right
        // to left
        entitiesToRemove = entitiesToRemove.reverse();

        entitiesToRemove.forEach(innerKey => {
          this.removeEntity(innerKey);
        });
      },

      showStatModal(stat) {
        let chosenPoints = this.chosenPoints;
        this.throwStatistic = {
          ...chosenPoints[stat.id],
          value: stat.value,
        }

        this.$options.childInterface.showStatModal();
      },

      getChildInterface(childInterface) {
        this.$options.childInterface = Object.assign(this.$options.childInterface ?? {}, childInterface);
      },

      removeEntity(key) {
        this.entities.splice(key, 1);
      },

      removeNote(key) {
        this.notes.splice(key, 1);
      },

      cloneEntity(key) {
        let entity = this.entities[key];
        this.entities.push(entity);
      },

      getRandomFantasyName() {
        return names[Math.floor(Math.random() * names.length)];
      },

      getCurrentPanelObject() {
        let panelObject = {};

        panelObject.entities = this.entities;
        panelObject.entityForm = this.entityForm;
        panelObject.groupActionForm = this.groupActionForm;
        panelObject.throwStatistic = this.throwStatistic;
        panelObject.throwD20Result = this.throwD20Result;
        panelObject.throwD20Modifier = this.throwD20Modifier;
        panelObject.throwD6Result = this.throwD6Result;
        panelObject.throwD3Result = this.throwD3Result;
        panelObject.throwD2Result = this.throwD2Result;
        panelObject.notes = this.notes;

        return panelObject;
      },

      installPanelObject(panelObject) {
        this.entities = panelObject.entities ?? this.entities;
        this.entityForm = panelObject.entityForm ?? this.entityForm;
        this.groupActionForm = panelObject.groupActionForm ?? this.groupActionForm;
        this.throwStatistic = panelObject.throwStatistic ?? this.throwStatistic;
        this.throwD20Result = panelObject.throwD20Result ?? this.throwD20Result;
        this.throwD20Modifier = panelObject.throwD20Modifier ?? this.throwD20Modifier;
        this.throwD6Result = panelObject.throwD6Result ?? this.throwD6Result;
        this.throwD3Result = panelObject.throwD3Result ?? this.throwD3Result;
        this.throwD2Result = panelObject.throwD2Result ?? this.throwD2Result;
        this.notes = panelObject.notes ?? this.notes;
      },

      installPanelObjectFromMemory() {
        this.installPanelObject(this.getSavedPanelObject());
      },

      update() {
        this.savePanelObject(this.getCurrentPanelObject());
        console.log("Updating saved panel data...", this.getCurrentPanelObject());
      },

      savePanelObject(panelObject) {
        let stringifiedPanelObject = JSON.stringify(panelObject);

        ls.set('gameMasterPanel', stringifiedPanelObject);
      },

      clearPanelSave() {
        ls.remove('gameMasterPanel');
      },

      getSavedPanelObject() {
        let data = ls.get('gameMasterPanel');
        let returner = {};

        try {
          returner = JSON.parse(data) ?? {};
          console.log("Pobrano panel: ", returner);
        } catch (e) {
          console.log("Nie załadowano panelu:", data, e);
        }

        for (let key in returner.entities) {
          let entity = returner.entities[key];
        }

        return returner;
      },

      savePanel() {
        this.savePanelObject(this.getCurrentPanelObject());
      },

      scrollToTop() {
        let scrollElement = this.$refs.tool;

        scrollElement.scrollIntoView({
          alignToTop: true,
          behavior: 'smooth',
          block: 'start'
        });
      }

    },
    computed: {
      // To avoid using deep watch for entity sorting purposes
      agilityStats() {
        let returner = [];

        this.entities.forEach(entity => {
          returner.push(entity.agility);
        });

        return returner;
      },
      watchChanger() {
        return this.entities +
          this.entityForm +
          this.groupActionFor +
          this.throwStatistic +
          this.showD20Additions +
          this.throwD20Result +
          this.throwD20Modifier +
          this.throwD3Result +
          this.throwD2Result +
          this.shakeD20 +
          this.shakeD3 +
          this.shakeD2 +
          this.notes;
      }
    },
    mounted() {
      this.installPanelObjectFromMemory();
      this.sortEntities();
    },
    watch: {
      agilityStats: {
        handler() {
          this.sortEntities();
        },
      },
      watchChanger: {
        handler() {
          this.update();
        }
      }
    }
  }
</script>

<template>

  <section class="hero is-primary mb-5" ref="tool">
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
              <div class="field is-grouped is-grouped-multiline default mb-2">

                <div class="field has-addons is-gruped mr-2">
                  <div class="control">
                    <button class="button" title="Przełącz modyfikator K20"
                      @click="showD20Additions = !showD20Additions; throwD20Modifier = 0;">
                      <span class="icon is-small">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                      </span>
                    </button>
                  </div>
                  <div class="control" v-if="showD20Additions">
                    <button class="button" @click="throwD20Modifier++" title="Zwiększ modyfikator">
                      <span class="icon is-small">
                        <i class="fa-solid fa-arrow-up"></i>
                      </span>
                    </button>
                  </div>
                  <div class="control" v-if="showD20Additions">
                    <button class="button" @click="throwD20Modifier--" title="Zmniejsz modyfikator">
                      <span class="icon is-small">
                        <i class="fa-solid fa-arrow-down"></i>
                      </span>
                    </button>
                  </div>
                  <div class="control" style="min-width: 60px" v-if="showD20Additions">
                    <input class="input" type="number" placeholder="Modyfikator..." v-model="throwD20Modifier"
                      title="Modyfikator K20">
                  </div>
                  <div class="control">
                    <button class="button" @click="throwDX(20);" title="Rzuć na K20">
                      <span class="icon is-small">
                        <i class="fa-solid fa-dice-d20" :class="{'shake': shakeD20}"></i>
                      </span>
                    </button>
                  </div>
                  <div class="control" style="min-width: 60px">
                    <input class="input" placeholder="Wynik..." v-model="throwD20Result" disabled>
                  </div>
                </div>

                <div class="field mr-2">
                  <div class="control">
                    <D6Button title="Rzuć na K6"></D6Button>
                  </div>
                </div>

                <div class="field has-addons is-gruped mr-2">
                  <div class="control">
                    <button class="button" @click="throwDX(3);" title="Rzuć na K3">
                      <span class="icon is-small">
                        <i class="fa-solid fa-cubes" :class="{'shake': shakeD3}"></i>
                      </span>
                    </button>
                  </div>
                  <div class="control" style="min-width: 60px">
                    <input class="input" placeholder="Wynik..." v-model="throwD3Result" disabled>
                  </div>
                </div>

                <div class="field has-addons is-gruped mr-2">
                  <div class="control">
                    <button class="button" @click="throwDX(2);" title="Rzuć na K2">
                      <span class="icon is-small">
                        <i class="fa-solid fa-circle-half-stroke" :class="{'shake': shakeD2}"></i>
                      </span>
                    </button>
                  </div>
                  <div class="control" style="min-width: 60px">
                    <input class="input" placeholder="Wynik..." v-model="throwD2Result" disabled>
                  </div>
                </div>

              </div>
            </div>

            <div class="field is-child is-12 is-grouped">
              <p class="title is-5">
                Notatki
              </p>
              <button class="button is-success" style="margin-left: 15px; margin-top: -6px" @click="notes.push('')">
                <span class="icon is-small is-danger">
                  <i class="fas fa-plus"></i>
                </span>
              </button>
            </div>

            <div class="tile is-child is-12">
              <div class="field is-grouped mb-2" v-for="(note, key) in notes" :key="key">
                <input type="text" class="input is-fullwidth" rows="1" placeholder="Notatka..." v-model="notes[key]">
                <button class="button is-danger" @click="removeNote(key)" v-if="key > 0">
                  <span class="icon is-small">
                    <i class="fas fa-trash"></i>
                  </span>
                </button>
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

            <div class="tile is-child is-12">
              <p class="title is-5">
                Akcje grupowe
              </p>
            </div>

            <div class="tile is-child is-12">
              <div class="field default is-grouped is-grouped-multiline">

                <div class="field mr-2" style="min-width: 200px">
                  <div class="select" style="width: 100%">
                    <select style="width: 100%" @change="groupActionForm.type = $event.target.value">
                      <option value="enemy" :selected="groupActionForm.type == 'all'">Wszyscy</option>
                      <option value="enemy" :selected="groupActionForm.type == 'enemy'">Wróg</option>
                      <option value="neutral" :selected="groupActionForm.type == 'neutral'">Niezależny</option>
                      <option value="ally" :selected="groupActionForm.type == 'ally'">Przyjaciel</option>
                    </select>
                  </div>
                </div>

                <div class="field mr-2">
                  <div class="control">
                    <button class="button" title="Zabij postacie" @click="groupAction('kill')">
                      <span class="icon is-small">
                        <i class="fa-solid fa-skull"></i>
                      </span>
                    </button>
                  </div>
                </div>
                <div class="field mr-2">
                  <div class="control">
                    <button class="button" title="Wskrześ postacie" @click="groupAction('revive')">
                      <span class="icon is-small">
                        <i class="fa-solid fa-heart-pulse"></i>
                      </span>
                    </button>
                  </div>
                </div>
                <div class="field mr-2">
                  <div class="control">
                    <AutoConfirmButton title="Usuń postacie" :onlyIcon="true" class="is-danger" icon="fa-trash"
                      @confirmClick="groupAction('delete')"></AutoConfirmButton>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div v-if="entities.length <= 0" class="mb-5 is-centered has-text-centered">
          <div class="columns is-centered mt-3 is-fullwidth">
            <div class="column is-one-third-desktop is-one-third-tablet is-one-third-mobile is-offset-4-mobile">
              <figure class="image is-5by4 is-fullwidth has-ratio" style="height: auto">
                <img src="@/assets/entity-placeholder-image.png">
              </figure>
            </div>
          </div>
          <div class="columns is-centered mt-3 mb-0">
            <div class="column">
              <p class="title is-size-4">Nic tu nie ma!</p>
            </div>
          </div>
          <div class="columns is-centered mb-3">
            <div class="column">
              <p class="subtitle is-size-5">Na razie...</p>
            </div>
          </div>
        </div>

        <Entity v-for="(entity, key) in entities" :key="key" :entity="entities[key]"
          @update:entity="value => entities[key] = value" @remove:entity="removeEntity(key)"
          @showStatModal="value => showStatModal(value)" @clone:entity="cloneEntity(key)" />

        <div class="tile is-parent is-12 is-vertical notification is-info mb-5">
          <div class="tile is-child is-12">
            <nav class="level">
              <!-- Left side -->
              <div class="level-left">
                <div class="level-item">
                  <p class="is-family-monospace">Liczba postaci: {{entities.length}}</p>
                </div>
              </div>

              <!-- Right side -->
              <div class="level-right">
                <div class="level-item">
                  <button class="button is-fullwidth is-white" @click="scrollToTop();">
                    <span>Powrót na górę</span>
                  </button>
                </div>
                <div class="level-item">
                  <button class="button is-fullwidth is-warning" @click="clearPanelSave()">
                    <span>Wyczyść zapisane dane</span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>

      </div>
    </div>
  </section>

  <StatModal :throwStatistic="throwStatistic" @interface="getChildInterface"></StatModal>

  <!-- <DamageModal :other="other" :baseHP="chosenPoints.strength.value" @interface="getChildInterface"></DamageModal> -->
</template>