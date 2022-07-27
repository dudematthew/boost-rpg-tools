<script>
    export default {
        name: "Entity",
        props: {
            entity: {
                type: Object,
                required: true
            }
        },
        data () {
            return {
                entityStatesIcons: {
                    full: 'fa-solid fa-heart',
                    half: 'fa-solid fa-heart-crack',
                    dead: 'fa-solid fa-skull'
                }
            }
        },
        computed: {
            stateIcon () {
                if (this.entity.dead) return this.entityStatesIcons.dead;
                else if (this.entity.health > 0) return this.entityStatesIcons.full;
                else return this.entityStatesIcons.half;
            }
        },
        methods: {
            updateValue (key, value) {
                console.log('UPDATING...');
                // console.log(key, value, { ...this.value, [key]: value });
                this.$emit("update:entity", { ...this.entity, [key]: value });
            }
        },
        mounted() {
        }
    }
</script>

<template>
    <div class="tile is-child notification" :class="{'is-warning': entity.type == 'enemy', 'is-success': entity.type == 'ally', 'is-info': entity.type == 'neutral'}">
        <div class="tile is-parent is-vertical is-12 p-0">

            <div class="tile is-child is-12">
                <div class="level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <span class="icon-text title is-4">
                                <span class="icon mr-2">
                                    <i :class="stateIcon"></i>
                                </span>
                                <p class="title is-4" @keydown.enter="$event.target.blur()" @focusout="updateValue('name', $event.target.innerText)" contenteditable>
                                    {{entity.name}}
                                </p>
                            </span>
                        </div>
                    </div>
                    <div class="level-right" v-if="entity.dead">
                        <div class="level-item">
                            <div class="control">
                                <button class="button" title="Ożyw postać" @click="updateValue('dead', false)">
                                    <span class="icon is-small">
                                        <i class="fa-solid fa-heart-pulse"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="level-item">
                            <div class="control">
                                <button class="button is-danger" title="Usuń postać" @click="removeEntity()">
                                    <span class="icon is-small">
                                        <i class="fa-solid fa-trash"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tile is-child is-12" v-if="!entity.dead">

                <div class="field is-grouped is-grouped-multiline">

                    <div class="field has-addons is-gruped pr-2">
                        <p class="control" style="min-width: 60px;">
                            <input class="input" type="number" placeholder="Siła" :value="entity.strength" @keydown.enter="$event.target.blur()" @focusout="updateValue('strength', $event.target.value)">
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
                            <input class="input" type="number" placeholder="Zręczność" :value="entity.agility" @keydown.enter="$event.target.blur()" @focusout="updateValue('agility', $event.target.value)">
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
                            <input class="input" type="number" placeholder="Inteligencja" :value="entity.intelligence" @keydown.enter="$event.target.blur()" @focusout="updateValue('intelligence', $event.target.value)">
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
                            <input class="input" type="number" placeholder="Skupienie" :value="entity.focus" @keydown.enter="$event.target.blur()" @focusout="updateValue('focus', $event.target.value)">
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
                            <button class="button" @click="updateValue('health', ++entity.health)">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-arrow-up"></i>
                                </span>
                            </button>
                        </div>
                        <p class="control has-icons-right" style="min-width: 70px;">
                            <input class="input" type="number" placeholder="Żywotność" :value="entity.health" @keydown.enter="$event.target.blur()" @focusout="updateValue('health', $event.target.value)">
                            <span class="icon is-small is-right">
                                <i class="fa-solid fa-heart" :style="{'color': entity.health == entity.strength ? '#ee1742' : entity.health > entity.strength ? '#ffd257' : 'unset'}"></i>
                            </span>
                        </p>
                        <div class="control">
                            <button class="button" @click="updateValue('health', --entity.health)">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                    <!--  -->

                    <div class="field has-addons is-gruped mr-2">
                        <p class="control" style="min-width: 60px;">
                            <input class="input" type="number" placeholder="Mana" :value="entity.focus" @keydown.enter="$event.target.blur()" @focusout="updateValue('focus', $event.target.value)">
                        </p>
                        <div class="control">
                            <button class="button" title="Rzuć zaklęcie" @click="updateValue('focus', entity.focus <= 0 ? 0 : --entity.focus)">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-wand-sparkles"></i>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="field mr-2" style="min-width: 140px">
                        <div class="select" style="width: 100%">
                            <select style="width: 100%" @change="updateValue('type', $event.target.value)">
                                <option value="enemy" :selected="entity.type == 'enemy'">Przeciwnik</option>
                                <option value="neutral" :selected="entity.type == 'neutral'">Niezależny</option>
                                <option value="ally" :selected="entity.type == 'ally'">Przyjaciel</option>
                            </select>
                        </div>
                    </div>

                    <div class="field mr-2" style="min-width: 120px">
                        <div class="select" style="width: 100%">
                            <select style="width: 100%" @change="updateValue('combatType', $event.target.value)">
                                <option value="light" :selected="entity.type == 'light'">Lekki</option>
                                <option value="heavy" :selected="entity.type == 'heavy'">Ciężki</option>
                                <option value="magic" :selected="entity.type == 'magic'">Magiczny</option>
                            </select>
                        </div>
                    </div>

                    <div class="field mr-2" style="max-width: 40px">
                        <div class="control">
                            <button class="button" title="Zwiększ Rangę">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-angles-up"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="field mr-2" style="max-width: 40px">
                        <div class="control">
                            <button class="button" title="Zmniejsz Rangę">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-angles-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>


                    <div class="field mr-2" style="max-width: 40px">
                        <div class="control">
                            <button class="button" title="Zabij Postać" @click="updateValue('dead', true)">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-skull"></i>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="field mr-2" style="max-width: 40px">
                        <div class="control">
                            <button class="button is-danger" title="Usuń postać" @click="removeEntity()">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-trash"></i>
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>