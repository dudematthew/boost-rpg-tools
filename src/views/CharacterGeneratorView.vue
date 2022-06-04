<script>
  // @ is an alias to /src
  import Stats from '@/components/character-generator/Stats.vue'
  import Class from '@/components/character-generator/Class.vue'

  export default {
    name: 'RulebookView',
    components: {
      Stats,
      Class
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

      <Stats />
      
      <br>

      <Class />

    </div>
  </section>
</template>