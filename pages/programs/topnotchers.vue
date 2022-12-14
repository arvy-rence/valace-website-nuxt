<template>
    <div class="relative">
        <NuxtLink to="/programs">
            <h3 class="uppercase text-primary  font-khula absolute left-[10rem] top-[5rem] text-2xl">
                <i class="fa-solid fa-chevron-left mr-2 text-lg"></i>
                Back
            </h3>
        </NuxtLink>
    </div>
    <div class="pt-[82.8px]"></div>
    <SectionProgramsTopnotchers/>
    <SectionFooter/>
</template>

<script>
import {checkReload} from '~/composables/checkReload'
export default {
    name: "topnochers",
    mounted() {
        checkReload()
    },
}
</script>

<style scoped>

</style>