<script>
    export default {
        name: "Class",
        data() {
            return {
                classList: {
                    warrior: {
                        name: "Wojownik",
                        type: "Lekki",
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
                        inventory: [
                            "Lekka broń dystansowa",
                            "12 pocisków",
                        ],
                        ability: "Strzelec zadaje dodatkowe 2 obrażenia bronią dystansową",
                        hidden: true,
                        chosen: false 
                    },
                }
            }
        },
        methods: {
            showClass (id) {
                for (let cId in this.classList)
                    this.classList[cId].hidden = true;

                this.classList[id].hidden = false;
            },
            chooseClass (id) {
                for (let cId in this.classList)
                    this.classList[cId].chosen = false;

                this.classList[id].chosen = true;
            }
        }
    }
</script>

<template>
    <label class="label is-medium mb-1">Wybierz sobie swoją wymarzoną Klasę</label>
    <div class="card mb-2" :class="{'chosen': cClass.chosen}" v-for="(cClass, cName) in classList" :key="index" @click="showClass(cName)">
        <header class="card-header">
            <p class="card-header-title mt-2">
                {{cClass.name}}
            </p>
            <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </header>
        <div class="card-content" :class="{'is-hidden': cClass.hidden}">
            <div class="content">
                Typ: {{cClass.type}}
                <br>
                <br>
                Ekwipunek:
                <ul class="mt-0">
                    <li v-for="item in cClass.inventory" :key="index">
                        {{item}}
                    </li>
                </ul>
                <br>
                Specjalna zasada: {{cClass.ability}}
            </div>
        </div>
        <footer class="card-footer">
            <button class="card-footer-item button" :disabled="cClass.chosen" @click="chooseClass(cName)">{{cClass.chosen ? "Wybrany!" : "Wybierz"}}</button>
        </footer>
    </div>
</template>

<style lang="scss">
    .chosen {
        border: 2px solid green;
    }
</style>