<template>
    <div>
        <SectionTopnotchers />
        <SectionSisterCities/>
        <SectionPartners/>
        <!--    <SectionBookSelection :queryValues="dummy"/> -->
        <SectionKOHA/>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            generatedISBNNumbers: [],
            generatedWords: [],
            name: "Rence",
            dummy: [
                'mathematics',
                'law',
                'business'
            ]
        }
    },
    methods: {
        generateRandomISBN() {
            /**
             * Returns a pseudo-randomized ISBN per function call
             * @returns {string}
             */
            let generatedISBN = '97814472953';
            for (let i = 0; i < 2; i++) {
                generatedISBN += Math.floor(Math.random() * 10);
            }
            return generatedISBN;
        },
        generateRandomWordQuery() {
            /**
             * Function to generate and push 3 random words from the in the wordlist to the
             * generatedWords array
             */
            const words = [
                "programming", "medicine", "history", "geography", "mathematics", "philosophy", "psychology", "business", "law"
                // "charge", "crime", "tape", "shirt", "civil", "ongoing", "game", "future", "remaining", "pretty", "whether", "probably", "silent", "positive", "stare", "information", "release", "again", "exception", "painful", "vessel", "situation", "rid", "style", "record", "wear", "basketball", "head", "lean", "shoot", "after", "least", "threaten", "folk", "sensitive", "religious", "grocery", "consumer", "massive", "dimension", "everything", "take", "ring", "administration", "need", "get", "stir", "response", "Christmas", "advantage", "long", "continue", "creature", "formula", "slow", "bite", "burn", "construction", "substantial", "can", "page", "argue", "between", "opportunity", "exist", "closely", "assistant", "public", "killer", "conflict", "typically", "necessary", "examination", "you", "labor", "photo", "cow", "fuel", "mount", "common", "around", "gang", "breast", "buyer", "learn", "thus", "moon", "victory", "investment", "imagination", "billion", "stop", "mistake", "pink", "weekend"
            ]
            while (this.generatedWords.length < 3) {
                let randomWord = words[Math.floor(Math.random() * words.length)];
                if (this.generatedWords.includes(randomWord)) continue;
                this.generatedWords.push(randomWord);
            }
            // for (let i = 0; i < 3; i++) {
            //     let wor = words[Math.floor(Math.random() * words.length)]
            //     if (this.generatedWords.includes(wor)) return;
            //     this.generatedWords.push(wor);
            // }
        }
    },
    created() {
        // this.generatedISBNNumbers = [
        //     this.generateRandomISBN(),
        //     this.generateRandomISBN(),
        //     this.generateRandomISBN()
        // ]
        this.generatedWords = [];
        this.generateRandomWordQuery()
    }
}
</script>

<style scoped>

</style>