<script>
import { nextTick } from '@vue/runtime-core';
export default {
    name: "SpellSelect",
    props: [
        'spellList',
        'availableSpells',
        'spellAmount'
    ],

    data () {
        return {
            expanded: false,
        }
    },

    methods: {
        onSelectChange (e) {
            let selectEl = e.target;

            for (let i = 0; i < selectEl.length; i++) {
                let option = selectEl.options[i];

                this.spellList[option.value].chosen = option.selected;

            }

            console.log(this.spellList)
        },

        spellAvailable (spellId) {
            console.log(this.spellListLength);
            return this.availableSpells.includes(spellId);
        },

        updateSelectOptions () {
            let selectEl = this.$refs.select;

            for (let i = 0; i < selectEl.length; i++) {
                let option = selectEl.options[i];

                if (this.spellList[option.value].chosen)
                    option.removeAttribute("selected");
                else
                    option.selected = "selected";

            }
        },

        // clearDataChoices () {
        //     for (let dId in this.data) {
        //         this.data[dId][this.switchAttrib] = false;
        //     }
        // },
    },

    computed: {
        spellListLength () {
            return this.availableSpells.length;
        }
    },

    watch: {
        /**
         * todo: currently something's wrong with oldSpellList which isn't actually old
         */
        spellList: {
            handler(newSpellList, oldSpellList) {
                console.log("Oldspellist: ", oldSpellList);
                let chosenSpellsAmount = 0;

                for (let spellId in newSpellList) {
                    let spell = newSpellList[spellId];

                    if (spell.chosen)
                        chosenSpellsAmount++
                }

                if (chosenSpellsAmount > this.spellAmount) {
                    console.log("Replacing...", oldSpellList);
                    this.updateSelectOptions();
                    return oldSpellList;
                }
                else
                    return newSpellList;
            },
            deep: true
        }
    },

    mounted () {
        console.log("SpellSelect: ", this.spellList, this.availableSpells);
    }
}
</script>

<template>
    <div class="field is-grouped" tabindex="1" @focusout="expanded = false" v-if="availableSpells.length != 0">
        <div class="control select-control" @click="expanded = true">
            <div class="select is-multiple is-fullwidth is-large" ref="select">
                <select @change="onSelectChange($event)" :size="(expanded) ? spellListLength : 1" style="overflow: hidden" multiple>
                    <template v-for="(spell, spellId) in spellList" :key="spellId">
                        <option :selected="spell.chosen" :value="spellId" v-if="spellAvailable(spellId)">
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

    .select-control {
        display: block;
        width: calc(100% - 40px);
    }
</style>


