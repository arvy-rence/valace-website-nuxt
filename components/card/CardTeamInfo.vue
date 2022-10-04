<template>
    <div :class="['max-w-[12rem]', 'bg-white', 'shadow-md', 'mb-5', 'overflow-hidden', 'mx-[1.5rem]', 'min-w-[calc(192px)]', 'min-h-[calc(288px)]', 'hover:opacity-100', 'lg:opacity-70', 'opacity-100', 'transition-opacity', 'duration-[800ms]' ]">
        <div class="relative items-center">
            <img class="" :src="imageURL"/>

<!--            <div class="absolute bottom-0 w-full bg-white opacity-50 h-[2rem]">-->
<!--            </div>-->
            <img src="public/images/icons/logo.png" alt="" class="absolute top-0 right-0 w-1/3">
            <img src="public/images/team/design.png" alt="" class="absolute bottom-0 w-full">
            <h1 class="pl-2 absolute font-kulim opacity-70 font-bold text-white bottom-0 text-center w-full">{{ name }}</h1>
            <h2 class="pl-3 absolute font-normal text-black-100 bottom-3">{{ position }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardTeamInfo",
    props: {
        name: {
            required: true,
            type: String
        },
        position: {
            required: true,
            type: String
        },
        imageURL: {
            required: true,
            type: String,
            default: "/images/people/dummy-1.png"
        },
        className: String
    }
}
</script>

<style>

</style>