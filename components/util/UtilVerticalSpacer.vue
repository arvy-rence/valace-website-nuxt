<template>
    <div :style="dividerStyle"/>
</template>

<script>
export default {
    name: "VerticalSpacer",
    props: {
        height: {
            type: Number,
            default: 10
        },
        units: {
            type: String,
            default: "px"
        }
    },
    computed: {
        dividerStyle() {
            return {
                height: this.height + this.units
            };
        }
    }
}
</script>

<style scoped>

</style>