<template>
    <div class="flex-col">
        <!-- logo panel // -->
        <div class="flex justify-center items-center pt-6">
            <NuxtLink to="https://facebook.com/" target="_blank">
                <figure class="px-4">
                    <img src="/images/icons/fb-logo.png" height="30" width="30">
                </figure>
            </NuxtLink>
            <NuxtLink to="https://twitter.com/" target="_blank">
                <figure class="px-4">
                    <img src="/images/icons/twitter.png" height="30" width="30">
                </figure>
            </NuxtLink>
            <NuxtLink to="https://maps.google.com/" target="_blank">
                <figure class="px-4">
                    <img src="/images/icons/map.png" height="30" width="30">
                </figure>
            </NuxtLink>
            <NuxtLink to="https://koha.com/" target="_blank">
                <figure class="px-4">
                    <img src="/images/icons/koha.png" height="22" width="22">
                </figure>
            </NuxtLink>
        </div>
        <UtilVerticalSpacer :height="2" units="rem"/>
        <div class="flex justify-center">
            <div class="flex justify-around items-start w-11/12 lg:w-3/4">
                <ul>
                    <li class="font-bold font-khula text-primary">Header 1</li>
                    <FooterListItem href="/about-us">Item 1</FooterListItem>
                    <FooterListItem href="/about-us">Item 2</FooterListItem>
                </ul>
                <ul>
                    <li class="font-bold font-khula text-primary">Header 2</li>
                    <FooterListItem href="/about-us">Item 1</FooterListItem>
                    <FooterListItem href="/about-us">Item 2</FooterListItem>
                    <FooterListItem href="/about-us">Item 3</FooterListItem>
                </ul>
                <ul>
                    <li class="font-bold font-khula text-primary">Header 3</li>
                    <FooterListItem href="/about-us">Item 1</FooterListItem>
                    <FooterListItem href="/about-us">Item 2</FooterListItem>
                    <FooterListItem href="/about-us">Item 3</FooterListItem>
                    <FooterListItem href="/about-us">Item 4</FooterListItem>
                </ul>
                <ul>
                    <li class="font-bold font-khula text-primary">Header 4</li>
                    <FooterListItem href="/about-us">Item 1</FooterListItem>
                    <FooterListItem href="/about-us">Item 2</FooterListItem>
                    <FooterListItem href="/about-us">Item 3</FooterListItem>
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

