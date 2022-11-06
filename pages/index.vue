<template>
    <Loading v-if="!isLoaded"/>
    <div :class="[isLoaded ? ['visible'] : ['collapse']]">
        <HeaderHome/>
        <div class="pt-[82.8px]"></div>
        <SectionHero/>
        <FadeView>
            <SectionNews @complete-news-load="completeNewsLoad"/>
        </FadeView>
        <FadeView>
            <SectionEvents @complete-event-load="completeEventLoad"/>
        </FadeView>
        <FadeView>
            <SectionTopnotchers @complete-topnotcher-load="completeTopnotcherLoad"/>
        </FadeView>
        <FadeView>
            <SectionSisterCities @complete-sister-city-load="completeSisterCityLoad"/>
        </FadeView>
        <FadeView>
            <SectionNewBookSelection/>
        </FadeView>
        <FadeView>
            <SectionKOHA/>
        </FadeView>
        <FadeView>
            <SectionPartners/>
        </FadeView>
        <SectionFooter/>
    </div>
</template>

<script>
import {checkReload} from "../composables/checkReload";
import SectionKOHA from "../components/section/SectionKOHA";
import SectionPartners from "../components/section/SectionPartners";
import SectionSisterCities from "../components/section/SectionSisterCities";
import SectionTopnotchers from "../components/section/SectionTopnotchers";
import SectionNews from "../components/section/SectionNews";
import SectionHero from "../components/section/SectionHero";
import SectionEvents from "../components/section/SectionEvents";
import Loading from "../components/util/Loading";

export default {
    name: "index",
    components: {
        Loading,
        SectionEvents,
        SectionHero,
        SectionNews,
        SectionTopnotchers,
        SectionSisterCities,
        SectionPartners,
        SectionKOHA
    },
    data() {
        return {
            generatedWords: [],
            isLoading: {
                news: true,
                events: true,
                topnotchers: true,
                sisterCity: true,
            },
            isLoaded: false
        }
    },
    methods: {
        async completeNewsLoad(status) {
            this.isLoading.news = status
            this.removeLoadingPage()
            console.log('news load complete')
        },
        async completeEventLoad(status) {
            this.isLoading.events = status
            this.removeLoadingPage()
            console.log('event load complete')
        },
        async completeTopnotcherLoad(status) {
            this.isLoading.topnotchers = status
            this.removeLoadingPage()
            console.log('topnotcher load complete')
        },
        async completeSisterCityLoad(status) {
            this.isLoading.sisterCity = status
            this.removeLoadingPage()
            console.log('sister city load complete')
        },
        removeLoadingPage() {
            if (this.isLoading.news === false && this.isLoading.events === false && this.isLoading.topnotchers === false && this.isLoading.sisterCity === false) {
                this.isLoaded = true
            }
        }
    },
    created() {
        this.generatedWords = [];
        // this.generateRandomWordQuery()
    },
    mounted() {
        checkReload()
    },
}
</script>

<style scoped>

</style>