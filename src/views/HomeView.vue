<script>
  import {
    PanelTabs
  } from '@vizuaalog/bulmajs/src/plugins/panelTabs';

  export default {
    name: 'HomeView',
    data() {
      return {
        systemChangelog: {
          '1.09': [
            {
              text: "Poprawiono opis działania zaklęcia <i>Curse</i>.",
            },
            {
              text: "Dodano opisy trudności zadania dla łatwiejszego wyczucia.",
            },
            {
              text: "Dodano Boostery równe jednej trzeciej inteligencji pozwalające na <b>boostowanie</b>.",
            },
            {
              text: "Dodano nowe tła fabularne - Podróżnik i Łowca.",
            },
          ],
          '1.08': [{
            text: "Dodano wzmiankę o możliwości podnoszenia poziomu postaci.",
          }],
          '1.07': [{
              text: "Zaktualizowano treść zaklęć, dodano zaklęcia Levitation, Ilusion i Polymorphy.",
            },
            {
              text: "Teraz Mana przeciwników jest równa Randze.",
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
            text: "Dodano parę linków na stronie głównej.",
            type: "typo"
          },
          {
            text: "Dodano wybór zaklęć dla bytów w Panelu Mistrza Gry.",
            type: "fix"
          },
          {
            text: "Zmieniono wybór zaklęć na E-Karcie Postaci z formy listy na przyciski.",
            type: "fix"
          },
          {
            text: "Dodano dodatkowe przyciski w dolnej części Panelu Mistrza Gry",
            type: "feature"
          },
          {
            text: "Dodano zapisywanie stanu Panelu Mistrza Gry w pamięci.",
            type: "feature"
          },
          {
            text: "Dodano potwierdzenie przy usuwaniu w kilku miejscach.",
            type: "feature"
          },
          {
            text: "Dodano grupowe akcje w Panelu Mistrza Gry.",
            type: "feature"
          },
          {
            text: "Poprawiono wyświetlanie na telefonach w dużej części aplikacji.",
            type: "fix"
          },
          {
            text: "Dodano menu zapisanych postaci na E-Karcie Postaci.",
            type: "feature"
          },
          {
            text: "Dodano rzuty kośćmi na E-Karcie Postaci.",
            type: "feature"
          },
          {
            text: "Zaktualizowano dane o tłach fabularnych.",
            type: "feature"
          },
          {
            text: "Dodano rzuty kośćmi K3 i K2 w Panelu Mistrza Gry.",
            type: "feature"
          },
          {
            text: "Dodano statystykę Boosterów do E-Karty Postaci.",
            type: "feature"
          },
          {
            text: "Dodano notatki w Panelu Mistrza Gry.",
            type: "feature"
          },
          {
            text: "Dodano rzuty kością w Panelu Mistrza Gry.",
            type: "feature"
          },
          {
            text: "Dodano wzmiankę o sposobie generowania liczb losowych na stopce strony a także o możliwości utworzenia forka na githubie.",
            type: "typo"
          },
          {
            text: "Dodano przycisk 'Szybki Atak' widoczny po rzucie na statystykę.",
            type: "feature"
          },
          {
            text: "Dodano przyciski ustawiające modyfikator przy rzucie na statystykę zależnie od trudności.",
            type: "feature"
          },
          {
            text: "Poprawiono generowanie liczb losowych uniemożliwiając przeciążenie API.",
            type: "fix"
          },
          {
            text: "Poprawiono kalkulator obrażeń aby zbroja i obrażenia nie mogły być ujemne.",
            type: "fix"
          },
          {
            text: "Poprawiono kalkulację many wrogów w Panelu Mistrza Gry aby była równa Randze.",
            type: "fix"
          },
          {
            text: "Dodano możliwość duplikowania bytów w Panelu Mistrza Gry.",
            type: "feature"
          },
          {
            text: "Zaktualizowano treść niektórych zaklęć.",
            type: "typo"
          },
          {
            text: "Poprawiono wyświetlanie Panelu Mistrza Gry na białym motywie.",
            type: "fix"
          },
          {
            text: "Dodano przyciski ułatwiające wybranie odpowiedniego modyfikatora przy rzutach.",
            type: "feature"
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
        ],
        appChangelogListSize: 7
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
      <br />
      <br />
      Alternatywnie możesz od razu zobaczyć <router-link class="link" to="/generator">Generator Postaci</router-link>, <router-link class="link" to="/character-sheet">E-Kartę Postaci</router-link> czy <router-link class="link" to="/game-master-panel">Panel Mistrza Gry</router-link>!
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
      <template v-for="(feature, key) in appChangelog" :key="key" >
        <div class="panel-block" v-if="key <= appChangelogListSize - 1">
          <span class="panel-icon">
            <i class="fa-solid" :class="getIcon(feature.type)" aria-hidden="true"></i>
          </span>
          <span v-html="feature.text"></span>
        </div>
        <div class="panel-block" v-if="key == appChangelogListSize">
          <span class="tag is-grey" style="cursor: pointer;" @click="appChangelogListSize += 7">
            <span class="icon">
              <i class="fa-solid fa-ellipsis"></i>
            </span>
          </span>
        </div>
      </template>
    </nav>
  </section>
</template>