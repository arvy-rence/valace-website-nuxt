<template>
    <h2 class="font-bold text-lg sm:text-3xl text-gray-400 font-khula text-center pt-[5rem] px-[1rem]">KNOW MORE ABOUT OUR</h2>
    <h1 class="font-bold text-4xl sm:text-6xl text-primary text-center font-khula px-[1rem]">VALENZUELA CITY LIBRARY</h1>
    <div class="flex flex-col lg:flex-row px-[2rem] lg:px-[6rem] pt-0 sm:pt-[2rem] lg:pt-[3rem] max-w-[calc(1500px)] mx-auto">

        <div class="w-full lg:w-[40rem]">
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade relative" data-bs-ride="carousel">
                <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        class="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active float-left w-full">
                        <img
                            src="/images/valace-building.png"
                            class="block w-full min-h-[16rem] lg:min-h-[27rem] lg:h-[27rem] md:h-[30rem] object-cover "
                            alt="Wild Landscape"
                        />
                    </div>
                    <div class="carousel-item float-left w-full">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                            class="block w-full min-h-[16rem] lg:min-h-[27rem] lg:h-[27rem] md:h-[30rem] object-cover"
                            alt="Camera"
                        />
                    </div>
                    <div class="carousel-item float-left w-full">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
                            class="block w-full min-h-[16rem] lg:min-h-[27rem] lg:h-[27rem] md:h-[30rem] object-cover"
                            alt="Exotic Fruits"
                        />
                    </div>
                </div>
                <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

<!--            <img src="/images/valace-building.png" class="w-full object-contain">-->
        </div>
        <div class="w-full lg:w-3/5 px-2 lg:px-[6rem] mt-[1rem] lg:mt-0 flex flex-col">
            <div class="my-auto">
                <p class="text-md sm:text-xl text-primary font-kulim">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, excepturi quos. Recusandae, est. Natus iste qui accusantium, deleniti atque quidem totam eum. Ipsum mollitia quibusdam modi at quae, a est? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas exercitationem consequuntur asperiores, ipsa distinctio natus magni, iste cum atque unde, inventore ullam cupiditate dolorem id dolor reprehenderit assumenda temporibus eum? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam asperiores quod officiis, commodi corporis ut et pariatur exercitationem inventore. Tempora quasi iusto laudantium aut porro libero, cum explicabo asperiores excepturi!
                </p>
                <button class="bg-primary text-white py-3 px-12 text-xl font-bold mt-[1rem] w-[15rem]">Read More</button>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "SectionLibraryInfo",
    }
</script>

<style>

</style>