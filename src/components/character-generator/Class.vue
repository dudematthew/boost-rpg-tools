<script>
    export default {
        name: "Class",
        props: [
            'classList',
            'spellList'
        ],
        computed: {
            chosenClass() {
                for (let cClass in this.classList) {
                    if (this.classList[cClass].chosen) {
                        return this.classList[cClass];
                    }
                }
                return null;
            },
            availableSpells() {
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
            chosenSpellsAmount() {
                let i = 0;

                for (let sId in this.spellList)
                    if (this.spellList[sId].chosen == true)
                        i++;

                return i;
            },
            spellAmountText() {
                return (chosenClass.spellAmount == 1) 
                    ? "zaklęcie" 
                    : (chosenClass.spellAmount in [5, 6]) 
                        ? "zaklęć" 
                        : "zaklęcia";
            }
        },
        methods: {
            showClass(id) {
                for (let cId in this.classList)
                    this.classList[cId].hidden = true;

                this.classList[id].hidden = false;
            },
            chooseClass(id) {
                for (let cId in this.classList)
                    this.classList[cId].chosen = false;

                this.classList[id].chosen = true;

                this.resetSpellChoices();
            },
            switchSpellChoice(id) {
                if (this.spellList[id].chosen == true) {
                    this.spellList[id].chosen = false;
                } else {
                    if (this.chosenSpellsAmount >= this.chosenClass.spellAmount)
                        return;

                    this.spellList[id].chosen = true;
                }
            },
            resetSpellChoices() {
                for (let sId in this.spellList)
                    this.spellList[sId].chosen = false;
            }
        }
    }
</script>

<template>
    <label class="label is-medium mb-2">Wybierz sobie swoją wymarzoną Klasę</label>
    <div class="card mb-2 is-size-5 is-size-6-mobile" :class="{'chosen': cClass.chosen}"
        v-for="(cClass, cName) in classList" :key="cName" @click="showClass(cName)">
        <header class="card-header">
            <p class="card-header-title m-0 mt-1">
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
        <label class="label is-medium mt-5 mb-2">{{chosenClass.name}} ma {{chosenClass.spellAmount}}
            {{spellAmountText}}, wybierz je!</label>
        <div class="card mb-2" :class="{'chosen': spell.chosen}" v-for="(spell, spellName) in availableSpells"
            :key="spellName">
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