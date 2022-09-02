<template>
    <UtilVerticalSpacer :height="2" units="rem"/>
    <div class="flex-col px-[6rem] flex-wrap overflow-auto justify-around items-center">
        <div class="text-center">
            <h2 class="font-bold text-lg text-gray-400 py-2">VALENZUELA CITY LIBRARY</h2>
            <h1 class="text-primary text-4xl font-khula font-bold">PARTNERS & LINKAGES</h1>
        </div>
        <div class="flex flex-wrap justify-center items-center">
            <div class="" v-for="image in images">
                <img :src="image" width="280" class="py-2"/>
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
                "../../assets/images/icons/logo.png",
                "../../assets/images/icons/logo.png",
                "../../assets/images/icons/logo.png",
                "../../assets/images/icons/logo.png",
                "../../assets/images/icons/logo.png",
                "../../assets/images/icons/logo.png",
                "../../assets/images/icons/logo.png"
            ]
        }
    }
}
</script>

<style>

</style>