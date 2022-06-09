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
        
      }
    },
    methods: {
      createCharacter () {
        let characterStringified = JSON.stringify({
            chosenPoints: this.chosenPoints,
            classList: this.classList,
            spellList: this.spellList,
            backgroundList: this.backgroundList
        });

        this.$router.push({ name: 'character sheet', params: {
          character: characterStringified
        }});
      }
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

      <Stats :abilityPoints="abilityPoints" :chosenPoints="chosenPoints" />

      <br>

      <Class :classList="classList" :spellList="spellList" />

      <br>

      <Background :backgroundList="backgroundList" />

      <br>

      <div class="field">
        <div class="control">
            <a class="button is-success is-fullwidth is-large" @click="createCharacter()">
                Stwórz postać!
            </a>
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