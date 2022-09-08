<template>
    <div class="w-[22rem] mx-4 custom-bottom-shadow img-with-shadow my-[1rem] px-[1.4rem] pt-4 min-h-[24rem]">
        <div class="mx-4 flex flex-col justify-center items-center align-center h-1/2">
            <figure class="inline-flex justify-center items-center py-[.5rem]">
                <img src="/images/icons/logo.png" width="75" alt="">
            </figure>
            <figure class="inline-flex justify-center items-center">
                <img :src="bookInfo.bookImageURL" width="200" alt=""/>
            </figure>
            <h1 class="font-bold text-xl text-black-100 py-2 text-left font-kulim text-center">
                {{ bookInfo.bookTitle }}
            </h1>
            <div class="text-[15px] text-black-100 text-center font-kulim py-[1rem]">
                <i class="fa-solid fa-user"></i>
                <span class="pl-2 pb-6" v-for="author in bookInfo.bookAuthor">
                    {{ author }}
                </span>
            </div>
        </div>
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