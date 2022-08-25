<template>
    <div>
        <SectionBookSelection :queryValues="generatedWords"/>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            generatedISBNNumbers: [],
            generatedWords: [],
            name: "Rence"
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
                "charge", "crime", "tape", "shirt", "civil", "ongoing", "game", "future", "journal", "remaining", "pretty", "whether", "probably", "silent", "positive", "stare", "information", "release", "again", "exception", "painful", "vessel", "situation", "rid", "style", "record", "wear", "basketball", "head", "lean", "shoot", "after", "least", "threaten", "folk", "sensitive", "religious", "grocery", "consumer", "massive", "dimension", "everything", "take", "ring", "administration", "need", "get", "stir", "response", "Christmas", "advantage", "long", "continue", "creature", "formula", "slow", "bite", "burn", "construction", "substantial", "can", "page", "argue", "between", "opportunity", "exist", "closely", "assistant", "public", "killer", "conflict", "typically", "necessary", "examination", "you", "labor", "photo", "cow", "fuel", "mount", "common", "around", "gang", "breast", "buyer", "learn", "thus", "moon", "victory", "investment", "imagination", "billion", "stop", "mistake", "pink", "weekend"
            ]
            for (let i = 0; i < 3; i++) {
                this.generatedWords.push(words[Math.floor(Math.random() * 10)]);
            }
        }
    },
    created() {
        // this.generatedISBNNumbers = [
        //     this.generateRandomISBN(),
        //     this.generateRandomISBN(),
        //     this.generateRandomISBN()
        // ]
        this.generateRandomWordQuery()
    }
}
</script>

<style scoped>

</style>