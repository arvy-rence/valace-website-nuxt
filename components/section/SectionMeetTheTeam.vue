<template>
    <div class="flex flex-col justify-center items-center bg-[url(/images/team-bg.png)] py-[3rem] bg-cover">
        <div class="max-w-[calc(1500px)] mx-auto">
            <h1 class="font-bold text-4xl text-center">MEET THE TEAM</h1>
            <UtilVerticalSpacer :height="2" units="rem"/>
            <!--        <div class="gap-5 lg:columns-4 xs:columns-1 sm:columns-3">-->
            <!--            <div v-for="member in teamInfoArray">-->
            <!--                <CardTeamInfo-->
            <!--                    :name="member.name"-->
            <!--                    :position="member.position"-->
            <!--                    :imageURL="member.imageURL"-->
            <!--                />-->
            <!--            </div>-->
            <!--        </div>-->
            <!--            <div class="flex justify-center flex-wrap px-[2rem] lg:px-[10rem]">-->
            <!--                <div v-for="member in teamInfoArray">-->
            <!--                    <CardTeamInfo-->
            <!--                        :name="member.name"-->
            <!--                        :position="member.position"-->
            <!--                        :imageURL="member.imageURL"-->
            <!--                    />-->
            <!--                </div>-->
            <!--            </div>-->
            <div class="flex flex-col justify-center items-center">
                <div>
                    <CardTeamInfo
                        name="Rochelle Silverio"
                        position=""
                        imageURL="/images/team/1.jpg"
                    />
                </div>
                <div class="flex flex-col lg:flex-row">
                    <CardTeamInfo
                        name="Maribel Ladera"
                        position=""
                        imageURL="/images/team/4.jpg"
                    />
                    <CardTeamInfo
                        name="Ann Patricia Badique"
                        position=""
                        imageURL="/images/team/3.jpg"
                    />
                    <CardTeamInfo
                        name="Donnalyn Estrada"
                        position=""
                        imageURL="/images/team/5.jpg"
                    />
                </div>
                <div class="flex flex-col lg:flex-row">
                    <CardTeamInfo
                        name="April Beranque"
                        position=""
                        imageURL="/images/team/2.jpg"
                    />
                    <CardTeamInfo
                        name="James Dean San Miguel"
                        position=""
                        imageURL="/images/team/6.jpg"
                    />
                    <CardTeamInfo
                        name="Joyce Ann Artacho"
                        position=""
                        imageURL="/images/team/7.jpg"
                    />
                    <CardTeamInfo
                        name="Roselle Luna"
                        position=""
                        imageURL="/images/team/8.jpg"
                    />
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
            teamInfoArray: []
        }
    },
    created() {
        this.teamInfoArray = teamInfo;
    }
}
</script>

<style scoped>

</style>