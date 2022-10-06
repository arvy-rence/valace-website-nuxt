<template>
    <div class="bg-white-100 flex-col bg-img justify-center align-center px-[1rem]">
        <UtilVerticalSpacer :height="2" units="rem"/>
        <div>
            <h2 class="font-bold uppercase text-gray-400 opacity-50 text-lg sm:text-3xl font-khula text-center opacity-50">
                Valenzuela City Library
            </h2>
            <h1 class="font-bold text-4xl sm:text-6xl text-primary text-center font-khula">
                NEWS & ANNOUNCEMENTS
            </h1>
        </div>
        <div class="flex justify-center flex-wrap">
            <div v-for="news in newsData" :key="news.newsId">
                <CardNews :newsInfo="news"/>
            </div>
        </div>
        <Loader :isLoading="isLoading"/>
        <div class="flex justify-center items-center py-[2rem]">
            <NuxtLink to="/news/">
                <button
                    class="bg-primary px-[7rem] py-3 text-white font-bold font-khula text-lg"
                >
                    View All News
                </button>
            </NuxtLink>
        </div>
        <UtilVerticalSpacer :height="2" units="rem"/>
    </div>
</template>

<script>
import axios from "~/server/index"
import CardNews from "../card/CardNews";
import Loader from "../Loader";

export default {
    name: "SectionNews",
    components: {Loader, CardNews},
    data() {
        return {
            isLoading: true,
            newsData: []
        }
    },
    async created() {
        const {data} = await axios.get("/news/latestNews")
        this.newsData = data.latestNews
        this.isLoading = false
    }
}
</script>

