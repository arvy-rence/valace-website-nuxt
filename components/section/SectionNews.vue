<template>
    <div class="bg-white-100 flex-col bg-img justify-center align-center">
        <UtilVerticalSpacer :height="2" units="rem"/>
        <div>
            <h2 class="font-bold text-lg text-gray-400 font-khula text-center">Valenzuela City Library</h2>
            <h1 class="font-bold text-4xl text-primary text-center font-khula">NEWS & ANNOUNCEMENTS
            </h1>
        </div>
        <div class="flex justify-center">
            <CardNews :newsInfo="dummyNewsData"/>
<!--            <CardNews />-->
        </div>
        <div class="flex justify-center pt-[2rem]">
            <button
                @click="onClick"
                class="bg-primary px-12 py-3 rounded-md text-white font-bold font-khula"
            >
                View News and Announcements
            </button>
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
                newsTitle: "News Title",
                newsDate: new Date(),
                newsContent: "lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem",
                newsImageURL: "https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1520x800.png",
                newsLink: "https://blog.logrocket.com/understanding-computed-properties-in-vue-js/"
            }

        }
    },
    methods: {
        onClick() {
            alert("loow")
        }
    }
}
</script>

<style>

</style>