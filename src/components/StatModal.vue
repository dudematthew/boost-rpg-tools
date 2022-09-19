<script>
    import Randomizer from '@/lib/randomizer'
    let randomizer = new Randomizer()

    export default {
        name: 'StatModal',
        props: {
            throwStatistic: Object,
        },
        data() {
            return {
                modifier: 0,
                result: 0,
                active: false,
                state: "input",
            }
        },
        computed: {
            target() {
                return parseInt(this.throwStatistic.value);
            },
            resultText() {
                return (this.result + this.modifier > this.target) ?
                    `Zabrakło ci ${Math.abs(this.target - this.result + this.modifier)}...` :
                    (this.result + this.modifier < this.target) ?
                        `Przebiłeś wymagania o ${Math.abs(this.result + this.modifier - this.target)}!` :
                        "Trafiłeś idealnie!";
            }
        },
        methods: {
            // Reset data and show the modal
            show() {
                this.result = 0;
                this.modifier = 0;
                this.state = "input";
                this.active = true;
            },
            async draw() {
                this.result = parseInt(await randomizer.getRandomNumber(1, 20));

                this.state = "result";
            },
            // Emits interface to parent
            emitInterface() {
                this.$emit("interface", {
                    showStatModal: () => this.show()
                });
            }
        },
        watch: {
            active: function (val) {
                document.querySelector("html").classList.toggle("is-clipped", val);
                console.log(val);
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
                <p class="modal-card-title">Rzut na {{ throwStatistic.nameGenitive }}</p>
                <button class="delete" @click="active = false"></button>
            </header>
            <section class="modal-card-body" v-if="state == 'input'">
                <p class="title is-4 is-spaced has-text-black">Podaj modyfikator</p>
                <p class="subtitle is-6 has-text-black">Zsumuj wszystkie plusy i minusy</p>
                <div class="control mb-3">
                    <div class="field has-addons">
                        <div class="control">
                            <input class="input is-large" v-model="modifier" type="number">
                        </div>

                        <div class="control">
                            <button class="button is-large" type="button" @click="modifier--">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-minus"></i>
                                </span>
                            </button>
                        </div>

                        <div class="control">
                            <button class="button is-large" type="button" @click="modifier++">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-plus"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="modal-card-body" v-if="state == 'result'">
                <div class="media">
                    <div class="media-left">
                        <p class="title is-large has-text-black">{{result}}{{modifier != 0 ? ` + ${modifier}` : ''}} / {{target}}</p>
                    </div>
                    <div class="media-content">
                        <p class="title is-4 has-text-black">{{result + modifier > target ? "Nie zdane..." : "Zdane!"}}</p>
                        <p class="subtitle is-6">{{resultText}}</p>
                    </div>
                </div>
            </section>
            <footer class="modal-card-foot" v-if="state == 'input'">
                <button class="button is-success" @click="draw()">Rzucaj</button>
                <button class="button" @click="active = false">Anuluj</button>
            </footer>
            <footer class="modal-card-foot" v-if="state == 'result'">
                <button class="button is-success" @click="active = false">OK</button>
                <button class="button" @click="show()">Jeszcze raz!</button>
            </footer>
        </div>
    </div>
</template>