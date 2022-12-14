<template>
    <div class="popup-container" v-bind:style="containerLocation">
        <button class="btn" @click="hoverPopup"></button>
        <div class="popup-1" :class="[up ? ['pop-down'] : ['pop-up']]" v-show="popupIsHovered" >
            <div v-if="up" class="triangle-2 ml-[14rem]"></div>
            <div class="bg-primary p-2">
                <slot/>
            </div>
            <div v-if="!up" class="triangle ml-[7rem]"></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Popup',
    data() {
        return {
            popupIsHovered: false,
            position: {},
            top: 0,
            left: 0,
        }
    },
    props: {
        topLoc: Number,
        leftLoc: Number,
        up: {
            type: Boolean,
            required: false,
            default: true,
        },
    },
    created() {
        this.popupIsHovered = false
        this.top = this.topLoc
        this.left = this.leftLoc


    },
    computed: {
        containerLocation: function() {
            return {
                top: this.top + '%',
                left: this.left + '%'
            }
        }
    },
    methods: {
        hoverPopup() {
            console.log(this.top + ' ' + this.left)
            this.popupIsHovered = !this.popupIsHovered
            // if (this.popupIsHovered === false) {
            //     this.canvasSizeX = this.$refs.box.parentElement.clientWidth
            //     this.canvasSizeY = this.$refs.box.parentElement.clientHeight
            //
            //     this.popLeft = this.canvasSizeX * (this.leftLoc / 100) - (this.$refs.box.clientWidth / 2) + 34
            //     this.popTop = (this.canvasSizeY * (this.topLoc / 100)) - this.$refs.box.clientHeight - 14
            // }
        },
    }
}
</script>
<style scoped>
.btn {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 9999px;
    background-color: white;
    border: .2rem solid #00104A;
    cursor: pointer;
    z-index: 1;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    top: 0;
    left: 0;
}

.pop-up {
    top: -22.5rem;
    left: -7.9rem;
}

.pop-down {
    top: 1.5rem;
    left: -14.9rem;
}


.popup-1 {
    position: absolute;
    width: 20rem;
    z-index: 2;
}
.triangle {
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-top: 70px solid #00104A;
}

.triangle-2 {
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 70px solid #00104A;
}

.popup-container {
    position: absolute;
}
</style>