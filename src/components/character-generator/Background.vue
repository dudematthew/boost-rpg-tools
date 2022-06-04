<script>
    export default {
        name: "Background",
        props: [
            'backgroundList'
        ],
        computed: {
        },
        methods: {
            showBackground(id) {
                for (let bId in this.backgroundList)
                    this.backgroundList[bId].hidden = true;

                this.backgroundList[id].hidden = false;
            },
            chooseBackground (id) {
                for (let bId in this.backgroundList)
                    this.backgroundList[bId].chosen = false;

                this.backgroundList[id].chosen = true;
            },
        }
    }
</script>

<template>
    <label class="label is-medium mb-2">Zanim twoja postać wyruszyła na przygodę, powinna była czymś się zajmować. Chyba że preferujesz nudę. Możesz przerzucić kość i wybrać lepszy wynik, gdy wykonujesz czynność związaną z twoim zawodem.</label>
    <div class="card mb-2" :class="{'chosen': background.chosen}" v-for="(background, bName) in backgroundList" :key="bName"
        @click="showBackground(bName)">
        <header class="card-header">
            <p class="card-header-title is-size-4 m-0 mt-1">
                {{background.name}}
            </p>
            <button class="card-header-icon" aria-label="more options">
                <span class="icon">
                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
            </button>
        </header>
        <div class="card-content" :class="{'is-hidden': background.hidden}">
            <div class="content is-size-5">
                {{background.description}}
                <br>
                <br>
                Ekwipunek:
                <ul class="mt-0">
                    <li v-for="(item, itemName) in background.inventory" :key="itemName">
                        {{item}}
                    </li>
                </ul>
            </div>
        </div>
        <footer class="card-footer">
            <button class="card-footer-item button" :disabled="background.chosen"
                @click="chooseBackground(bName)">{{background.chosen ? "Wybrany!" : "Wybierz"}}</button>
        </footer>
    </div>
</template>