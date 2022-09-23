<template>
    <div class="flex-col">
        <!-- logo panel // -->
        <div class="flex justify-center items-center">
            <img src="/images/icons/logo.png" width="150" alt="">
        </div>
        <div class="flex justify-center items-center pt-6">
            <NuxtLink to="https://facebook.com/" target="_blank">
                <figure class="px-4">
                    <img src="/images/icons/fb-logo.png" height="20" width="20">
                </figure>
            </NuxtLink>
            <NuxtLink to="https://twitter.com/" target="_blank">
                <figure class="px-4">
                    <img src="/images/icons/twitter.png" height="20" width="20">
                </figure>
            </NuxtLink>
            <NuxtLink to="https://maps.google.com/" target="_blank">
                <figure class="px-4">
                    <img src="/images/icons/map.png" height="20" width="20">
                </figure>
            </NuxtLink>
            <NuxtLink to="https://koha.com/" target="_blank">
                <figure class="px-4">
                    <img src="/images/icons/koha.png" height="15" width="15">
                </figure>
            </NuxtLink>
        </div>
        <UtilVerticalSpacer :height="2" units="rem"/>
        <div class="flex justify-center">
            <div class="grid grid-cols-2 gap-2 md:flex md:flex-row md:justify-around items-start w-11/12 lg:w-3/4 px-[1rem]">
                <ul class="pb-[2rem] md:pb-0">
                    <li class="font-bold font-khula text-lg text-primary">LIBRARY LOCATION</li>
                    <FooterListItem href="/#" class="cursor-default">
                        Valenzuela City Library, <br>
                        MXW9+54C, Llenado, <br>
                        Valenzuela, Metro Manila
                    </FooterListItem>
                    <FooterListItem href="/about-us"
                                    :isLink="true"
                                    class="text-primary font-bold">
                        View Map
                    </FooterListItem>
                </ul>
                <ul class="pb-[2rem] md:pb-0 pl-[2rem] md:pl-0">
                    <li class="font-bold font-khula text-lg text-primary">LIBRARY HOURS</li>
                    <FooterListItem href="" class="cursor-default">Monday - Sunday</FooterListItem>
                    <FooterListItem href="" class="cursor-default">9:00am - 2:00am</FooterListItem>
                    <FooterListItem href=""
                                    class="text-secondary text-bold">Closed on Holidays</FooterListItem>
                </ul>
                <ul>
                    <li class="font-bold font-khula text-lg text-primary">CONTACT US</li>
                    <FooterListItem href="/about-us"
                                    :isLink="true">
                        <i class="fa-solid fa-phone text-primary"></i>
                        (02)1234-5678
                    </FooterListItem>
                    <FooterListItem href="/about-us"
                                    :isLink="true">
                        <i class="fa-regular fa-envelope text-primary"></i>
                        valenzuelacitylibrary@gmail.com
                    </FooterListItem>
                    <FooterListItem href="/about-us"
                                    :isLink="true">
                        <i class="fa-solid fa-globe text-primary"></i>
                        library.valenzuela.gov.ph
                    </FooterListItem>

                </ul>
            </div>
        </div>
        <UtilVerticalSpacer :height="2" units="rem"/>
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
}
</script>

