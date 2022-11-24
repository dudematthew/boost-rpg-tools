<script>
    import {
        nextTick
    } from '@vue/runtime-core';
    export default {
        name: "SpellSelect",
        props: [
            'spellList',
            'availableSpells',
            'spellAmount'
        ],

        data() {
            return {
                expanded: false,
                lastAddedSpell: 'null',
            }
        },

        methods: {
            /**
             * Update data based on selected options
             * todo: check if character can have given spell
             * @param {*} e event
             */
            onSelectChange(e) {
                let selectEl = e.target;

                for (let i = 0; i < selectEl.length; i++) {
                    let option = selectEl.options[i];

                    if (this.spellAvailable(option.value)) {
                        this.spellList[option.value].chosen = option.selected;
                        option.selected = this.spellList[option.value].chosen;
                    } else {
                        option.selected = false;
                        this.spellList[option.value].chosen = false;
                    }

                }

                this.updateSelectOptions();

                this.$emit('change');
            },

            // Get option HTML element by spell id
            getOptionBySpellId(spellId) {
                let selectEl = this.$refs.select;

                // for (let i = 0; i < selectEl.length; i++) {

                // }

                for (let x of Array.from(selectEl.children)[0]) {
                    let option = x;


                    if (option.value == spellId) {
                        return option;
                    }

                }

                console.error("Couldn't find spell: ", spellId);
                return null;
            },

            // Check if current class can have given spell
            spellAvailable(spellId) {
                return this.availableSpells.includes(spellId);
            },

            /**
             * Check if spell amount is greater than
             * maximum spell amount
             */
            hasTooMuch() {
                let chosenSpellsAmount = 0;

                for (let spellId in this.spellList) {
                    let spell = this.spellList[spellId];

                    if (spell.chosen)
                        chosenSpellsAmount++
                }

                return chosenSpellsAmount > this.spellAmount;
            },

            clearSpellChoices () {
                for (let spell of this.spellList) {
                    spell.chosen = false;
                }
            },

            /**
             * Update selection based on data
             * Unselect spells if character can't
             * have more
             */
            updateSelectOptions() {
                if (this.hasTooMuch()) {
                    if (this.lastAddedSpell != null) {
                        this.getOptionBySpellId(this.lastAddedSpell).selected = false;
                    } else {
                        this.clearSpellChoices();
                        console.log("Cleared spell choices");
                    }
                }
            },

            /**
             * Update last added spell
             * @param {*} spellId spell that is clicked
             */
            updateLastAddedSpell(spellId, e) {
                if (e.target.selected) {
                    this.lastAddedSpell = spellId;
                    this.spellList[spellId].chosen = true;
                }

                console.log(spellId, this.lastAddedSpell, this.spellList[spellId].chosen);
            },
        },

        computed: {
            spellListLength() {
                return this.availableSpells.length;
            }
        },

    }
</script>

<template>
    <div class="field is-grouped" tabindex="1" @focusout="expanded = false" v-if="availableSpells.length != 0">
        <div class="control select-control" @click="expanded = true">
            <div class="select is-multiple is-fullwidth is-large" ref="select" >
                <select @change="onSelectChange($event)" :size="expanded ? spellListLength : 1" style="overflow: hidden" @click.shift.prevent
                    multiple>
                    <template v-for="(spell, spellId) in spellList" :key="spellId">
                        <option :selected="spell.chosen" :value="spellId" v-if="spellAvailable(spellId)"
                            @click="updateLastAddedSpell(spellId, $event)">
                            {{spell.name}}
                        </option>
                    </template>
                </select>
            </div>
        </div>
        <div class="control">
            <button class="button" @click="expanded = !expanded">
                <span class="icon is-small">
                    <i class="fa-solid" :class="{'fa-chevron-down': !expanded, 'fa-chevron-up': expanded}"></i>
                </span>
            </button>
        </div>
    </div>
</template>

<style scoped>
    .button {
        height: 58px;
        margin-left: -12px;
    }

    select,
    .select {
        width: 100%;
        position: absolute;
        z-index: 12;
    }

    .select option:checked {
        background-color: #0078D7
    }

    .select-control {
        display: block;
        width: calc(100% - 40px);
    }
</style>