<template>
    <div class="card-class py-2">
        <div class="bg-white border border-gray-300 flex items-center justify-start px-3 py-3 h-[6rem] hover:shadow-lg">
            <img :src="sisterCityInfo.image_link" alt="" class="py-2 ml-[1rem] w-[4rem] object-cover" width="100">
            <div class="flex flex-col">
                <span class="pl-5 font-khula text-md md:text-xl font-bold text-primary city-text">{{ sisterCityInfo.library_name }}</span>
                <span class="pl-5 font-kulim text-sm md:text-base">
                    {{ year }}
                </span>
            </div>
            <button class="ml-auto mr-[1rem] font-kulim text-gray-400 hover:text-primary duration-500">
                <NuxtLink :to="`/sister-cities/${sisterCityInfo.id}`">
                    Read More <i class="fa-solid fa-chevron-right"></i>
                </NuxtLink>
            </button>
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
    },
    computed: {
        year() {
            return this.sisterCityInfo.library_description.substring(this.sisterCityInfo.library_description.length - 4);
        }
    }
}
</script>

<style scoped>
@media(min-width: 1024px) {
    .card-class {
        padding: 0.5rem 6rem 0.5rem 6rem;
    }
}


</style>