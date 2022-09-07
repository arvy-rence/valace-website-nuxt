<template>
    <div>
        <div class="pb-[2rem]">
            <h2 class="font-bold text-lg text-gray-400 font-khula text-center">
                Valenzuela City Library
            </h2>
            <h1 class="font-bold text-4xl text-primary text-center font-khula">
                LIBRARY PROGRAMS
            </h1>
        </div>
        <div class="flex flex-row justify-center px-[2rem] lg:px-[6rem]">
            <div class="mx-auto">
                <div class="rounded-full bg-red-100 flex items-center justify-center w-[10rem] h-[10rem]">
                    <img src="/images/icons/arts.png" width="120px" height="120px"/>
                </div>
                <div class="rounded-full bg-gray-500 flex w-[4rem] h-auto">

                </div>
            </div>
<!--            <div class="rounded-full bg-red-500 flex items-center justify-center h-[10rem] w-[10rem]">-->
<!--                <img src="../../assets/images/icons/arts.png" width="120px" height="120px"/>-->
<!--            </div>-->
            <div class="flex flex-col lg:flex-row justify-center lg:w-9/12 mx-auto">
                <div class="w-5/6 lg:w-1/2 lg:pt-[2rem] m-auto lg:m-0">
                    <h3 class="font-bold text-xl text-black-500 font-khula text-left">
                        PUBLIC LIBRARY PROGRAMS
                    </h3>
                    <h3 class="font-bold text-xl text-gray-400 font-khula text-left">
                        AN INTRODUCTION
                    </h3>
                    <p class="font-kulim text-md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ex accumsan, gravida nunc in, elementum augue. Etiam non felis non tortor tempus sodales quis eget mauris. Cras urna ex, congue id tempor id, consectetur non nunc. Maecenas nec purus sit amet turpis hendrerit iaculis. In viverra condimentum tellus, in aliquet magna vulputate ac. Praesent scelerisque rhoncus faucibus. Mauris dignissim dui ut hendrerit elementum. In eu ante quis turpis consectetur porta id eleifend lacus. Ut enim erat, gravida quis sapien sit amet, efficitur auctor libero. Maecenas tristique augue non aliquet tristique.
                    </p>
                </div>
                <img src="../../public/images/dummy.png" class="object-scale w-5/6 lg:object-scale-down m-auto lg:m-0 lg:w-96 lg:ml-[2rem] pt-[1rem] lg:pt-[1rem]"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SectionPrograms"
}
</script>

<style scoped>
</style>