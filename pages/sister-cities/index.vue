<template>
    <div>
        <div class="pt-[82.8px]"></div>
        <div class="bg-white-100 flex-col bg-img justify-center align-center">
            <div class="px-[10%]">
                <NuxtLink to="/">
                    <h3 class="uppercase text-primary text-2xl font-bold font-khula opacity-50">
                        <i class="fa-solid fa-chevron-left mr-2 text-lg"></i>
                        Back
                    </h3>
                </NuxtLink>
            </div>
            <div>
                <h2 class="font-bold text-lg text-gray-400 font-khula text-center">
                    Valenzuela City Library
                </h2>
                <h1 class="font-bold text-6xl text-primary text-center font-khula">
                    SISTER CITIES VISITING CITIES' CORNER
                </h1>
            </div>
            <Loader :isLoading="isLoading"/>
            <div class="flex justify-center flex-wrap">
                <div v-for="(info, index) in sisterCitiesData" :key="index">
                    <CardSisterCity :sisterCityInfo="info"/>
                </div>
            </div>
        </div>
        <SectionFooter/>
    </div>
</template>

<script>
import {checkReload} from "../../composables/checkReload"
import axios from "~/server/index"
import CardSisterCity from "../../components/card/CardSisterCity"


export default {
    name: "sister-cities",
    components: {CardSisterCity},
    data() {
        return {
            sisterCitiesData: [],
            isLoading: true
        }
    },
    async created() {
        const {data} = await axios.get("/sisterCity")
        this.sisterCitiesData = data.sisterCities

        this.isLoading = false
    },
    mounted() {
        // checkReload()
    }
}
</script>

<style scoped>

</style>