<script>
  import StatModal from '@/components/character-sheet/StatModal.vue'

  import Cookies from 'js-cookie'
  import md5 from 'crypto-js/md5'

  export default {
    name: 'CharacterSheetView',
    components: {
      StatModal
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
        throwStatistic: this.chosenPoints.strength, // default
        mounted: false,
      }
    },
    methods: {
      /**
       * Loads Character from an object to the
       * memory
       */
      setupCharacter(character) {
        if (typeof character !== 'object') {
          console.error("Provided character is not an object");
          return;
        }

        // Unpack all character attributes to memory
        for (let attribute in character) {
          console.log("attrib:", attribute);
          if (!!character[attribute])
            for (let innerAttribute in character[attribute]) {
              this[attribute][innerAttribute] = character[attribute][innerAttribute];
            }
        }
        console.log("character: ", character);

        // Add skills if empty
        try {
          this.other.skills = character.other.skills;
        } catch (error) {
          this.other.skills = "";
        }
        this.addSkills();

        // Add inventory if empty
        try {
          this.other.inventory = character.other.inventory;
        } catch (error) {
          this.other.inventory = "";
        }
        this.addInventory();

      },
      /**
       * Get stringified current character but
       * also set id of current character if doesn't
       * exist
       */
      getStringifiedCurrentCharacter () {
        
        let character = this.getCurrentCharacter();

        this.setupId();

        character.other.id = this.other.id;

        return JSON.stringify(character);
      },

      getCurrentCharacter() {
        return {
          chosenPoints: this.chosenPoints ?? {},
          classList: this.classList ?? {},
          spellList: this.spellList ?? {},
          backgroundList: this.backgroundList ?? {},
          other: this.other ?? {}
        };
      },

      saveCharacterToList (character, id) {
        let charactersList = this.loadCharactersList();

        charactersList[id] = character;

        let stringifiedList = JSON.stringify(charactersList);

        console.log("ZAPISUJĘ:", stringifiedList);

        Cookies.set('characterList', stringifiedList);
      },

      loadCharactersList () {
        let cookie = Cookies.get('characterList');
        let returner = {};

        try {
          returner = JSON.parse(cookie);
          console.log("Pobrano listę: ", returner);
        } catch (e) {
          console.log("Nie załadowano listy:", cookie, e);
        }

        return returner;
      },

      saveCurrentCharacterToList () {
        console.log("Updating character and saving to list...");
        let character = this.getCurrentCharacter();
        this.setupId();
        let id = this.other.id;

        this.saveCharacterToList(character, id);
        this.saveCurrentCharacterId(id);
      },

      loadCurrentCharacterId () {
        return Cookies.get('currentCharacterId') ?? null;
      },

      saveCurrentCharacterId (id) {
        Cookies.set('currentCharacterId', id);
      },

      loadCharacter (id) {
        let characters = this.loadCharactersList();

        for (let cId in characters) {
          console.log(cId, "<< cId | id >>", id);
          if (!!cId == !!id)
            return characters[cId];
        }

        return null;
      },

      loadCurrentCharacter () {
        let id = this.loadCurrentCharacterId();
        console.log("id: ", id);
        console.log((!id) ? null : this.loadCharacter(id));
        return (!id) ? null : this.loadCharacter(id);
      },

      drawStat (statId) {
        this.throwStatistic = this.chosenPoints[statId];
        console.log("drawing", this.passedCharacter);
        this.$options.childInterface.show();
      },

      getChildInterface(childInterface) {
        this.$options.childInterface = childInterface;
      },

      addInventory () {
        this.other.inventory = this.other.inventory ?? "";
        this.chosenClass.inventory.concat(this.chosenBackground.inventory).forEach(item => {
          this.other.inventory = this.other.inventory.trim();
          this.other.inventory += `\n• ${item}`;
        });
      },

      addSkills () {
        
        this.other.skills = this.other.skills ?? "";
        this.other.skills = this.other.skills.trim();
        
        this.other.skills += `\n• ${this.chosenClass.ability}`;
        this.other.skills += `\n• ${this.chosenBackground.description}`;
        this.other.skills = this.other.skills.trim();
      },

      addDot(formType) {
        this.other[formType] = this.other[formType] ?? "";
        this.other[formType] = this.other[formType].trim() + '\n• ';
        this.other[formType] = this.other[formType].trim();
      },

      setupId () {
        this.other.id = this.other.id ?? this.generateId(this.getCurrentCharacter);
      },

      generateId (object) {
        return md5(JSON.stringify(object) + Math.random()).toString();
      },

      update () {
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
      },

      chosenBackground() {
        for (let bId in this.backgroundList) {
          if (this.backgroundList[bId].chosen)
            return this.backgroundList[bId];
        }
      }
    },
    mounted() {

      Cookies.set('characterList', "{}");
      console.log("Cookie:", Cookies.get('characterList'));

      // Future completion of data
      if (typeof this.$route.params.character !== "undefined")
        this.passedCharacter = JSON.parse(this.$route.params.character) ?? null;

      if (this.passedCharacter !== null) {
        this.passedCharacter.other = this.passedCharacter.other ?? {};
        this.passedCharacter.other.id = this.generateId(this.passedCharacter);
        this.setupCharacter(this.passedCharacter);
        this.saveCurrentCharacterToList();
        this.saveCurrentCharacterId(this.other.id);
      } else {
        let loadedCurrentCharacter = this.loadCurrentCharacter();
        console.log("starting character: ", loadedCurrentCharacter);

        if (!!loadedCurrentCharacter) {
          this.setupCharacter(loadedCurrentCharacter);
        }
      }


      // Set stats starting value based on other stats
      this.other.currentHP = this.chosenPoints.strength.value;
      this.other.currentMP = this.chosenPoints.focus.value / 3;

      for (let statId in this.chosenPoints) {
        this.chosenPoints[statId].currentValue = this.chosenPoints[statId].value;
      }

      this.mounted = true;

      Cookies.set('test', '{"d41d8cd98f00b204e9800998ecf8427e":{"chosenPoints":{"strength":{"value":12,"currentValue":null,"name":"Siła","nameGenitive":"Siłę"},"agility":{"value":null,"currentValue":null,"name":"Zręczność","nameGenitive":"Zręczność"},"inteligence":{"value":null,"currentValue":null,"name":"Inteligencja","nameGenitive":"Inteligencję"},"focus":{"value":null,"currentValue":null,"name":"Skupienie","nameGenitive":"Skupienie"}},"classList":{"warrior":{"name":"Wojownik","type":"Lekki","spellAmount":0,"availableSpells":[],"inventory":["Lekka Broń","Tarcza","Zbroja kolcza (3)"],"ability":"Wojownik za pomocą tarczy może zużyć swoją reakcję by rzutem na zręczność ochronić kogoś obok siebie","hidden":true,"chosen":false},"killer":{"name":"Zabójca","type":"Lekki","spellAmount":0,"availableSpells":[],"inventory":["Lekka Broń","Zbroja skórzana (1)","Peleryna"],"ability":"Zabójca zadaje podwójne obrażenia w plecy","hidden":true,"chosen":false},"paladin":{"name":"Paladyn","type":"Ciężki, Magiczny (tylko jedno startowe zaklęcie)","spellAmount":1,"availableSpells":["heal","enchant","bless"],"inventory":["Ciężka broń","Zbroja Przeszywana (2)","Symbol Boga"],"ability":"Paladyn może wybrać jedno startowe zaklęcie spośród: Heal, Enchant, Bless","hidden":true,"chosen":false},"barbarian":{"name":"Barbarzyńca","type":"Ciężki","spellAmount":0,"availableSpells":[],"inventory":["Ciężka broń","Dowolna ilość czaszek wrogów"],"ability":"Barbarzyńca potrafi poświęcić reakcję w jednej turze aby zaatakować drugi raz","hidden":true,"chosen":false},"mage":{"name":"Mag","type":"Magiczny","spellAmount":6,"availableSpells":["heal","blast","protect","enchant","curse","bless"],"inventory":["Laska maga (+1 do Skupienia)","Toga"],"ability":"Mag posiada 6 zaklęć do wyboru na start","hidden":true,"chosen":false},"warlock":{"name":"Czarnoksiężnik","type":"Magiczny","spellAmount":3,"availableSpells":["heal","blast","protect","enchant","curse","bless"],"inventory":["Zwój Przywołania (Jednorazowo przyzywa lekkiego pomocnika 2 Rangi)","Mroczny Płaszcz"],"ability":"Czarnoksiężnik zadaje k6 obrażeń zaklęciem blast","hidden":true,"chosen":false},"cleric":{"name":"Kleryk","type":"Magiczny","spellAmount":3,"availableSpells":["heal","blast","protect","enchant","curse","bless"],"inventory":["Toga","Fiolka Życia (1k3 leczonych obrażeń)"],"ability":"Kleryk przywraca k6 Żywotności zaklęciem Heal","hidden":true,"chosen":false},"shooter":{"name":"Strzelec","type":"Lekki","spellAmount":0,"availableSpells":[],"inventory":["Lekka broń dystansowa","12 pocisków"],"ability":"Strzelec zadaje dodatkowe 2 obrażenia bronią dystansową","hidden":true,"chosen":false}},"spellList":{"heal":{"name":"Heal","description":"Leczy 1k3 Żywotności","chosen":false},"blast":{"name":"Blast","description":"Magiczny pocisk o obrażeniach 1k3","chosen":false},"protect":{"name":"Protect","description":"Dotykasz kogoś i przez całą turę obrażenia na niego zmniejszają');
      console.log(Cookies.get('test'));
    },
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
    <div class="tile is-ancestor">
      <div class="tile is-parent is-12 is-vertical">
        <div class="tile is-child notification is-info">
          <div class="tile is-parent is-12">
            <div class="tile is-child is-6 p-2">
              <label class="label is-medium is-size-3">Imię postaci</label>
              <div class="control mb-3">
                <input class="input is-large" type="text" v-model="other.name" v-on:change="update()">
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
                <div class="select is-fullwidth is-large">
                  <select>
                    <option v-for="(cClass, cName) in classList" :key="cName" v-on:change="update()">
                      {{cClass.name}}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="tile is-child is-6 p-2">
              <label class="label is-medium is-size-3">Tło fabularne</label>
              <div class="control mb-3">
                <div class="select is-fullwidth is-large">
                  <select>
                    <option v-for="(background, bName) in backgroundList" :key="bName" v-on:change="update()">
                      {{background.name}}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-child notification is-warning ">
          <div class="tile is-parent is-12">
            <div class="tile is-child is-4 p-2">

              <label class="label is-medium is-size-3 has-text-black">Siła</label>
              <div class="field has-addons">
                <div class="control">
                    <input class="input is-large" type="number" placeholder="Bazowa..." v-model="chosenPoints.strength.value" v-on:change="update()">
                </div>
                <div class="control">
                    <input class="input is-large" type="number" placeholder="Aktualna..." v-model="chosenPoints.strength.currentValue" v-on:change="update()">
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
                    <input class="input is-large" type="number" placeholder="Bazowa..." v-model="chosenPoints.agility.value" v-on:change="update()">
                </div>
                <div class="control">
                    <input class="input is-large" type="number" placeholder="Aktualna..." v-model="chosenPoints.agility.currentValue" v-on:change="update()">
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
                    <input class="input is-large" type="number" placeholder="Bazowa..." v-model="chosenPoints.inteligence.value" v-on:change="update()">
                </div>
                <div class="control">
                    <input class="input is-large" type="number" placeholder="Aktualna..." v-model="chosenPoints.inteligence.currentValue" v-on:change="update()">
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
                    <input class="input is-large" type="number" placeholder="Bazowa..." v-model="chosenPoints.focus.value" v-on:change="update()">
                </div>
                <div class="control">
                    <input class="input is-large" type="number" placeholder="Aktualna..." v-model="chosenPoints.focus.currentValue" v-on:change="update()">
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
                    <input class="input is-large" type="number" placeholder="Bazowa..." :value="chosenPoints.strength.value" disabled>
                </div>
                <div class="control">
                    <input class="input is-large" type="number" placeholder="Aktualna..." v-model="other.currentHP" v-on:change="update()">
                </div>
                <div class="control">
                    <button class="button is-large">
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
                    <input class="input is-large" type="number" placeholder="Bazowa..." :value="Math.floor(chosenPoints.focus.value / 3)" disabled>
                </div>
                <div class="control">
                    <input class="input is-large" type="number" placeholder="Aktualna..." v-model="other.currentMP" v-on:change="update()">
                </div>
                <div class="control">
                    <button class="button is-large">
                      <span class="icon is-small">
                        <i class="fa-solid fa-wand-sparkles"></i>
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
                <textarea class="textarea is-medium is-fullwidth" placeholder="Umiejętności..." v-model="other.skills" v-on:change="update()"></textarea>
              </div>
              <div class="field has-addons">
                  <div class="control" style="width: 50%">
                      <a class="button is-fullwidth" @click="addDot('skills')">
                          <span class="icon is-small">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                      </a>
                  </div>
                  <div class="control" style="width: 50%">
                      <a class="button is-fullwidth" @click="addSkills()">
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
                <textarea class="textarea is-medium is-fullwidth" placeholder="Ekwipunek..." v-model="other.inventory" v-on:change="update()"></textarea>
              </div>
              <div class="field has-addons">
                  <div class="control" style="width: 50%">
                      <a class="button is-fullwidth" @click="addDot('inventory')">
                          <span class="icon is-small">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                      </a>
                  </div>
                  <div class="control" style="width: 50%">
                      <a class="button is-fullwidth" @click="addInventory()">
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
                <textarea class="textarea is-medium is-fullwidth" placeholder="Notatki..." v-model="other.notes" v-on:change="update()"></textarea>
              </div>
              <div class="field">
                  <div class="control" style="width: 100%">
                      <a class="button is-fullwidth" @click="addDot('description')">
                          <span class="icon is-small">
                            <i class="fa-solid fa-circle"></i>
                          </span>
                      </a>
                  </div>
              </div>
            </div>
            <!-- <div class="tile is-child is-6 p-2">
              <label class="label is-medium is-size-3">Portret postaci</label>
              <div class="control mb-3">
                <textarea class="textarea is-medium is-fullwidth" placeholder="Umiejętności..."></textarea>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>

  <StatModal :throwStatistic="throwStatistic" @interface="getChildInterface"></StatModal>

</template>