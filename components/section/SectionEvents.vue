<template>
    <div class="bg-white-100 flex-col bg-img justify-center align-center">
        <UtilVerticalSpacer :height="2" units="rem"/>
        <div>
            <h2 class="font-bold text-lg text-gray-400 font-khula text-center">
                Valenzuela City Library
            </h2>
            <h1 class="font-bold text-4xl text-primary text-center font-khula">
                EVENTS AND ACTIVITIES
            </h1>
            <div class="flex justify-center">
                <div class="w-1/2">
                    <p class="font-kulim text-xl">
                        Join us in different events and activities that we have prepared for you here in the Valenzuela Academic Center for Excellence!
                    </p>
                </div>
            </div>
        </div>
        <div class="flex justify-center flex-wrap">
            <div v-for="eventData in events" :key="eventData.id">
                <CardEvent :eventData="eventData"/>
            </div>
        </div>
        <Loader :isLoading="isLoading"/>

        <div class="flex justify-center items-center py-[2rem]">
            <NuxtLink to="/events/">
                <button
                    class="bg-primary px-12 py-3 rounded-md text-white font-bold font-khula text-lg"
                >
                    View All Events
                </button>
            </NuxtLink>
        </div>
        <UtilVerticalSpacer :height="2" units="rem"/>
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
    async created() {
        const {data} = await axios.get("/events/upcomingEvents")
        this.events = data.upcomingEvents
        this.isLoading = false
    }
}
</script>

<style scoped>

</style>