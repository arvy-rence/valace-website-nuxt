<template>
    <div class="bg-gray-100 pt-[2rem] md:py-[4rem]" id="events-section">

        <div class="flex-col bg-img justify-center align-center max-w-[calc(1500px)] mx-auto">
            <div class="px-[1rem]">
                <h2 class="font-bold text-gray-400 opacity-50 font-khula uppercase text-center text-lg sm:text-3xl">
                    Valenzuela City Library
                </h2>
                <h1 class="font-bold text-primary text-center font-khula text-4xl sm:text-6xl">
                    EVENTS AND ACTIVITIES
                </h1>
                <div class="flex justify-center">
                    <div class="w-full md:px-[4rem] lg:px-0 lg:w-1/2">
                        <p class="font-kulim font-kulim text-xl text-center text-primary pb-2">
                            Join us in different events and activities that we have prepared for you here in the Valenzuela Academic Center for Excellence!
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex flex-col overflow-y-scroll h-[30rem] w-3/4 mx-auto">
                <div v-for="eventData in events" :key="eventData.id">
                    <CardEvent :eventData="eventData"/>
                </div>
            </div>
            <Loader :isLoading="isLoading"/>

            <div class="flex justify-center items-center py-[2rem]">
                <NuxtLink to="/events/">
                    <button
                        class="bg-primary px-[7rem] py-3 text-white font-bold font-khula text-lg"
                    >
                        View All Events
                    </button>
                </NuxtLink>
            </div>
            <UtilVerticalSpacer :height="2" units="rem"/>
        </div>
    </div>
</template>

<script>
import axios from "~/server/index"

export default {
    name: "SectionEvents",
    data() {
        return {
            events: [],
            isLoading: true
        }
    },
    props: {

    },
    async created() {
        try {
            const {data} = await axios.get("/events/upcomingEvents")
            this.events = data.upcomingEvents
            this.isLoading = false
            this.$emit("complete-event-load", this.isLoading)
            this.$emit("events-data", this.events)
        } catch (e) {
            console.log("failed to fetch events")
        }
    }
}
</script>

<style scoped>

</style>