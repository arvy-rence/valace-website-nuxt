<template>
    <div class="h-screen overflow-y-hidden anim">
        <SectionFloor4/>
    </div>
</template>

<script>
export default {
    name: "floor-2"
}
</script>

<style scoped>
@keyframes intro {
    from {top: 100vh;}
    to {top: 0vh;}
}

.anim {
    animation: intro .5s;
    position: relative;
}
</style>