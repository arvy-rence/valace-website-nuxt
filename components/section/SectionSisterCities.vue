<template>
    <div class="bg-[url(/images/book-bg.png)] flex-col bg-img justify-center align-center">
        <UtilVerticalSpacer :height="2" units="rem"/>
        <div class="max-w-[calc(1500px)] mx-auto">
            <h2 class="font-bold text-lg text-gray-400 font-khula text-center">Valenzuela City Library</h2>
            <h1 class="font-bold text-4xl text-primary text-center font-khula">SISTER CITIES<br>
                VISITING CITIES' CORNER
            </h1>
            <div class="flex justify-center">
                <div class="w-1/2">
                    <p class="font-kulim text-xl">
                        The Sister City, Sister Library Initiative is a program that aims to foster the ties between
                        Valenzuela
                        City and its sister municipality, Baliwag, through public library partnership.
                    </p>
                </div>
            </div>
        </div>
        <div class="py-6 max-w-[calc(1500px)] mx-auto">
            <div class="flex flex-col justify-center flex-nowrap overflow-y-scroll h-[20rem] w-3/4 pt-[5rem] mx-auto">
                <!-- card component -->
                <div v-for="(info, index) in sisterCitiesData" :key="index">
                    <CardMiniSisterCity :sisterCityInfo="info"/>
                </div>
            </div>
            <Loader :isLoading="isLoading"/>
            <UtilVerticalSpacer :height="2" units="rem"/>
            <div class="flex justify-center items-center">
                <NuxtLink to="/sister-cities/">
                    <button
                        class="bg-primary px-12 py-3 rounded-md text-white font-bold font-khula text-lg"
                    >
                        View Sister Cities
                    </button>
                </NuxtLink>
            </div>
            <UtilVerticalSpacer :height="2" units="rem"/>
        </div>
    </div>
</template>

<script>
import axios from "~/server/index"
import CardMiniSisterCity from "../card/CardMiniSisterCity";

export default {
    name: "SectionSisterCities",
    components: {CardMiniSisterCity},
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
}
</script>

<style>
.bg-img {
    background-size: cover;
}

.img-with-shadow {
    box-shadow: 2px 2px 10px gray;
}
</style>