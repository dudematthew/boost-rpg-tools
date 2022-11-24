<script>
    export default {
    name: "SpellSelectModal",
    props: {
        spellList: Object,
        spells: Array,
        title: String
    },
    data() {
        return {
            active: false,
        };
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
                showSpellModal: () => this.show()
            });
        },
        isChosen (spellId) {
            if (this.spells.includes(spellId))
                return true;

            return false;
        },
        switchSpell (spellId) {
            if (this.spells.includes(spellId))
                this.spells.splice(this.spells.indexOf(spellId), 1);
            else
                this.spells.push(spellId);
        }
    },
    watch: {
        active: function (val) {
            document.querySelector("html").classList.toggle("is-clipped", val);
            console.log(val);
        }
    },
    mounted() {
        // Emits on mount
        this.emitInterface();
    },
}
</script>

<template>
    <div class="modal" :class="{'is-active': active}">
        <div class="modal-background" @click="active = false"></div>

        <div class="modal-content">
            <header class="modal-card-head">
                <p class="modal-card-title">{{title ?? "Wybierz zaklęcia"}}</p>
                <button class="delete" @click="active = false"></button>
            </header>
            <section class="modal-card-body">
                <div class="field is-grouped is-grouped-multiline is-flex" style="width: 100%">
                    <template v-for="(spell, spellId) in spellList" :key="spellId">
                        <p class="control is-flex-grow-1" style="max-width: 35%; flex: 1 1 auto;">
                            <button class="button is-expanded" style="width: 100%" :class="{'is-success': isChosen(spellId)}" @click="switchSpell(spellId); $emit('change', spells)">
                                {{spell.name}}
                            </button>
                        </p>
                    </template>
                </div>
            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" @click="active = false">OK</button>
                <button class="button" @click="spells.length = 0;">Odznacz wszystko</button>
            </footer>
        </div>
    </div>
</template>