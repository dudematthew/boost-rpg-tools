<script>
    export default {
        name: 'Stats',
        props: [
            'abilityPoints',
            'chosenPoints'
        ],
        computed: {
            abilityPointsText() {
                return this.abilityPoints.join(", ");
            },
            healthPoint () {
                return this.chosenPoints.strength.value != null ? this.chosenPoints.strength.value : "";
            },
            manaPoint () {
                return this.chosenPoints.focus.value != null ? this.chosenPoints.focus.value / 3 : "";
            },
            boosterPoint () {
                return this.chosenPoints.inteligence.value != null ? this.chosenPoints.inteligence.value / 3 : "";
            }
        },
        methods: {
            choosePoint(index, value, lastValue) {
                for (let pointId in this.chosenPoints) {
                    if (this.chosenPoints[pointId].value == value) {
                        this.chosenPoints[pointId].value = lastValue;
                    }
                }

                this.chosenPoints[index].value = value;
            },

            clearPoints () {
                for (let pointId in this.chosenPoints) {
                    this.chosenPoints[pointId].value = null;
                }
            },
        },
        mounted () {
            this.clearPoints();
        }
    }
</script>

<template>
    <label class="label is-medium">Masz {{ abilityPointsText }} punktów do rozdysponowania pomiędzy 4
        statystyki:</label>
    <div class="field has-addons is-full" v-for="(point, pointId) in chosenPoints" :key="pointId">
        <div class="control is-half" style="width: 100%">
            <input class="input is-full is-size-4 is-size-6-mobile" type="text" :value="point.name" disabled>
        </div>

        <div v-for="(abilityPoint, index) in abilityPoints" :key="index" class="control is-half" style="width: 25%">
            <a class="button is-size-4 is-size-6-mobile" style="width: 100%" @click="choosePoint(pointId, abilityPoint, point.value)"
                :class="{ 'is-info': point.value != abilityPoint, 'is-success': point.value == abilityPoint }">
                {{abilityPoint}}
            </a>
        </div>
    </div>
    <div class="field has-addons is-full">
        <div class="control" style="width: 50%">
            <input class="input is-size-4 is-size-6-mobile" type="text" value="Żywotność" disabled>
        </div>

        <div class="control" style="width: 50%">
            <input class="input is-size-4 is-size-6-mobile" type="text" :value="healthPoint" disabled>
        </div>
    </div>
    <div class="field has-addons is-full">
        <div class="control" style="width: 50%">
            <input class="input is-size-4 is-size-6-mobile" type="text" value="Mana" disabled>
        </div>

        <div class="control" style="width: 50%">
            <input class="input is-size-4 is-size-6-mobile" type="text" :value="manaPoint" disabled>
        </div>
    </div>
    <div class="field has-addons is-full">
        <div class="control" style="width: 50%">
            <input class="input is-size-4 is-size-6-mobile" type="text" value="Boostery" disabled>
        </div>

        <div class="control" style="width: 50%">
            <input class="input is-size-4 is-size-6-mobile" type="text" :value="boosterPoint" disabled>
        </div>
    </div>
</template>