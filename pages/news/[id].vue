<template>
    <div>
        <div class="flex justify-center items-center">
            <div class="pt-[82.8px] w-3/5">
                <NuxtLink to="/">
                    <h3 class="uppercase text-primary text-2xl font-bold font-khula opacity-50">
                        <i class="fa-solid fa-chevron-left mr-2 text-lg"></i>
                        Back
                    </h3>
                </NuxtLink>
                <Loader :isLoading="isLoading"/>
                <article v-if="!isLoading" class="pt-[2rem]">
                    <div class="flex flex-col items-center justify-center">
                        <h2 class="text-2xl text-primary opacity-50 font-khula font-bold">
                            VALENZUELA CITY LIBRARY
                        </h2>
                        <h1 class="tracking-[0.25rem] text-5xl text-primary font-khula font-bold uppercase ">
                            NEWS AND ANNOUNCEMENTS
                        </h1>
                        <img :src="newsInfo.news_image_link" class="w-full">

                    </div>
                    <div class="flex flex-col items-start justify-start text-primary">
                        <h2 class="font-khula opacity-50 mt-5">
                            <i class="fa-regular fa-calendar"></i>
                            {{ date }}
                        </h2>
                        <div class="font-bold font-khula text-xl my-[2rem]">
                            {{ newsInfo.news_title }}
                        </div>
                        <div class="font-khula">
                            {{ newsInfo.news_description }}
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <SectionFooter/>
    </div>
</template>

<script>
import axios from "~/server/index";
import {checkReload} from "../../composables/checkReload";

export default {
    name: "[id]",
    data() {
        return {
            newsInfo: {},
            isLoading: true
        }
    },
    methods: {},
    async created() {
        const {data} = await axios.get(`/news/${this.$route.params.id}`)
        this.newsInfo = data.newsDetails
        this.isLoading = false
    },
    mounted() {
        // checkReload()
    },
    computed: {
        date() {
            return new Date(this.newsInfo.news_date).toLocaleDateString()
        }
    }
}
</script>

<style scoped>

</style>