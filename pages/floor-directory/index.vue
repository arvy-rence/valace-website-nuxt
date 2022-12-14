<template>
    <div>
        <SectionFloor1/>
    </div>
</template>

<script>
import SectionFloorDirectory from "../../components/section/SectionFloor1";
import SectionFloor2 from "../../components/section/SectionFloor2";
import {checkReload} from "../../composables/checkReload";
export default {
    name: "floor-directory",
    components: {SectionFloor2, SectionFloorDirectory},
}
</script>

<style scoped>

</style>