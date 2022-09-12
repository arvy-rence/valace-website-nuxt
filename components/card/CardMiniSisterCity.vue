<template>
    <div class="card-class px-[2rem] sm:px-[5rem] md:px-[10rem] lg:px-[20rem] xl:px-[25rem] py-2">
        <div class="bg-white border border-gray-300 flex items-center justify-start px-3 py-3">
            <img src="/images/icons/logo.png" alt="" class="py-2" width="100">
            <div class="flex flex-col">
                <span class="pl-5 font-khula text-xl font-bold">{{ sisterCityInfo.city }}</span>
                <span class="pl-5 font-kulim">
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
        padding: 16px 12rem 16px 12rem;
    }
}
</style>