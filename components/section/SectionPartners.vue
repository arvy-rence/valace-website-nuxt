<template>
    <div class="w-full bg-[url(/images/sisters-bg.png)]" id="partners-section">
        <div class="flex-col px-[1rem] lg:px-[6rem] pt-[4rem] pb-[2rem] flex-wrap overflow-auto justify-around items-center max-w-[calc(1500px)] mx-auto">
            <div class="text-center">
                <h2 class="font-bold text-lg sm:text-3xl text-gray-400 py-2 opacity-50">VALENZUELA CITY LIBRARY</h2>
                <h1 class="text-primary text-4xl sm:text-6xl font-khula font-bold">PARTNERS & LINKAGES</h1>
            </div>
            <div class="flex flex-wrap justify-center items-center">
                <div class="" v-for="image in images">
                    <img :src="image" width="280" class="py-2"/>
                </div>
            </div>
        </div>
    </div>
    <UtilVerticalSpacer :height="2" units="rem"/>
</template>

<script>
export default {
    name: "SectionPartners",
    data() {
        return {
            // update this with the logos of the partners and linkages
            images: [
                "/images/icons/logo.png",
                "/images/icons/logo.png",
                "/images/icons/logo.png",
                "/images/icons/logo.png",
                "/images/icons/logo.png",
                "/images/icons/logo.png",
                "/images/icons/logo.png"
            ]
        }
    }
}
</script>

<style>

</style>