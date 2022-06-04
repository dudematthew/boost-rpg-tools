<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>

<style lang="scss">
    // Bulma customization
    $purple: #8A4D76;
    $pink: #FA7C91;
    $brown: #757763;
    $beige-light: #D0D1CD;
    $beige-lighter: #EFF0EB;

    $grey-dark: $brown;
    $primary: $purple;
    $link: $pink;
    
  @media (prefers-color-scheme: light) {
    $grey-light: $beige-light;
  }

  @import 'bulma';
  @import 'bulma-prefers-dark';
</style>