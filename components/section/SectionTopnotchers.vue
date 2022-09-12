<template>
    <UtilVerticalSpacer :height="3" units="rem"/>
    <div class="flex flex-col-reverse md:flex-row px-[2rem] lg:px-[6rem] md:justify-center">
        <div class="inline-flex flex-col justify-center pt-[1rem] lg:pt-0 md:pr-[2rem]">
            <h1 class="text-4xl text-primary font-khula font-bold">
                TOPNOTCHERS' SHELF
            </h1>
            <span class="text-gray-400 font-khula">
                <i class="fa-solid fa-clock"></i> {{ date }}
            </span>
            <p class="font-kulim">
                The Valenzuela City Library is dedicating a special space for our city's Board Exam Topnotchers entitled the Topnotchers' Shelf. It aims to highlight the academic excellence of Valenzuela City residents. This unique space will feature Valenzuelano Topnotchers together with select resources that they used for the exam and other reading materials which inspired them to do well in their studies.
            </p>
        </div>
        <img :src="image" class="img-with-shadow rounded-xl w-full md:w-[14rem]">
    </div>
    <UtilVerticalSpacer :height="3" units="rem"/>
</template>

<script setup>
    const date = new Date().toDateString()
    const image = "/images/people/dummy-1.png"
</script>

<style>
    .img-with-shadow {
        box-shadow: 2px 2px 3px gray;
    }
</style>