<template>
    <div class="w-[22rem] custom-bottom-shadow img-with-shadow px-[1.4rem] pt-4 min-h-[24rem]">
        <div class="mx-4 flex flex-col justify-center items-center align-center h-1/2">
<!--            <figure class="inline-flex justify-center items-center py-[.5rem]">-->
<!--                <img src="/images/icons/logo.png" width="75" alt="">-->
<!--            </figure>-->
                <div class="w-[16rem] h-[20rem] bg-primary mx-auto flex justify-center">
                    <img :src="bookInfo.bookImageURL" class="object-contain h-full"/>
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