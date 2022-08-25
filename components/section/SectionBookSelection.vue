<template>
    <div class="flex justify-center items-center w-screen bg-gray-100">
        <UtilVerticalSpacer :height="5" units="rem"/>
        <h1 class="font-bold font-khula text-4xl text-tertiary">
            BOOK SELECTION
        </h1>
        <div v-for="image in imageLinks">
            <img :src="image" alt="">
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "SectionBookSelection",
    data() {
        return {
            imageLinks: []
        }
    },
    props: {
        queryValues: Array
    },
    methods: {
        async getBooksFromAPI(query) {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
            console.log(response.data.items[0].volumeInfo);
            return response.data.items[0].volumeInfo.imageLinks.thumbnail;
        }
    },
    async created() {
        for (const query of this.queryValues) {
            this.imageLinks.push(await this.getBooksFromAPI(query));
        }
    }
}
</script>

<style scoped>

</style>