<template>
    <div class="card-class px-[2rem] sm:px-[5rem] md:px-[10rem] lg:px-[20rem] xl:px-[25rem]
    py-2">
        <div class="bg-white border border-gray-300 flex items-center justify-start px-3 py-3">
            <img src="/images/icons/logo.png" alt="" class="py-2" width="100">
            <div class="flex flex-col">
                <span class="pl-5 font-khula text-md md:text-xl font-bold city-text">{{ sisterCityInfo.city }}</span>
                <span class="pl-5 font-kulim text-sm md:text-base">
                    <i class="fa-solid fa-location-pin"></i>
                    {{ sisterCityInfo.address }}
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardMiniSisterCity",
    props: {
        sisterCityInfo: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
@media(min-width: 1024px) {
    .card-class {
        padding: 0.5rem 12rem 0.5rem 12rem;
    }
}

@media(min-width: 600px) {
    .city-text {
        font-size: 1.2rem;
    }
}

@media(min-width: 312px) {
    .city-text {
        font-size: 1rem;
    }
}
</style>