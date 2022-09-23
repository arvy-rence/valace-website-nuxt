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
            <div v-for="news in newsData" :key="news.newsId">
                <CardNews :newsInfo="news"/>
            </div>
        </div>
        <div class="flex justify-center items-center py-[2rem]">
            <NuxtLink to="/news/">
                <button
                    class="bg-primary px-12 py-3 rounded-md text-white font-bold font-khula text-lg"
                >
                    View All News
                </button>
            </NuxtLink>
        </div>
        <UtilVerticalSpacer :height="2" units="rem"/>
    </div>
</template>

<script>
import CardNews from "../card/CardNews";

export default {
    name: "SectionNews",
    components: {CardNews},
    data() {
        return {
            dummyNewsData: {
                newsId: 1,
                newsTitle: "News Title",
                newsDate: new Date(),
                newsContent: "lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem",
                newsImageURL: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.png",
                newsLink: "https://blog.logrocket.com/understanding-computed-properties-in-vue-js/"
            },
            newsData: [
                {
                    newsId: 1,
                    newsTitle: "News Title",
                    newsDate: new Date(),
                    newsContent: "lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem ",
                    newsImageURL: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.png",
                    newsLink: "https://blog.logrocket.com/understanding-computed-properties-in-vue-js/"
                },
                {
                    newsId: 2,
                    newsTitle: "News Title",
                    newsDate: new Date(),
                    newsContent: "lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem",
                    newsImageURL: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.png",
                    newsLink: "https://blog.logrocket.com/understanding-computed-properties-in-vue-js/"
                },
                {
                    newsId: 3,
                    newsTitle: "News Title asdadasdasd asdadasdasd asdasdasda d asds da sdas d dasd asda da d sads ad asd asd asd as das das d asd asd asd asda s ",
                    newsDate: new Date(),
                    newsContent: "sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem",
                    newsImageURL: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.png",
                    newsLink: "https://blog.logrocket.com/understanding-computed-properties-in-vue-js/"
                },
            ]
        }
    },
    methods: {
        onClick() {
            alert("loow")
        }
    },
    created() {
        // fetch data from news api
        // divide news articles to three
        // pass the quotient to pagination component
        // only get first 3 articles
    }
}
</script>

