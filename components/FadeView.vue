<template>
    <div class="js-show-on-scroll">
        <slot/>
    </div>
</template>

<script>
export default {
    name: "SectionFade",
    mounted() {
        const callback = function (entries) {
            entries.forEach((entry) => {
                console.log(entry);

                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-fadeIn");
                } else {
                    entry.target.classList.remove("animate-fadeIn");
                }
            });
        };

        const observer = new IntersectionObserver(callback);

        const targets = document.querySelectorAll(".js-show-on-scroll");
        targets.forEach(function (target) {
            target.classList.add("opacity-0");
            observer.observe(target);
        });
    }
}
</script>

<style scoped>
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.animate-fadeIn {
    animation: fadeIn 600ms ease-in forwards;
}
</style>