<template>
    <div>
        <SectionLibraryInfo/>
        <SectionContactInfo/>
        <SectionMeetTheTeam/>
        <SectionOthers/>
    </div>
</template>

<script>
import SectionOthers from "../components/section/SectionOthers";
import {checkReload} from "../composables/checkReload";
import SectionMeetTheTeam from "../components/section/SectionMeetTheTeam";
import SectionContactInfo from "../components/section/SectionContactInfo";
import SectionLibraryInfo from "../components/section/SectionLibraryInfo";
export default {
    name: "about-us",
    components: {SectionLibraryInfo, SectionContactInfo, SectionMeetTheTeam, SectionOthers},
    mounted() {
        checkReload()
    },
}
</script>

<style scoped>

</style>