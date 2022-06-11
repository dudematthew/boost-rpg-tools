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
        <option v-for="(item, itemId) in data" :key="itemId" :selected="item[switchAttrib]" :value="itemId">
            {{item[label]}}
        </option>
    </select>
    </div>
</template>


