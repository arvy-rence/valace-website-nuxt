<template>
    <div class="flex flex-row min-h-screen">
        <!--        Left Navigation-->
        <!-- <div class="bg-primary bg-opacity-50 w-[10rem] pb-[2rem]">
            <NuxtLink to="/">
                <h3 class="uppercase text-white font-khula text-lg md:text-2xl pt-[3rem] text-center">
                    <i class="fa-solid fa-chevron-left mr-0 md:mr-2 text-2xl"></i>
                    Back
                </h3>
            </NuxtLink>
            <h1 class="pt-[6rem] px-2 text-lg md:text-2xl text-white text-center">PRESS BUTTON</h1>
            <ul>
                <NuxtLink to="/floor-directory">
                    <li class="floor-list">1</li>
                </NuxtLink>
                <NuxtLink to="/floor-directory/floor-2">
                    <li class="floor-list">2</li>
                </NuxtLink>
                <NuxtLink to="/floor-directory/floor-3">
                    <li class="floor-list">3</li>
                </NuxtLink>
                <NuxtLink to="/floor-directory/floor-4">
                    <li class="floor-list">4</li>
                </NuxtLink>
                <NuxtLink to="/floor-directory/floor-5">
                    <li class="floor-list">5</li>
                </NuxtLink>
                <NuxtLink to="/floor-directory/floor-6">
                    <li class="floor-list">6</li>
                </NuxtLink>
            </ul>
        </div> -->
<!--        <FloorDirectoryButtons/>-->
        <!--        Accordion-->
        <div class="px-4 w-screen lg:w-[432px]">
            <div class="w-full">
                <div class="w-[10rem] mx-auto relative">
                    <h3 class="text-4xl text-primary absolute top-[2rem] left-[7.5rem]">RD</h3>
                    <h1 class="text-[12rem] text-shadow text-primary font-khula left-[1.5rem] font-bold absolute">3</h1>
                </div>
            </div>

            <h2 class="text-3xl sm:text-4xl text-primary pt-[12rem] pb-4 text-center">FLOOR DIRECTORY</h2>

            <div class="accordions w-full lg:w-[25rem]">
                <Accordion v-for="item in sections" :title="item.title" :bg-opacity="item.bg_opacity" :bg-color="item.bg_color" class="mb-2">
                    <img :src="item.imageLink" alt="">
                    <p class="text-sm leading-4">{{item.description}}</p>
                </Accordion>
            </div>
        </div>
        <!--        Map-->
        <div class="hidden lg:flex lg:flex-col lg:w-3/5">
            <div class="container-class">
                <img src="/images/floor/THIRD-FLOOR.png" alt="" class="floor-img">
                <Popup v-for="item in sections" :topLoc="item.topLoc" :leftLoc="item.leftLoc" :up="item.up">
                    <img :src="item.imageLink" alt="">
                    <p class="text-white text-xs leading-3">
                        {{item.description}}
                    </p>
                </Popup>
            </div>
            <div>

            </div>
        </div>
    </div>
</template>

<script>
import Popup from "../util/Popup";
import Accordion from "../util/Accordion";
import FloorDirectoryButtons from "../util/FloorDirectoryButtons";

export default {
    name: "SectionFloor3",
    components: {Popup, Accordion, FloorDirectoryButtons},
    data() {
        return {
            sections : [
                {
                    title: "Library Function Space",
                    imageLink: "/images/directory_images/3rd_function.JPG",
                    description: "Library programs and activities are conducted here.",
                    bg_opacity: "bg-opacity-10",
                    topLoc: 66.5,
                    leftLoc: 37.5,
                    up: false
                },
                {
                    title: "Computer Section",
                    imageLink: "/images/directory_images/3rd_computer.JPG",
                    description: "Go to this section if you need to use a computer.",
                    bg_opacity: "bg-opacity-10",
                    topLoc: 38,
                    leftLoc: 43,
                    up: true
                },
                {
                    title: "Special Collection",
                    imageLink: "/images/directory_images/3rd_special.JPG",
                    description: "Resources on Valenzuela’s history. socio-cultural heritage, and personalities may be found here.",
                    bg_opacity: "bg-opacity-10",
                    topLoc: 53,
                    leftLoc: 24.5,
                    up: false
                },
                {
                    title: "Chief Librarian's Office",
                    imageLink: "/images/directory_images/3rd_librarian.JPG",
                    description: "The office of our City Librarian, Ms. Rochelle Silverio.",
                    bg_opacity: "bg-opacity-10",
                    topLoc: 38.5,
                    leftLoc: 24.5,
                    up: true
                },
                {
                    title: "Library Technical Room",
                    imageLink: "/images/directory_images/3rd_IT.JPG",
                    description: "Library resources are processed here.",
                    bg_opacity: "bg-opacity-10",
                    topLoc: 32.3,
                    leftLoc: 64.5,
                    up: true
                },
                {
                    title: "Library I.T Office",
                    imageLink: "/images/directory_images/3rd_IT.JPG",
                    description: "The office which manages the computer area and other technical services.",
                    bg_opacity: "bg-opacity-10",
                    topLoc: 38.5,
                    leftLoc: 60.1,
                    up: true
                },
                {
                    title: "Restroom",
                    imageLink: "/images/directory_images/restroom.JPG",
                    description: "Restroom / Comfort Room for: PWD / Male / Female",
                    bg_opacity: "bg-opacity-10",
                    topLoc: 51.6,
                    leftLoc: 55.2,
                    up: false
                },
                {
                    title: "Fire Exit",
                    imageLink: "/images/directory_images/fireexit.JPG",
                    description: "A designated emergency exit of Valenzuela City Academic Center for Excellence (ValACE).",
                    bg_opacity: "bg-opacity-30",
                    bg_color: "bg-red-600",
                    topLoc: 16,
                    leftLoc: 69,
                    up: true
                },
            ]
        }
    },
}
</script>

<style scoped>
.floor-list {
    border: .3rem solid white;
    border-radius: 9999px;
    width: 3rem;
    height: 3rem;
    text-align: center;
    margin: 2rem auto;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    cursor: pointer;
    background-color: #00104A;
}

@media only screen and (max-width: 768px) {
    .floor-list {
        width: 2.5rem;
        height: 2.5rem;
        font-size: 1.22rem;
        border: .25rem solid white;
        margin: 1.5rem auto;
    }
}

.text-shadow {
    text-shadow: 6px 6px rgb(0 16 74 / 50%);
}

.container-class {
    position: relative;
}

.floor-img {
    width: 80%;
    height: auto;
}
</style>