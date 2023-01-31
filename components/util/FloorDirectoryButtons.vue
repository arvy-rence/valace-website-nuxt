<template>
    <div class="bg-primary bg-opacity-50 w-[10rem] pb-[2rem]">
        <NuxtLink to="/facilities">
            <h3 class="uppercase text-white font-khula text-lg md:text-2xl pt-[3rem] text-center">
                <i class="fa-solid fa-chevron-left mr-0 md:mr-2 text-2xl"></i>
                Back
            </h3>
        </NuxtLink>
        <h1 class="pt-[6rem] px-2 text-lg md:text-2xl text-white text-center">PRESS BUTTON</h1>
        <ul>
            <NuxtLink id="floor-1" to="/floor-directory" @click="callAHelp">
                <li class="floor-list">1</li>
            </NuxtLink>
            <NuxtLink id="floor-2" to="/floor-directory/floor-2" @click="callAHelp">
                <li class="floor-list">2</li>
            </NuxtLink>
            <NuxtLink id="floor-3" to="/floor-directory/floor-3" @click="callAHelp">
                <li class="floor-list">3</li>
            </NuxtLink>
            <NuxtLink id="floor-4" to="/floor-directory/floor-4" @click="callAHelp">
                <li class="floor-list">4</li>
            </NuxtLink>
            <NuxtLink id="floor-5" to="/floor-directory/floor-5" @click="callAHelp">
                <li class="floor-list">5</li>
            </NuxtLink>
            <NuxtLink id="floor-6" to="/floor-directory/floor-6" @click="callAHelp">
                <li class="floor-list">6</li>
            </NuxtLink>
        </ul>
    </div>
</template>

<script>

export default {
    name: "FloorDirectoryButtons",
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
        movement: true;
        
    }
    
}

</script>

<style>
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
    width: 90%;
    height: auto;
}


@keyframes outro-up {
    from {top: 0vh;}
    to {top: -100vh;}
}

.animout {
    animation: outro-up .5s;
    position: relative;
}

@keyframes outro-down {
    from {top: 0vh;}
    to {top: 100vh;}
}

.animout {
    animation: outro-down .5s;
    position: relative;
}
</style>