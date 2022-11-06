<template>
    <div>
        <div>
            <h2 class="font-bold uppercase text-gray-400 opacity-50 text-lg sm:text-3xl font-khula text-center opacity-50">
                Valenzuela City Library
            </h2>
            <h1 class="font-bold text-4xl sm:text-6xl text-primary text-center font-khula">
                FLOOR DIRECTORY
            </h1>
        </div>
        <div class="bg-primary h-[4rem] flex justify-center items-center">
            <div class="bg-white w-1/2 h-[3rem] flex justify-center items-center">
                <h2 class="font-bold uppercase text-gray-800 text-lg sm:text-3xl font-khula text-center opacity-50 pt-2">
                    FIRST FLOOR
                </h2>
            </div>
        </div>
        <div class="flex flex-row">
<!--            <div class="flex flex-col">-->
<!--                <ul class="">-->
<!--                    <li class="bg-primary rounded-full w-6">1</li>-->
<!--                    <li>2</li>-->
<!--                    <li>3</li>-->
<!--                    <li>4</li>-->
<!--                    <li>5</li>-->
<!--                </ul>-->
<!--            </div>-->
            <div class="bg-primary h-screen w-[10rem]">
                <ul class="text-2xl text-white font-bold">
                    <li class="num-list">1</li>
                    <li class="num-list">2</li>
                    <li class="num-list">3</li>
                    <li class="num-list">4</li>
                    <li class="num-list">5</li>
                </ul>
            </div>
            <div>
                <ul class="text-lg font-kulim text-primary pt-[2rem]">
                    <li class="list-padding">Lobby</li>
                    <li class="list-padding">Arts in the City</li>
                    <li class="list-padding">General Reading Area</li>
                    <li class="list-padding">Children's Area</li>
                    <li class="list-padding">Restroom</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SectionFloorDirectory"
}
</script>

<style scoped>
.list-padding {
    padding-bottom: 1rem;
    padding-left: 3rem;
}

.num-list {
    border: .3rem solid white;
    border-radius: 9999px;

    width: 2.6rem;
    padding-left: 9px;
    margin-left: 2rem;
    margin-bottom: 1rem;
}
</style>