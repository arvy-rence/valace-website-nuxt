<template>
    <div :data-month="numericMonth" class="pl-[10rem] text-primary text-4xl uppercase font-bold"></div>
    <div class="card-class px-[2rem] sm:px-[5rem] md:px-[10rem] lg:px-[20rem] xl:px-[25rem]
    py-2">
        <div class="bg-white border border-gray-300 flex items-center justify-start px-3 py-3">
            <img :src="eventData.event_image_link" alt="" class="mx-2" width="150">
            <div class="flex flex-col">
                <span class="pl-5 font-khula text-md md:text-xl font-bold text-primary city-text">{{
                        eventData.event_name
                    }}</span>
                <span class="pl-5 font-kulim text-sm md:text-base">
                    <i class="fa-solid fa-location-pin"></i>
                    {{ eventData.event_location }}
                </span>
                <span class="pl-5 font-kulim text-sm md:text-base">
                    <i class="fa-solid fa-calendar"></i>
                    {{ convertToMoment(eventData.event_date) }}
                </span>
                <span class="pl-5 font-kulim text-sm md:text-base">
                    <i class="fa-solid fa-note-sticky"></i>
                    {{ eventData.event_description }}
                </span>
                <NuxtLink :to="`/events/${eventData.id}`"
                          class="pl-5 text-primary text-sm underline font-bold">
                    <button class="py-2">
                    <span class="text-primary font-kulim text-xs hover:underline opacity-50">
                        Read More
                    </span>
                    </button>
                </NuxtLink>
            </div>
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

.card-class {
    min-width: 1000px;
    max-width: 1000px;
}
@media(min-width: 1024px) {
    .card-class {
        padding: 0.5rem 12rem 0.5rem 12rem;
    }
}

@media(min-width: 600px) {
    .city-text {
        font-size: 1.2rem;
    }
}

@media(min-width: 312px) {
    .city-text {
        font-size: 1rem;
    }
}
</style>