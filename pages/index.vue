<template>
    <div>
        <SectionNews/>
        <SectionTopnotchers/>
        <SectionSisterCities/>
        <SectionPartners/>
        <SectionBookSelection :queryValues="generatedWords"/>
        <SectionKOHA/>
    </div>
</template>

<script>
import {checkReload} from "../composables/checkReload";
import SectionKOHA from "../components/section/SectionKOHA";
import SectionPartners from "../components/section/SectionPartners";
import SectionSisterCities from "../components/section/SectionSisterCities";
import SectionTopnotchers from "../components/section/SectionTopnotchers";
import SectionNews from "../components/section/SectionNews";

export default {
    name: "index",
    components: {SectionNews, SectionTopnotchers, SectionSisterCities, SectionPartners, SectionKOHA},
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