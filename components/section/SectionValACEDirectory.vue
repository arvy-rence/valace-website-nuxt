<template>
    <div class="bg-[url(/images/directory-bg.png)] w-full">
        <div class="flex flex-col justify-center items-center max-w-[calc(1500px)] mx-auto pb-[4rem]">
            <div class="py-[2rem] text-[3rem] items-start font-khula font-bold text-center text-primary">
                VALACE DIRECTORY
            </div>

            <div class="flex justify-center flex-wrap gap-[5rem]">
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