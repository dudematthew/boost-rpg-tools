<script>
export default {
    name: "SpellSelect",
    props: [
        'spellList',
        'classList',
    ],
    methods: {
        onSelectChange (e) {
            console.log(e.target.value);

            // this.clearDataChoices();

            // this.data[e.target.value][this.switchAttrib] = true;
        },

        // clearDataChoices () {
        //     for (let dId in this.data) {
        //         this.data[dId][this.switchAttrib] = false;
        //     }
        // },
    },
    computed: {
        chosenClass() {
            for (let cClass in this.classList) {
                if (this.classList[cClass].chosen) {
                    return this.classList[cClass];
                }
            }
            return null;
        },
    }
}
</script>

<template>
  <div class="select is-multiple is-fullwidth is-large">
    <select @change="onSelectChange" size="1" multiple>
        <option v-for="(spell, spellId) in spellList" :key="spellId" :selected="spell.chosen" :value="spellId">
            {{spell.name}}
        </option>
    </select>
    </div>
</template>


