<template>
    <div class="w-[22rem] bg-gray mx-4 ">
        <div class="block bg-white-100 custom-bottom-shadow img-with-shadow my-[.7rem] px-[1.4rem] pt-4 h-[32rem]">
            <figure class="flex justify-center items-center py-[.5rem]">
                <img src="/images/icons/logo.png" width="75" alt="" />
            </figure>
            <figure class="flex justify-center items-center">
                <img :src="newsInfo.news_image_link" alt="" class="w-[20rem] h-[12rem] object-cover"/>
            </figure>
            <div class="text-gray-400 font-kulim pt-4">
                <i class="fa-regular fa-calendar"></i> {{ newsInfo.news_date }}
            </div>
            <div class="block overflow-hidden h-[10rem]">
                <h1 class="font-bold text-xl text-black-100 py-2 text-left text-primary font-kulim overflow-hidden max-h-[4.3rem]">{{ newsInfo.news_title }}</h1>
                <div class="text-[15px] text-black-100 text-left font-kulim">
                    <p class="overflow-hidden">
                        {{ newsInfo.news_description }}
                    </p>
                </div>
            </div>
            <div class="inline-flex items-center mt-5 pb-5">
                <NuxtLink :to="`/news/${newsInfo.id}`"
                          class="text-primary text-sm underline font-bold">
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