<template>
    <div class="relative bg-white w-[21rem] h-[22rem] transparent">
        <img src="../../assets/images/facility-card-bg.png" class="absolute bottom-0 z-0" alt=""/>
        <img :src="facilityInfo.image" class="absolute left-1/2 transform -translate-x-1/2 z-10" alt=""/>
        <h1 class="text-2xl w-full font-bold text-center absolute bottom-1/2">
            {{ facilityInfo.title }}
        </h1>
        <p class="text-xl w-full text-center absolute bottom-[4rem] px-[1rem]">
            {{ facilityInfo.description }}
        </p>
        <h2 class="absolute pl-[2rem] bottom-2 text-primary font-kulim z-20">
            {{ facilityInfo.floorInfo }}
        </h2>
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