<template>
<!--    <div class="w-[22rem] mx-4 custom-bottom-shadow img-with-shadow my-[1rem] px-[1.4rem] pt-4 min-h-[24rem] h-[30rem]">-->
<!--        <div class="mx-4 flex flex-col justify-center items-center align-center h-1/2">-->
<!--            <figure class="inline-flex justify-center items-center py-[.5rem]">-->
<!--                <img src="/images/icons/logo.png" width="75" alt="">-->
<!--            </figure>-->
<!--            <figure class="inline-flex justify-center items-center">-->
<!--                <img :src="sisterCityInfo.image_link" width="340" alt="" class="h-[10rem] w-[10rem] object-cover"/>-->
<!--            </figure>-->
<!--            <h1 class="font-bold text-xl text-black-100 py-2 text-left text-primary font-kulim text-center">-->
<!--                {{ sisterCityInfo.library_name }}-->
<!--            </h1>-->
<!--            <div class="text-[15px] text-black-100 text-center font-kulim pt-2">-->
<!--                <span class="pl-2">-->
<!--                    {{ sisterCityInfo.library_description }}-->
<!--                </span>-->
<!--            </div>-->
<!--            <div class="inline-flex items-center mt-5 pb-5">-->
<!--                <NuxtLink :to="`/sister-cities/${sisterCityInfo.id}`"-->
<!--                          class="text-primary text-sm underline font-bold">-->
<!--                    <button class="py-2">-->
<!--                        <span class="text-primary hover:underline">-->
<!--                            <i class="fa-solid fa-circle-chevron-down"></i>-->
<!--                            Read More-->
<!--                        </span>-->
<!--                    </button>-->
<!--                </NuxtLink>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->







    <div class="w-[22rem] bg-gray mx-4 ">
        <div class="block bg-white-100 custom-bottom-shadow img-with-shadow my-[.7rem] px-[1.4rem] pt-4 h-[32rem]">
            <figure class="flex justify-center items-center py-[.5rem]">
                <img src="/images/icons/logo.png" width="75" alt="" />
            </figure>
            <figure class="flex justify-center items-center">
                <img :src="sisterCityInfo.image_link" alt="" class="max-w-[20rem] h-[12rem] object-cover"/>
            </figure>
            <div class="block overflow-hidden h-[10rem]">
                <h1 class="font-bold text-xl text-black-100 py-2 text-center text-primary font-kulim overflow-hidden max-h-[4.3rem]">{{ sisterCityInfo.library_name }}</h1>
                <div class="text-[15px] text-black-100 text-center font-kulim pt-2">
                    <p class="overflow-hidden text-center px-[1rem]">
                        {{ sisterCityInfo.library_description }}
                    </p>
                </div>
            </div>
            <div class="inline-flex items-center mt-5 pb-5 w-full">
                <NuxtLink :to="`/sister-cities/${sisterCityInfo.id}`"
                          class="text-primary text-sm underline font-bold mx-auto">
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