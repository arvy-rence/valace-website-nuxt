<template>
    <div class="w-[22rem] bg-gray mx-4 ">
        <div class="bg-white-100 custom-bottom-shadow img-with-shadow my-[.7rem] px-[1.4rem] pt-4 min-h-[24rem]">
            <figure class="flex justify-center items-center py-[.5rem]">
                <img src="../../assets/images/icons/logo.png" width="75" alt="">
            </figure>
            <figure class="flex justify-center items-center">
                <img :src="newsInfo.newsImageURL" width="340" alt=""/>
            </figure>
            <div class="text-gray-400 font-kulim pt-4">
                <i class="fa-solid fa-clock"></i> {{ dummyDateString }}
            </div>

            <h1 class="font-bold text-xl text-black-100 py-2 text-left font-kulim">{{ newsInfo.newsTitle }}</h1>
            <div class="text-[15px] text-black-100 text-left font-kulim">
                <p>
                    {{ newsInfo.newsContent }}
                </p>
            </div>
            <div class="inline-flex items-center mt-5 pb-5">
                <NuxtLink :to="newsInfo.newsLink"
                          class="text-primary text-sm underline font-bold">
                    <button class="py-2">
                        <span class="text-primary hover:underline">
                            <i class="fa-solid fa-circle-chevron-down"></i>
                            Read More
                        </span>
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardNews",
    data() {
        return {
            dummyDate: new Date()
        }
    },
    props: {
        /**
         * newsInfo should have the following format:
         *     newsId: number (not required in this component)
         *     newsTitle: string;
         *     newsDate: Date;
         *     newsContent: string;
         *     newsImageURL: string;
         *     newsLink: string;
         */
        newsInfo: {
            type: Object,
            required: true,
            default: {
                newsTitle: "News Title",
                newsDate: new Date(),
                newsContent: "lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem lorem ipsum dolor sit amet lorem",
                newsImageURL: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGVuc3xlbnwwfHwwfHw%3D&w=1000&q=80",
                newsLink: "https://blog.logrocket.com/understanding-computed-properties-in-vue-js/"
            }
        }
    },
    computed: {
        dateString() {
            return this.newsInfo['newsDate'].toDateString()
        },
        dummyDateString() {
            return this.dummyDate.toDateString()
        }
    }
}
</script>

<style>

</style>