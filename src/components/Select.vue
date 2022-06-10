<script>
export default {
    name: "Select",
    props: [
        'data',
        'label',
        'switchAttrib',
    ],
    methods: {
        onSelectChange (e) {
            this.clearDataChoices();

            this.data[e.target.value][this.switchAttrib] = true;
        },

        clearDataChoices () {
            for (let dId in this.data) {
                this.data[dId][this.switchAttrib] = false;
            }
        },
    }
}
</script>

<template>
  <div class="select is-fullwidth is-large">
    <select @change="onSelectChange">
        <option v-for="(item, itemName) in data" :key="itemName" :selected="item[switchAttrib]" :value="itemName">
            {{item[label]}}
        </option>
    </select>
    </div>
</template>


