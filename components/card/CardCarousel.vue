<template>
    <div class="w-[16rem] h-[20rem] bg-primary mx-auto flex justify-center">
        <img :src="bookInfo.bookImageURL" class="object-contain h-full"/>
    </div>
</template>

<script>
export default {
    name: "CardCarousel",
    props: {
        /**
         * bookInfo should have the following format:
         *     bookTitle
         *     bookAuthor
         *     bookImageURL
         */
        bookInfo: {
            required: true,
            type: Object
        }
    }

}
</script>

<style scoped>

</style>