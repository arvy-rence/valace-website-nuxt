<template>
    <div class="w-full lg:w-full">
        <h1 class="text-sm">
            <button
                class="relative flex items-center w-full py-1 px-5 text-2xl"
                :class="[accordionToggle ?
                        [bgColor, bgOpacity, 'text-primary'] :
                        [bgColor, 'text-white']
                    ]"
                @click="setAccordionToggle">
                <h1 class="font-khula text-left text-lg sm:text-2xl pt-1">{{title}}</h1>

                <span :class="[accordionToggle ? ['rotate-0', 'duration-300'] : ['rotate-90', 'duration-300']]" class="absolute right-[1rem]">
                        <i class="fa-solid fa-chevron-right"></i>
                    </span>

            </button>
        </h1>
        <div :class="[accordionToggle ? [''] : ['custom-accordion-animation2']]" class="custom-default bg-white">
            <div class="accordion-body py-2 bg-white text-primary">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Accordion",
    props: {
        title: {
            type: String,
            required: false
        },
        bgColor: {
            type: String,
            default: 'bg-primary',
            required: false
        },
        bgOpacity: {
            type: String,
            default: 'bg-opacity-100',
            required: false
        }
    },
    data() {
        return {
            accordionToggle: Boolean,
        }
    },
    created() {
        this.accordionToggle(false);
    },
    methods: {
        setAccordionToggle() {
            this.accordionToggle = !this.accordionToggle
        },
    }
}
</script>

<style scoped>
.custom-default {
    overflow: hidden;
    max-height: 0px;
    -webkit-transition: max-height 0.3s ease-in-out, box-shadow 0.6s linear;
    -moz-transition: max-height 0.3s ease-in-out, box-shadow 0.6s linear;
    -o-transition: max-height 0.3s ease-in-out, box-shadow 0.6s linear;
    -ms-transition: max-height 0.3s ease-in-out, box-shadow 0.6s linear;
    transition: max-height 0.3s ease-in-out, box-shadow 0.6s linear;
}

.custom-accordion-animation2 {
    max-height: 5000px;
    -webkit-transition: max-height 0.5s ease-in-out, box-shadow 0.1s linear;
    -moz-transition: max-height 0.5s ease-in-out, box-shadow 0.1s linear;
    -o-transition: max-height 0.5s ease-in-out, box-shadow 0.1s linear;
    -ms-transition: max-height 0.5s ease-in-out, box-shadow 0.1s linear;
    transition: max-height 0.5s ease-in-out, box-shadow 0.1s linear;
}
</style>