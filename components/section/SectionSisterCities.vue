<template>
    <div class="bg-[url(/images/sisters-bg.png)] flex-col bg-img justify-center align-center md:py-[4rem]" id="sistercity-section">
        <div class="max-w-[calc(1500px)] mx-auto pt-[2rem] md:pt-0">
            <h2 class="font-bold text-lg sm:text-3xl text-primary font-khula text-center opacity-50 uppercase">Valenzuela City Library</h2>
            <h1 class="font-bold text-4xl md:text-6xl text-primary text-center font-khula px-[1rem]">SISTER CITIES<br>
                VISITING CITIES' CORNER
            </h1>
            <div class="flex justify-center">
                <div class="w-full px-[2rem] md:px-[4rem] lg:px-0 lg:w-1/2">
                    <p class="font-kulim text-xl text-center">
                        The Sister City, Sister Library Initiative is a program that aims to foster the ties between
                        Valenzuela
                        City and its sister municipality, Baliwag, through public library partnership.
                    </p>
                </div>
            </div>
        </div>
        <div class="py-6 max-w-[calc(1500px)] mx-auto">
            <div class="flex flex-col overflow-y-scroll h-[30rem] w-3/4 mx-auto px-1">
                <!-- card component -->
                <div v-for="(info, index) in sisterCitiesData" :key="index" class="">
                    <CardMiniSisterCity :sisterCityInfo="info"/>
                </div>
            </div>
            <Loader :isLoading="isLoading"/>
            <UtilVerticalSpacer :height="2" units="rem"/>
            <div class="flex justify-center items-center">
                <NuxtLink to="/sister-cities/">
                    <button
                        class="bg-primary px-[7rem] py-3 text-white font-bold font-khula text-lg"
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
        try {
            const {data} = await axios.get("/sisterCity")
            this.sisterCitiesData = data.sisterCities
            this.isLoading = false
            this.$emit("complete-sister-city-load", this.isLoading)
        } catch (e) {
            console.log("failed to fetch sister 1")
        }
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