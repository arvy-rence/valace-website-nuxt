<template>
    <div>
        <div :class="[startLoad ? ['visible', 'fade-in-css'] : ['collapse']]">
            <HeaderHome/>
            <div class="pt-[82.8px]"></div>
            <SectionHero/>
            <FadeView>
                <SectionTopnotchers @complete-topnotcher-load="completeTopnotcherLoad"
                                    @topnotcher-data="storeTopNotchersData"/>
            </FadeView>
            <FadeView>
                <SectionSisterCities @complete-sister-city-load="completeSisterCityLoad"
                                     @sister-city-data="storeSisterCityData"/>
            </FadeView>
            <FadeView>
                <SectionNewBookSelection @book-data="storeBookSelection"/>
            </FadeView>
            <FadeView>
                <SectionKOHA/>
            </FadeView>
            <FadeView>
                <SectionPartners/>
            </FadeView>
            <SectionFooter/>
        </div>
        <Loading v-if="!startLoad"/>
    </div>
</template>

<script>
import SectionKOHA from "../components/section/SectionKOHA";
import SectionPartners from "../components/section/SectionPartners";
import SectionSisterCities from "../components/section/SectionSisterCities";
import SectionTopnotchers from "../components/section/SectionTopnotchers";
import SectionHero from "../components/section/SectionHero";
import Loading from "../components/util/Loading";

export default {
    name: "index",
    components: {
        Loading,
        SectionHero,
        SectionTopnotchers,
        SectionSisterCities,
        SectionPartners,
        SectionKOHA
    },
    data() {
        return {
            isLoaded: {
                topnotchers: false,
                sisterCity: false,
            },
            startLoad: false,
            isAnimating: true,

            pageData: {},

            localBooks: null
        }
    },
    methods: {
        completeTopnotcherLoad(status) {
            this.isLoaded.topnotchers = status
            this.removeLoadingPage()
        },
        completeSisterCityLoad(status) {
            this.isLoaded.sisterCity = status
            this.removeLoadingPage()
        },
        removeLoadingPage() {
            if (this.isLoaded.topnotchers === true && this.isLoaded.sisterCity === true) {
                this.startLoad = true;
            }
        },


        storeSisterCityData(data) {
            if (process.client) {
                window.localStorage.setItem("sistercity-data", JSON.stringify(data))
            }
        },
        storeTopNotchersData(data) {
            if (process.client) {
                window.localStorage.setItem("topnotchers-data", JSON.stringify(data))
            }
        },
        storeBookSelection(data) {
            if (process.client) {
                window.localStorage.setItem("bookselection-data", JSON.stringify(data))
            }
        },

    },
    created() {
        if (process.client) {
            window.addEventListener('beforeunload', function (event) {
                window.localStorage.removeItem("sistercity-data")
                window.localStorage.removeItem("topnotchers-data")
                window.localStorage.removeItem("bookselection-data")
            })
        }
        this.removeLoadingPage()
    },

    mounted() {

        if (process.client) {
            if (window.localStorage.getItem("sistercity-data") != null && window.localStorage.getItem("topnotchers-data") != null && window.localStorage.getItem("bookselection-data") != null) {
                this.startLoad = true;
            }
        }
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
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