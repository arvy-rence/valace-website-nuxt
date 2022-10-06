<template>
    <UtilVerticalSpacer :height="3" units="rem"/>
    <div class="flex flex-col-reverse md:flex-row px-[2rem] lg:px-[12rem] max-w-[calc(1500px)] mx-auto py-[7rem] w-full">
        <div class="flex flex-col pt-[1rem] lg:pt-0 md:pr-[2rem] w-full md:w-3/5">
            <h1 class="text-4xl text-primary font-khula font-bold md:text-6xl lg:text-6xl">
                TOPNOTCHERS'
            </h1>
            <h1 class="text-4xl text-primary font-khula font-bold md:text-6xl lg:text-6xl">
                SHELF
            </h1>
            <span class="text-primary font-khula">
                <i class="fa-solid fa-clock"></i> {{ date }}
            </span>
            <p class="font-kulim text-primary w-full md:w-[30rem] lg:w-full lg:text-2xl w-full">
                The Valenzuela City Library is dedicating a special space for our city's Board Exam Topnotchers entitled the Topnotchers' Shelf. It aims to highlight the academic excellence of Valenzuela City residents. This unique space will feature Valenzuelano Topnotchers together with select resources that they used for the exam and other reading materials which inspired them to do well in their studies.
            </p>
        </div>
        <div class="flex flex-col items-end w-full md:w-2/5">
            <img :src="image" class="img-with-shadow w-full md:w-[16rem]">
            <h1 class="font-kulim text-primary w-full sm:w-[40rem] text-right text-2xl">Engineer Jesher Garde</h1>
            <h2 class="font-kulim text-primary w-full sm:w-[40rem] text-right text-md">Top 2 / Aeronautical Engineer Licensure Examination</h2>
        </div>
    </div>
    <UtilVerticalSpacer :height="3" units="rem"/>
</template>

<script>
export default {
    name: "SectionTopnotchers",
    data() {
        return {
            topnotchers: [
                {
                    name: "Engineer Jesher Garde",
                    title: "Top 2 / Aeronautical Engineer Licensure Examination"
                },
                {
                    name: "Dr. Loubomir Cyrus E. Antonio",
                    title: ""
                },
                {
                    name: "Sir Nicko Tumala",
                    title: ""
                    
                }
            ]
        }
    }
}   
</script>

<style>
    .img-with-shadow {
        box-shadow: 2px 2px 3px gray;
    }
</style>