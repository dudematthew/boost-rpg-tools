<script>
    import Randomizer from '@/lib/randomizer'
    let randomizer = new Randomizer()

    export default {
        name: 'D6Button',
        props: [
            'other',
            'baseHP'
        ],
        data() {
            return {
                currentIcon: "fa-dice-d6",
                shake: false
            }
        },
        computed: {
            hasSlot() {
                return !!this.$slots.default;
            }
        },
        methods: {
            async roll() {
                let result = await randomizer.getRandomNumber(1, 6);

                this.shake = true;

                setTimeout(() => {
                    this.shake = false;

                    switch (parseInt(result)) {
                        case 1:
                            this.currentIcon = "fa-dice-one";
                            break;
                        case 2:
                            this.currentIcon = "fa-dice-two";
                            break;
                        case 3:
                            this.currentIcon = "fa-dice-three";
                            break;
                        case 4:
                            this.currentIcon = "fa-dice-four";
                            break;
                        case 5:
                            this.currentIcon = "fa-dice-five";
                            break;
                        case 6:
                            this.currentIcon = "fa-dice-six";
                            break;
                            
                        default:    
                            this.currentIcon = "fa-wifi";
                            console.error("Throw failed: ", result);
                            break;
                }
                }, 500);

            },
        },
        watch: {
        },
    }
</script>

<template>
    <button class="button" @click="roll()">
    <span v-if="hasSlot"><slot></slot></span>
      <span class="icon is-small" :class="{'shake': shake}">
        <i class="fa-solid" :class="currentIcon"></i>
      </span>
    </button>
</template>