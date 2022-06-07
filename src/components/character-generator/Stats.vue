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
            }
        },
        methods: {
            choosePoint(index, value, lastValue) {
                for (let pointId in this.chosenPoints) {
                    let point = this.chosenPoints[pointId];

                    if (point.value == value) {
                        this.chosenPoints[pointId].value = lastValue;
                    }
                }

                this.chosenPoints[index].value = value;
            }
        }
    }
</script>

<template>
    <label class="label is-medium">Masz {{ abilityPointsText }} punktów do rozdysponowania pomiędzy 4
        statystyki:</label>
    <div class="field has-addons" v-for="(point, pointId) in chosenPoints" :key="pointId">
        <div class="control">
            <input class="input is-size-4 is-size-6-mobile" type="text" :value="point.name" disabled>
        </div>

        <div v-for="(abilityPoint, index) in abilityPoints" :key="index" class="control">
            <a class="button is-size-4 is-size-6-mobile" @click="choosePoint(pointId, abilityPoint, point.value)"
                :class="{ 'is-info': point.value != abilityPoint, 'is-success': point.value == abilityPoint }">
                {{abilityPoint}}
            </a>
        </div>
    </div>
    <div class="field has-addons">
        <div class="control">
            <input class="input is-size-4 is-size-6-mobile" type="text" value="Żywotność" disabled>
        </div>

        <div class="control">
            <input class="input is-size-4 is-size-6-mobile" type="text" :value="healthPoint" disabled>
        </div>
    </div>
    <div class="field has-addons">
        <div class="control">
            <input class="input is-size-4 is-size-6-mobile" type="text" value="Mana" disabled>
        </div>

        <div class="control">
            <input class="input is-size-4 is-size-6-mobile" type="text" :value="manaPoint" disabled>
        </div>
    </div>
</template>