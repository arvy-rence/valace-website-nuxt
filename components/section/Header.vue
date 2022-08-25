<template>
    <nav class="flex justify-between items-center px-16 h-12">
        <NuxtLink to="/">
            <figure>
                <img src="~/assets/images/icons/logo.png" width="100" height="60" alt="">
            </figure>
        </NuxtLink>
        <ul class="flex">
            <li class="mr-5">
                <NuxtLink to="/"
                          :class="[isActive.home ? ['text-primary', 'font-bold'] : '', 'font-khula']"
                          @click="changeActive(1)"
                >
                    HOME
                </NuxtLink>
            </li>
            <li class="mr-5">
                <a class="text-blue-500 hover:text-blue-800" href="#">OPAC</a>
            </li>
            <li class="mr-5">
                <NuxtLink to="/about-us"
                          :class="[isActive.aboutUs ? ['text-primary', 'font-bold'] : '', 'font-khula']"
                          @click="changeActive(2)"
                >
                    ABOUT US
                </NuxtLink>
            </li>
            <li class="mr-5">
                <NuxtLink to="/facilities"
                          :class="[isActive.facilities ? ['text-primary', 'font-bold'] : '', 'font-khula']"
                          @click="changeActive(3)"
                >
                    FACILITIES
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            isActive: {
                home: true,
                aboutUs: false,
                facilities: false
            }
        }
    },
    methods: {
        changeActive(page) {
            switch (page) {
                case 1:
                    this.isActive.home = true;
                    this.isActive.aboutUs = false;
                    this.isActive.facilities = false;
                    break;
                case 2:
                    this.isActive.aboutUs = true;
                    this.isActive.home = false;
                    this.isActive.facilities = false;
                    break;
                case 3:
                    this.isActive.facilities = true;
                    this.isActive.home = false;
                    this.isActive.aboutUs = false;
                    break;
            }
        }
    }
}
</script>

<style scoped>

</style>