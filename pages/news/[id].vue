<template>
    <div class="pt-[82.8px]"></div>
    <UtilVerticalSpacer :height="3" units="rem"/>
    <div class="flex flex-col justify-start px-[2rem]">
        <h1 class="text-center text-primary text-4xl font-bold font-khula">
            {{ newsInfo.title }}
        </h1>
        <h2 class="text-gray-400 font-kulim text-center text-xl">
            Posted on {{ newsInfo.newsDate }}
        </h2>
        <div class="flex flex-col py-6">
            <figure class="w-1/2">
                <img :src="newsInfo.newsImageURL" alt="">
            </figure>
            <p>
                {{ newsInfo.body }}
            </p>
        </div>
        <NuxtLink to="/news/">
            <button
                class="bg-primary px-12 py-3 rounded-md text-white font-bold font-khula text-lg"
            >
                Go Back to All News
            </button>
        </NuxtLink>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "[id]",
    data() {
        return {
            newsInfo: {}
        }
    },
    methods: {},
    async created() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
        this.newsInfo = response.data
        this.newsInfo["newsDate"] = new Date().toDateString()
        this.newsInfo["newsImageURL"] = "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    mounted() {
        checkReload()
    },
}
</script>

<style scoped>

</style>