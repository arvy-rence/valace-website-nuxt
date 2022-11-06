<template>
    <div class=" max-w-[calc(1500px)] mx-auto px-[2rem]" id="library-programs">
        <div class="pt-[2rem] pb-[6rem]">
            <h2 class="font-bold text-lg sm:text-3xl text-gray-400 font-khula text-center">
                Valenzuela City Library
            </h2>
            <h1 class="font-bold text-4xl sm:text-6xl text-primary text-center font-khula">
                LIBRARY PROGRAMS
            </h1>
        </div>

        <div class="flex flex-col lg:flex-row items-center lg:justify-center pb-[8rem]">
            <div class="w-full lg:w-1/3">
                <h3 class="font-khula text-left text-primary title">
                    PUBLIC LIBRARY PROGRAMS
                </h3>
                <h3 class="font-khula text-left subtitle">
                    AN INTRODUCTION
                </h3>
                <p class="font-kulim text-md text-primary description">
                    The Valenzuela Academic Center for Excellence (ValAce)  offers program in the City Library that aims to help the Valenzuelanos to have easy access to any event and program that they can participate.
                </p>
                <h2 class="text-primary pt-6 hashtags">
                    #AklatanParaSaBawatValenzuelano
                </h2>
                <h2 class="text-primary hashtags">
                    #ValACE #ValenzuelaCityLibrary
                </h2>
                <h2 class="text-primary hashtags">
                    #ValenzuelaCity
                </h2>
            </div>
            <div class="divider">

            </div>
            <div class="">
                <img src="/images/library-programs.png" class="w-[410px] shadow-2xl"/>
            </div>
        </div>

        <div class="flex flex-col lg:flex-row-reverse items-center lg:justify-center pb-[8rem]">
            <div class="w-full lg:w-1/3">
                <h3 class="font-khula text-left text-primary title">
                    TOPNOTCHERS’ SHELF
                </h3>
                <p class="font-kulim text-primary description">
                    The Valenzuela City Library is dedicating a special space for our city's Board Exam Topnotchers entitled the Topnotchers' Shelf. It aims to highlight the academic excellence of Valenzuela City residents. This unique space will feature Valenzuelano Topnotchers together with select resources that they used for the exam and other reading materials which inspired them to do well in their studies.
                </p>
                <h2 class="text-primary pt-6 hashtags">
                    #AklatanParaSaBawatValenzuelano
                </h2>
                <h2 class="text-primary hashtags">
                    #ValACE #ValenzuelaCityLibrary
                </h2>
                <h2 class="text-primary hashtags">
                    #ValenzuelaCity
                </h2>
            </div>
            <div class="divider">

            </div>
            <div class="">
                <img src="/images/topnochers-shelf.png" class="w-[410px] shadow-2xl"/>
            </div>
        </div>

        <div class="flex flex-col lg:flex-row items-center lg:justify-center pb-[8rem]">
            <div class="w-full lg:w-1/3">
                <h3 class="font-khula text-left text-primary title">
                    Gawad Dr. Pio Valenzuela
                </h3>
                <p class="font-kulim text-primary description">
                    The Gawad Dr. Pio Valenzuela is an honorific award given by the local government in honor of the late Dr. Pio Valenzuela (1869 - 1956), to outstanding Valenzuelanos who exhibit excellence and to the honor they bring to the City of Valenzuela.
                </p>
                <h2 class="font-kulim text-primary pt-6 hashtags">
                    #GawadDr.PioValenzuela
                </h2>
                <h2 class="font-kulim text-primary hashtags">
                    #AklatanParaSaBawatValenzuelano
                </h2>
                <h2 class="font-kulim text-primary hashtags">
                    #ValACE
                </h2>
                <h2 class="font-kulim text-primary hashtags">
                    #ValenzuelaCityLibrary
                </h2>
                <h2 class="font-kulim text-primary hashtags">
                    #ValenzuelaCity
                </h2>
            </div>
            <div class="divider">

            </div>
            <div class="">
                <img src="/images/GAWAD.png" class="w-[410px] shadow-2xl"/>
            </div>
        </div>

        <div class="flex flex-col lg:flex-row-reverse items-center lg:justify-center pb-[8rem]">
            <div class="w-full lg:w-1/3">
                <h3 class="font-khula text-primary title text-left">
                    Sister Cities & Visiting Cities’ Corner
                </h3>
                <p class="font-kulim text-primary description">
                    The Sister City, Sister Library Initiative is a program that aims to foster the ties between Valenzuela City and its sister municipality, Baliwag, through public library partnership.
                </p>
                <h2 class="font-kulim text-primary pt-6 hashtags">
                    #SisterCitySisterLibrary
                </h2>
                <h2 class="font-kulim text-primary hashtags">
                    #ValACE #ValenzuelaCityLibrary
                </h2>
                <h2 class="font-kulim text-primary hashtags">
                    #ValenzuelaCity
                </h2>
            </div>
            <div class="divider">

            </div>
            <div class="">
                <img src="/images/sister-cities.png" class="w-[410px] shadow-2xl"/>
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
.divider {
    width:10rem;
    height:auto;
    display:inline-block;
}
.gradient-color-circle {
    background: rgb(0,255,22);
}

.gradient-color-line {
    background: rgb(0,255,22);
}


.gradient-color-circle-2 {
    background: rgb(0,255,22);
    background: linear-gradient(216deg, rgba(0,255,22,1) 0%, rgba(62,62,134,1) 62%); 
}

.gradient-color-line-2 {
    background: rgba(62,62,134,1);
}


.gradient-color-circle-3 {
    background: rgb(62,62,134);
    background: linear-gradient(216deg, rgba(62,62,134,1) 38%, rgba(195,16,16,1) 84%); 
}

.gradient-color-line-3 {
    background: rgba(195,16,16,1);
}


.gradient-color-circle-4 {
    background: rgba(195,16,16,1);
}

.gradient-color-line-4 {
    background: rgb(195,16,16);
    background: linear-gradient(184deg, rgba(195,16,16,1) 51%, rgba(0,0,0,1) 100%); 
}

.hashtags {
    font-size: 20px;
}

.description {
    font-size: 22px;
}

.title {
    font-size: 36px;
    font-weight: bold;
    line-height: 1;
    padding-bottom: 1rem;
}

.subtitle {
    color: #00104A;
    opacity: 0.5;
    font-size: 30px;
    font-weight: bold;
    line-height: 1;
    padding-bottom: 1rem;
}
</style>