<template>
    <div>
        <div :class="[isLoaded ? ['visible', 'fade-in-css'] : ['collapse']]">
            <HeaderHome/>
            <div class="pt-[82.8px]"></div>
            <SectionHero/>
            <!-- <FadeView>
                <SectionNews @complete-news-load="completeNewsLoad"
                             @news-data="getNewsData"/>
            </FadeView> -->
            <!-- <FadeView>
                <SectionEvents @complete-event-load="completeEventLoad"
                               @events-data="getEventsData"/>
            </FadeView> -->
            <FadeView>
                <SectionTopnotchers @complete-topnotcher-load="completeTopnotcherLoad"
                                    @topnotcher-data="getTopnotchers"/>
            </FadeView>
            <FadeView>
                <SectionSisterCities @complete-sister-city-load="completeSisterCityLoad"
                                     @sister-city-data="getSisterCityData"/>
            </FadeView>
            <FadeView>
                <SectionNewBookSelection @book-data="getBookSelection"/>
            </FadeView>
            <FadeView>
                <SectionKOHA/>
            </FadeView>
            <FadeView>
                <SectionPartners/>
            </FadeView>
            <SectionFooter/>
        </div>
        <Loading v-if="!isLoaded"/>
    </div>
</template>

<script>
import {checkReload} from "../composables/checkReload";
import SectionKOHA from "../components/section/SectionKOHA";
import SectionPartners from "../components/section/SectionPartners";
import SectionSisterCities from "../components/section/SectionSisterCities";
import SectionTopnotchers from "../components/section/SectionTopnotchers";
// import SectionNews from "../components/section/SectionNews";
import SectionHero from "../components/section/SectionHero";
// import SectionEvents from "../components/section/SectionEvents";
import Loading from "../components/util/Loading";

export default {
    name: "index",
    components: {
        Loading,
        // SectionEvents,
        SectionHero,
        // SectionNews,
        SectionTopnotchers,
        SectionSisterCities,
        SectionPartners,
        SectionKOHA
    },
    data() {
        return {
            isLoading: {
                // news: true,
                // events: true,
                topnotchers: true,
                sisterCity: true,
            },
            isLoaded: false,
            isAnimating: true,


            //
            pageData: {

            },

            localBooks: null
        }
    },
    methods: {
        // completeNewsLoad(status) {
        //     this.isLoading.news = status
        //     this.removeLoadingPage()
        //     // console.log('news load complete')
        // },
        // completeEventLoad(status) {
        //     this.isLoading.events = status
        //     this.removeLoadingPage()
        //     // console.log('event load complete')
        // },
        completeTopnotcherLoad(status) {
            this.isLoading.topnotchers = status
            this.removeLoadingPage()
            // console.log('topnotcher load complete')
        },
        completeSisterCityLoad(status) {
            this.isLoading.sisterCity = status
            this.removeLoadingPage()
            // console.log('sister city load complete')
        },
        removeLoadingPage() {
            // this.isLoading.topnotchers === false && this.isLoading.sisterCity === false
            // if (this.isLoading.news === false) {
                this.isLoaded = true
            // }
        },


        // get section data
        // getNewsData(data) {
        //     this.pageData = {...this.pageData, news: data}
            // localStorage.setItem("pageData", JSON.stringify(this.pageData))
            // console.log(this.pageData)
        // },
        // getEventsData(data) {
        //     this.pageData = {...this.pageData, events: data}
        //     // localStorage.setItem("pageData", JSON.stringify(this.pageData))
        //     // console.log(this.pageData)
        // },
        getSisterCityData(data) {
            this.pageData = {...this.pageData, sisterCity: data}
            // localStorage.setItem("pageData", JSON.stringify(this.pageData))
            // console.log(this.pageData)
        },
        getTopnotchers(data) {
            this.pageData = {...this.pageData, topnotcher: data}
            // localStorage.setItem("pageData", JSON.stringify(this.pageData))
            // console.log(this.pageData)
        },
        getBookSelection(data) {
            this.pageData = {...this.pageData, books: data}
            // localStorage.setItem("bookData", JSON.stringify(this.pageData))
            // console.log(this.pageData)
        },

    },
    created() {
        // console.log("Created")
        // if(process.client) {
        //     localStorage.removeItem("pageData")
        // }
        // console.log(this.pageData)

        // this.generateRandomWordQuery()
        // if (process.client) {
            console.log("Called")
            // localStorage.removeItem("bookData")
        // }
    },

    mounted() {
        // console.log(localStorage.getItem("bookData"))
        // console.log(localStorage.getItem("pageData"))
        // console.log(localStorage.getItem("pageData"))
        // if (localStorage.getItem("pageData") !== null) {
        //     // console.log("Has item")
        //
        //     const pageData = JSON.parse(localStorage.getItem('pageData'));
        //
        //     // console.log(pageData)
        //
        //     // set item for news
        //
        //     // set item for events
        //
        //     // set item for topnotchers
        //
        //     // set item for bookselection
        //
        //     console.log(pageData.books)
        //     // this.localBooks = pageData.books
        //
        //     // set item for sister city
        //
        //
        //
        //     this.isLoaded = true;
        //
        // } else {
        //     console.log("Asd")
        // }
        // checkReload()
        // localStorage.setItem("items", JSON.stringify())
    },
}
</script>

<style scoped>
.fade-in-css {
    animation: fade-in-animation 1s;
}

@keyframes fade-in-animation {
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
}
</style>