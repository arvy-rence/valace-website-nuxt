<template>
    <div class="flex-col relative lg:pt-[2rem]">
        <!-- logo panel // -->
        <div class="flex justify-center items-center">
            <img src="/images/icons/logo.png" width="150" alt="">
        </div>
        <div class="flex justify-center items-center pt-6">
            <NuxtLink to="https://facebook.com/" target="_blank">
                <figure class="px-4">
                    <img src="/images/icons/blue-facebook.png" height="30" width="30">
                </figure>
            </NuxtLink>
            <NuxtLink to="https://twitter.com/" target="_blank">
                <figure class="px-4">
                    <img src="/images/icons/blue-twitter.png" height="30" width="30">
                </figure>
            </NuxtLink>
            <NuxtLink to="https://maps.google.com/" target="_blank">
                <figure class="px-4">
                    <img src="/images/icons/blue-map.png" height="30" width="30">
                </figure>
            </NuxtLink>
            <NuxtLink to="https://koha.com/" target="_blank">
                <figure class="px-4">
                    <img src="/images/icons/blue-koha.png" height="26" width="26">
                </figure>
            </NuxtLink>
        </div>
        <UtilVerticalSpacer :height="2" units="rem"/>
        <div class="flex justify-center">
            <div class="grid grid-cols-2 gap-2 md:flex md:flex-row md:justify-around items-start w-11/12 lg:w-3/4 px-[1rem]">
                <ul class="pb-[2rem] md:pb-0">
                    <li class="font-bold font-khula text-lg text-primary">LIBRARY LOCATION</li>
                    <FooterListItem href="/#" class="cursor-default text-primary">
                        Valenzuela City Library, <br>
                        MXW9+54C, Llenado, <br>
                        Valenzuela, Metro Manila
                    </FooterListItem>
                    <FooterListItem href="https://www.google.com/maps/place/Valenzuela+Academic+Center+for+Excellence+-+ValACE/@14.6924138,120.9655949,19.75z/data=!4m5!3m4!1s0x3397b58186049e65:0x3b293f197c2be1ab!8m2!3d14.6923974!4d120.9656303"
                                    :isLink="true"
                                    class="text-primary font-bold">
                        View Map
                    </FooterListItem>
                </ul>
                <ul class="pb-[2rem] md:pb-0 pl-[2rem] md:pl-0">
                    <li class="font-bold font-khula text-lg text-primary">LIBRARY HOURS</li>
                    <FooterListItem href="" class="cursor-default text-primary">Monday - Sunday</FooterListItem>
                    <FooterListItem href="" class="cursor-default text-primary uppercase">9:00am - 12:00mn</FooterListItem>
                    <FooterListItem href=""
                                    class="text-secondary text-bold">Closed on Holidays</FooterListItem>
                </ul>
                <ul>
                    <li class="font-bold font-khula text-lg text-primary">CONTACT US</li>
                    <div>
                        <a href="tel:8-352-1000" class="font-kulim hover:underline text-primary">
                            <i class="fa-solid fa-phone text-primary"></i>
                            8-352-1000
                        </a>
                    </div>
                    <div>
                        <a href="mailto:valenzuelacitylibrary@gmail.com" class="font-kulim hover:underline text-primary">
                            <i class="fa-regular fa-envelope text-primary"></i>
                            valenzuelacitylibrary@gmail.com
                        </a>
                    </div>
                    <FooterListItem href="https://library.valenzuela.gov.ph"
                                    :isLink="true">
                        <i class="fa-solid fa-globe text-primary"></i>
                        library.valenzuela.gov.ph
                    </FooterListItem>

                </ul>
            </div>
        </div>
        <UtilVerticalSpacer :height="2" units="rem"/>
        <div class="absolute flex flex-col items-center right-2 top-0 md:right-[4rem] md:top-[1rem] lg:right-[6rem] lg:top-[3rem] font-semibold">
            <button class="w-[2rem] h-[2rem] sm:w-[3rem] sm:h-[3rem] bg-primary rounded-full text-white" @click="scrollToTop">
                <i class="fa-solid fa-chevron-up"/>
            </button>
            <h1 class="text-primary text-xs md:text-lg">Back to top</h1>
        </div>
        <div class="bg-primary py-2 text-center">
            <span class="text-white font-khula">
                All Rights Reserved &copy; 2022. ValenzuelaCityLibrary
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "SectionFooter",

    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
    }
}
</script>

