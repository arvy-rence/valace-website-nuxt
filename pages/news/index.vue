<template>
    <div class="bg-white-100 flex-col bg-img justify-center align-center">
        <UtilVerticalSpacer :height="2" units="rem"/>
        <div>
            <h2 class="font-bold text-lg text-gray-400 font-khula text-center">
                Valenzuela City Library
            </h2>
            <h1 class="font-bold text-4xl text-primary text-center font-khula">
                NEWS & ANNOUNCEMENTS
            </h1>
        </div>
        <div class="flex justify-center flex-wrap">
            <div v-for="newsInfo in newsData" :key="newsInfo.id">
                <CardNews :newsInfo="newsInfo"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import CardNews from "../../components/card/CardNews";
import {checkReload} from "../../composables/checkReload";

export default {
    name: "index",
    components: {CardNews},
    data() {
        return {
            newsData: []
        }
    },
    async created() {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(response.data);
        response.data.forEach((news) => {
            this.newsData.push({
                id: news.id,
                newsTitle: news.title,
                newsDate: new Date().toDateString(),
                newsContent: news.body,
                newsImageURL: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",
                newsLink: `/news/${news.id}`
            })
        })
    },
    mounted() {
        checkReload()
    },
}
</script>

<style scoped>

</style>