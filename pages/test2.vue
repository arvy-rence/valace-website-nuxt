<template>
    <div v-for="book in bookInformation">
        <CardCarousel :bookInfo="book"/>
    </div>
</template>

<script>
import {generateBooks} from "../composables/fetchBooksFromAPI";
export default {
    name: "test2",
    components: {},
    data() {
        return {
            bookInformation: []
        }
    },
    async created() {
        this.bookInformation = await generateBooks()
    }
}
</script>

<style scoped>

</style>