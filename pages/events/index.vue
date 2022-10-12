<template>
    <div class="pt-[82.8px]"></div>
    <div class="flex flex-col justify-center items-center py-[2rem]">
        <div class="uppercase font-khula text-primary opacity-50 text-xl font-bold">
            Valenzuela City Library
        </div>
        <div class="uppercase font-khula font-bold text-primary text-6xl">
            Events and Activities
        </div>
    </div>
    <Loader :isLoading="isLoading"/>
    <div class="flex flex-col px-[5rem]" v-if="!isLoading">
        <div class="paren">
            <div id="form-wrapper">
                <form action="" method="GET">
                    <div id="month-slider">
                        <input type="radio" name="month" id="1" value="1" required @click="toggleActive(0)">
                        <label for="1" data-month="JAN"></label>
                        <input type="radio" name="month" id="2" value="2" required @click="toggleActive(1)">
                        <label for="2" data-month="FEB"></label>
                        <input type="radio" name="month" id="3" value="3" required @click="toggleActive(2)">
                        <label for="3" data-month="MAR"></label>
                        <input type="radio" name="month" id="4" value="4" required @click="toggleActive(3)">
                        <label for="4" data-month="APR"></label>
                        <input type="radio" name="month" id="5" value="5" required @click="toggleActive(4)">
                        <label for="5" data-month="MAY"></label>
                        <input type="radio" name="month" id="6" value="6" required @click="toggleActive(5)">
                        <label for="6" data-month="JUN"></label>
                        <input type="radio" name="month" id="7" value="7" required @click="toggleActive(6)">
                        <label for="7" data-month="JUL"></label>
                        <input type="radio" name="month" id="8" value="8" required @click="toggleActive(7)">
                        <label for="8" data-month="AUG"></label>
                        <input type="radio" name="month" id="9" value="9" required @click="toggleActive(8)">
                        <label for="9" data-month="SEPT"></label>
                        <input type="radio" name="month" id="10" value="10" required @click="toggleActive(9)">
                        <label for="10" data-month="OCT"></label>
                        <input type="radio" name="month" id="11" value="11" required @click="toggleActive(10)">
                        <label for="11" data-month="NOV"></label>
                        <input type="radio" name="month" id="12" value="12" required @click="toggleActive(11)">
                        <label for="12" data-month="DEC"></label>
                        <div id="month-pos"></div>
                    </div>
                </form>
            </div>
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

<style scoped>
.paren {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Nunito', sans-serif;
    color: #00104A;
    user-select: none;
}

#form-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

form {
    width: 90%;
    max-width: 500px;
}

form #form-title {
    margin-top: 0;
    font-weight: 400;
    text-align: center;
}

form #month-slider {
    display: flex;
    flex-direction: row;
    align-content: stretch;
    position: relative;
    width: 100%;
    height: 50px;
    user-select: none;
}

form #month-slider::before {
    content: " ";
    position: absolute;
    height: 2px;
    width: 100%;
    width: calc(100% * (11 / 12));
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #00104A;
}

form #month-slider input, form #month-slider label {
    box-sizing: border-box;
    flex: 1;
    user-select: none;
    cursor: pointer;
}

form #month-slider label {
    display: inline-block;
    position: relative;
    width: 20%;
    height: 100%;
    user-select: none;
}

form #month-slider label::before {
    content: attr(data-month);
    position: absolute;
    left: 50%;
    padding-top: 10px;
    transform: translate(-50%, 45px);
    font-size: 14px;
    letter-spacing: 0.4px;
    font-weight: 400;
    white-space: nowrap;
    opacity: 0.85;
    transition: all 0.15s ease-in-out;
}

form #month-slider label::after {
    content: " ";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 30px;
    height: 30px;
    border: 2px solid #00104A;
    background: #fff;
    border-radius: 50%;
    pointer-events: none;
    user-select: none;
    z-index: 1;
    cursor: pointer;
    transition: all 0.15s ease-in-out;
}

form #month-slider label:hover::after {
    transform: translate(-50%, -50%) scale(1.25);
}

form #month-slider input {
    display: none;
}

form #month-slider input:checked + label::before {
    font-weight: 800;
    opacity: 1;
}

form #month-slider input:checked + label::after {
    border-width: 4px;
    transform: translate(-50%, -50%) scale(0.75);
}

form #month-slider input:checked ~ #month-pos {
    opacity: 1;
}

form #month-slider input:checked:nth-child(1) ~ #month-pos {
    left: 4.15%;
}

form #month-slider input:checked:nth-child(3) ~ #month-pos {
    left: 12.45%;
}

form #month-slider input:checked:nth-child(5) ~ #month-pos {
    left: 20.75%;
}

form #month-slider input:checked:nth-child(7) ~ #month-pos {
    left: 29.05%;
}

form #month-slider input:checked:nth-child(9) ~ #month-pos {
    left: 37.35%;
}

form #month-slider input:checked:nth-child(11) ~ #month-pos {
    left: 45.65%;
}

form #month-slider input:checked:nth-child(13) ~ #month-pos {
    left: 53.95%;
}

form #month-slider input:checked:nth-child(15) ~ #month-pos {
    left: 62.25%;
}

form #month-slider input:checked:nth-child(17) ~ #month-pos {
    left: 70.55%;
}

form #month-slider input:checked:nth-child(19) ~ #month-pos {
    left: 78.85%;
}

form #month-slider input:checked:nth-child(21) ~ #month-pos {
    left: 87.15%;
}

form #month-slider input:checked:nth-child(23) ~ #month-pos {
    left: 95.45%;
}

form #month-slider #month-pos {
    display: block;
    position: absolute;
    top: 50%;
    width: 12px;
    height: 12px;
    background: #00104A;
    border-radius: 50%;
    transition: all 0.15s ease-in-out;
    transform: translate(-50%, -50%);
    border: 2px solid #fff;
    opacity: 0;
    z-index: 2;
}

form:valid #month-slider input + label::before {
    transform: translate(-50%, 45px) scale(0.9);
    transition: all 0.15s linear;
}

form:valid #month-slider input:checked + label::before {
    transform: translate(-50%, 45px) scale(1.1);
    transition: all 0.15s linear;
}
</style>