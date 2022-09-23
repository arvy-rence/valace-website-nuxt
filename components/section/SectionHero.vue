<template>
    <div class="w-full">
        <div class="block relative overflow-hidden h-auto lg:h-[calc(647px)]">
            <!--    <div class="block relative overflow-hidden h-auto lg:h-[calc(100vh-63.2px)]">-->
            <div class="w-full px-[2rem] lg:px-0 lg:w-[34rem] z-10 absolute top-1/2 lg:top-[calc(16%)] lg:left-[5rem]">
                <h2 class="text-md sm:text-2xl text-primary">
                    WELCOME TO
                </h2>
                <h1 class="text-4xl sm:text-6xl font-bold text-primary">
                    VALENZUELA CITY LIBRARY
                </h1>
                <p class="text-sm sm:text-xl text-primary pt-[1rem]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a ultricies tortor. In hac habitasse platea dictumst. Curabitur non justo lacinia mauris finibus fringilla. Cras accumsan nulla et erat varius, quis sagittis tellus congue.
                </p>
                <p class="text-sm sm:text-xl text-primary pt-[1rem] pb-[2.5rem]">
                    #AklatanParaSaBawatValenzuelano
                </p>
                <button class="bg-secondary h-[3rem] w-[16rem] sm:h-[4rem] sm:w-[23rem]">
                    <a href="/about" class="text-lg sm:text-2xl font-bold text-white font-khula">
                        Visit Public Access Catalog
                    </a>
                </button>
            </div>

            <div class="block relative overflow-hidden h-full z-0">
                <img src="public/images/hero-desktop.png" alt="" class="hero lg:block hidden">

                <img src="public/images/hero-mobile.png" alt="" class="w-full hidden md:block lg:hidden">

                <img src="public/images/mobile.png" alt="" class="w-full block md:hidden">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SectionHero"
}
</script>

<style scoped>
.hero {
    object-fit: cover;
    height: 100%;
    object-position: 80%;
}
</style>