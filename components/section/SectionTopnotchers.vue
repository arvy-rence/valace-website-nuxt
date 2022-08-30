<template>
    <UtilVerticalSpacer :height="2" units="rem"/>
    <div class="flex justify-around items-center">
        <div class="w-1/4">
            <h1 class="text-4xl text-primary font-khula font-bold">
                TOPNOTCHERS' SHELF
            </h1>
            <span class="text-gray-400 font-khula">
                <i class="fa-solid fa-clock"></i> {{ date }}
            </span>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis iure repellat incidunt quidem adipisci architecto. Sapiente delectus amet, eaque esse labore ipsum beatae natus vel perferendis, voluptatem vero est distinctio?
            </p>
        </div>
        <img :src="image" width="200" alt=""
            class="img-with-shadow rounded-xl">
    </div>
    <UtilVerticalSpacer :height="2" units="rem"/>
</template>

<script setup>
    const date = new Date().toDateString()
    const image = "../../assets/images/people/dummy-1.png"
    useHead({
        link: [
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
            }
        ]
    })
</script>

<style>
    .img-with-shadow {
        box-shadow: 2px 2px 3px gray;
    }
</style>