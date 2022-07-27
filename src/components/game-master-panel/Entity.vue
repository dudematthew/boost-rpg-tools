<script>
    export default {
        name: "Entity",
        props: [
            'entity'
        ],
        computed: {

        },
        methods: {

        },
        mounted() {

        }
    }
</script>

<template>
    <div class="tile is-child notification" :class="{'is-danger': entity.type == 'enemy', 'is-success': entity.type == 'ally', 'is-info': entity.type == 'neutral'}">
        <div class="tile is-parent is-vertical is-12 p-0">

            <div class="tile is-child is-12">
                <p class="title is-4" contenteditable>
                    {{entity.name}}
                </p>
            </div>

            <div class="tile is-child is-12">

                <div class="field is-grouped is-grouped-multiline">

                    <div class="field has-addons is-gruped pr-2">
                        <p class="control" style="min-width: 60px;">
                            <input class="input" type="number" placeholder="Siła" :value="entity.strength">
                        </p>
                        <div class="control">
                            <button class="button">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-hand-fist"></i>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="field has-addons is-gruped pr-2">
                        <p class="control" style="min-width: 60px;">
                            <input class="input" type="number" placeholder="Zręczność" :value="entity.agility">
                        </p>
                        <div class="control">
                            <button class="button">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-person-running"></i>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="field has-addons is-gruped pr-2">
                        <p class="control" style="min-width: 60px;">
                            <input class="input" type="number" placeholder="Inteligencja" :value="entity.inteligence">
                        </p>
                        <div class="control">
                            <button class="button">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-brain"></i>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="field has-addons is-gruped pr-2">
                        <p class="control" style="min-width: 60px;">
                            <input class="input" type="number" placeholder="Skupienie" :value="entity.focus">
                        </p>
                        <div class="control">
                            <button class="button">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-eye"></i>
                                </span>
                            </button>
                        </div>
                    </div>

                    <!-- HP -->
                    <div class="field has-addons is-gruped pr-2">
                        <div class="control">
                            <button class="button">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-arrow-up"></i>
                                </span>
                            </button>
                        </div>
                        <p class="control has-icons-right" style="min-width: 60px;">
                            <input class="input" type="number" placeholder="Żywotność" :value="entity.health">
                            <span class="icon is-small is-right">
                                <i class="fa-solid fa-heart"></i>
                            </span>
                        </p>
                        <div class="control">
                            <button class="button">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                    <!--  -->

                    <div class="field has-addons is-gruped pr-2">
                        <p class="control" style="min-width: 60px;">
                            <input class="input" type="number" placeholder="Mana" :value="entity.focus">
                        </p>
                        <div class="control">
                            <button class="button">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-wand-sparkles"></i>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="control mr-2" >
                        <button class="button">
                            <span class="icon is-small">
                                <i class="fa-solid fa-skull"></i>
                            </span>
                        </button>
                    </div>

                    <div class="select mr-2">
                        <select>
                            <option>Wróg</option>
                            <option>Przyjaciel</option>
                            <option>Niezależny</option>
                        </select>
                    </div>

                    <div class="control">
                        <button class="button">
                            <span class="icon is-small">
                                <i class="fa-solid fa-angles-up"></i>
                            </span>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>