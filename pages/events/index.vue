<template>
    <div class="pt-[82.8px]"></div>
    <div class="flex flex-col justify-center items-center py-[2rem]">
        <div class="uppercase font-khula text-primary opacity-50 text-xl font-bold">
            Valenzuela City Library
        </div>
        <div class="uppercase font-khula font-bold text-primary text-4xl">
            Events and Activities
        </div>
    </div>
    <Loader :isLoading="isLoading"/>
    <div class="flex px-[5rem]" v-if="!isLoading">
        <div class="slider flex flex-col gap-2">
            <span>slider</span>
            <span>slider</span>
            <span>slider</span>
            <span>slider</span>
            <span>slider</span>
            <span>slider</span>
            <span>slider</span>
            <span>slider</span>
            <span>slider</span>
            <span>slider</span>
            <span>slider</span>
            <span>slider</span>
        </div>
        <div class="px-[1rem] flex flex-col items-start gap-2">
            <button class="font-kulim text-primary hover:font-bold" @click="toggleActive(0)">January</button>
            <button class="font-kulim text-primary hover:font-bold" @click="toggleActive(1)">February</button>
            <button class="font-kulim text-primary hover:font-bold" @click="toggleActive(2)">March</button>
            <button class="font-kulim text-primary hover:font-bold" @click="toggleActive(3)">April</button>
            <button class="font-kulim text-primary hover:font-bold" @click="toggleActive(4)">May</button>
            <button class="font-kulim text-primary hover:font-bold" @click="toggleActive(5)">June</button>
            <button class="font-kulim text-primary hover:font-bold" @click="toggleActive(6)">July</button>
            <button class="font-kulim text-primary hover:font-bold" @click="toggleActive(7)">August</button>
            <button class="font-kulim text-primary hover:font-bold" @click="toggleActive(8)">September</button>
            <button class="font-kulim text-primary hover:font-bold" @click="toggleActive(9)">October</button>
            <button class="font-kulim text-primary hover:font-bold" @click="toggleActive(10)">November</button>
            <button class="font-kulim text-primary hover:font-bold" @click="toggleActive(11)">December</button>
        </div>
        <div class="flex flex-col w-full max-h-[25rem] text-primary overflow-y-scroll">
            <div v-if="isActive[0]">
                <div class="text-primary font-bold font-khula text-xl">January Events</div>
                <div v-for="event in months[0]" :key="event.id">
                    <CardEventItem :event="event"/>
                </div>
            </div>
            <div v-if="isActive[1]">
                <div class="text-primary font-bold font-khula text-xl">February Events</div>
                <div v-for="event in months[1]" :key="event.id">
                    <CardEventItem :event="event"/>
                </div>
            </div>
            <div v-if="isActive[2]">
                <div class="text-primary font-bold font-khula text-xl">March Events</div>
                <div v-for="event in months[2]" :key="event.id">
                    <CardEventItem :event="event"/>
                </div>
            </div>
            <div v-if="isActive[3]">
                <div class="text-primary font-bold font-khula text-xl">April Events</div>
                <div v-for="event in months[3]" :key="event.id">
                    <CardEventItem :event="event"/>
                </div>
            </div>
            <div v-if="isActive[4]">
                <div class="text-primary font-bold font-khula text-xl">May Events</div>
                <div v-for="event in months[4]" :key="event.id">
                    <CardEventItem :event="event"/>
                </div>
            </div>
            <div v-if="isActive[5]">
                <div class="text-primary font-bold font-khula text-xl">June Events</div>
                <div v-for="event in months[5]" :key="event.id">
                    <CardEventItem :event="event"/>
                </div>
            </div>
            <div v-if="isActive[6]">
                <div class="text-primary font-bold font-khula text-xl">July Events</div>
                <div v-for="event in months[6]" :key="event.id">
                    <CardEventItem :event="event"/>
                </div>
            </div>
            <div v-if="isActive[7]">
                <div class="text-primary font-bold font-khula text-xl">August Events</div>
                <div v-for="event in months[7]" :key="event.id">
                    <CardEventItem :event="event"/>
                </div>
            </div>
            <div v-if="isActive[8]">
                <div class="text-primary font-bold font-khula text-xl">September Events</div>
                <div v-for="event in months[8]" :key="event.id">
                    <CardEventItem :event="event"/>
                </div>
            </div>
            <div v-if="isActive[9]">
                <div class="text-primary font-bold font-khula text-xl">October Events</div>
                <div v-for="event in months[9]" :key="event.id">
                    <CardEventItem :event="event"/>
                </div>
            </div>
            <div v-if="isActive[10]">
                <div class="text-primary font-bold font-khula text-xl">November Events</div>
                <div v-for="event in months[10]" :key="event.id">
                    <CardEventItem :event="event"/>
                </div>
            </div>
            <div v-if="isActive[11]">
                <div class="text-primary font-bold font-khula text-xl">December Events</div>
                <div v-for="event in months[11]" :key="event.id">
                    <CardEventItem :event="event"/>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from '~/server/index'


export default {
    name: "",
    data() {
        return {
            months: [
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                []
            ],
            isActive: [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ],
            isLoading: true
        }
    },
    methods: {
        toggleActive(index) {
            this.resetActive()
            this.isActive[index] = !this.isActive[index]
        },
        resetActive() {
            this.isActive = [
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false,
                false
            ]
        },
    },
    async created() {
        const {data} = await axios.get('/events')
        data.eventsUTC8.forEach(event => {
            this.months[event.event_month - 1].push(event)
        });
        this.isLoading = false
    },
}    
</script>