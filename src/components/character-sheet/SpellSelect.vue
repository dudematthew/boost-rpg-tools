<script>
    export default {
        name: "SpellSelect",
        props: [
            'spellList',
            'availableSpells',
            'spellAmount'
        ],

        data() {
            return {
                
            }
        },

        methods: {
            // Check if current class can have given spell
            spellAvailable(spellId) {
                return this.availableSpells.includes(spellId);
            },

            /**
             * Check if given amount is greater than
             * maximum spell amount
             */
            isTooMuch(amount) {
                return amount > this.spellAmount;
            },

            switchSpell (spellId, element) {
                console.log("Switching spell:", spellId, this.chosenSpellsAmount, this.isTooMuch(this.chosenSpellsAmount + 1));

                this.fixChosenSpells();

                if (this.spellList[spellId].chosen == false) {
                    if (!this.isTooMuch(this.chosenSpellsAmount + 1))
                        this.spellList[spellId].chosen = true;
                } else {
                    this.spellList[spellId].chosen = false;
                }
            },

            /**
             * Deselect spells that aren't from
             * choosen class
             */
            fixChosenSpells () {
                for (let spellId in this.spellList) {
                    if (!spellId in this.availableSpells)
                        this.spellList[spellId].chosen = false;
                }
            },

        },

        computed: {
            spellListLength() {
                return this.availableSpells.length;
            },

            chosenSpellsAmount () {
                let chosenSpellsAmount = 0;

                for (let spellId in this.spellList) {
                    let spell = this.spellList[spellId];

                    if (spell.chosen)
                        chosenSpellsAmount++
                }

                console.log("Detected chosen spells:", chosenSpellsAmount);

                return chosenSpellsAmount;
            }
        },

    }
</script>

<template>
    <div class="field is-grouped is-grouped-multiline is-flex" style="width: 100%" v-if="availableSpells.length != 0">
        <p class="control" style="max-width: 35%; flex: 1;" v-for="(spell, spellId) in spellList" :key="spellId">
            <button class="button is-expanded" style="width: 100%" :class="{'is-success': spell.chosen}" @click="switchSpell(spellId, $this); $emit('change')" v-if="spellAvailable(spellId)">
                {{spell.name}}
            </button>
        </p>
    </div>
</template>

<style scoped>

</style>