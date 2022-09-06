<template>
    <UtilVerticalSpacer :height="3" units="rem"/>
    <div class="grid grid-cols-8 gap-4">
        <div class="col-start-3 col-span-2 inline-flex flex-col justify-center">
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
            class="img-with-shadow rounded-xl col-start-6">
    </div>
    <UtilVerticalSpacer :height="3" units="rem"/>
</template>

<script setup>
    const date = new Date().toDateString()
    const image = "../../assets/images/people/dummy-1.png"
</script>

<style>
    .img-with-shadow {
        box-shadow: 2px 2px 3px gray;
    }
</style>