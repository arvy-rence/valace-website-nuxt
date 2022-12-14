<template>
    <div>
        <div class="flex justify-center items-center">
            <div class="pt-[82.8px] w-3/4">
                <NuxtLink to="/">
                    <h3 class="uppercase text-primary opacity-50 text-xl font-bold font-khula">
                        <i class="fa-solid fa-chevron-left mr-2 text-lg"></i>
                        Back
                    </h3>
                </NuxtLink>
                <Loader :isLoading="isLoading"/>
                <article v-if="!isLoading">
                    <div class="flex flex-col items-center justify-center">
                        <img :src="cityData.image_link"/>
                        <h2 class="text-2xl text-primary opacity-50 font-khula font-bold">
                            SISTER CITIES &amp; VISITING CITIES' CORNER
                        </h2>
                        <h1 class="tracking-[0.25rem] text-5xl text-primary font-khula font-bold uppercase ">
                            {{ cityData.library_name }}
                        </h1>
                    </div>
                    <div class="text-primary font-khula text-lg mt-[2rem]">
                        The Sister City, Sister Library Initiative is a program that aims to
                        strengthen the ties between Valenzuela City and its sister city, {{ cityData.library_name }},
                        through public library partnership.
                    </div>
                    <div class="text-primary font-khula text-lg mt-[1rem]">
                        <p>#SisterCitySisterLibrary</p>
                        <p>#{{ noSpace }}</p>
                        <p>#ValAce</p>
                        <p>#ValenzuelaCityLibrary</p>
                        <p>#ValenzuelaCity</p>
                    </div>
                </article>
            </div>
        </div>
        <SectionFooter/>
    </div>
</template>

<script>
import axios from '~/server/index';
import {checkReload} from "../../composables/checkReload";
export default {
    name: "[id]",
    data() {
        return {
            cityData: {},
            lib: "",
            isLoading: true
        }
    },
    async created() {
        const {data} = await axios.get(`/sisterCity/${this.$route.params.id}`)
        this.cityData = data.sisterCity
        this.isLoading = false
    },
    mounted() {
        // checkReload()
    },
    computed: {
        noSpace() {
            let lib = this.cityData.library_name
            lib = lib.replace(/\s+/g, '');
            lib = lib.replace(/,/g, '')
            return lib
        }
    }
}
</script>

<style scoped>

</style>