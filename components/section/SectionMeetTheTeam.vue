<template>
    <div class="flex flex-col justify-center items-center bg-[url(/images/team-bg.png)] py-[3rem] bg-cover" id="meet-the-team">
        <div class="max-w-[calc(1500px)] mx-auto">
            <h1 class="font-bold text-4xl text-center text-primary">MEET THE TEAM</h1>
            <h1 class="font-bold text-4xl sm:text-6xl text-primary text-center font-khula px-[1rem] pt-4">VALENZUELA CITY LIBRARY TEAM</h1>
            <UtilVerticalSpacer :height="2" units="rem"/>
<!-- images/team/group/1.jpg -->
            <div class="w-full pb-[2rem] px-[10%] lg:px-0">
                <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
                    <div class="carousel-inner relative w-full overflow-hidden">
                        <div class="carousel-item active relative float-left w-full">
                        <img
                            src="images/team/group/1.jpg"
                            class="block w-full"
                            alt="Wild Landscape"
                        />
                        </div>
                        <div class="carousel-item relative float-left w-full">
                        <img
                            src="images/team/group/2.jpg"
                            class="block w-full"
                            alt="Camera"
                        />
                        </div>
                        <div class="carousel-item relative float-left w-full">
                        <img
                            src="images/team/group/3.jpg"
                            class="block w-full"
                            alt="Exotic Fruits"
                        />
                        </div>
                    </div>
                    <button
                        class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                    >
                        <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                        class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                    >
                        <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
            </div>

            <div class="flex flex-col justify-center items-center">
                <div>
                    <CardTeamInfo
                        name="Rochelle Silverio"
                        position=""
                        imageURL="/images/team/Ma_am Chelle.jpg"
                    />
                </div>
                <div class="flex flex-col lg:flex-row">
                    <CardTeamInfo
                        name="Maribel Ladera"
                        position=""
                        imageURL="/images/team/Ma_am Belle.jpg"
                    />
                    <CardTeamInfo
                        name="Anne Patricia Badique"
                        position=""
                        imageURL="/images/team/Ma_am Patty.jpg"
                    />
                    <CardTeamInfo
                        name="Donnalyn Estrada"
                        position=""
                        imageURL="/images/team/Ma_am Donna.jpg"
                    />
                </div>
                <div class="flex flex-col lg:flex-row">
                    <CardTeamInfo
                        name="April Beranque"
                        position=""
                        imageURL="/images/team/Ma_am April.jpg"
                    />
                    <CardTeamInfo
                        name="James Dean San Miguel"
                        position=""
                        imageURL="/images/team/Sir Dean.jpg"
                    />
                    <CardTeamInfo
                        name="Joyce Ann Artacho"
                        position=""
                        imageURL="/images/team/Ma_am Joyce.png"
                    />
                    <CardTeamInfo
                        name="Roselle Luna"
                        position=""
                        imageURL="/images/team/Ma_am Roselle.jpg"
                    />
                </div>

                <div class="w-full lg:w-full">
                    <h1 class="text-sm">
                        <button
                            class="relative flex items-center justify-center w-2/3 py-4 px-5 text-2xl mx-auto"
                            :class="[accordionToggle ?
                                    ['border-2', 'border-black', 'text-primary'] :
                                    ['bg-primary', 'text-white']
                                ]"
                            @click="setAccordionToggle">
                            <h1 class="font-khula text-center text-lg sm:text-2xl pt-3 font-bold">VIEW OTHER TEAM MEMBERS</h1>

                            <span :class="[accordionToggle ? ['rotate-0', 'duration-300'] : ['rotate-90', 'duration-300']]" class="absolute right-[1rem]">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </span>

                        </button>
                    </h1>
                    <div :class="[accordionToggle ? [''] : ['custom-accordion-animation2']]" class="custom-default">
                        <div class="accordion-body pt-6">
                            
                            <div class="flex flex-col justify-center items-center">
                                <div class="flex flex-col lg:flex-row">
                                    <CardTeamInfo
                                        name="Kent Russel Cataag"
                                        position=""
                                        imageURL="/images/team/Sir Kent.jpg"
                                    />
                                    <CardTeamInfo
                                        name="John Frederick Cruz"
                                        position=""
                                        imageURL="/images/team/Sir fred.jpg"
                                    />
                                    <CardTeamInfo
                                        name="Ivan Josef De Guia"
                                        position=""
                                        imageURL="/images/team/Sir Ivan.jpg"
                                    />
                                </div>
                                <div class="flex flex-col lg:flex-row">
                                    <CardTeamInfo
                                        name="Roxanne Del Rosario"
                                        position=""
                                        imageURL="/images/team/Ma_am Roxy.jpg"
                                    />
                                    <CardTeamInfo
                                        name="Cesar Igcalinos"
                                        position=""
                                        imageURL="/images/team/Sir Cesar.jpg"
                                    />
                                    <CardTeamInfo
                                        name="Carla Mae Marmol"
                                        position=""
                                        imageURL="/images/team/Ma_am carla.jpg"
                                    />
                                </div>
                                <div class="flex flex-col lg:flex-row">
                                    <CardTeamInfo
                                        name="Raymond Masula"
                                        position=""
                                        imageURL="/images/team/Sir Raymond.jpg"
                                    />
                                    <CardTeamInfo
                                        name="Maria Angelica Nierva"
                                        position=""
                                        imageURL="/images/team/Ma_am Lyca.jpg"
                                    />
                                    <CardTeamInfo
                                        name="Genelyn Ojeda"
                                        position=""
                                        imageURL="/images/team/Ma_am Gen.jpg"
                                    />
                                </div>
                                <div class="flex flex-col lg:flex-row">
                                    <CardTeamInfo
                                        name="Al Clinton Orendain"
                                        position=""
                                        imageURL="/images/team/Sir Al.jpg"
                                    />
                                    <CardTeamInfo
                                        name="Jeremie Pimentel"
                                        position=""
                                        imageURL="/images/team/Sir Jeremie.jpg"
                                    />
                                    <CardTeamInfo
                                        name="Wildred Sevilla"
                                        position=""
                                        imageURL="/images/team/Sir Wildred.jpg"
                                    />
                                    <CardTeamInfo
                                        name="Michelle Tayag"
                                        position=""
                                        imageURL="/images/team/Ma_am Michelle.jpg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {teamInfo} from "../../data/team";
import CardTeamInfo from "../card/CardTeamInfo";

export default {
    name: "SectionMeetTheTeam",
    components: {CardTeamInfo},
    data() {
        return {
            teamInfoArray: [],
            accordionToggle: Boolean,
        }
    },
    created() {
        this.teamInfoArray = teamInfo;
        this.accordionToggle(false);
    },
    methods: {
        setAccordionToggle() {
            this.accordionToggle = !this.accordionToggle
        },
    }
}
</script>

<style scoped>
.custom-default {
    overflow: hidden;
    max-height: 0px;
    -webkit-transition: max-height 0.3s ease-in-out, box-shadow 0.6s linear;
    -moz-transition: max-height 0.3s ease-in-out, box-shadow 0.6s linear;
    -o-transition: max-height 0.3s ease-in-out, box-shadow 0.6s linear;
    -ms-transition: max-height 0.3s ease-in-out, box-shadow 0.6s linear;
    transition: max-height 0.3s ease-in-out, box-shadow 0.6s linear;
}

.custom-accordion-animation2 {
    max-height: 5000px;
    -webkit-transition: max-height 0.5s ease-in-out, box-shadow 0.1s linear;
    -moz-transition: max-height 0.5s ease-in-out, box-shadow 0.1s linear;
    -o-transition: max-height 0.5s ease-in-out, box-shadow 0.1s linear;
    -ms-transition: max-height 0.5s ease-in-out, box-shadow 0.1s linear;
    transition: max-height 0.5s ease-in-out, box-shadow 0.1s linear;
}
</style>