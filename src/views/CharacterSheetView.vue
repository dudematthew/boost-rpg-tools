<script>
  import Cookies from 'js-cookie'

  export default {
    name: 'CharacterSheetView',
    props: [
      'classList',
      'backgroundList'
    ],
    data() {
      return {
        passedCharacter: null
      }
    },
    methods: {
      loadCharacter(passedCharacter) {

      }
    },
    mounted() {
      // Feature completion of data
      if (typeof this.$route.params.character !== "undefined")
        this.passedCharacter = JSON.parse(this.$route.params.character) ?? null;

      if (this.passedCharacter !== null)
        this.loadCharacter(this.passedCharacter);

      console.log(this.passedCharacter, this.classList);
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
    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-info">
              <label class="label is-medium">Imię postaci</label>
              <div class="control mb-3">
                <input class="input" type="text">
              </div>
              <label class="label is-medium">Klasa</label>
              <div class="control mb-3">
                <div class="select is-fullwidth">
                  <select>
                    <option v-for="(cClass, cName) in classList" :key="cName">
                      {{cClass.name}}
                    </option>
                  </select>
                </div>
              </div>
              <label class="label is-medium">Poziom</label>
              <div class="control mb-3">
                <input class="input" type="text">
              </div>
              <label class="label is-medium">Tło fabularne</label>
              <div class="control mb-3">
                <div class="select is-fullwidth">
                  <select>
                    <option v-for="(background, bName) in backgroundList" :key="bName">
                      {{background.name}}
                    </option>
                  </select>
                </div>
              </div>
            </article>
            <article class="tile is-parent">
              <div class="tile is-12 is-child is-horizontal">
                <div class="tile is-half notification is-warning">
                  <label class="label is-medium">Siła</label>
                  <div class="control is-half mb-3">
                    <input class="input" style="width: 50%" type="text">
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-info">
              <p class="title">Middle tile</p>
              <p class="subtitle">With an image</p>
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/640x480.png">
              </figure>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>