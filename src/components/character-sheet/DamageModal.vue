<script>
    export default {
        name: 'DamageModal',
        props: [
            'other',
            'baseHP'
        ],
        data() {
            return {
                damage: 0,
                result: 0,
                armor: 0,
                active: false,
                state: "input",
                resultTexts: {
                    0: ["Nie żyjesz.", "Dziękujemy za grę."],
                    10: ["Zaraz umrzesz.", "Uważaj teraz żeby się nie przeciąć papierem."],
                    20: ["Jest bardzo źle.", "A właśnie! Masz spisany testament?"],
                    30: ["Jest źle.", "Nie wytrzymasz już długo. Zetrzyj tą krew z oczu bo patrzysz w złą stronę."],
                    40: ["Cholera! To ma tak boleć?.", "Nie wyglądasz za dobrze. Jeśli kiedykolwiek wyglądałeś."],
                    50: ["Trzymasz się.", "Choć zdecydowanie wolałbyś teraz ten poranek na który tak narzekałeś."],
                    60: ["Nie jest tak źle.", "Choć z pewnością bywało lepiej."],
                    70: ["Zraniony przyzwoicie.", "Przygoda! Niczego innego nie oczekujesz od życia."],
                    80: ["Nazywasz to zranieniem?", "Synu, choć, pokażę ci co to znaczy być zranionym."],
                    90: ["To tylko zadrapanie!", "W gorszym stanie byłem wczorajszej nocy jak uderzyłem palcem o stół!"],
                    100: ["Jesteś w pełni zdrowia!", " Cokolwiek to było, trzeba trochę więcej na ciebie."],
                }
            }
        },
        computed: {
            resultText() {
                return this.resultArrayText[0];
            },

            resultSubText() {
                return this.resultArrayText[1];
            },

            resultArrayText () {
                // For each result type, check if it's between
                // current and next one
                for(let rtId in this.resultTexts) {
                    rtId = parseInt(rtId);
                    let nextRtId = parseInt(rtId) + 10;

                    if ((this.percentage * 100) < nextRtId) {
                        return this.resultTexts[rtId];
                    }
                }

                // Defaults to > 100%
                return this.resultTexts[100];
            },

            currentHP () {
                return this.other.currentHP;
            },

            percentage() {
                return (this.currentHP/this.baseHP);
            },
        },
        methods: {
            // Reset data and show the modal
            show() {
                this.result = 0;
                this.damage = 0;
                this.state = "input";
                this.active = true;
            },

            async harm() {
                this.result = parseInt(this.damage) - parseInt(this.armor);

                this.other.currentHP = parseInt(this.currentHP) - parseInt(this.result);

                this.state = "result";
            },

            // Emits interface to parent
            emitInterface() {
                this.$emit("interface", {
                    showDamageModal: () => this.show()
                });
            }
        },
        watch: {
            active: function (val) {
                document.querySelector("html").classList.toggle("is-clipped", val);
            }
        },
        mounted() {
            // Emits on mount
            this.emitInterface();
        }
    }
</script>

<template>
    <div class="modal" :class="{'is-active': active}">
        <div class="modal-background"></div>

        <div class="modal-content">
            <header class="modal-card-head">
                <p class="modal-card-title">Zadziała ci się krzywda?</p>
                <button class="delete" @click="active = false"></button>
            </header>
            <section class="modal-card-body" v-if="state == 'input'">
                <p class="title is-4 is-spaced has-text-black">Ile obrażeń dostałeś?</p>
                <div class="control mb-5">
                    <div class="field has-addons">
                        <div class="control">
                            <input class="input is-large" v-model="damage" type="number">
                        </div>

                        <div class="control">
                            <button class="button is-large" type="button" @click="damage--">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-minus"></i>
                                </span>
                            </button>
                        </div>

                        <div class="control">
                            <button class="button is-large" type="button" @click="damage++">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-plus"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <p class="title is-4 is-spaced has-text-black">Jaką nosisz zbroję?</p>
                <p class="subtitle is-6 has-text-black">
                    Zsumuj twój pancerz i wszystkie modyfikatory, masz na sobie zaklęcie Protect?
                </p>
                <div class="control mb-3">
                    <div class="field has-addons">
                        <div class="control">
                            <input class="input is-large" v-model="armor" type="number">
                        </div>

                        <div class="control">
                            <button class="button is-large" type="button" @click="armor--">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-minus"></i>
                                </span>
                            </button>
                        </div>

                        <div class="control">
                            <button class="button is-large" type="button" @click="armor++">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-plus"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <p class="subtitle is-6 has-text-black">
                    W <router-link class="link" to="/rulebook">zasadach gry</router-link> masz info o zbrojach i obrażeniach
                </p>
            </section>
            <section class="modal-card-body" v-if="state == 'result'">
                <div class="media">
                    <div class="media-left">
                        <p class="title is-large has-text-black">
                            {{result}}!
                        </p>
                    </div>
                    <div class="media-content">
                        <p class="title is-4 has-text-black">Zostało ci {{currentHP}} HP. {{resultText}}</p>
                        <p class="subtitle is-6 has-text-black">{{resultSubText}}</p>
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot" v-if="state == 'input'">
                <button class="button is-danger" @click="harm()">
                    <span>Przyjmij na klatę!</span>
                    <span class="icon is-small">
                        <i class="fa-solid fa-heart-crack"></i>
                    </span>
                </button>
                <button class="button" @click="active = false">Anuluj</button>
            </footer>
            <footer class="modal-card-foot" v-if="state == 'result'">
                <button class="button is-success" @click="active = false">OK</button>
                <button class="button is-danger" @click="show()">Jeszcze mi mało!</button>
            </footer>
        </div>
    </div>
</template>