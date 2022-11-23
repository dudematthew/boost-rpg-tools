<script>
    export default {
        name: 'AutoConfirmButton',
        props: {
            icon : {},
            onlyIcon: {
                default: false,
                type: Boolean
            },
            confirmIcon: {
                default: 'fa-check',
                type: String
            },
            waitingTime: {
                default: 2000,
                type: Number
            }
        },
        data() {
            return {
                waitingState: 0,
                currentIcon: '',
                timeout: null,
            }
        },
        computed: {
            hasSlot () {
                return !!this.$slots.default;
            }
        },
        methods: {
            waitForConfirm () {
                console.log("Waiting for confirm");
                this.waitingState = 1;

                this.timeout = setTimeout(() => {
                    console.log("Brought value back");
                    this.waitingState = 0;
                }, this.waitingTime);
            },
            confirm () {
                if (!!this.timeout)
                    clearTimeout(this.timeout);

                this.waitingState = 0;

                this.$emit('confirmClick');
            },
        },
        watch: {
            waitingState: {
                handler(newValue) {
                    console.log("Change has been made");
                    if (newValue == 0)
                        this.currentIcon = this.icon;

                    else
                        this.currentIcon = this.confirmIcon;
                },
            }
        },
        mounted () {
            this.currentIcon = this.icon;
        }
    }
</script>

<template>
    <button class="button" @click="(waitingState == 0) ? waitForConfirm() : confirm()">
        <template v-if="(hasSlot || !onlyIcon)">
            <slot v-if="waitingState == 0 && hasSlot"></slot>
            <span v-if="waitingState == 1">Na pewno?</span>
        </template>
        <span class="icon is-small">
            <i class="fa-solid" :class="currentIcon"></i>
        </span>
    </button>
</template>