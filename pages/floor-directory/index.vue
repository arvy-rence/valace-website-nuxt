<template>
    <div class="h-screen">
      <div>
        <FloorDirectoryButtons/>
        <div class="pl-[6rem] md:pl-[10rem]">
          <SectionFloor1 id="floor-directory-1" class="mb-[6rem]"/>
          <SectionFloor2 id="floor-directory-2" class="mb-[6rem]"/>
          <SectionFloor3 id="floor-directory-3" class="mb-[6rem]"/>
          <SectionFloor4 id="floor-directory-4" class="mb-[6rem]"/>
          <SectionFloor5 id="floor-directory-5" class="mb-[6rem]"/>
          <SectionFloor6 id="floor-directory-6" class="mb-[6rem]"/>
        </div>
      </div>


    </div>
</template>

<script>
import SectionFloor1 from "../../components/section/SectionFloor1";
import SectionFloor2 from "../../components/section/SectionFloor2";
import SectionFloor3 from "../../components/section/SectionFloor3";
import SectionFloor4 from "../../components/section/SectionFloor4";
import SectionFloor5 from "../../components/section/SectionFloor5";
import SectionFloor6 from "../../components/section/SectionFloor6";
import FloorDirectoryButtons from "../../components/util/FloorDirectoryButtons";
export default {
    name: "floor-directory",
    components: {
      FloorDirectoryButtons,
      SectionFloor6, SectionFloor5, SectionFloor4, SectionFloor3, SectionFloor1, SectionFloor2}
}
</script>

<style scoped>

</style>