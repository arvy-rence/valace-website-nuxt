<template>
    <div>
        <div class="relative">
            <NuxtLink to="/about-us">
                <h3 class="uppercase text-primary  font-khula absolute left-[calc(10%)] top-[3rem] text-2xl">
                    <i class="fa-solid fa-chevron-left mr-2 text-lg"></i>
                    Back
                </h3>
            </NuxtLink>
        </div>
        <div class="pt-[82.8px]"></div>
        <SectionPrograms/>
        <SectionFooter/>
    </div>
</template>

<script>
import {checkReload} from '~/composables/checkReload'
export default {
    name: "index",
    components: {},
    mounted() {
        // checkReload()
    },

}
</script>

<style scoped>

</style>