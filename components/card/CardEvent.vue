<template>
    <div :data-month="numericMonth" class="pl-[10rem] text-primary text-4xl uppercase font-bold"></div>
    <div class="flex flex-col md:flex-row relative bg-white border border-gray-300 items-center justify-start px-3 py-3 mx-auto w-5/6 my-[.5rem] shadow-lg overflow-hidden">
        <img :src="eventData.event_image_link" alt="" class="mx-2 w-full md:w-[9rem] md:h-[6rem] object-cover mt-[2.2rem] md:mt-0" width="">
        <div class="flex flex-col">
            <span class="md:pl-5 text-center md:text-left font-khula text-2xl md:text-xl font-bold text-primary city-text w-full md:w-[calc(100%-90px)]">{{
                    eventData.event_name
                }}</span>
            <span class="md:pl-5 font-kulim text-sm md:text-base text-primary">
                <i class="fa-solid fa-calendar"></i>
                {{ convertToMoment(eventData.event_date) }}
            </span>
            <span class="md:pl-5 font-kulim text-sm md:text-base text-primary">
                <i class="fa-solid fa-location-pin"></i>
                {{ eventData.event_location }}
            </span>
            <span class="md:pl-5 font-kulim text-sm md:text-base text-primary">
                <i class="fa-solid fa-note-sticky"></i>
                {{ eventData.event_description }}
            </span>
<!--            <NuxtLink :to="`/events/${eventData.id}`"-->
<!--                      class="pl-5 text-primary text-sm underline font-bold text-primary">-->
<!--                <button class="py-2">-->
<!--                <span class="text-primary font-kulim text-xs hover:underline opacity-50">-->
<!--                    Read More-->
<!--                </span>-->
<!--                </button>-->
<!--            </NuxtLink>-->
        </div>
        <div class="bg-primary absolute right-0 top-2 w-[6rem] h-[2rem]">
            <p class="text-white font-kulim text-xs hover:underline font-bold text-center pt-[8px]">
                November
            </p>
        </div>
    </div>
</template>

<script>
import {convertToMoment} from "~/composables/convertToMoment";

export default {
    name: "CardEvent",
    props: {
        eventData: {
            type: Object,
            required: true
        }
    },
    mounted() {

    },
    created() {
        console.log([this.eventData.event_date, this.numericMonth])
    },
    computed: {
        numericMonth() {
            return new Date(this.eventData.event_date).getMonth() + 1
        }
    }
}
</script>

<style scoped>
div[data-month="9"]::after {
    content: "September";
}

div[data-month="10"]::after {
    content: "October";
}

div[data-month="11"]:empty::after {
    content: "November";
}

</style>