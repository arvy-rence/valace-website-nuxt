<template>
    <div :class="['max-w-[12rem]', 'bg-white', 'shadow-md', 'mb-5']">
        <div class="relative items-center">
            <img class="rounded-t-lg" :src="imageURL"/>
            <h1 class="pl-2 absolute font-bold text-black-100 bottom-7">{{ name }}</h1>
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
            default: "../../assets/images/people/dummy-1.png"
        },
        className: String
    }
}
</script>

<style>

</style>