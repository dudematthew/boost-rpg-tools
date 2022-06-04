<script>
    export default {
        name: "Class",
        data() {
            return {
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
                }
            }
        },
        computed: {
            chosenClass () {
                for (let cClass in this.classList) {
                    if (this.classList[cClass].chosen) {
                        return this.classList[cClass];
                    }
                }
                return null;
            },
            availableSpells () {
                if (this.chosenClass == null)
                    return {};

                let availableSpells = {};
                for (let spell in this.spellList) {
                    if (this.chosenClass.availableSpells.includes(spell)) {
                        availableSpells[spell] = this.spellList[spell];
                    }
                }

                return availableSpells;
            },
            chosenSpellsAmount () {
                let i = 0;

                for (let sId in this.spellList)
                    if (this.spellList[sId].chosen == true)
                        i++;

                return i;
            },
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

                this.resetSpellChoices();
            },
            switchSpellChoice (id) {
                if (this.spellList[id].chosen == true) {
                    this.spellList[id].chosen = false;
                } else {
                    if (this.chosenSpellsAmount >= this.chosenClass.spellAmount)
                        return;

                    this.spellList[id].chosen = true;
                }
            },
            resetSpellChoices () {
                for (let sId in this.spellList)
                    this.spellList[sId].chosen = false;
            }
        }
    }
</script>

<template>
    <label class="label is-medium mb-2">Wybierz sobie swoją wymarzoną Klasę</label>
    <div class="card mb-2" :class="{'chosen': cClass.chosen}" v-for="(cClass, cName) in classList" :key="cName"
        @click="showClass(cName)">
        <header class="card-header">
            <p class="card-header-title is-size-4 m-0 mt-1">
                {{cClass.name}}
            </p>
            <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </header>
        <div class="card-content" :class="{'is-hidden': cClass.hidden}">
            <div class="content is-size-5">
                Typ: {{cClass.type}}
                <br>
                <br>
                Ekwipunek:
                <ul class="mt-0">
                    <li v-for="(item, itemName) in cClass.inventory" :key="itemName">
                        {{item}}
                    </li>
                </ul>
                <br>
                Specjalna zasada: {{cClass.ability}}
            </div>
        </div>
        <footer class="card-footer">
            <button class="card-footer-item button" :disabled="cClass.chosen"
                @click="chooseClass(cName)">{{cClass.chosen ? "Wybrany!" : "Wybierz"}}</button>
        </footer>
    </div>

    <div v-if="chosenClass != null && chosenClass.spellAmount > 0">
        <label class="label is-medium mt-5 mb-2">{{chosenClass.name}} ma {{chosenClass.spellAmount}} {{(chosenClass.spellAmount == 1) ? "zaklęcie" : "zaklęcia"}}, wybierz je!</label>
        <div class="card mb-2" :class="{'chosen': spell.chosen}" v-for="(spell, spellName) in availableSpells" :key="spellName">
            <div class="card-content">
                <nav class="level-left">
                    <div class="level-item has-text-left lg-mr-5">
                        <p class="title">
                            {{spell.name}}
                        </p>
                    </div>
                    <div class="level-item">
                        <p class="subtitle mt-2">
                            {{spell.description}}
                        </p>
                    </div>
                </nav>
            </div>
            <footer class="card-footer">
                <button class="card-footer-item button" :class="{'is-success': spell.chosen}"
                @click="switchSpellChoice(spellName)">{{spell.chosen ? "Oddaj" : "Wybierz"}}</button>
            </footer>
        </div>
    </div>
</template>