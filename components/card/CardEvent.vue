<template>
    <div :data-month="numericMonth" class="pl-[10rem] text-primary text-4xl uppercase font-bold"></div>
    <div class="flex flex-col md:flex-row relative bg-white items-center justify-start px-3 py-3 mx-auto w-5/6 my-[.5rem] hover:shadow-lg overflow-hidden">
        <img :src="eventData.event_image_link" alt="" class="mx-2 w-full md:w-[9rem] md:h-[6rem] object-cover mt-[2.2rem] md:mt-0" width="">
        <div class="flex flex-col">
            <span class="md:pl-5 text-center md:text-left font-khula text-2xl md:text-xl font-bold text-primary city-text w-full md:w-[calc(100%-90px)]">{{
                    eventData.event_name
                }}</span>
            <span class="md:pl-5 font-kulim text-sm md:text-base text-primary">
                <i class="fa-solid fa-calendar"></i>
                {{ convertToMoment(eventData.event_date_start) }}
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
        <div v-if="isCurrentMonth" class="bg-secondary absolute right-0 top-2 w-[6rem] h-[2rem]">
            <p class="text-white font-kulim text-xs hover:underline font-bold text-center pt-[8px]">
                Upcoming
            </p>
        </div>
        <div v-else class="bg-primary absolute right-0 top-2 w-[6rem] h-[2rem]">
            <p class="text-white font-kulim text-xs hover:underline font-bold text-center pt-[8px]">
                {{numericMonth}}
            </p>
        </div>
    </div>
</template>

<script>
import {convertToMoment} from "~/composables/convertToMoment";

export default {
    name: "CardEvent",
    data() {
        return {
            isCurrentMonth: false
        }
    },
    props: {
        eventData: {
            type: Object,
            required: true
        },
        
    },
    mounted() {
        
    },
    created() {
    
    },
    methods: {
    
    },
    computed: {
        numericMonth() {
            let month = new Date(this.eventData.event_date_start).getMonth() + 1
            let currentMonth = new Date().getMonth() + 1
            if (month === currentMonth) {
                this.isCurrentMonth = true
            }
            switch(month) {
                case 1:
                    return "January"

                case 2: 
                    return "February"

                case 3: 
                    return "March"

                case 4:
                    return "April"

                case 5:
                    return "May"

                case 6:
                    return "June"

                case 7:
                    return "July"

                case 8:
                    return "August"

                case 9:
                    return "September"

                case 10:
                    return "October"

                case 11:
                    return "November"

                case 12:
                    return "December"
            }
        }
    }
}
</script>

<style scoped>

</style>