<template>
    <div class="bg-gray-100">
        <UtilVerticalSpacer :height="2" units="rem"/>
        <div class="flex-col justify-center items-center w-screen">
            <h1 class="font-bold font-khula text-4xl text-tertiary text-center">
                BOOK SELECTION
            </h1>
            <UtilVerticalSpacer :height="2" units="rem"/>
            <div v-for="book in bookMetaInformation" class="py-2 px-12 flex-col">
                <div class="">
                    <img :src="book.bookImageLink" alt="" class="mb-3 mr-5 rounded-2xl">
                    <h1 class="text-primary font-bold text-xl font-khula">{{ book.bookTitle.toUpperCase() }}</h1>
                    <span class="text-gray-600 font-khula" v-for="author in book.bookAuthor">
                    {{ author }}
                </span>
                    <p class="font-kulim">{{ book.bookDescription }}</p>
                </div>
            </div>
        </div>
        <UtilVerticalSpacer :height="2" units="rem"/>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "SectionBookSelection",
    data() {
        return {
            bookMetaInformation: [],
            bookMetaTitle: []
        }
    },
    props: {
        queryValues: Array
    },
    methods: {
        async getBooksFromAPI(query) {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
            let randomIndex = Math.floor(Math.random() * response.data.totalItems);

            const randomBookData = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}?startIndex=${randomIndex}`);

            const bookData = randomBookData.data.items[0].volumeInfo;
            return {
                bookTitle: bookData.title,
                bookAuthor: bookData.authors,
                bookDescription: bookData.description,
                bookImageLink: bookData.imageLinks.thumbnail
            }
        }
    },
    async created() {
        // for (const query of this.queryValues) {
        //     console.log(query)
        //     const bookInfo = await this.getBooksFromAPI(query);
        //
        //     if (this.bookMetaInformation.includes(bookInfo))
        //     this.bookMetaInformation.push(await this.getBooksFromAPI(query));
        //     console.log(this.bookMetaInformation)
        // }

        for (const query of this.queryValues) {
                const bookInfo = await this.getBooksFromAPI(query);

                if (this.bookMetaTitle.includes(bookInfo.bookTitle)) {
                    await this.getBooksFromAPI(query);
                }
                this.bookMetaInformation.push(bookInfo);
                this.bookMetaTitle.push(bookInfo.bookTitle);
            }
    }
}
</script>

<style scoped>

</style>