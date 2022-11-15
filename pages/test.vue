<template>
    <div class="fade-out fade-out-element">
        low
    </div>
    <div class="fade-in-element">
        asd
    </div>
</template>

<script>
export default {
    mounted() {
        let fadeOutElem = document.querySelector('.fade-out-element')
        let fadeInElem = document.querySelector('.fade-in-element')
        setTimeout(() => {}, 2000)
        setTimeout(() => {
            fadeInElem.classList.add('fade-in')
        }, 2000)
    }
}
</script>

<style scoped>
.fade-in-element {
    opacity: 0;
}

.fade-out {
    animation: fade-out-animation 2s;
}

.fade-in {
    animation: fade-in-animation 2s;
}

@keyframes fade-in-animation {
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
}

@keyframes fade-out-animation {
    from {
        opacity: 1
    }
    to {
        opacity: 0
    }
}
</style>