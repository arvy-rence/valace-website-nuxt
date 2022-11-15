<template>
    <div>
        <div class="pt-[82.8px]"></div>
        <div class="bg-white-100 flex-col bg-img justify-center align-center">
            <UtilVerticalSpacer :height="2" units="rem"/>
            <div>
                <h2 class="font-bold text-lg text-gray-400 font-khula text-center uppercase">
                    Valenzuela City Library
                </h2>
                <h1 class="font-bold text-6xl text-primary text-center font-khula">
                    NEWS & ANNOUNCEMENTS
                </h1>
            </div>
            <div class="flex justify-center flex-wrap">
                <div v-for="newsInfo in newsData" :key="newsInfo.id">
                    <CardNews :newsInfo="newsInfo"/>
                </div>
            </div>
            <Loader :isLoading="isLoading"/>
        </div>
        <SectionFooter/>
    </div>
</template>

<script>
import axios from "~/server/index";
import CardNews from "../../components/card/CardNews";
import {checkReload} from "../../composables/checkReload";
import Loader from "../../components/Loader";

export default {
    name: "index",
    components: {Loader, CardNews},
    data() {
        return {
            newsData: [],
            isLoading: true
        }
    },
    async created() {
        try {
            const {data} = await axios.get("/news");
            this.newsData = data.newsUTC8;
            this.isLoading = false;
        } catch (e) {
            console.log("failed to fetch news")
        }
    },
    // mounted() {checkReload()},
}
</script>

<style scoped>

</style>