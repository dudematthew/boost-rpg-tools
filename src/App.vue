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
            name: "Siła"
          },
          agility: {
            value: null,
            name: "Zręczność"
          },
          intelligence: {
            value: null,
            name: "Inteligencja"
          },
          focus: {
            value: null,
            name: "Skupienie"
          }
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
            spellAmount: 3,
            availableSpells: ["heal", "blast", "protect", "enchant", "curse", "bless"],
            inventory: [
              "Laska maga (+1 do Skupienia)",
              "Toga",
            ],
            ability: " Mag zadaje k6 obrażeń zaklęciem blast",
            hidden: true,
            chosen: false
          },
          cleric: {
            name: "Kleryk",
            type: "Magiczny",
            spellAmount: 3,
            availableSpells: ["heal", "blast", "protect", "enchant", "curse", "bless"],
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
            description: "Dotykasz kogoś i przez całą turę obrażenia na niego zmniejszają się o 1",
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
            description: "Czyjeś rzeczy to twoje rzeczy. Weź wszystko i nie dawaj nic w zamian.",
            inventory: [
              "Wybrane narzędzia złodzieja",
              "4 srebrne monety",
              "Torba",
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
          }
        }
      }
    }
  }
</script>

<template>

  <Header />

  <router-view :abilityPoints="abilityPoints" :chosenPoints="chosenPoints" :classList="classList" :spellList="spellList" :backgroundList="backgroundList" />

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

  @import 'bulma';
  @import 'bulma-prefers-dark';
</style>