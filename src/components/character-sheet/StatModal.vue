<script>
    export default {
        name: 'StatModal',
        props: {
            active: Boolean
        }
    }
</script>

<template>
    <div class="modal is-active">
        <div class="modal-background"></div>

        <div class="modal-content">
            <slot></slot>
        </div>

        <button class="modal-close is-large" aria-label="close"></button>
    </div>
</template>