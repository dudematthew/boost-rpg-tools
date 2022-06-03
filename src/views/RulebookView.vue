<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'HomeView',
    components: {
      HelloWorld
    }
  }
</script>

<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <p class="title">
        BOOST
      </p>
      <p class="subtitle">
        Zasady Gry
      </p>
    </div>
  </section>
  <section class="section">
    <h1 class="title">Tworzenie postaci</h1>
    <div class="content is-size-4 mt-2">
      Postać składa się z poniższych statystyk:
      <ul>
        <li>Siła - Określa jak mocno bije rzeczy i ile podniesie</li>
        <li>Zręczność - Określa jak dobrze unika bicia i jak szybko biega</li>
        <li>Inteligencja - Określa jak szybko i klawo wymyśli rzeczy</li>
        <li>Skupienie - Określa ile uwagi może przeznaczyć na daną rzecz</li>
        <li>Żywotność - Określa ile razy trzeba uderzyć, żeby umarła</li>
        <li>Mana - Określa jak dużo razy może rzucić zaklęcie bez ziewania</li>
      </ul>
    </div>
  </section>
</template>