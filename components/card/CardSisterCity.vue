<template>
    <div class="w-[22rem] mx-4 custom-bottom-shadow img-with-shadow my-[1rem] px-[1.4rem] pt-4 min-h-[24rem]">
        <div class="mx-4 flex flex-col justify-center items-center align-center h-1/2">
            <figure class="inline-flex justify-center items-center py-[.5rem]">
                <img src="/images/icons/logo.png" width="75" alt="">
            </figure>
            <figure class="inline-flex justify-center items-center">
                <img :src="sisterCityInfo.imageURL" width="340" alt=""/>
            </figure>
            <h1 class="font-bold text-xl text-black-100 py-2 text-left font-kulim text-center">
                {{ sisterCityInfo.city }}
            </h1>
            <div class="text-[15px] text-black-100 text-center font-kulim pt-2">
                <i class="fa-solid fa-location-pin"></i>
                <span class="pl-2">
                    {{ sisterCityInfo.address }}
                </span>
            </div>
            <div class="inline-flex items-center mt-5 pb-5">
                <NuxtLink :to="sisterCityInfo.link"
                          class="text-primary text-sm underline font-bold">
                    <button class="py-2">
                        <span class="text-primary hover:underline">
                            <i class="fa-solid fa-circle-chevron-down"></i>
                            Read More
                        </span>
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardSisterCity",
    props: {
        sisterCityInfo: {
            type: Object,
            required: true
        }
    },
    computed() {

    }
}
</script>

<style>

</style>