<script>
    import SpellSelectModal from '@/components/game-master-panel/SpellSelectModal'

    export default {
        name: "Entity",
        props: [
            "entity",
            "spellList"
        ],
        components: {
            SpellSelectModal,
        },
        data() {
            return {
                entityStatesIcons: {
                    boosted: 'fa-face-grin-squint',
                    full: 'fa-face-smile',
                    hurt: 'fa-face-meh',
                    incapacitated: 'fa-face-dizzy',
                    dead: 'fa-skull',
                },
            }
        },
        computed: {
            /**
             * Get icon based on current health
             */
            stateIcon() {
                if (this.entity.dead) return this.entityStatesIcons.dead;
                else if (this.entity.health == 0) return this.entityStatesIcons.incapacitated;
                else if (this.entity.health == this.entity.rank * 5) return this.entityStatesIcons.full;
                else if (this.entity.health >= this.entity.rank * 5) return this.entityStatesIcons.boosted;
                else return this.entityStatesIcons.hurt;
            },

            key () {
                return this.$.vnode.key;
            }
        },
        methods: {
            updateValue(key, value) {
                console.log('UPDATING...', key, value);
                // console.log(key, value, { ...this.value, [key]: value });
                this.$emit("update:entity", {
                    ...this.entity,
                    [key]: value
                });
            },
            toggleCurse(ability) {
                this.entity.curses[ability] = !this.entity.curses[ability];
                this.entity[ability] = this.entity.curses[ability] ? parseInt(this.entity[ability]) - 4 : parseInt(this
                    .entity[ability]) + 4;
            },
            alignStatsToRank() {
                this.entity.strength = this.entity.agility = this.bodyStats();
                this.entity.inteligence = this.entity.focus = this.mindStats();
                this.entity.mana = this.entity.rank;
                this.entity.health = this.entity.rank * 5;
            },
            drawStat(statId) {
                let statValue = this.entity[statId];
                console.log("drawing... ", statId, statValue)
                this.$emit("showStatModal", {
                    id: statId,
                    value: statValue
                });
            },
            showSpellSelectModal () {
                this.showSpellModal();
            },
            removeEntity () {
                this.$emit("remove:entity");
            },
            cloneEntity () {
                this.$emit("clone:entity");
            },
            bodyStats () {
                return (this.entity.combatType != 'magic') ?
                    parseInt(this.entity.rank) * 4 :
                    parseInt(this.entity.rank) * 2;
            },
            mindStats () {
                return (this.entity.combatType != 'magic') ?
                    parseInt(this.entity.rank) * 2 :
                    parseInt(this.entity.rank) * 4;
            },
            setCustomChildInterface(childInterface) {
                this.showSpellModal = childInterface.showSpellModal;
            },
        },
        mounted() {
            // console.log(this.mindStats());
        },
    }
</script>

<template>
    <div class="tile is-child notification"
        :class="{'is-warning': entity.type == 'enemy', 'is-success': entity.type == 'ally', 'is-info': entity.type == 'neutral'}">
        <div class="tile is-parent is-vertical is-12 p-0">

            <div class="tile is-child is-12">
                <div class="level is-mobile">
                    <div class="level-left">
                        <div class="level-item">
                            <span class="icon-text title is-4">
                                <span class="icon mr-2">
                                    <i class="fa-solid" :class="stateIcon"></i>
                                </span>
                                <p class="title is-4" @keydown.enter="$event.target.blur()"
                                    @focusout="updateValue('name', $event.target.innerText)" style="cursor: text"
                                    contenteditable>
                                    {{entity.name}}
                                </p>
                            </span>
                        </div>
                    </div>
                    <div class="level-right mr-2">
                        <div class="level-item" style="max-width: 40px">
                            <div class="control">
                                <button class="button" title="Duplikuj byt" @click="cloneEntity()">
                                    <span class="icon is-small">
                                        <i class="fa-regular fa-clone"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="level-item" v-if="entity.dead">
                            <div class="control">
                                <button class="button" title="Ożyw postać" @click="updateValue('dead', false)">
                                    <span class="icon is-small">
                                        <i class="fa-solid fa-heart-pulse"></i>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div class="level-item" v-if="entity.dead">
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
                        <div class="control">
                            <button class="button" @click="toggleCurse('strength')" title="Nałóż / ulecz klątwę">
                                <span class="icon is-small">
                                    <i class="fa-solid"
                                        :class="entity.curses.strength ? 'fa-arrows-up-to-line' : 'fa-arrows-down-to-line'"
                                        :style="{'color': entity.curses.strength ? 'red' : ''}"></i>
                                </span>
                            </button>
                        </div>
                        <p class="control" style="min-width: 60px;">
                            <input class="input" type="number" placeholder="Siła" :value="entity.strength"
                                @keydown.enter="$event.target.blur()"
                                @focusout="updateValue('strength', $event.target.value)">
                        </p>
                        <div class="control">
                            <button class="button" @click="drawStat('strength')">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-hand-fist"
                                        :style="{'color': entity.strength == bodyStats() ? '' : entity.strength > bodyStats() ? '#ffd257' : '#ee1742'}"></i>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="field has-addons is-gruped pr-2">
                        <div class="control">
                            <button class="button" @click="toggleCurse('agility')" title="Nałóż / ulecz klątwę">
                                <span class="icon is-small">
                                    <i class="fa-solid"
                                        :class="entity.curses.agility ? 'fa-arrows-up-to-line' : 'fa-arrows-down-to-line'"
                                        :style="{'color': entity.curses.agility ? 'red' : ''}"></i>
                                </span>
                            </button>
                        </div>
                        <p class="control" style="min-width: 60px;">
                            <input class="input" type="number" placeholder="Zręczność" :value="entity.agility"
                                @keydown.enter="$event.target.blur()"
                                @focusout="updateValue('agility', $event.target.value)">
                        </p>
                        <div class="control">
                            <button class="button" @click="drawStat('agility')">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-person-running"
                                        :style="{'color': entity.agility == bodyStats() ? '' : entity.agility > bodyStats() ? '#ffd257' : '#ee1742'}"></i>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="field has-addons is-gruped pr-2">
                        <div class="control">
                            <button class="button" @click="toggleCurse('inteligence')" title="Nałóż / ulecz klątwę">
                                <span class="icon is-small">
                                    <i class="fa-solid"
                                        :class="entity.curses.inteligence ? 'fa-arrows-up-to-line' : 'fa-arrows-down-to-line'"
                                        :style="{'color': entity.curses.inteligence ? 'red' : ''}"></i>
                                </span>
                            </button>
                        </div>
                        <p class="control" style="min-width: 60px;">
                            <input class="input" type="number" placeholder="Inteligencja" :value="entity.inteligence"
                                @keydown.enter="$event.target.blur()"
                                @focusout="updateValue('inteligence', $event.target.value)">
                        </p>
                        <div class="control">
                            <button class="button" @click="drawStat('inteligence')">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-brain"
                                        :style="{'color': entity.inteligence == mindStats() ? '' : entity.inteligence > mindStats() ? '#ffd257' : '#ee1742'}"></i>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div class="field has-addons is-gruped pr-2">
                        <div class="control">
                            <button class="button" @click="toggleCurse('focus')" title="Nałóż / ulecz klątwę">
                                <span class="icon is-small">
                                    <i class="fa-solid"
                                        :class="entity.curses.focus ? 'fa-arrows-up-to-line' : 'fa-arrows-down-to-line'"
                                        :style="{'color': entity.curses.focus ? 'red' : ''}"></i>
                                </span>
                            </button>
                        </div>
                        <p class="control" style="min-width: 60px;">
                            <input class="input" type="number" placeholder="Skupienie" :value="entity.focus"
                                @keydown.enter="$event.target.blur()"
                                @focusout="updateValue('focus', $event.target.value)">
                        </p>
                        <div class="control">
                            <button class="button" @click="drawStat('focus')">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-eye"
                                        :style="{'color': entity.focus == mindStats() ? '' : entity.focus > mindStats() ? '#ffd257' : '#ee1742'}"></i>
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
                        <p class="control has-icons-right" style="min-width: 90px;">
                            <input class="input" type="number" placeholder="Żywotność" :value="entity.health"
                                @keydown.enter="$event.target.blur()"
                                @focusout="updateValue('health', $event.target.value <= 0 ? 0 : $event.target.value)">
                            <span class="icon is-small is-right">
                                <i class="fa-solid fa-heart"
                                    :style="{'color': entity.health == entity.rank * 5 ? 'white' : entity.health > entity.rank * 5 ? '#ffd257' : '#ee1742'}"></i>
                            </span>
                        </p>
                        <div class="control">
                            <button class="button"
                                @click="updateValue('health', entity.health <= 0 ? 0 : --entity.health)">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-arrow-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                    <!--  -->

                    <div class="field has-addons is-gruped mr-2">
                        <p class="control" style="min-width: 60px;">
                            <input class="input" type="number" placeholder="Mana" :value="entity.mana"
                                @keydown.enter="$event.target.blur()"
                                @focusout="updateValue('mana', $event.target.value)">
                        </p>
                        <div class="control">
                            <button class="button" title="Rzuć zaklęcie"
                                @click="updateValue('mana', entity.mana <= 0 ? 0 : --entity.mana)">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-wand-sparkles"
                                        :style="{'color': entity.mana == entity.rank ? '' : entity.mana > entity.mana ? '#ffd257' : '#ee1742'}"></i>
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
                                <option value="light" :selected="entity.combatType == 'light'">Lekki</option>
                                <option value="heavy" :selected="entity.combatType == 'heavy'">Ciężki</option>
                                <option value="magic" :selected="entity.combatType == 'magic'">Magiczny</option>
                            </select>
                        </div>
                    </div>

                    <div class="field mr-2" v-if="entity.combatType == 'magic'">
                        <button class="button" style="width: 100%" @click="showSpellSelectModal()">
                            <span>{{entity.spells.length ?? 1}}/{{entity.rank}}</span>
                            <span class="icon is-small is-right">
                                <i class="fa-solid fa-hat-wizard"></i>
                            </span>
                        </button>
                    </div>

                    <!-- Rank -->
                    <div class="field has-addons is-gruped pr-2">
                        <div class="control">
                            <button class="button" title="Zwiększ Rangę" @click="updateValue('rank', ++entity.rank)">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-angles-up"></i>
                                </span>
                            </button>
                        </div>
                        <p class="control" style="min-width: 60px;">
                            <input class="input" type="number" placeholder="Ranga" title="Ranga" :value="entity.rank"
                                @keydown.enter="$event.target.blur()"
                                @focusout="updateValue('rank', $event.target.value < 1 ? 1 : $event.target.value)">
                        </p>
                        <div class="control">
                            <button class="button" title="Wyrównaj statystyki do Rangi" @click="alignStatsToRank()">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-equals"></i>
                                </span>
                            </button>
                        </div>
                        <div class="control">
                            <button class="button" title="Zmniejsz Rangę"
                                @click="updateValue('rank', entity.rank <= 1 ? 1 : --entity.rank)">
                                <span class="icon is-small">
                                    <i class="fa-solid fa-angles-down"></i>
                                </span>
                            </button>
                        </div>
                    </div>
                    <!--  -->

                    <div class="field mr-2" style="max-width: 40px">
                        <div class="control">
                            <button class="button" :class="!entity.notesHidden ? 'is-dark': ''" title="Pokaż notatki" @click="updateValue('notesHidden', !entity.notesHidden)">
                                <span class="icon is-small">
                                    <i class="fa-regular fa-clipboard"></i>
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
                <div class="field mr-2 is-12" v-show="!entity.notesHidden">
                    <textarea class="textarea is-small is-fullwidth" placeholder="Notatki..."
                        @keydown.enter="$event.target.blur()"
                        @focusout="updateValue('notes', $event.target.value)" :value="entity.notes"></textarea>
                </div>
            </div>

            <SpellSelectModal :spells="entity.spells" :spellList="spellList" :title="`Wybierz zaklęcia (${entity.spells?.length}/${entity.rank})`" @change="$emit('change');" @interface="setCustomChildInterface"></SpellSelectModal>
        </div>
    </div>
</template>