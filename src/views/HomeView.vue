<script>
  export default {
    name: 'HomeView',
  }
</script>

<template>
  <section class="hero is-primary">
    <div class="hero-body">
      <p class="title">
        BOOST
      </p>
      <p class="subtitle">
        Banalnie Oczywisty Odgrywany System Testów
      </p>
    </div>
  </section>
  <section class="section">
    <h1 class="title">O co chodzi?</h1>
    <h2 class="subtitle mt-2">
      Jeśli jesteś zapalonym <strong>Mistrzem Gry</strong>, być może tobie i twoim graczom zdarzyło się znaleźć w
      miejscu, w którym chcielibyście usiąść do stołu, jednak nie ma co liczyć na <strong>sesję RPG</strong>, ponieważ
      wymaga odpowiednich przygotowań, kart postaci, podręcznika i czasu, którego zwyczajnie nie macie.
      <br />
      <br />
      W takiej sytuacji na pewno nie raz pomógłby <strong>BOOST</strong>, czyli system RPG, w który możecie zacząć grać z nowymi
      postaciami w trzy minuty.
      <br />
      <br />
      Zainteresowany?
      <br />
      <br />
      Zerknij na <router-link class="link" to="/rulebook">Zasady Gry</router-link>.
    </h2>
  </section>
  <figure class="image is-16by9 is-hidden-">
    <img src="@/assets/background.jpg">
  </figure>
</template>