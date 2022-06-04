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
    <label class="label is-medium mb-2">Zanim twoja postać wyruszyła na przygodę, powinna była czymś się zajmować. Chyba że preferujesz nudę. Możesz przerzucić kość która ci się nie podoba gdy wykonujesz czynność związaną z twoim zawodem.</label>
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