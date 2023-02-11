<template>
    <div class="bg-gray-100" id="opac-section">
<!--        <div class="flex flex-col lg:flex-row px-[1rem] lg:px-[6rem] py-[4rem] w-full max-w-[calc(1500px)] mx-auto">-->
<!--            <div class="flex flex-col w-full lg:w-1/2 pl-[1rem] pr-[4rem] mt-[1rem] lg:mt-[2rem] items-end">-->
<!--                <h1 class="text-primary font-khula text-4xl text-right text-6xl leading-[4.5rem]">-->
<!--                    Integrated <span class="font-bold">OPAC </span><br>Library System-->
<!--                </h1>-->
<!--                <p class="text-primary font-khula text-right w-5/6 text-2xl leading-[2.2rem]">-->
<!--                    The Valenzuela City Library online access tool and collection resource guide that offers-->
<!--                    bibliographic data of books in a library.-->
<!--                </p>-->
<!--                <NuxtLink to="http://192.168.68.103">-->
<!--                    <h2 class="underline text-xl font-semibold text-gray-400 pt-1 hover:text-primary duration-500">-->
<!--                        Visit now-->
<!--                    </h2>-->
<!--                </NuxtLink>-->
<!--            </div>-->
<!--            <div class="w-full lg:w-5/12">-->
<!--                <video class="w-full" controls>-->
<!--                    <source src="/videos/opac-final.mp4" type="video/mp4">-->
<!--                </video>-->
<!--            </div>-->
<!--        </div>-->

        <div class="flex flex-col-reverse lg:flex-row px-[10%] lg:px-[5%] py-[4rem] w-full max-w-[calc(1500px)] mx-auto">
            <div class="flex flex-col w-full lg:w-1/2 md:items-end">
                <h1 class="text-primary font-khula text-left md:text-right text-4xl md:text-6xl md:leading-[4.5rem] pt-[1rem] lg:pt-0">
                    Integrated <span class="font-bold">OPAC </span><br>Library System
                </h1>
                <p class="text-primary font-khula text-left md:text-right lg:w-5/6 text-lg md:text-2xl md:leading-[2.2rem]">
                    The Valenzuela City Library online access tool and collection resource guide that offers
                    bibliographic data of books in a library.
                </p>
                <NuxtLink to="http://192.168.68.103">
                    <h2 class="underline text-xl font-semibold text-gray-400 pt-1 hover:text-primary duration-500">
                        Visit now
                    </h2>
                </NuxtLink>
            </div>
            <div class="hidden lg:block w-[5rem] bg-red-500">

            </div>
            <div class="w-full lg:w-5/12">
                <video class="w-full" controls>
                    <source src="/videos/opac-final.mp4" type="video/mp4">
                </video>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "SectionKOHA"
}
</script>

<style>

</style>