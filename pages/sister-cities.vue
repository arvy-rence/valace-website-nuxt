<template>
    <div class="bg-white-100 flex-col bg-img justify-center align-center">
        <UtilVerticalSpacer :height="2" units="rem"/>
        <div>
            <h2 class="font-bold text-lg text-gray-400 font-khula text-center">
                Valenzuela City Library
            </h2>
            <h1 class="font-bold text-4xl text-primary text-center font-khula">
                SISTER CITIES VISITING CITIES' CORNER
            </h1>
        </div>
        <div class="flex justify-center flex-wrap">
            <div v-for="(info, index) in sisterCitiesData" :key="index">
                <CardSisterCity :sisterCityInfo="info"/>
            </div>
        </div>
    </div>
</template>

<script>
import {checkReload} from "../composables/checkReload";
import {sisterCities} from "../data/sisterCities";
import CardSisterCity from "../components/card/CardSisterCity";

export default {
    name: "sister-cities",
    components: {CardSisterCity},
    data() {
        return {
            sisterCitiesData: []
        }
    },
    async created() {
        this.sisterCitiesData = sisterCities
    },
    mounted() {
        checkReload()
    }
}
</script>

<style scoped>

</style>