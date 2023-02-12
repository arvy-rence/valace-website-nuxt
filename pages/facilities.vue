<template>
    <div>
        <div class="pt-[82.8px]"></div>
        <HeaderFacility/>
        <div>
            <img src="/images/facilities-banner.png" alt="" class="w-screen">
            <SectionValACEDirectory/>
        </div>
        <SectionFooter/>
    </div>
</template>

<script>
import {checkReload} from "../composables/checkReload";
import SectionValACEDirectory from "../components/section/SectionValACEDirectory";

export default {
    name: "facilities",
    components: {SectionValACEDirectory},
    mounted() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
}
</script>

<style scoped>

</style>