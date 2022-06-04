<script>
    export default {
        name: "Background",
        data() {
            return {
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
        },
        computed: {
        },
        methods: {
            showBackground(id) {
                for (let bId in this.backgroundList)
                    this.backgroundList[bId].hidden = true;

                this.backgroundList[id].hidden = false;
            },
            chooseBackground (id) {
                for (let bId in this.backgroundList)
                    this.backgroundList[bId].chosen = false;

                this.backgroundList[id].chosen = true;
            },
        }
    }
</script>

<template>
    <label class="label is-medium mb-2">Zanim twoja postać wyruszyła na przygodę, powinna była czymś się zajmować. Chyba że preferujesz nudę. Możesz przerzucić kość i wybrać lepszy wynik, gdy wykonujesz czynność związaną z twoim zawodem.</label>
    <div class="card mb-2" :class="{'chosen': background.chosen}" v-for="(background, bName) in backgroundList" :key="bName"
        @click="showBackground(bName)">
        <header class="card-header">
            <p class="card-header-title is-size-4 m-0 mt-1">
                {{background.name}}
            </p>
            <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </header>
        <div class="card-content" :class="{'is-hidden': background.hidden}">
            <div class="content is-size-5">
                {{background.description}}
                <br>
                <br>
                Ekwipunek:
                <ul class="mt-0">
                    <li v-for="(item, itemName) in background.inventory" :key="itemName">
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
        <footer class="card-footer">
            <button class="card-footer-item button" :disabled="background.chosen"
                @click="chooseBackground(bName)">{{background.chosen ? "Wybrany!" : "Wybierz"}}</button>
        </footer>
    </div>
</template>