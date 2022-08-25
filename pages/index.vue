<template>
    <div>
        <h1>Home</h1>
    </div>
</template>

<script>
export default {
    name: "index",
    data() {
        return {
            generatedISBNNumbers: [],
            name: "Rence"
        }
    },
    methods: {
        generateRandomISBN() {
            let generatedISBN = '';
            for (let i = 0; i < 10; i++) {
                generatedISBN += Math.floor(Math.random() * 10);
            }
            return generatedISBN;
        }
    },
    created() {
        this.generatedISBNNumbers = [
            this.generateRandomISBN(),
            this.generateRandomISBN(),
            this.generateRandomISBN()
        ]
    }
}
</script>

<style scoped>

</style>