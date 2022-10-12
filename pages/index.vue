<template>
    <div>
        <HeaderHome/>
        <div class="pt-[82.8px]"></div>
        <SectionHero/>
        <SectionNews/>
        <SectionEvents/>
        <SectionTopnotchers/>
        <SectionSisterCities/>
        <SectionNewBookSelection/>
        <SectionKOHA/>
        <SectionPartners/>
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

export default {
    name: "index",
    components: {
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
        }
    },
    methods: {
        // generateRandomWordQuery() {
        //     /**
        //      * Function to generate and push 3 random words from the in the wordlist to the
        //      * generatedWords array
        //      */
        //     while (this.generatedWords.length < 4) {
        //         let randomWord = words[Math.floor(Math.random() * words.length)];
        //
        //         this.generatedWords.push(randomWord);
        //     }
        // }
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