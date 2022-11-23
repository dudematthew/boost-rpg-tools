<script>
    import AutoConfirmButton from '@/components/AutoConfirmButton'

    export default {
        name: 'CharacterManagerModal',
        components: {
            AutoConfirmButton
        },
        props: [
            'memoryCharacterList',
            'baseHP',
            'other'
        ],
        data() {
            return {
                active: false,
            }
        },
        computed: {

        },
        methods: {
            // Reset data and show the modal
            show() {
                this.active = true;
            },

            // Emits interface to parent
            emitInterface() {
                this.$emit("interface", {
                    showCharacterManagerModal: () => this.show()
                });
            },

            getClassById (characterId) {
                let returner = null;

                for (let classId in this.memoryCharacterList[characterId].classList) {
                    let characterClass = this.memoryCharacterList[characterId].classList[classId];

                    if (characterClass.chosen)
                        returner = characterClass.name;
                }

                return returner;
            }
        },
        watch: {
            /**
             * Make sure that html is clipped while
             * modal is being shown
             */
            active: function (val) {
                document.querySelector("html").classList.toggle("is-clipped", val);
            },
        },
        mounted() {
            // Emits on mount
            this.emitInterface();
        }
    }
</script>

<template>
    <div class="modal" :class="{'is-active': active}">
        <div class="modal-background" @click="active = false"></div>

        <div class="modal-content">
            <header class="modal-card-head">
                <p class="modal-card-title">Twoje zapisane postacie</p>
                <button class="delete" @click="active = false"></button>
            </header>
            <section class="modal-card-body" style="max-height: 500px; overflow-y: auto">
                
                <div v-if="Object.keys(memoryCharacterList).length <= 0" class="mb-5 is-centered has-text-centered">
                    <div class="columns is-centered mt-3 is-fullwidth">
                        <div class="column is-one-third-desktop is-one-third-tablet is-one-third-mobile is-offset-4-mobile">
                        <figure class="image is-5by4 is-fullwidth has-ratio" style="height: auto">
                            <img src="@/assets/placeholder-image.png">
                        </figure>
                        </div>
                    </div>
                    <div class="columns is-centered mb-0">
                        <div class="column">
                            <p class="subtitle">Nic tu nie ma...</p>
                        </div>
                    </div>
                </div>
                <template v-for="(character, key) in memoryCharacterList" :key="key">
                    <nav class="level">
                        <!-- Left side -->
                        <div class="level-left">
                            <div class="level-item">
                                <p class="title is-5 has-text-black" :class="{'has-text-info': other.id == key}" style="cursor: pointer" @click="$emit('chooseCharacter', key)">
                                    {{character.other.name}} - {{getClassById(key) ?? "Wojownik"}} <span class="subtitle">[{{key.slice(0, 6)}}]</span>
                                </p>
                            </div>
                        </div>
    
                        <!-- Right side -->
                        <div class="level-right">
                            <div class="level-item">
                                <div class="control ml-1">
                                    <button class="button is-success" title="Załaduj postać" @click="$emit('chooseCharacter', key)" :disabled="other.id == key">
                                        <span class="icon is-small">
                                            <i class="fa-solid fa-upload"></i>
                                        </span>
                                    </button>
                                </div>
                                <div class="control ml-1">
                                    <button class="button is-info" title="Duplikuj postać" @click="$emit('duplicateCharacter', key)">
                                        <span class="icon is-small">
                                            <i class="fa-solid fa-copy"></i>
                                        </span>
                                    </button>
                                </div>
                                <div class="control ml-1">
                                    <AutoConfirmButton title="Usuń postać" :onlyIcon="true" class="is-danger" icon="fa-trash" @confirmClick="$emit('deleteCharacter', key)"></AutoConfirmButton>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <div class="is-divider" data-content="OR"></div>
                </template>
            </section>
            <footer class="modal-card-foot">
                <router-link to="/generator" class="button is-success" @click="active = false">
                    <span>Nowa postać</span>
                    <span class="icon is-small">
                        <i class="fa-solid fa-file-signature"></i>
                    </span>
                </router-link>
                <button class="button is-success" @click="$emit('newCharacter');">
                    <span>Nowa pusta postać</span>
                    <span class="icon is-small">
                        <i class="fa-solid fa-file"></i>
                    </span>
                </button>
                <button class="button is-danger" @click="$emit('deleteAllCharacters'); active = false;">
                    <span>Usuń wszystkie postacie</span>
                    <span class="icon is-small">
                        <i class="fa-solid fa-trash"></i>
                    </span>
                </button>
            </footer>
        </div>
    </div>
</template>