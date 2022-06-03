<script>
    // @ is an alias to /src
    import Stats from '@/components/character-generator/Stats.vue'

    export default {
        name: 'RulebookView',
        components: {
            Stats
        },
        props: {
            abilityPoints: Number
        }
    }
</script>

<template>
    <label class="label is-medium">Masz punktów do rozdania</label>
    <div class="field has-addons">
        <div class="control">
            <input class="input" type="text" value="Siła" is-static disabled>
        </div>
        <div class="control">
            <a class="button is-info">
                Search
            </a>
        </div>
    </div>
</template>