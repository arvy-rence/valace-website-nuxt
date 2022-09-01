<template>
    <UtilVerticalSpacer :height="2" units="rem"/>
    <div class="flex flex-col justify-center items-center bg-[url(../../assets/images/book-bg.png)] py-[3rem]">
        <h1 class="font-bold text-4xl">MEET THE TEAM</h1>
        <UtilVerticalSpacer :height="2" units="rem"/>
        <div class="lg:columns-4 gap-5 xs:columns-1 sm:columns-2">
            <CardTeamInfo name="Clarence Rhey Barraca Salaveria" position="Librarian"/>
            <CardTeamInfo name="Arvy" position="Developer"/>
            <CardTeamInfo name="Roselle" position="Graphics Artist"/>
            <CardTeamInfo name="Clarence Rhey Barraca Salaveria" position="Librarian"/>
            <CardTeamInfo name="Arvy" position="Developer"/>
            <CardTeamInfo name="Roselle" position="Graphics Artist"/>
            <CardTeamInfo name="Clarence Rhey Barraca Salaveria" position="Librarian"/>
            <CardTeamInfo name="Arvy" position="Developer"/>
        </div>

    </div>
    <UtilVerticalSpacer :height="2" units="rem"/>
</template>

<script>
    export default {
        name: "SectionMeetTheTeam",
        data() {
            return {

            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>