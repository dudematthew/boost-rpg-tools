<script>
    import Randomizer from '@/lib/randomizer'
    let randomizer = new Randomizer()

    export default {
        name: 'StatModal',
        props: {
            active: Boolean,
            state: String,
            throwStatistic: Object
        },
        data () {
            return {
                modifier: 0,
                result: 0
            }
        },
        methods: {
            async draw () {
                let random = await randomizer.getRandomNumber(1, 20);
                this.result = random - parseInt(modifier);
                this.state = result;
            }
        },
        watch: {
            active: function (val) {
                document.querySelector("html").classList.toggle("is-clipped", val);
                console.log(val);
            }
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
            <section class="modal-card-body" v-if="state == 'modifier'">
                <p class="title is-4 is-spaced">Podaj modyfikator</p>
                <p class="subtitle is-6">Zsumuj wszystkie plusy i minusy</p>
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
                    <p class="title is-large has-text-black">12 / 14</p>
                </div>
                <div class="media-content">
                    <p class="title is-4 has-text-black">Zdane!</p>
                    <p class="subtitle is-6">Przebiłeś wymaganą liczbę o 2!</p>
                </div>
                </div>
            </section>
            <footer class="modal-card-foot" v-if="state == 'modifier'">
                <button class="button is-success" @click="draw()">Rzucaj</button>
                <button class="button" @click="active = false">Anuluj</button>
            </footer>
            <footer class="modal-card-foot" v-if="state == 'result'">
                <button class="button is-success" @click="active = false">OK</button>
                <button class="button">Jeszcze raz!</button>
            </footer>
        </div>

        <button class="modal-close is-large" @click="active = false"></button>
    </div>
</template>