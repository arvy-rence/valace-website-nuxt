<template>
    <div>
        <img src="/images/facilities-banner.png" alt="" class="w-screen">
        <SectionValACEDirectory/>
    </div>
</template>

<script>
import {checkReload} from "../composables/checkReload";
import SectionValACEDirectory from "../components/section/SectionValACEDirectory";

export default {
    name: "facilities",
    components: {SectionValACEDirectory},
    mounted() {
        checkReload()
    },
}
</script>

<style scoped>

</style>