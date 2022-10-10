<template>
    <div class="flex p-2">
        <div class="w-1/4 scale-90">
            <img :src="event.event_image_link" alt="">
        </div>
        <div class="flex flex-col w-3/4 ml-3 mt-1">
            <div class="font-khula text-2xl font-bold hover:underline">
                {{event.event_name}}
            </div>
            <div class="font-kulim font-bold">
                <i class="fa-regular fa-calendar mr-1"></i>
                {{getDate(event.event_date_start)}} |
                {{getTime(event.event_date_start)}} -
                {{getTime(event.event_date_end)}}
            </div>
            <div class="font-kulim text-primary opacity-75">
                <i class="fa-solid fa-location-dot"></i>
                {{event.event_location}}
            </div>
            <div class="font-kulim text-primary opacity-75">
                {{event.event_description}}
            </div>
        </div>
    </div> 
    <hr class="border-t-[0.2px] border-primary opacity-30"/>
</template>

<script>

export default {
    name: "CardEventItem",
    props: {
        event: {
            type: Object,
            required: true
        }
    },
    methods: {
        getDate(dateString) {
            let date = new Date(dateString)
            return date.toLocaleDateString()
        },
        getTime(dateString) {
            let date = new Date(dateString)
            date.setHours(date.getHours() + 8)
            return date.toLocaleTimeString()
        }
    }
}
</script>