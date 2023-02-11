<template>
    <div class="relative w-[21rem] h-[19rem] transparent">
        <div class="bg-white w-[336px] absolute rounded-2xl z-0 shadow-lg ">
            <img src="/images/facility-card-bg.png" class="opacity-20" alt=""/>
        </div>

        <img :src="facilityInfo.image" class="absolute left-1/2 transform top-[1rem] -translate-x-1/2 z-10" alt=""/>
        <h2 class="text-xl w-full text-center absolute top-[10rem] opacity-50 text-primary">
            {{ facilityInfo.floorInfo }}
        </h2>
        <h1 class="text-2xl w-full font-bold text-center absolute top-[12rem] bottom-1/2 text-primary font-khula">
            {{ facilityInfo.title }}
        </h1>

    </div>
</template>

<script>
export default {
    name: "CardFacilityInfo",
    props: {
        facilityInfo: Object,
    }
}
</script>

<style>

</style>