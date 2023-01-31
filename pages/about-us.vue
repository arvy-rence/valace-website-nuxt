<template>
    <div>
        <div class="pt-[82.8px]"></div>
        <div>
            <HeaderAbout/>
            <img src="/images/about-banner.png" alt="" class="w-screen opacity-50">
            <!-- <SectionLibraryInfo id="map"/> -->
            <FadeView>
                <SectionContactInfo/>
            </FadeView>
            <FadeView>
                <SectionOthers/>
            </FadeView>
            <FadeView>
                <SectionMeetTheTeam/>
            </FadeView>
            <SectionFooter/>
        </div>
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
        // checkReload()
    },
}
</script>

<style scoped>

</style>