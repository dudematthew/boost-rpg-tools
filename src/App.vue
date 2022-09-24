<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
      Header,
      Footer
    },
    data() {
      return {
        abilityPoints: [6, 9, 12, 15],
        chosenPoints: {
          strength: {
            value: null,
            currentValue: null,
            name: "Siła",
            nameGenitive: "Siłę"
          },
          agility: {
            value: null,
            currentValue: null,
            name: "Zręczność",
            nameGenitive: "Zręczność"
          },
          inteligence: {
            value: null,
            currentValue: null,
            name: "Inteligencja",
            nameGenitive: "Inteligencję"
          },
          focus: {
            value: null,
            currentValue: null,
            name: "Skupienie",
            nameGenitive: "Skupienie"
          }
        },
        other: {
          currentHP: 0,
          currentMP: 0,
          name: "",
          level: 1,
        },
        classList: {
          warrior: {
            name: "Wojownik",
            type: "Lekki",
            spellAmount: 0,
            availableSpells: [],
            inventory: [
              "Lekka Broń",
              "Tarcza",
              "Zbroja kolcza (3)"
            ],
            ability: "Wojownik za pomocą tarczy może zużyć swoją reakcję by rzutem na zręczność ochronić kogoś obok siebie",
            hidden: true,
            chosen: false
          },
          killer: {
            name: "Zabójca",
            type: "Lekki",
            spellAmount: 0,
            availableSpells: [],
            inventory: [
              "Lekka Broń",
              "Zbroja skórzana (1)",
              "Peleryna"
            ],
            ability: "Zabójca zadaje podwójne obrażenia w plecy",
            hidden: true,
            chosen: false
          },
          paladin: {
            name: "Paladyn",
            type: "Ciężki, Magiczny (tylko jedno startowe zaklęcie)",
            spellAmount: 1,
            availableSpells: ["heal", "enchant", "bless"],
            inventory: [
              "Ciężka broń",
              "Zbroja Przeszywana (2)",
              "Symbol Boga"
            ],
            ability: "Paladyn może wybrać jedno startowe zaklęcie spośród: Heal, Enchant, Bless",
            hidden: true,
            chosen: false
          },
          barbarian: {
            name: "Barbarzyńca",
            type: "Ciężki",
            spellAmount: 0,
            availableSpells: [],
            inventory: [
              "Ciężka broń",
              "Dowolna ilość czaszek wrogów",
            ],
            ability: "Barbarzyńca potrafi poświęcić reakcję w jednej turze aby zaatakować drugi raz",
            hidden: true,
            chosen: false
          },
          mage: {
            name: "Mag",
            type: "Magiczny",
            spellAmount: 6,
            availableSpells: ["heal", "blast", "protect", "enchant", "curse", "bless", "ilusion", "telekinesis", "levitation", "polymorphy"],
            inventory: [
              "Laska maga (+1 do Skupienia)",
              "Toga",
            ],
            ability: "Mag posiada 6 zaklęć do wyboru na start",
            hidden: true,
            chosen: false
          },
          warlock: {
            name: "Czarnoksiężnik",
            type: "Magiczny",
            spellAmount: 3,
            availableSpells: ["heal", "blast", "protect", "enchant", "curse", "bless", "ilusion", "telekinesis", "levitation", "polymorphy"],
            inventory: [
              "Zwój Przywołania (Jednorazowo przyzywa lekkiego pomocnika 2 Rangi)",
              "Mroczny Płaszcz",
            ],
            ability: "Czarnoksiężnik zadaje k6 obrażeń zaklęciem Blast",
            hidden: true,
            chosen: false
          },
          cleric: {
            name: "Kleryk",
            type: "Magiczny",
            spellAmount: 3,
            availableSpells: ["heal", "blast", "protect", "enchant", "curse", "bless", "ilusion", "telekinesis", "levitation", "polymorphy"],
            inventory: [
              "Toga",
              "Fiolka Życia (1k3 leczonych obrażeń)",
            ],
            ability: "Kleryk przywraca k6 Żywotności zaklęciem Heal",
            hidden: true,
            chosen: false
          },
          shooter: {
            name: "Strzelec",
            type: "Lekki",
            spellAmount: 0,
            availableSpells: [],
            inventory: [
              "Lekka broń dystansowa",
              "12 pocisków",
            ],
            ability: "Strzelec zadaje dodatkowe 2 obrażenia bronią dystansową",
            hidden: true,
            chosen: false
          },
        },
        spellList: {
          heal: {
            name: "Heal",
            description: "Leczy 1k3 Żywotności",
            chosen: false
          },
          blast: {
            name: "Blast",
            description: "Magiczny pocisk o obrażeniach 1k3",
            chosen: false
          },
          protect: {
            name: "Protect",
            description: "Dotykasz kogoś i przez cztery tury obrażenia na niego zmniejszają się o 1",
            chosen: false
          },
          enchant: {
            name: "Enchant",
            description: "Dotykasz przedmiot i wybierasz czy przez 6 rund zadaje o 1 większe obrażenia czy daje o 2 większe szanse trafienia",
            chosen: false
          },
          curse: {
            name: "Curse",
            description: "Rzucasz na przeciwnika i zmniejszasz mu dwie statystyki o 4 (Musisz zdać na Skupienie) na 4 rundy",
            chosen: false
          },
          bless: {
            name: "Bless",
            description: "Dotykasz kogoś i zwiększasz mu daną statystykę o 4 przy jego następnym rzucie",
            chosen: false
          },
          ilusion: {
            name: "Ilusion",
            description: "Tworzysz hologram który może się ruszać w prosty sposób o maksymalnej wielkości 2m3",
            chosen: false
          },
          telekinesis: {
            name: "Telekinesis",
            description: "Przenosisz nieduży przedmiot siłą umysłu, możesz też się z kimś siłować np. wyrywając mu ulubioną buławę",
            chosen: false
          },
          levitation: {
            name: "Levitation",
            description: "Dotykasz kogokolwiek i od teraz przez 6 rund może się również przemieszczać w górę albo dół",
            chosen: false
          },
          polymorphy: {
            name: "Polymorphy",
            description: "Zmieniasz się w nie większe od ciebie stworzenie, MG decyduje co ci to daje",
            chosen: false
          },
        },
        backgroundList: {
          craftsman: {
            name: "Rzemieślnik",
            description: "Jesteś bardzo dobry w wykonywaniu rzeczy. Jak ktoś spyta czy robisz wisiorki, to dobry moment żeby uświadomić delikwenta że nie ma nic za darmo.",
            inventory: [
              "10 srebrnych monet",
              "Wybrane narzędzia rzemieślnicze",
              "Grzebień do wąsów",
              "Plecak"
            ],
            hidden: true,
            chosen: false,
          },
          artist: {
            name: "Artysta",
            description: "Nikt cię nie rozumie. Zarabiasz wyjątkowo mało mimo setek przepracowanych godzin. Nie zapominasz również się tym chwalić na każdym kroku.",
            inventory: [
              "Wybrane narzędzia artystyczne",
              "2 srebrne monety",
              "Torba",
            ],
            hidden: true,
            chosen: false,
          },
          cook: {
            name: "Kucharz",
            description: "Jesteś wyjątkowo dobry w przygotowywaniu szamy dla swoich towarzyszy. Jeśli chodzi o jedzenie, to twój konik. Co widać zresztą po niektórych walorach twojego ciała.",
            inventory: [
              "Wybrany sprzęt do gotowania",
              "6 srebrnych monet",
              "Przyprawy",
              "Krzesiwo",
              "Worek",
            ],
            hidden: true,
            chosen: false,
          },
          thief: {
            name: "Złodziej",
            description: "Czyjeś rzeczy to twoje rzeczy. Weź wszystko i nie dawaj nic w zamian.",
            inventory: [
              "Wybrane narzędzia złodzieja",
              "4 srebrne monety",
              "Torba",
            ],
            hidden: true,
            chosen: false,
          },
          miner: {
            name: "Górnik",
            description: "Jaskinie to twój drugi dom. Ten pierwszy to piwo w karczmie. Możesz też walnąć komuś z kilofa jak podskakuje.",
            inventory: [
              "Kilof (ciężka lub lekka broń)",
              "3 srebrne monety",
              "Kask ze świeczką lub latarnia",
            ],
            hidden: true,
            chosen: false,
          },
          forester: {
            name: "Gajowy",
            description: "Znasz się na roślinach. Potrafisz obciąć nożyczkami żywopłot w dwie minuty lepiej niż kto inny szczypcami przez godzinę. Jak spytają cię czy to pokrzywa czy ziele angielskie to na pewno nie powiesz że to bakłażan.",
            inventory: [
              "Nożyce",
              "4 srebrne monety",
              "Łopata",
              "Sadzonka wybranej rośliny"
            ],
            hidden: true,
            chosen: false,
          },
          scavenger: {
            name: "Złomiarz",
            description: "Od kiedy pamiętasz, zbierasz wszystko co zobaczysz. Twój wór pełny jest śmieci które nie omieszkasz sprzedać jeśli tylko ktoś kupi. Uwielbiasz puste pola bitwy, które możesz przemierzać szukając łupów.",
            inventory: [
              "Wór pełen śmieci",
              "Wybrane narzędzia do szybkiego przeszukiwania",
              "3 srebrne monety",
            ],
            hidden: true,
            chosen: false,
          },
          sailor: {
            name: "Żeglarz",
            description: "Morze to twój dom. Jeśli kiedykolwiek ktoś do ciebie przysiądzie to albo dostanie łyk rumu albo przegraną w kości. Twój statek niekoniecznie jest przy tobie fizycznie ale na pewno można go znaleźć w twoim sercu.",
            inventory: [
              "Kości do gry",
              "Butelka Rumu",
              "6 srebrnych monet",
              "Złoty ząb"
            ],
            hidden: true,
            chosen: false,
          },
          innkeeper: {
            name: "Karczmarz",
            description: "Wiesz co nieco o otaczającym cię świecie. Nie jest to dziwne bo przecież pół życia spędziłeś za ladą lejąc trunki i słuchając lokalnych. Możesz upędzić bimber, który nie będzie smakował jak psie szczyny.",
            inventory: [
              "Twój ulubiony fartuch",
              "Antałek bimbru",
              "8 srebrnych monet",
            ],
            hidden: true,
            chosen: false,
          },
          merchant: {
            name: "Kupiec",
            description: "Złoto i srebro. Jeśli coś istnieje, na pewno ma wartość a ty dobrze wiesz jaką. Targowanie, owijanie w bawełnę, wyduszanie ostatniej miedzi i liczenie złota to dla ciebie codzienność.",
            inventory: [
              "10 srebrnych monet",
              "Monokl",
              "Plecak",
            ],
            hidden: true,
            chosen: false,
          },
        }
      }
    }
  }
</script>

<template>

  <Header />

  <div class="container">
    <router-view :abilityPoints="abilityPoints" :chosenPoints="chosenPoints" :classList="classList" :spellList="spellList" :backgroundList="backgroundList" :other="other" />
  </div>


  <Footer />
  
</template>

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

  // Import Bulma
  // @import 'bulma/sass/base/_all.sass';
  // @import 'bulma/sass/components/_all.sass';
  // @import 'bulma/sass/elements/_all.sass';
  // @import 'bulma/sass/grid/_all.sass';
  // @import 'bulma/sass/helpers/_all.sass';
  // @import 'bulma/sass/layout/_all.sass';
  // @import 'bulma/sass/utilities/_all.sass';
  // @import 'bulma/sass/form/_all.sass';
  // @import 'bulma/sass/form/shared.sass';
  // @import 'bulma/sass/form/checkbox-radio.sass';
  // @import 'bulma/sass/form/file.sass';
  // @import 'bulma/sass/form/input-textarea.sass';
  // @import 'bulma/sass/form/tools.sass';
  @import 'bulma';

  @import 'bulma-prefers-dark';
  @import '@fortawesome/fontawesome-free/css/all.css';

  button.is-fullwidth,
  button.is-fullwidth span
  {
    display: block !important;
    text-align: center !important;
  }

  // Fix Bulma Flex
  .field {
    flex-grow: unset !important;
    flex-shrink: unset !important;
    flex: 1 1 0 !important;
  }

  .shake {
    animation: shake 0.82s cubic-bezier(.36, .07, .19, .97) both;
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }

  // Customize vue-select css
  :root {
    --vs-colors--lightest: rgba(60, 60, 60, 1);
    --vs-colors--light: rgba(60, 60, 60, 1);
    --vs-colors--dark: #333;
    --vs-colors--darkest: rgb(0, 0, 0);

    /* Search Input */
    --vs-search-input-color: inherit;
    --vs-search-input-placeholder-color: inherit;

    /* Font */
    --vs-font-size: 1rem;
    --vs-line-height: 1.4;

    /* Disabled State */
    // --vs-state-disabled-bg: rgb(248, 248, 248);
    --vs-state-disabled-bg: rgb(0, 0, 0);
    --vs-state-disabled-color: var(--vs-colors--darkest);
    --vs-state-disabled-controls-color: var(--vs-colors--dark);
    --vs-state-disabled-cursor: not-allowed;

    /* Borders */
    --vs-border-color: var(--vs-colors--dark);
    --vs-border-width: 1px;
    --vs-border-style: solid;
    --vs-border-radius: 4px;

    /* Actions: house the component controls */
    --vs-actions-padding: 4px 6px 0 3px;

    /* Component Controls: Clear, Open Indicator */
    --vs-controls-color: var(--vs-colors--light);
    --vs-controls-size: 1;
    --vs-controls--deselect-text-shadow: 0 1px 0 #fff;

    /* Selected */
    --vs-selected-bg: var(--vs-colors--dark);
    --vs-selected-color: var(--vs-colors--dark);
    --vs-selected-border-color: var(--vs-border-color);
    --vs-selected-border-style: var(--vs-border-style);
    --vs-selected-border-width: var(--vs-border-width);

    /* Dropdown */
    --vs-dropdown-bg: var(--vs-colors--darkest);
    --vs-dropdown-color: inherit;
    --vs-dropdown-z-index: 1000;
    --vs-dropdown-min-width: 160px;
    --vs-dropdown-max-height: 350px;
    --vs-dropdown-box-shadow: 0px 3px 6px 0px var(--vs-colors--darkest);

    /* Options */
    --vs-dropdown-option-bg: #000;
    --vs-dropdown-option-color: var(--vs-dropdown-color);
    --vs-dropdown-option-padding: 3px 20px;

    /* Active State */
    --vs-dropdown-option--active-bg: rgb(243, 0, 0);
    --vs-dropdown-option--active-color: var(--vs-colors--darkest);

    /* Deselect State */
    --vs-dropdown-option--deselect-bg: #fb5858;
    --vs-dropdown-option--deselect-color: var(--vs-colors--darkest);

    /* Transitions */
    --vs-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);
    --vs-transition-duration: 150ms;
  }

  @import 'vue-multiselect/dist/vue-multiselect.css';

  // .v-select,
  // .vs__dropdown-toggle
  // {
  //   background-color: #000;
  //   border-radius: 5px;
  //   height: 53px;
  // }

  @media (prefers-color-scheme: dark) {
    .modal-background {
      background-color: rgba(48, 46, 46, 0.808);
    }

    .select[multiple] {
      background-color: rgba(48, 46, 46, 0.808) !important;
    }

    select:internal-list-box option:checked {
      background-color: red !important;
    }
  }

</style>