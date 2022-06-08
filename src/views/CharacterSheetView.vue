<script>
  import StatModal from '@/components/character-sheet/StatModal.vue'

  import Cookies from 'js-cookie'

  export default {
    name: 'CharacterSheetView',
    components: {
      StatModal
    },
    props: [
      'classList',
      'backgroundList',
      'chosenPoints'
    ],
    data() {
      return {
        passedCharacter: null,
        throwStatistic: this.chosenPoints.strength, // default
      }
    },
    methods: {
      loadCharacter(character) {
        
      },
      drawStat (statId) {
        this.throwStatistic = this.chosenPoints[statId];
        console.log("drawing", this.passedCharacter);
        this.$options.childInterface.show();
      },
      getChildInterface(childInterface) {
        this.$options.childInterface = childInterface;
      }
    },
    mounted() {
      // Future completion of data
      if (typeof this.$route.params.character !== "undefined")
        this.passedCharacter = JSON.parse(this.$route.params.character) ?? null;

      if (this.passedCharacter !== null)
        this.loadCharacter(this.passedCharacter);

      console.log(this.passedCharacter, this.classList);

      // For testing
      for (let statId in this.chosenPoints) {
        this.chosenPoints[statId].value = 10;
      }
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
                <input class="input is-large" type="text">
              </div>
            </div>
            <div class="tile is-child is-6 p-2">
              <label class="label is-medium is-size-3">Poziom</label>
              <div class="control mb-3">
                <input class="input is-large" type="number">
              </div>
            </div>
          </div>
          <div class="tile is-parent is-12">
            <div class="tile is-child is-6 p-2">
              <label class="label is-medium is-size-3">Klasa</label>
              <div class="control mb-3">
                <div class="select is-fullwidth is-large">
                  <select>
                    <option v-for="(cClass, cName) in classList" :key="cName">
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
                    <option v-for="(background, bName) in backgroundList" :key="bName">
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
                    <input class="input is-large" type="number" placeholder="Bazowa...">
                </div>
                <div class="control">
                    <input class="input is-large" type="number" placeholder="Aktualna...">
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
                    <input class="input is-large" type="number" placeholder="Bazowa...">
                </div>
                <div class="control">
                    <input class="input is-large" type="number" placeholder="Aktualna...">
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
                    <input class="input is-large" type="number" placeholder="Bazowa...">
                </div>
                <div class="control">
                    <input class="input is-large" type="number" placeholder="Aktualna...">
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
                    <input class="input is-large" type="number" placeholder="Bazowa...">
                </div>
                <div class="control">
                    <input class="input is-large" type="number" placeholder="Aktualna...">
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
                    <input class="input is-large" type="number" placeholder="Bazowa..." disabled>
                </div>
                <div class="control">
                    <input class="input is-large" type="number" placeholder="Aktualna...">
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
                    <input class="input is-large" type="number" placeholder="Bazowa..." disabled>
                </div>
                <div class="control">
                    <input class="input is-large" type="number" placeholder="Aktualna...">
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
              <div class="control mb-3">
                <textarea class="textarea is-medium is-fullwidth" placeholder="Umiejętności..."></textarea>
              </div>
            </div>
            <div class="tile is-child is-6 p-2">
              <label class="label is-medium is-size-3">Ekwipunek</label>
              <div class="control mb-3">
                <textarea class="textarea is-medium is-fullwidth" placeholder="Umiejętności..."></textarea>
              </div>
            </div>
          </div>
          <div class="tile is-parent is-12">
            <div class="tile is-child is-6 p-2">
              <label class="label is-medium is-size-3">Notatki</label>
              <div class="control mb-3">
                <textarea class="textarea is-medium is-fullwidth" placeholder="Umiejętności..."></textarea>
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