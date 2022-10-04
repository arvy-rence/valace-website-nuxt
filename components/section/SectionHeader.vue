<template>
    <nav class="nav flex flex-wrap items-center justify-between px-4">
        <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
            <img src="/images/icons/logo.png" width="150" height="600" alt="">
        </div>

        <input class="menu-btn hidden" type="checkbox" id="menu-btn">
        <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
            <span class="navicon bg-grey-darkest flex items-center relative"></span>
        </label>

        <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
            <li class="border-t md:border-none">
                <NuxtLink to="/" :class="[isActive.home ? ['text-primary', 'font-bold'] : '', 'font-khula']"
                          class="block md:inline-block px-8 py-3 no-underline text-grey-darkest hover:text-grey-darker font-bold text-2xl"
                          @click="changeActive(1)">HOME</NuxtLink>
            </li>
            <li class="border-t md:border-none">
                <a class="block md:inline-block px-8 py-3 no-underline text-grey-darkest hover:text-grey-darker font-khula text-2xl">OPAC</a>
            </li>
            <li class="border-t md:border-none">
                <NuxtLink to="/about-us"
                          class="block md:inline-block px-8 py-3 no-underline text-grey-darkest hover:text-grey-darker text-2xl" :class="[isActive.aboutUs ? ['text-primary', 'font-bold'] : '', 'font-khula']"
                          @click="changeActive(2)">ABOUT US
                </NuxtLink>
            </li>
            <li class="border-t md:border-none">
                <NuxtLink to="/facilities"
                          class="block md:inline-block px-8 py-3 no-underline text-grey-darkest hover:text-grey-darker text-2xl" :class="[isActive.facilities ? ['text-primary', 'font-bold'] : '', 'font-khula']"
                          @click="changeActive(3)">FACILITIES

                </NuxtLink>
            </li>

        </ul>

<!--        <ul class="hidden lg:flex">-->
<!--            <li class="mr-5">-->
<!--                <NuxtLink to="/" :class="[isActive.home ? ['text-primary', 'font-bold'] : '', 'font-khula']" @click="changeActive(1)">HOME</NuxtLink>-->
<!--            </li>-->
<!--            <li class="border-t md:border-none">-->
<!--                <NuxtLink to="https://opac-url.com" class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-khula">OPAC</NuxtLink>-->
<!--            </li>-->
<!--            <li class="mr-5">-->
<!--                <NuxtLink to="/about-us"-->
<!--                          :class="[isActive.aboutUs ? ['text-primary', 'font-bold'] : '', 'font-khula']"-->
<!--                          @click="changeActive(2)">ABOUT US-->
<!--                </NuxtLink>-->
<!--            </li>-->
<!--            <li class="mr-5">-->
<!--                <NuxtLink to="/facilities"-->
<!--                          :class="[isActive.facilities ? ['text-primary', 'font-bold'] : '', 'font-khula']"-->
<!--                          @click="changeActive(3)">FACILITIES-->
<!--                </NuxtLink>-->
<!--            </li>-->
<!--        </ul>-->
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
            },
            isMenuOpen: false
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
        },
        openMenu() {

        }
    }
}
</script>

<style scoped>
@media (max-width: 767px) {
    .navicon {
        width: 1.125em;
        height: .125em;
    }

    .navicon::before,
    .navicon::after {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        transition: all .2s ease-out;
        content: '';
        background: #3D4852;
    }

    .navicon::before {
        top: 5px;
    }

    .navicon::after {
        top: -5px;
    }

    .menu-btn:not(:checked) ~ .menu {
        display: none;
    }

    .menu-btn:checked ~ .menu {
        display: block;
    }

    .menu-btn:checked ~ .menu-icon .navicon {
        background: transparent;
    }

    .menu-btn:checked ~ .menu-icon .navicon::before {
        transform: rotate(-45deg);
    }

    .menu-btn:checked ~ .menu-icon .navicon::after {
        transform: rotate(45deg);
    }

    .menu-btn:checked ~ .menu-icon .navicon::before,
    .menu-btn:checked ~ .menu-icon .navicon::after {
        top: 0;
    }
}
</style>