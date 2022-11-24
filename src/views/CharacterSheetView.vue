<script>
  import StatModal from '@/components/StatModal.vue'
  import DamageModal from '@/components/character-sheet/DamageModal.vue'
  import CharacterManagerModal from '@/components/character-sheet/CharacterManagerModal.vue'
  import Select from '@/components/Select.vue'
  import SpellSelect from '@/components/character-sheet/SpellSelect.vue'
  import names from '@/assets/names.json'

  import Randomizer from '@/lib/randomizer'
  import ls from 'local-storage'
  import md5 from 'crypto-js/md5'

  let randomizer = new Randomizer();

  export default {
    name: 'CharacterSheetView',
    components: {
      StatModal,
      DamageModal,
      CharacterManagerModal,
      Select,
      SpellSelect
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
        passedCharacter: null,
        memoryCharacterList: {},
        throwStatistic: this.chosenPoints.strength, // default
        mounted: false,
        test: null,
        throwModifier: 0,
        shakeD20: false,
        shakeD6: false,
        shakeD3: false,
        shakeD2: false
      }
    },
    methods: {
      async throwDX(dice) {
        console.log("Odpalam rzut...");
        let randomNumber = await randomizer.getRandomNumber(1, dice);
        let diceThrow = () => {};

        switch (dice) {
          case 2:
            this.shakeD2 = true;
            diceThrow = () => {
              this.shakeD2 = false;
            };
            break;

          case 3:
            this.shakeD3 = true;
            diceThrow = () => {
              this.shakeD3 = false;
            };
            break;

          case 6:
            this.shakeD6 = true;
            diceThrow = () => {
              this.shakeD6 = false;
            };
            break;

          case 20:
            this.shakeD20 = true;
            diceThrow = () => {
              this.shakeD20 = false;
            };
            break;

          default:
            break;
        }

        setTimeout(() => {
          let throwResult = parseInt(randomNumber) + parseInt(this.throwModifier);
          let modifierText = (this.throwModifier == 0) ? '' : (this.throwModifier > 0) ?
            `+${this.throwModifier}` : `${this.throwModifier}`;
          this.other.throws = `[🎲] Rzut K${dice}${modifierText}: ${throwResult}\n` + this.other.throws.trim();
          diceThrow();
          this.cutThrows();
          this.update();
        }, 500);
      },

      cutThrows() {
        let tempThrows = this.other.throws.split('\n');

        tempThrows = tempThrows.slice(0, 20);

        tempThrows = tempThrows.join('\n');

        this.other.throws = tempThrows;
      },

      /**
       * Loads Character from an object to the
       * memory
       */
      setupCharacter(character) {
        if (typeof character !== 'object') {
          console.error("Provided character is not an object");
          return;
        } else
          console.log("Installing from object: ", character);

        // Unpack all character attributes to memory
        for (let attribute in character) {
          if (!!character[attribute])
            for (let innerAttribute in character[attribute]) {
              this[attribute][innerAttribute] = character[attribute][innerAttribute];
            }
        }

        // Add skills if empty
        try {
          this.other.skills = character.other.skills ?? "";
        } catch (error) {
          this.other.skills = "";
        }

        if (this.other.skills == "")
          this.addSkills();

        // Add inventory if empty
        try {
          this.other.inventory = character.other.inventory ?? "";
        } catch (error) {
          this.other.inventory = "";
        }

        if (this.other.inventory == "")
          this.addInventory();

      },

      /**
       * Remove Character 
       */
      deleteCharacter(characterId) {
        console.log("Removing ", characterId);

        let charactersList = this.loadCharactersList();

        delete charactersList[characterId];

        this.memoryCharacterList = charactersList;

        if (this.other.id == characterId) {
          console.log("Usunięto aktualnie wybraną postać");
          this.cleanInputs();
        }

        let stringifiedList = JSON.stringify(charactersList);

        ls.set('characterList', stringifiedList);
      },

      deleteAllCharacters() {
        for (let characterId in this.memoryCharacterList) {
          this.deleteCharacter(characterId);
        }
      },

      /**
       * Creates new character with random name
       * and saves it 
       */
      newCharacter() {
        this.cleanInputs();
        this.other.name = this.getRandomFantasyName();
        let newId = this.generateId(this.getCurrentCharacter());

        this.other.id = newId;
        console.log("Generated id: ", newId);
        this.saveCurrentCharacterToList();

        this.memoryCharacterList = this.loadCharactersList();
      },

      getRandomFantasyName() {
        return names[Math.floor(Math.random() * names.length)];
      },

      duplicateCharacter(characterId) {
        let characters = this.loadCharactersList();

        let characterToSave = characters[characterId];

        characterToSave.other.id = this.generateId(characterToSave);

        this.saveCharacterToList(characterToSave, characterToSave.other.id);

        this.memoryCharacterList = this.loadCharactersList();
      },

      /**
       * Get stringified current character but
       * also set id of current character if doesn't
       * exist
       */
      getStringifiedCurrentCharacter() {

        let character = this.getCurrentCharacter();

        this.setupId();

        character.other.id = this.other.id;

        return JSON.stringify(character);
      },

      // Set all inputs except name to empty
      cleanInputs() {
        for (let pointId in this.chosenPoints) {
          let point = this.chosenPoints[pointId];

          point.value = 0;
          point.currentValue = 0;
        }

        this.other.throws = "";
        this.other.level = 1;
        this.other.notes = "";
        this.other.skills = "";
        this.other.inventory = "";

        for (let cClassId in this.classList) {
          let cClass = this.classList[cClassId];

          cClass.chosen = false;
        }

        for (let spellId in this.spellList) {
          let spell = this.spellList[spellId];

          spell.chosen = false;
        }

        for (let backgroundId in this.backgroundList) {
          let background = this.backgroundList[backgroundId];

          background.chosen = false;
        }
      },

      // Get current character attributes bundled to object
      getCurrentCharacter() {
        return {
          chosenPoints: this.chosenPoints ?? {},
          classList: this.classList ?? {},
          spellList: this.spellList ?? {},
          backgroundList: this.backgroundList ?? {},
          other: this.other ?? {}
        };
      },

      /**
       *  Save character object to Local Storage 
       *  under it's id
       */
      saveCharacterToList(character, id) {
        let charactersList = this.loadCharactersList();

        charactersList[id] = character;

        this.memoryCharacterList = charactersList;

        let stringifiedList = JSON.stringify(charactersList);

        ls.set('characterList', stringifiedList);
      },

      loadCharactersList() {
        let data = ls.get('characterList');
        let returner = {};

        try {
          returner = JSON.parse(data) ?? {};
          console.log("Pobrano listę: ", returner);
        } catch (e) {
          console.log("Nie załadowano listy:", data, e);
        }

        // Update memory character list with newest
        this.memoryCharacterList = returner;
        console.log("Memory character list: ", this.memoryCharacterList);

        return returner;
      },

      saveCurrentCharacterToList() {
        console.log("Updating character and saving to list...");
        let character = this.getCurrentCharacter();
        this.setupId();
        let id = this.other.id;

        this.saveCharacterToList(character, id);
        this.saveCurrentCharacterId(id);
      },

      loadCurrentCharacterId() {
        return ls.get('currentCharacterId') ?? null;
      },

      saveCurrentCharacterId(id) {
        ls.set('currentCharacterId', id);
      },

      loadCharacter(id) {
        let characters = this.loadCharactersList();

        for (let cId in characters) {
          if (!!cId == !!id)
            return characters[cId];
        }

        return null;
      },

      chooseCharacter(characterId) {
        this.memoryCharacterList = this.loadCharactersList();
        let characterObject = this.memoryCharacterList[characterId];
        console.log("Choosing: ", characterObject, characterId);
        this.setupCharacter(characterObject);
      },

      loadCurrentCharacter() {
        let id = this.loadCurrentCharacterId();
        return (!id) ? null : this.loadCharacter(id);
      },

      drawStat(statId) {
        this.throwStatistic = this.chosenPoints[statId];
        this.$options.childInterface.showStatModal();
      },

      harm() {
        this.$options.childInterface.showDamageModal();
      },

      showSavedCharacters() {
        this.$options.childInterface.showCharacterManagerModal();
      },

      getChildInterface(childInterface) {
        console.log(childInterface);

        this.$options.childInterface = Object.assign(this.$options.childInterface ?? {}, childInterface);

        console.log("childInterface: ", this.$options.childInterface);

        // this.$options.childInterface = childInterface;
      },

      addInventory() {
        this.correctClassChoice();
        this.correctBackgroundChoice();

        this.other.inventory = this.other.inventory ?? "";
        this.chosenClass.inventory.concat(this.chosenBackground.inventory).forEach(item => {
          this.other.inventory = this.other.inventory.trim();
          this.other.inventory += `\n• ${item}`;
        });

        this.update();
      },

      addSkills() {
        this.correctClassChoice();
        this.correctBackgroundChoice();

        this.other.skills = this.other.skills ?? "";
        this.other.skills = this.other.skills.trim();

        this.other.skills += `\n• ${this.chosenClass.ability}`;
        this.other.skills += `\n• ${this.chosenBackground.description}`;

        for (let sId in this.spellList) {
          if (this.spellList[sId].chosen)
            this.other.skills += `\n• ${this.spellList[sId].name} - ${this.spellList[sId].description}`;
        }

        this.other.skills = this.other.skills.trim();
        
        this.update();
      },

      addDot(formType) {
        this.other[formType] = this.other[formType] ?? "";
        this.other[formType] = this.other[formType].trim() + '\n• ';
        this.other[formType] = this.other[formType].trim();

        this.update();
      },

      setupId() {
        this.other.id = this.other.id ?? this.generateId(this.getCurrentCharacter);
      },

      generateId(object) {
        console.log("???", object);
        return md5(JSON.stringify(object) + Math.random()).toString();
      },

      // If no class is chosen, default to warrior
      correctClassChoice() {
        console.log("Wybrana klasa: ", this.chosenClass);
        if (!this.chosenClass) {
          this.classList.warrior.chosen = true;
        }
      },

      // Remove characterList from Local Storage
      clearLocalStorage() {
        ls.remove('characterList');
        console.log("Usunięto! Pamięć: ", ls.get('characterList'));
      },

      // If no background is chosen, default to craftsman
      correctBackgroundChoice() {
        if (!this.chosenBackground) {
          this.backgroundList.craftsman.chosen = true;
        }
      },

      // Fired when user chooses class from select
      onClassSelect() {
        this.correctClassChoice();
        this.clearSpellChoices();
      },

      clearSpellChoices () {
        console.log("Clearing spells choices");
        for (let key in this.spellList) {
            this.spellList[key].chosen = false;
        }
      },

      update() {
        if (this.mounted) {
          this.saveCurrentCharacterToList();
        }
      },

    },
    computed: {
      chosenClass() {
        for (let cId in this.classList) {
          if (this.classList[cId].chosen)
            return this.classList[cId];
        }
        return null;
      },

      availableSpells() {
        if (!!this.chosenClass)
          return this.chosenClass.availableSpells;
        else
          return [];
      },

      spellAmount() {
        if (!!this.chosenClass)
          return this.chosenClass.spellAmount;
        else
          return 0;
      },

      chosenBackground() {
        for (let bId in this.backgroundList) {
          if (this.backgroundList[bId].chosen)
            return this.backgroundList[bId];
        }
      },

      classListArray() {
        let newVal = this.classList;

        for (let cId in this.classList) {
          newVal[cId].id = cId;
        }

        return Object.values(newVal);
      }
    },
    mounted() {

      // Future completion of data
      if (typeof this.$route.params.character !== "undefined")
        this.passedCharacter = JSON.parse(this.$route.params.character) ?? null;

      if (!!this.passedCharacter) {

        console.log("Przekazano postać!", this.passedCharacter);

        this.passedCharacter.other = this.passedCharacter.other ?? {};
        this.passedCharacter.other.id = this.generateId(this.passedCharacter);

        this.setupCharacter(this.passedCharacter);

        // Generate current stats based on main stats
        for (let statId in this.chosenPoints) {
          this.chosenPoints[statId].currentValue = this.chosenPoints[statId].value;
        }

        this.saveCurrentCharacterToList();
        this.saveCurrentCharacterId(this.other.id);

      } else {

        let loadedCurrentCharacter = this.loadCurrentCharacter();

        if (!!loadedCurrentCharacter) {
          if (!!loadedCurrentCharacter) {
            this.setupCharacter(loadedCurrentCharacter);
          }
        } else {
          // Generate current stats based on main stats
          for (let statId in this.chosenPoints) {
            this.chosenPoints[statId].currentValue = this.chosenPoints[statId].value;
          }
        }

      }

      // Set stats starting value based on other stats
      this.other.currentHP = this.chosenPoints.strength.value;
      this.other.currentMP = this.chosenPoints.focus.value / 3;
      this.other.currentBst = this.chosenPoints.inteligence.value / 3;

      this.correctClassChoice();
      this.correctBackgroundChoice();

      this.mounted = true;
    },

    watch: {
      // Keep proper 'other' values an integer
      other: {
        handler (other) {
          other.currentHP = parseInt(other.currentHP);
          other.currentMP = parseInt(other.currentMP);
          other.currentBst = parseInt(other.currentBst);
          other.level = parseInt(other.level);

          return other;
        },
        deep: true
      },
      // Keep proper 'chosenPoints' values an integer
      chosenPoints: {
        handler (points) {
          for (let pointKey in points) {
            points[pointKey].currentValue = parseInt(points[pointKey].currentValue);
          }

          return points;
        },
        deep: true
      },
    }
  }
</script>

<template>

  <section class="hero is-primary mb-5">
    <div class="hero-body">
      <p class="title">
        Karta Postaci
      </p>
      <p class="subtitle">
        Nie masz przy sobie kartki?
      </p>
    </div>
  </section>

  <section>
    <div class="field mb-5">
      <div class="control" v-if="Object.keys(memoryCharacterList).length > 1">
        <div class="select is-medium is-info is-fullwidth pl-2 pr-2" style="min-width: 50%">
          <select style="width: 100%" @change="chooseCharacter($event.target.value)">
            <template v-for="(character, key) in memoryCharacterList" :key="key">
              <option :value="key" :selected="key == this.other.id">{{character.other.name}} [{{key.slice(0, 6)}}]
              </option>
            </template>
          </select>
        </div>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-vertical">
        <div class="tile is-child notification is-info">
          <div class="tile is-parent is-12">
            <div class="tile is-child is-6 p-2">
              <label class="label is-medium is-size-3">Imię postaci</label>
              <div class="control mb-3">
                <input class="input is-large" type="text" v-model="other.name" v-on:change="update()"
                  placeholder="Nadaj imię by zacząć...">
              </div>
            </div>
            <div class="tile is-child is-6 p-2">
              <label class="label is-medium is-size-3">Poziom</label>
              <div class="control mb-3">
                <input class="input is-large" type="number" v-model="other.level" v-on:change="update()">
              </div>
            </div>
          </div>
          <div class="tile is-parent is-12">
            <div class="tile is-child is-6 p-2">
              <label class="label is-medium is-size-3">Klasa</label>
              <div class="control mb-3">
                <div class="select is-fullwidth is-large is-size-4 has-text-weight-medium">
                  <Select :data="classList" label="name" switchAttrib="chosen" v-on:change="update(); onClassSelect();"></Select>
                </div>
              </div>
            </div>
            <div class="tile is-child is-6 p-2">
              <label class="label is-medium is-size-3">Tło fabularne</label>
              <div class="control mb-3">
                <div class="select is-fullwidth is-large is-size-4 has-text-weight-medium">
                  <Select :data="backgroundList" label="name" switchAttrib="chosen" v-on:change="update();"></Select>
                </div>
                <!-- <div class="select is-fullwidth is-large">
                  <select>
                    <option v-for="(background, bName) in backgroundList" :key="bName" v-on:change="update()">
                      {{background.name}}
                    </option>
                  </select>
                </div> -->
              </div>
            </div>
          </div>
          <div class="tile is-parent is-12" v-if="availableSpells.length != 0">
            <div class="tile is-child is-12 p-2">
              <label class="label is-medium is-size-3">Zaklęcia</label>
              <SpellSelect :spellList="spellList" :availableSpells="availableSpells"
                :spellAmount="spellAmount" @change="update()"></SpellSelect>
            </div>
          </div>
        </div>
        <div class="tile is-child notification is-warning ">
          <div class="tile is-parent is-12">
            <div class="tile is-child is-4 p-2">

              <label class="label is-medium is-size-3 has-text-black">Siła</label>
              <div class="field has-addons">
                <div class="control">
                  <input class="input is-large" type="number" placeholder="Bazowa..."
                    v-model="chosenPoints.strength.value" v-on:change="update()">
                </div>
                <div class="control">
                  <input class="input is-large" type="number" placeholder="Aktualna..."
                    v-model="chosenPoints.strength.currentValue" v-on:change="update()">
                </div>
                <div class="control">
                  <button class="button is-large" @click="drawStat('strength')">
                    <span class="icon is-small">
                      <i class="fa-solid fa-dice-d20"></i>
                    </span>
                  </button>
                </div>
              </div>

            </div>
            <div class="tile is-child is-4 p-2">

              <label class="label is-medium is-size-3 has-text-black">Zręczność</label>
              <div class="field has-addons">
                <div class="control">
                  <input class="input is-large" type="number" placeholder="Bazowa..."
                    v-model="chosenPoints.agility.value" v-on:change="update()">
                </div>
                <div class="control">
                  <input class="input is-large" type="number" placeholder="Aktualna..."
                    v-model="chosenPoints.agility.currentValue" v-on:change="update()">
                </div>
                <div class="control">
                  <button class="button is-large" @click="drawStat('agility')">
                    <span class="icon is-small">
                      <i class="fa-solid fa-dice-d20"></i>
                    </span>
                  </button>
                </div>
              </div>


            </div>
            <div class="tile is-child is-4 p-2">

              <label class="label is-medium is-size-3 has-text-black">Inteligencja</label>
              <div class="field has-addons">
                <div class="control">
                  <input class="input is-large" type="number" placeholder="Bazowa..."
                    v-model="chosenPoints.inteligence.value" v-on:change="update()">
                </div>
                <div class="control">
                  <input class="input is-large" type="number" placeholder="Aktualna..."
                    v-model="chosenPoints.inteligence.currentValue" v-on:change="update()">
                </div>
                <div class="control">
                  <button class="button is-large" @click="drawStat('inteligence')">
                    <span class="icon is-small">
                      <i class="fa-solid fa-dice-d20"></i>
                    </span>
                  </button>
                </div>
              </div>

            </div>
          </div>
          <div class="tile is-parent is-12">
            <div class="tile is-child is-4 p-2">

              <label class="label is-medium is-size-3 has-text-black">Skupienie</label>
              <div class="field has-addons">
                <div class="control">
                  <input class="input is-large" type="number" placeholder="Bazowa..." v-model="chosenPoints.focus.value"
                    v-on:change="update()">
                </div>
                <div class="control">
                  <input class="input is-large" type="number" placeholder="Aktualna..."
                    v-model="chosenPoints.focus.currentValue" v-on:change="update()">
                </div>
                <div class="control">
                  <button class="button is-large" @click="drawStat('focus')">
                    <span class="icon is-small">
                      <i class="fa-solid fa-dice-d20"></i>
                    </span>
                  </button>
                </div>
              </div>

            </div>
            <div class="tile is-child is-4 p-2">

              <label class="label is-medium is-size-3 has-text-black">Żywotność</label>
              <div class="field has-addons">
                <div class="control">
                  <input class="input is-large" type="number" placeholder="Bazowa..."
                    :value="chosenPoints.strength.value" disabled>
                </div>
                <div class="control">
                  <input class="input is-large" type="number" placeholder="Aktualna..." v-model="other.currentHP"
                    v-on:change="update()">
                </div>
                <div class="control">
                  <button class="button is-large" @click="harm()">
                    <span class="icon is-small">
                      <i class="fa-solid fa-heart-crack"></i>
                    </span>
                  </button>
                </div>
              </div>


            </div>
            <div class="tile is-child is-4 p-2">

              <label class="label is-medium is-size-3 has-text-black">Mana</label>
              <div class="field has-addons">
                <div class="control">
                  <input class="input is-large" type="number" placeholder="Bazowa..."
                    :value="Math.floor(chosenPoints.focus.value / 3)" disabled>
                </div>
                <div class="control">
                  <input class="input is-large" type="number" placeholder="Aktualna..." v-model="other.currentMP"
                    v-on:change="update()">
                </div>
                <div class="control">
                  <button class="button is-large" @click="if (other.currentMP > 0) other.currentMP--;">
                    <span class="icon is-small">
                      <i class="fa-solid fa-wand-sparkles"></i>
                    </span>
                  </button>
                </div>
              </div>

            </div>
          </div>
          <div class="tile is-parent is-12">
            <div class="tile is-child is-4 p-2">

              <label class="label is-medium is-size-3 has-text-black">Boostery</label>
              <div class="field has-addons">
                <div class="control">
                  <input class="input is-large" type="number" placeholder="Bazowe..."
                    :value="Math.floor(chosenPoints.inteligence.value / 3)" disabled>
                </div>
                <div class="control">
                  <input class="input is-large" type="number" placeholder="Aktualne..." v-model="other.currentBst"
                    v-on:change="update()">
                </div>
                <div class="control">
                  <button class="button is-large" @click="if (other.currentBst > 0) other.currentBst--;">
                    <span class="icon is-small">
                      <i class="fa-solid fa-plug-circle-bolt"></i>
                    </span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div class="tile is-child notification is-success">
          <div class="tile is-parent is-12">
            <div class="tile is-child is-6 p-2">
              <label class="label is-medium is-size-3">Umiejętności</label>
              <div class="control">
                <textarea class="textarea is-medium is-fullwidth" placeholder="Umiejętności..." v-model="other.skills"
                  v-on:change="update()" style="min-height: 172px"></textarea>
              </div>
              <div class="field has-addons">
                <div class="control" style="width: 50%">
                  <a class="button is-fullwidth" title="Dodaj punkt" @click="addDot('skills')">
                    <span class="icon is-small">
                      <i class="fa-solid fa-circle"></i>
                    </span>
                  </a>
                </div>
                <div class="control" style="width: 50%">
                  <a class="button is-fullwidth" title="Uzupełnij automatycznie" @click="addSkills()">
                    <span class="icon is-small">
                      <i class="fa-solid fa-file-arrow-down"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="tile is-child is-6 p-2">
              <label class="label is-medium is-size-3">Ekwipunek</label>
              <div class="control">
                <textarea class="textarea is-medium is-fullwidth" placeholder="Ekwipunek..." v-model="other.inventory"
                  v-on:change="update()" style="min-height: 172px"></textarea>
              </div>
              <div class="field has-addons">
                <div class="control" style="width: 50%">
                  <a class="button is-fullwidth" title="Dodaj punkt" @click="addDot('inventory')">
                    <span class="icon is-small">
                      <i class="fa-solid fa-circle"></i>
                    </span>
                  </a>
                </div>
                <div class="control" style="width: 50%">
                  <a class="button is-fullwidth" title="Uzupełnij automatycznie" @click="addInventory()">
                    <span class="icon is-small">
                      <i class="fa-solid fa-file-arrow-down"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="tile is-parent is-12">
            <div class="tile is-child is-6 p-2">
              <label class="label is-medium is-size-3">Notatki</label>
              <div class="control">
                <textarea class="textarea is-medium is-fullwidth" placeholder="Notatki..." v-model="other.notes"
                  v-on:change="update()" style="min-height: 172px"></textarea>
              </div>
              <div class="field">
                <div class="control" style="width: 100%">
                  <a class="button is-fullwidth" title="Dodaj punkt" @click="addDot('notes')">
                    <span class="icon is-small">
                      <i class="fa-solid fa-circle"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div class="tile is-child is-6 p-2">
              <label class="label is-medium is-size-3">Rzuty Kością</label>
              <div class="tile is-child is-12">
                <div class="field is-grouped is-grouped-multiline default mb-1">

                  <div class="field has-addons is-gruped mr-2 mb-1">
                    <div class="control">
                      <button class="button" @click="throwModifier++" title="Zwiększ modyfikator">
                        <span class="icon is-small">
                          <i class="fa-solid fa-arrow-up"></i>
                        </span>
                      </button>
                    </div>
                    <div class="control">
                      <button class="button" @click="throwModifier--" title="Zmniejsz modyfikator">
                        <span class="icon is-small">
                          <i class="fa-solid fa-arrow-down"></i>
                        </span>
                      </button>
                    </div>
                    <div class="control">
                      <button class="button" @click="throwModifier = 0" title="Wyczyść modyfikator">
                        <span class="icon is-small">
                          <i class="fa-solid fa-broom"></i>
                        </span>
                      </button>
                    </div>
                    <div class="control" style="min-width: 60px; max-width: 90px">
                      <input class="input" type="number" placeholder="Modyfikator..." v-model="throwModifier"
                        title="Modyfikator">
                    </div>
                  </div>

                  <div class="field has-addons is-gruped mr-2">
                    <div class="control">
                      <button class="button" @click="throwDX(20);" title="Rzuć na K20">
                        <span class="icon is-small">
                          <i class="fa-solid fa-dice-d20" :class="{'shake': shakeD20}"></i>
                        </span>
                      </button>
                    </div>
                    <div class="control">
                      <button class="button" @click="throwDX(6);" title="Rzuć na K6">
                        <span class="icon is-small">
                          <i class="fa-solid fa-dice-d6" :class="{'shake': shakeD6}"></i>
                        </span>
                      </button>
                    </div>
                    <div class="control">
                      <button class="button" @click="throwDX(3);" title="Rzuć na K3">
                        <span class="icon is-small">
                          <i class="fa-solid fa-cubes" :class="{'shake': shakeD3}"></i>
                        </span>
                      </button>
                    </div>
                    <div class="control">
                      <button class="button" @click="throwDX(2);" title="Rzuć na K2">
                        <span class="icon is-small">
                          <i class="fa-solid fa-circle-half-stroke" :class="{'shake': shakeD2}"></i>
                        </span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
              <div class="control mt-2">
                <textarea class="textarea is-medium is-fullwidth" placeholder="Notatki..." v-model="other.throws"
                  v-on:change="update()" disabled></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="field">
    <div class="field">
      <button class="button is-fullwidth is-medium has-background-black has-text-white is-warning mt-3"
        @click="showSavedCharacters()">
        <span>Zarządzaj Zapisanymi Bohaterami</span>
      </button>
    </div>
  </div>

  <StatModal :throwStatistic="throwStatistic" @interface="getChildInterface"></StatModal>

  <DamageModal :other="other" :baseHP="chosenPoints.strength.value" @interface="getChildInterface"></DamageModal>

  <CharacterManagerModal :other="other" :memoryCharacterList="memoryCharacterList" @interface="getChildInterface"
    @chooseCharacter="chooseCharacter" @deleteCharacter="deleteCharacter" @deleteAllCharacters="deleteAllCharacters"
    @newCharacter="newCharacter" @duplicateCharacter="duplicateCharacter"></CharacterManagerModal>
</template>