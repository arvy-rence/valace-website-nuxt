<template>
    <div class="bg-[url(../../assets/images/book-bg.png)] flex-col bg-img justify-center align-center">
        <UtilVerticalSpacer :height="2" units="rem"/>
        <div>
            <h2 class="font-bold text-lg text-gray-400 font-khula text-center">Valenzuela City Library</h2>
            <h1 class="font-bold text-4xl text-primary text-center font-khula">SISTER CITIES<br>
                VISITING CITIES' CORNER
            </h1>
        </div>

        <div class="flex justify-center">
            <!-- card component -->
            <div class="w-[22rem] bg-gray">
                <div class="bg-gray-100 rounded-xl img-with-shadow my-[.7rem] px-[.5rem] py-16">
                    <figure class="flex justify-center items-center py-[.5rem]">
                        <img src="../../assets/images/icons/logo.png" width=75/>
                    </figure>
                    <figure class="flex justify-center items-center">
                        <img src="../../assets/images/koha.png" width="300"/>
                    </figure>
                    <h1 class="font-bold text-md text-black-100 py-[.3rem] text-center font-khula">Valenzuela City Library</h1>
                    <div class="text-[12px] text-black-100 text-center font-khula">
                        <i class="fa-solid fa-location-pin"></i>
                        <span>
                            123# ASDASD ST. MALINTA VALENZUELA CITY
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex justify-center py-[2rem]">
            <UtilPagination/>
        </div>
        <div class="flex justify-center items-center">
            <button
                @click="onClick"
                class="bg-primary px-12 py-3 rounded-md text-white font-bold font-khula text-lg"
            >
                View All Sister Cities
            </button>
        </div>
        <UtilVerticalSpacer :height="2" units="rem"/>
    </div>
</template>

<script>
import UtilPagination from "../util/UtilPagination";
export default {
    name: "SectionSisterCities",
    components: {UtilPagination},
    methods: {
        onClick() {
            alert("Hello")
        }
    }
}
</script>

<style>
    .bg-img {
        background-size: cover;
    }

    .img-with-shadow {
        box-shadow: 2px 2px 10px gray;
    }
</style>