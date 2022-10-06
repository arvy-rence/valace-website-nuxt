<template>
    <div class="pt-[82.8px]"></div>
    <SectionPrograms/>
</template>

<script>
import {checkReload} from '~/composables/checkReload'
export default {
    name: "programs",
    components: {},
    mounted() {
        checkReload()
    },

}
</script>

<style scoped>

</style>