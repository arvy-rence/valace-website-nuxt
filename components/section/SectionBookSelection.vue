<template>
    <div class="bg-gray-100">
        <UtilVerticalSpacer :height="2" units="rem"/>
        <div class="flex-col justify-center items-center w-screen">
            <h1 class="font-bold font-khula text-4xl text-tertiary text-center">
                BOOK SELECTION
            </h1>
            <UtilVerticalSpacer :height="2" units="rem"/>
            <!-- carousel -->
            <div class="h-screen">
                <section class="container">
                    <div id="carousel">
                        <figure>
                            <CardCarouselBackup :bookInfo="book1"/>
                        </figure>
                        <figure>
                            <CardCarouselBackup :bookInfo="book2"/>
                        </figure>
                        <figure>
                            <CardCarouselBackup :bookInfo="book3"/>
                        </figure>
                        <figure>
                            <CardCarouselBackup :bookInfo="book4"/>
                        </figure>
                    </div>
                </section>
            </div>
        </div>
        <UtilVerticalSpacer :height="2" units="rem"/>
    </div>
</template>

<script>
import {generateSingleBook} from "../../composables/fetchBooksFromAPI";
import CardCarousel from "../card/CardCarousel";

export default {
    name: "SectionBookSelection",
    components: {CardCarousel},

   data() {
        return {
            bookInformation:[],
            book1: {},
            book2: {},
            book3: {},
            book4: {}
        }
   },
    async created() {
        this.book1 = await generateSingleBook()
        this.book2 = await generateSingleBook()
        this.book3 = await generateSingleBook()
        this.book4 = await generateSingleBook()
    }
}
</script>

<style scoped>
.container {
    width: 700px;
    position: relative;
    perspective: 3000px;
    padding: 100px;
    left: 100px;
}
#carousel {
    position: relative;
}
#carousel figure {
    display: block;
    animation: rotate 30000ms ease-in-out infinite;
    position: absolute;
    background-color: white;
    border-radius: 25px;
    padding: 0;
    text-align: center;
    min-width: 300px;
    -webkit-box-reflect: below 30px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(50%, transparent), to(rgba(255, 255, 255, 0.2)));
}
#carousel figure:nth-child(0) {
    animation-delay: -30000ms;
}
#carousel figure:nth-child(1) {
    animation-delay: -22500ms;
}
#carousel figure:nth-child(2) {
    animation-delay: -15000ms;
}
#carousel figure:nth-child(3) {
    animation-delay: -7500ms;
}
#carousel figure:nth-child(4) {
    animation-delay: 0ms;
}
#carousel figure:nth-child(5) {
    animation-delay: 7500ms;
}
#carousel figure:nth-child(6) {
    animation-delay: 15000ms;
}
@keyframes rotate {
    0%, 20%, 99.7619047619%, 100% {
        transform: rotateY(45deg) scale(0.6);
        right: 0;
        box-shadow: 0 0 10px rgba(0, 0, 0, .5);
        z-index: -1;
        -webkit-filter: opacity(100%) blur(3px);
    }
    24.7619047619%, 45% {
        transform: rotateY(0deg) scale(1);
        right: 40%;
        box-shadow: 0 0 20px rgba(0, 0, 0, 1);
        z-index: 100;
        -webkit-filter: opacity(100%) blur(0px);
    }
    49.7619047619%, 70% {
        transform: rotateY(-45deg) scale(0.6);
        right: 81%;
        box-shadow: 0 0 10px rgba(0, 0, 0, .5);
        z-index: -1;
        -webkit-filter: opacity(100%) blur(3px);
    }
    74.7619047619%, 95% {
        transform: rotateY(-90deg) scale(0);
        right: 0%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0);
        z-index: 0;
        -webkit-filter: opacity(0%) blur(0px);
    }
}
</style>