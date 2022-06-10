<script>
  // @ is an alias to /src
  import Stats from '@/components/character-generator/Stats.vue'
  import Class from '@/components/character-generator/Class.vue'
  import Background from '@/components/character-generator/Background.vue'

  export default {
    name: 'RulebookView',
    props: [
      'abilityPoints',
      'chosenPoints',
      'classList',
      'spellList',
      'backgroundList'
    ],
    components: {
      Stats,
      Class,
      Background
    },
    data() {
      return {
        formInvalidFlag: false,
        submitButtonText: "Stwórz postać!"
      }
    },
    methods: {
      createCharacter() {
        if (!this.validateForm())
          return;
        
        // Create stringified character
        let characterStringified = JSON.stringify({
          chosenPoints: this.chosenPoints,
          classList: this.classList,
          spellList: this.spellList,
          backgroundList: this.backgroundList,
          other: {
            level: 1,
            name: ""
          },
        });

        // Send character to characterSheetView
        this.$router.push({
          name: 'character sheet',
          params: {
            character: characterStringified
          }
        });
      },

      submitButtonDisplayErrorText (text) {
        this.formInvalidFlag = true;
        this.submitButtonText = text;

        setTimeout(() => {
          this.formInvalidFlag = false;
          this.submitButtonText = "Stwórz postać!";
        }, 1000);

      },

      scroll(id, time = 0) {  
        setTimeout(() => {
            document.getElementById(id).scrollIntoView({
              behavior: "smooth"
            });
        }, time);
      },

      validateForm () {

        if (!this.isStatValid) {
          this.scroll("stats", 1000);
          this.submitButtonDisplayErrorText("Hej, a statystyki?");
        }
        else if (!this.isClassValid) {
          this.submitButtonDisplayErrorText("Zapomniałeś wybrać klasę!");
          this.scroll("class", 1000);
        }
        else if (!this.isBackgroundValid) {
          this.submitButtonDisplayErrorText("No jak to bez zawodu...");
          this.scroll("background", 1000);
        } else
          return true;

        return false;
      }
    },
    computed: {
      isStatValid() {
        let validFlag = true;

        for (let pointId in this.chosenPoints) {
          if (!this.chosenPoints[pointId].value) 
            validFlag = false;
        }

        return validFlag;
      },

      isClassValid () {
        let validFlag = false;

        for (let cId in this.classList) {
          if (this.classList[cId].chosen) {
            validFlag = true;
            break;
          }
        }

        return validFlag;
      },

      isBackgroundValid () {
        let validFlag = false;

        for (let bId in this.backgroundList) {
          if (this.backgroundList[bId].chosen) {
            validFlag = true;
            break;
          }
        }

        return validFlag;
      },
    }
  }
</script>

<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <p class="title">
        Generator Postaci
      </p>
      <p class="subtitle">
        Jak szybko stworzysz swojego PC?
      </p>
    </div>
  </section>
  <section class="section">
    <div class="content">

      <div id="stats"></div>
      <Stats :abilityPoints="abilityPoints" :chosenPoints="chosenPoints" />

      <br>

      <div id="class"></div>
      <Class :classList="classList" :spellList="spellList" />

      <br>

      <div id="background"></div>
      <Background id="background" :backgroundList="backgroundList" />

      <br>

      <div class="field">
        <div class="control">
          <button class="button is-fullwidth is-large" :class="{'is-success': !formInvalidFlag, 'is-danger': formInvalidFlag}" @click="createCharacter()">
            <span>{{submitButtonText}}</span>
          </button>
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss">
  .chosen {
    border: 2px solid #34A873;
  }
</style>