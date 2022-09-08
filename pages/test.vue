<template>
    <div :class="[isChecked ? 'show' : 'hidden']">
        <h1 class="dark:bg-black dark:text-white font-bold underline">
            Hello world!
        </h1>
    </div><input type="checkbox" v-model="isChecked">
</template>

<script>

</script>

<style scoped>

.container {
    width: 35%;
    position: relative;
    perspective: 3000px;
    padding: 100px;
    left: 22.5%;
}

#carousel {
    position: relative;
}

#carousel figure {
    display: block;
    animation: rotate 30000ms ease-in-out infinite;
    position: absolute;
    background-color: white;
    padding: 1rem;
    text-align: center;
    min-width: 66%;
    -webkit-box-reflect: below 30px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent), to(rgba(255, 255, 255, 0.2)));
}

#carousel figure:nth-child(0) {
    animation-delay: -30000ms;
}

#carousel figure:nth-child(1) {
    animation-delay: -22500ms;
}

#carousel figure:nth-child(2) {
    animation-delay: -15000ms;
}

#carousel figure:nth-child(3) {
    animation-delay: -7500ms;
}

#carousel figure:nth-child(4) {
    animation-delay: 0ms;
}

#carousel figure:nth-child(5) {
    animation-delay: 7500ms;
}

#carousel figure:nth-child(6) {
    animation-delay: 15000ms;
}

@keyframes rotate {
    0%, 20%, 99.7619047619%, 100% {
        transform: rotateY(45deg) scale(0.6);
        right: 0;
        box-shadow: 0 0 10px rgba(0, 0, 0, .5);
        z-index: -1;
        -webkit-filter: opacity(100%) blur(3px);
    }
    24.7619047619%, 45% {
        transform: rotateY(0deg) scale(1);
        right: 40%;
        box-shadow: 0 0 20px rgba(0, 0, 0, 1);
        z-index: 100;
        -webkit-filter: opacity(100%) blur(0px);
    }
    49.7619047619%, 70% {
        transform: rotateY(-45deg) scale(0.6);
        right: 81%;
        box-shadow: 0 0 10px rgba(0, 0, 0, .5);
        z-index: -1;
        -webkit-filter: opacity(100%) blur(3px);
    }
    74.7619047619%, 95% {
        transform: rotateY(-90deg) scale(0);
        right: 0%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0);
        z-index: 0;
        -webkit-filter: opacity(0%) blur(0px);
    }
}
</style>