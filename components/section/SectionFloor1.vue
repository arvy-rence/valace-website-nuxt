<template>
    <div class="flex flex-row h-screen lg:h-auto animin" :class="[movement === 'up' ? ['animout-up'] :  movement === 'down' ? ['animout-down'] : ['']]">
<!--        Left Navigation-->
<div class="bg-primary bg-opacity-50 w-[10rem] pb-[2rem]">
        <NuxtLink to="/facilities">
            <h3 class="uppercase text-white font-khula text-lg md:text-2xl pt-[3rem] text-center">
                <i class="fa-solid fa-chevron-left mr-0 md:mr-2 text-2xl"></i>
                Back
            </h3>
        </NuxtLink>
        <h1 class="pt-[6rem] px-2 text-lg md:text-2xl text-white text-center">PRESS BUTTON</h1>
        <ul>
            <!-- <NuxtLink id="floor-1" to="/floor-directory" @click="callAHelp"> -->
                <li class="floor-list">1</li>
            <!-- </NuxtLink> -->
            <div @click="callAHelp(2)">
                <!-- <NuxtLink id="floor-2" to="/floor-directory/floor-2"> -->
                    <li class="floor-list">2</li>
                <!-- </NuxtLink> -->
            </div>
            <div @click="callAHelp(3)">
                <!-- <NuxtLink id="floor-3" to="/floor-directory/floor-3"> -->
                    <li class="floor-list">3</li>
                <!-- </NuxtLink> -->
            </div>
            <div @click="callAHelp(4)">
                <!-- <NuxtLink id="floor-4" to="/floor-directory/floor-4"> -->
                    <li class="floor-list">4</li>
                <!-- </NuxtLink> -->
            </div>
            <div @click="callAHelp(5)">
                <!-- <NuxtLink id="floor-5" to="/floor-directory/floor-5"> -->
                    <li class="floor-list">5</li>
                <!-- </NuxtLink> -->
            </div>
            <div @click="callAHelp(6)">
                <!-- <NuxtLink id="floor-6" to="/floor-directory/floor-6"> -->
                    <li class="floor-list">6</li>
                <!-- </NuxtLink> -->
            </div>
        </ul>
    </div>
        <!-- <FloorDirectoryButtons/> -->
<!--        Accordion-->
        <div class="px-4 w-screen lg:w-[432px]">
            <div class="w-full">
                <div class="w-[10rem] mx-auto relative">
                    <h3 class="text-4xl text-primary absolute top-[2rem] left-[7.5rem]">ST</h3>
                    <h1 class="text-[12rem] text-shadow text-primary font-khula left-[1.5rem] font-bold absolute">1</h1>
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
                <img src="/images/floor/GROUND-FLOOR.png" alt="" class="floor-img">

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
import Accordion from "../util/Accordion";
import Popup from "../util/Popup";
import FloorDirectoryButtons from "../util/FloorDirectoryButtons";

export default {
    name: "SectionFloor1",
    components: {Popup, Accordion, FloorDirectoryButtons},
    methods: {
        callAHelp(floor) {
            if (floor > 1) {
                this.movement = "up";
                setTimeout(() => {
                    this.$router.push(`/floor-directory/floor-${floor}`)
                }, 250)
            } else {
                this.movement = "down";
            }
        }
    },
    data() {
        
        return {
            movement: "",
            sections : [
                {
                    title: "Lobby",
                    imageLink: "/images/directory_images/1st_lobby.JPG",
                    description: "Welcome to the Valenzuela City Library!",
                    bg_opacity: "bg-opacity-10",
                    topLoc: 61,
                    leftLoc: 50.1,
                    up: false
                },
                {
                    title: "Arts and Education Office",
                    imageLink: "/images/directory_images/1st_arts_educ_office.JPG",
                    description: "The office which manages the Arts in the City workshops and related programs.",
                    bg_opacity: "bg-opacity-10",
                    topLoc: 59.5,
                    leftLoc: 25,
                    up: false
                },
                {
                    title: "General Reading Area",
                    imageLink: "/images/directory_images/1st_general.JPG",
                    description: "Read books, do your research, and connect with your community here.",
                    bg_opacity: "bg-opacity-10",
                    topLoc: 39,
                    leftLoc: 49,
                    up: false
                },
                {
                    title: "Senior's Corner",
                    imageLink: "/images/directory_images/1st_senior.JPG",
                    description: "A space specially dedicated for our elderly.",
                    bg_opacity: "bg-opacity-10",
                    topLoc: 49,
                    leftLoc: 25,
                    up: false
                },
                {
                    title: "Children's Area",
                    imageLink: "/images/directory_images/1st_childrens.JPG",
                    description: "An area for the young to read, explore, and allow their imagination to come alive.",
                    bg_opacity: "bg-opacity-10",
                    topLoc: 34,
                    leftLoc: 69,
                    up: true
                },
                {
                    title: "Restroom",
                    imageLink: "/images/directory_images/restroom.JPG",
                    description: "Restroom / Comfort Room for: PWD / Male / Female",
                    bg_opacity: "bg-opacity-10",
                    topLoc: 23.5,
                    leftLoc: 46,
                    up: true
                },
                {
                    title: "Fire Exit",
                    imageLink: "/images/directory_images/fireexit.JPG",
                    description: "A designated emergency exit of Valenzuela City Academic Center for Excellence (ValACE).",
                    bg_opacity: "bg-opacity-30",
                    bg_color: "bg-red-600",
                    topLoc: 17,
                    leftLoc: 79,
                    up: true
                },
            ]
        }
    }
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

@keyframes fade {
    from {opacity: 1;}
    to {opacity: 0;}
}

@keyframes outro-up {
    from {top: 0vh;}
    to {top: -100vh;}
}

.animout-up {
    animation: outro-up .5s;
    position: relative;
    
}

@keyframes outro-down {
    from {top: 0vh;}
    to {top: 100vh;}
}

.animout-down {
    animation: outro-down .5s, fade .05s .3s;
    position: relative;
    
}
</style>