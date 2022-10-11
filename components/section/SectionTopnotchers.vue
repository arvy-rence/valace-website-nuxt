<template>
    <UtilVerticalSpacer :height="3" units="rem"/>
    <div class="flex flex-col-reverse md:flex-row px-[2rem] lg:px-[12rem] max-w-[calc(1500px)] mx-auto py-[7rem] w-full">
        <div class="flex flex-col pt-[1rem] lg:pt-0 md:pr-[2rem] w-full md:w-3/5">
            <h1 class="text-4xl text-primary font-khula font-bold md:text-6xl lg:text-6xl">
                TOPNOTCHERS'
            </h1>
            <h1 class="text-4xl text-primary font-khula font-bold md:text-6xl lg:text-6xl">
                SHELF
            </h1>
            
            <p class="font-kulim text-primary w-full md:w-[30rem] lg:w-full lg:text-2xl w-full">
                The Valenzuela City Library is dedicating a special space for our city's Board Exam Topnotchers entitled the Topnotchers' Shelf. It aims to highlight the academic excellence of Valenzuela City residents. This unique space will feature Valenzuelano Topnotchers together with select resources that they used for the exam and other reading materials which inspired them to do well in their studies.
            </p>
        </div>
        <div class="flex flex-col items-center justify-center lg:items-end w-full md:w-2/5 ">
            <div class="flex flex-col items-center">
                <div class="flex gap-4">
                    <button class="text-2xl text-primary" @click="cycleIndexBackward">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <img :src="topnotchers[index].image" class="img-with-shadow w-full md:w-[16rem]">
                    <button class="text-2xl text-primary" @click="cycleIndexForward">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                </div>
                <div>
                    <span class="dot" :class="[index === 0 ? 'isActive' : '']" @click="changeIndex(0)"></span>
                    <span class="dot" :class="[index === 1 ? 'isActive' : '']" @click="changeIndex(1)"></span>
                    <span class="dot" :class="[index === 2 ? 'isActive' : '']" @click="changeIndex(2)"></span>
                </div>
            </div>
            
            <h1 class="font-kulim text-primary w-full sm:w-[40rem] text-center lg:text-right text-2xl">{{ topnotchers[index].name }}</h1>
            <h2 class="font-kulim text-primary w-full sm:w-[40rem] text-center lg:text-right text-md italic">{{ topnotchers[index].title }}</h2>
            <span class="text-primary font-khula italic">
                <i class="fa-solid fa-clock"></i> {{ topnotchers[index].date }}
            </span>
        </div>
    </div>
    <UtilVerticalSpacer :height="3" units="rem"/>
</template>

<script>
export default {
    name: "SectionTopnotchers",
    data() {
        return {
            topnotchers: [
                {
                    name: "Engineer Jesher Garde",
                    title: "Top 2 / Aeronautical Engineer Licensure Examination",
                    image: "/images/engr.png",
                    date: "November 2021"
                },
                {
                    name: "Dr. Loubomir Cyrus E. Antonio",
                    title: "Top 1 / 2003 Physician Licensure Examination",
                    image: "/images/dr.png",
                    date: "November 2021"
                },
                {
                    name: "Sir Nicko Tumala",
                    title: "Top 4 / 2017 Licensure Examination for Teachers",
                    image: "/images/nicko.png",
                    date: "November 2021"
                }
            ],
            index: 0
        }
    },
    methods: {
        changeIndex(index) {
            this.index = index
        },
        cycleIndexForward() {
            if (this.index < this.topnotchers.length - 1) {
                this.index++
            } else {
                this.index = 0
            }
        },
        cycleIndexBackward() {
            if (this.index > 0) {
                this.index--
            } else {
                this.index = this.topnotchers.length - 1
            }
        }
    }
}   
</script>

<style>
    .img-with-shadow {
        box-shadow: 2px 2px 3px gray;
    }

    .dot {
        height: 10px;
        width: 10px;
        margin-top: 10px;
        margin-left: 3px;
        margin-right: 3px;
        background-color: #00104A;
        opacity: 0.5;
        border-radius: 50%;
        display: inline-block;
    }

    .isActive {
        background-color: #00104A;
        opacity: 1
    }
</style>