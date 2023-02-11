<template>
    <div class="bg-[url(/images/directory-bg.png)] w-full">
        <div class="flex flex-col justify-center items-center max-w-[calc(1500px)] mx-auto pb-[4rem]">
            <div class="w-full flex-col items-center justify-center">
                <h1 class="pt-[2rem] px-[2rem] md:text-[3rem] text-[2.5rem] items-start font-khula font-bold text-center text-primary">
                    VALACE DIRECTORY
                </h1>
                <NuxtLink to="/floor-directory" class="">
                    <h3 class="uppercase text-primary text-lg md:text-2xl font-bold font-khula text-center pb-[1.5rem] opacity-70">
                        Visit Floor Directory
                        <i class="fa-solid fa-chevron-right ml-0 md:ml-2 text-lg md:text-2xl"></i>
                    </h3>
                </NuxtLink>
            </div>

            <div class="flex justify-center flex-wrap gap-[2rem] lg:gap-[5rem]">
                <div v-for="(item, index) in facilityInfoArray" :key="index">
                    <CardFacilityInfo :facilityInfo="item"/>
                </div>
            </div>
        </div>
    </div>
    <UtilVerticalSpacer :height="3" units="rem"/>
</template>

<script>
import CardFacilityInfo from "../card/CardFacilityInfo";
import {facilityInfo} from "../../data/facilityInfo";

export default {
    name: "SectionValACEDirectory",
    components: {CardFacilityInfo},
    data() {
        return {
            facilityInfoArray: []
        }
    },
    created() {
        this.facilityInfoArray = facilityInfo
    }
}
</script>

<style scoped>

</style>