<script>
    export default {
        name: 'StatModal',
        props: {
            active: Boolean
        }
    }
</script>

<template>
    <div class="modal" :class="{'is-active': active}">
        <div class="modal-background"></div>

        <div class="modal-content">
            <header class="modal-card-head">
                <p class="modal-card-title">Rzut na Siłę</p>
                <button class="delete" @click="active = false"></button>
            </header>
            <slot name="input"></slot>
            <slot name="result"></slot>
            <footer class="modal-card-foot">
                <button class="button is-success">OK</button>
                <button class="button">Jeszcze raz!</button>
            </footer>
        </div>

        <button class="modal-close is-large" @click="active = false"></button>
    </div>
</template>