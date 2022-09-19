<script>
  import Bulma, {
    PanelTabs
  } from '@vizuaalog/bulmajs/src/plugins/panelTabs';

  export default {
    name: 'HomeView',
    data() {
      return {
        systemChangelog: {
          '1.08': [{
            text: "Dodano wzmiankę o możliwości podnoszenia poziomu postaci.",
          }],
          '1.07': [{
              text: "Zaktualizowano treść zaklęć, dodano zaklęcia Levitation, Ilusion i Polymorphy.",
            },
            {
              text: "Teraz Mana przeciwników jest równa <i>Ranga * 2</i>.",
            }
          ],
          '1.06': [
            {
              text: "Teraz zamiast umierać od razu, postacie padają nieprzytomnie na dwie tury, by dopiero potem umrzeć jeśli nie zostaną uleczone.",
            },
          ],
        },
        appChangelog: [
          {
            text: "Poprawiono wyświetlanie Panelu Mistrza Gry na białym motywie.",
            type: "fix"
          },
          {
            text: "Dodano przyciski ułatwiające wybranie odpowiedniego modyfikatora przy rzutach.",
            type: "add"
          },
          {
            text: "Naprawiono niepoprawnie liczony modyfikator przy rzutach.",
            type: "fix"
          },
          {
            text: "Poprawiono wzmiankę o licencji na stopce strony.",
            type: "typo"
          },
          {
            text: "Od teraz przy zmianie strony widzimy jej początek a nie środek.",
            type: "fix"
          },
          {
            text: "Od teraz menu nagłówka zamyka się przy zmianie strony.",
            type: "fix"
          },
          {
            text: "Dodano link do karty postaci.",
            type: "feature"
          },
          {
            text: "Dodano dzienniki zmian na stronie głównej.",
            type: "feature"
          },
        ]
      }
    },
    methods: {
      getIcon (type) {
        switch (type) {
          case "feature":
            return "fa-plus";
          case "fix":
            return "fa-screwdriver-wrench";
          case "typo":
            return "fa-spell-check";
          default:
            return "fa-code-branch";
        }
        
      }
    },
    mounted () {
      PanelTabs.parseDocument(document);
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
      W takiej sytuacji na pewno nie raz pomógłby <strong>BOOST</strong>, czyli system RPG, w który możecie zacząć grać
      z nowymi
      postaciami w trzy minuty.
      <br />
      <br />
      Zainteresowany?
      <br />
      <br />
      Zerknij na <router-link class="link" to="/rulebook">Zasady Gry</router-link>.
    </h2>
  </section>

  <figure class="image is-16by9 is-hidden-tablet">
    <img src="@/assets/background.jpg">
  </figure>

  <!-- System changelog -->
  <section class="section">
    <nav class="panel" ref="panel">
      <p class="panel-heading">Dziennik wersji systemu</p>
      <p class="panel-tabs">
        <a v-for="(change, version) in systemChangelog" :key="version"
        :data-target="version" style="padding: 8px">{{version}}</a>
        <a data-all style="padding: 8px" class="is-active">Wszystkie zmiany</a>
      </p>

      <!-- Template is not rendered in the DOM -->
      <template v-for="(change, key) in systemChangelog" :key="key">
        <div v-for="(feature, innerKey) in change" :key="innerKey" class="panel-block"
          :class="key == 1 ? 'is-active' : ''" :data-category="key">
          <span class="panel-icon">
            <i class="fas" :class="feature.icon ?? 'fa-book'" aria-hidden="true"></i>
          </span>
          <span v-html="feature.text"></span>
        </div>
      </template>
    </nav>
  </section>

  <!-- App changelog -->
  <section class="section">
    <nav class="panel" ref="panel">
      <p class="panel-heading">Dziennik zmian aplikacji</p>
      <!-- Template is not rendered in the DOM -->
      <div v-for="(feature, key) in appChangelog" :key="key" class="panel-block">
        <span class="panel-icon">
          <i class="fa-solid" :class="getIcon(feature.type)" aria-hidden="true"></i>
        </span>
        <span v-html="feature.text"></span>
      </div>
    </nav>
  </section>
</template>