<template>
    <nav class="nav flex flex-wrap items-center justify-between px-4 bg-white">
        <div class="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest">
            <NuxtLink to="/">
                <img src="/images/icons/logo.png" width="150" height="600" alt="">
            </NuxtLink>
        </div>

        <input class="menu-btn hidden" type="checkbox" id="menu-btn">
        <label class="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
            <span class="navicon bg-grey-darkest flex items-center relative"></span>
        </label>

        <ul class="menu border-b md:border-none flex justify-end list-reset m-0 w-full md:w-auto">
            <li class="homedropdown border-t md:border-none">
                <NuxtLink to="/"
                          class="block font-khula text-primary font-bold md:inline-block px-8 py-3 no-underline text-grey-darkest hover:text-grey-darker text-2xl"
                          >HOME</NuxtLink>
                <div class="homedropdown-content">
                    <div class="flex flex-col">
                        <button class="dropdown-items">
                            <a @click="scrollToID('news-section', '/')">NEWS & ANNOUNCEMENT</a>
                        </button>
                        <button class="dropdown-items">
                            <a @click="scrollToID('events-section', '/')">EVENTS & ACTIVITIES</a>
                        </button>
                        <button class="dropdown-items">
                            <a @click="scrollToID('shelf-section', '/')">TOPNOTCHERS' SHELF</a>
                        </button>
                        <button class="dropdown-items">
                            <a @click="scrollToID('sistercity-section', '/')">SISTER CITIES & VISITING CORNER</a>
                        </button>
                        <button class="dropdown-items">
                            <a @click="scrollToID('book-section', '/')">BOOK SELECTION</a>
                        </button>
                        <button class="dropdown-items">
                            <a @click="scrollToID('opac-section', '/')">OPAC</a>
                        </button>
                        <button class="dropdown-items">
                            <a @click="scrollToID('partners-section', '/')">PARTNERS AND LINKAGES</a>
                        </button>
                    </div>
                </div>
            </li>
            <li class="border-t md:border-none">
                <a class="block md:inline-block px-8 py-3 no-underline text-grey-darkest hover:text-grey-darker font-khula text-2xl"
                   href="http://192.168.68.103" target="_blank">
                    OPAC
                </a>
            </li>
            <li class="aboutus border-t md:border-none">
                <NuxtLink to="/about-us"
                          class="block font-khula md:inline-block px-8 py-3 no-underline text-grey-darkest hover:text-grey-darker text-2xl"
                          >ABOUT US
                </NuxtLink>
                <div class="aboutusdropdown-content">
                    <div class="flex flex-col">
                        <button class="dropdown-items">Library Programs</button>
                        <button class="dropdown-items">Find Us</button>
                        <button class="dropdown-items">Miscellaneous</button>
                        <button class="dropdown-items">Meet the Team</button>
                    </div>
                </div>
            </li>
            <li class=" border-t md:border-none">
                <NuxtLink to="/facilities"
                          class="block md:inline-block px-8 font-khula py-3 no-underline text-grey-darkest hover:text-grey-darker text-2xl"
                          >FACILITIES
                </NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Header",
    data() {
        
    },
    methods: {
        async scrollToID(id, route) {
            if (route !== this.$route.name) {
               await this.$router.push(route)
            }
            let el = document.getElementById(id);
            el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }
    },
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

.nav {
    position:fixed; /* fixing the position takes it out of html flow - knows
                     nothing about where to locate itself except by browser
                     coordinates */
    left:0;           /* top left corner should start at leftmost spot */
    top:0;            /* top left corner should start at topmost spot */
    width:100vw;      /* take up the full browser width */
    z-index:200;  /* high z index so other content scrolls underneath */
  }


.homedropdown-content, .aboutusdropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    flex-direction: row;
}

.homedropdown:hover .homedropdown-content {
    display: block;
}

.aboutus:hover .aboutusdropdown-content {
    display: block;
}


.dropdown-items {
    width: 180px;
    height: 40px;
    padding-top: 6px;
    background-color: #00104A;
    line-height: 15px;
    color: white;
    margin: 1px 2px 1px 2px;
    opacity: 50%;
    font-family: Khula, sans-serif;
    font-size: 16px;
}

.dropdown-items:hover {
    opacity: 100%;
}
</style>