<template>
    <div class="flex flex-col justify-center items-center bg-[url(/images/book-bg.png)] py-[3rem] bg-cover">
        <h1 class="font-bold text-4xl">MEET THE TEAM</h1>
        <UtilVerticalSpacer :height="2" units="rem"/>
        <div class="gap-5 lg:columns-4 xs:columns-1 sm:columns-3">
            <div v-for="member in teamInfoArray">
                <CardTeamInfo
                    :name="member.name"
                    :position="member.position"
                    :imageURL="member.imageURL"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import { teamInfo } from "../../data/team";
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