<template>
    <nav class="flex justify-between items-center px-16 h-12">
        <NuxtLink to="/">
            <figure>
                <img src="/images/icons/logo.png" width="100" height="60" alt="">
            </figure>
        </NuxtLink>
        <!-- for small screens -->
        <div class="lg:hidden space-y-2
            border border-2 border-gray-300 rounded-md
            py-1 px-1
            group hover:bg-primary cursor-pointer" @click="openMenu">
            <div class="w-8 h-0.5 bg-primary group-hover:bg-white"></div>
            <div class="w-8 h-0.5 bg-primary group-hover:bg-white"></div>
            <div class="w-8 h-0.5 bg-primary group-hover:bg-white"></div>
        </div>

        <!-- for large screens -->
        <ul class="hidden lg:flex">
            <li class="mr-5">
                <NuxtLink to="/"
                          :class="[isActive.home ? ['text-primary', 'font-bold'] : '', 'font-khula']"
                          @click="changeActive(1)"
                >
                    HOME
                </NuxtLink>
            </li>
            <li class="border-t md:border-none">
                <NuxtLink to="https://opac-url.com"
                          class="block md:inline-block px-4 py-3 no-underline text-grey-darkest hover:text-grey-darker font-khula">
                    OPAC
                </NuxtLink>
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