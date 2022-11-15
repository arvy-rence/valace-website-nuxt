<template>
    <div class="flex flex-row">
        <!--        Left Navigation-->
        <div class="bg-primary bg-opacity-50 w-[10rem] pb-[2rem]">
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
        </div>
        <!--        Accordion-->
        <div class="px-4 w-screen lg:w-[432px]">
            <div class="w-full">
                <div class="w-[10rem] mx-auto relative">
                    <h3 class="text-4xl text-primary absolute top-[2rem] left-[7.5rem]">ND</h3>
                    <h1 class="text-[12rem] text-shadow text-primary font-khula left-[1.5rem] font-bold absolute">2</h1>
                </div>
            </div>

            <h2 class="text-3xl sm:text-4xl text-primary pt-[12rem] pb-4 text-center">FLOOR DIRECTORY</h2>

            <div class="accordions w-full lg:w-[25rem]">
                <Accordion title="Quiet Study Hall" bg-opacity="bg-opacity-10" class="mb-2">
                    <img src="/images/bg.png" alt="">
                    <p class="text-sm leading-4">A space that welcome you near the entrance of Valenzuela Academic Center for Excellence (ValACE) building.</p>
                </Accordion>

                <Accordion title="Bucheon (Special Collection)" bg-opacity="bg-opacity-10" class="mb-2">
                    12311232
                </Accordion>

                <Accordion title="Restroom" bg-opacity="bg-opacity-10" class="mb-2">
                    akhkkjad
                </Accordion>

                <Accordion title="Fire Exit" bg-opacity="bg-opacity-30" bg-color="bg-red-600" class="mb-2">
                    aiyuuuuuuuuyad
                </Accordion>
            </div>
        </div>
        <!--        Map-->
        <div class="hidden lg:flex lg:flex-col lg:w-3/5">
            <div class="container-class">
                <img src="/images/floor/SECOND-FLOOR.png" alt="" class="floor-img">
<!--                <Popup :topLoc="37" :leftLoc="54.2">-->
<!--                    <img src="/images/bg.png" alt="">-->
<!--                    <p class="text-white text-xs leading-3">-->
<!--                        A space that welcome you near the entrance of Valenzuela-->
<!--                        Academic Center for Excellence (ValACE) building.-->
<!--                    </p>-->
<!--                </Popup>-->
                <button class="btn btn-study"></button>
                <button class="btn btn-bucheon"></button>
                <button class="btn btn-restroom"></button>
                <button class="btn btn-fire"></button>
            </div>
            <div>

            </div>
        </div>
    </div>
</template>

<script>
import Accordion from "../util/Accordion";
import Popup from "../util/Popup";

export default {
    name: "SectionFloor2",
    components: {Popup, Accordion},
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

.btn {
    position: absolute;

    width: 1.5rem;
    height: 1.5rem;
    border-radius: 9999px;
    background-color: white;
    border: .2rem solid #00104A;
    cursor: pointer;
    z-index: 1;
}

.btn-study {
    top: 39%;
    left: 43%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}

.btn-bucheon {
    top: 66%;
    left: 28.2%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}

.btn-restroom {
    top: 24.2%;
    left: 42.5%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}



.btn-fire {
    top: 16%;
    left: 69%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}
</style>