<template>
<!--    <div class="bg-gray-100">-->
<!--        <UtilVerticalSpacer :height="2" units="rem"/>-->
<!--        <div class="flex-col justify-center items-center w-full max-w-[calc(1500px)] mx-auto">-->
<!--            <h1 class="font-bold font-khula text-4xl text-tertiary text-center">-->
<!--                BOOK SELECTION-->
<!--            </h1>-->
<!--            &lt;!&ndash; carousel &ndash;&gt;-->
<!--            <div class="carousel w-full flex" data-gap="5" data-bfc>-->

<!--                <figure class="w-1/3 md:w-1/4">-->
<!--                    <img class="h-60 sm:h-80 md:h-[15rem] lg:h-[30rem] object-contain" :src="book1.bookImageURL" alt="">-->
<!--                    <img class="h-60 sm:h-80 md:h-[15rem] lg:h-[30rem] object-contain" :src="book2.bookImageURL" alt="">-->
<!--                    <img class="h-60 sm:h-80 md:h-[15rem] lg:h-[30rem] object-contain" :src="book3.bookImageURL" alt="">-->
<!--                    <img class="h-60 sm:h-80 md:h-[15rem] lg:h-[30rem] object-contain" :src="book4.bookImageURL" alt="">-->
<!--                    <img class="h-60 sm:h-80 md:h-[15rem] lg:h-[30rem] object-contain" :src="book5.bookImageURL" alt="">-->
<!--                    <img class="h-60 sm:h-80 md:h-[15rem] lg:h-[30rem] object-contain" :src="book6.bookImageURL" alt="">-->
<!--                    <img class="h-60 sm:h-80 md:h-[15rem] lg:h-[30rem] object-contain" :src="book7.bookImageURL" alt="">-->
<!--                    <img class="h-60 sm:h-80 md:h-[15rem] lg:h-[30rem] object-contain" :src="book8.bookImageURL" alt="">-->
<!--                </figure>-->
<!--                <nav class="static">-->
<!--                    <button class="nav prev absolute font-bold h-20 text-4xl text-primary top-1/3 lg:top-1/2 lg:bottom-1/2 left-[2rem] left-[0rem] sm:left-[0rem] md:left-[5rem] lg:left-[15rem]">-->
<!--                        &lt;-->
<!--                    </button>-->

<!--                    <button class="nav next absolute font-bold text-4xl h-20 text-primary top-1/3 lg:top-1/2 lg:bottom-1/2 right-[2rem] right-[0rem] sm:right-[0rem] md:right-[5rem] lg:right-[15rem]">-->
<!--                        &gt;-->
<!--                    </button>-->
<!--                </nav>-->
<!--            </div>-->
<!--            <figure id="title_author" class="pt-4 w-5/6 lg:w-4/6 mx-auto">-->
<!--                <div class="asd">-->
<!--                    <h1 class="font-bold">{{ book1.bookTitle }}</h1>-->
<!--                    <h2 v-for="author in book1.bookAuthor">{{ author }}</h2>-->
<!--                </div>-->

<!--                <div class="asd">-->
<!--                    <h1 class="font-bold">{{ book2.bookTitle }}</h1>-->
<!--                    <h2 v-for="author in book2.bookAuthor">{{ author }}</h2>-->
<!--                </div>-->

<!--                <div class="asd">-->
<!--                    <h1 class="font-bold">{{ book3.bookTitle }}</h1>-->
<!--                    <h2 v-for="author in book3.bookAuthor">{{ author }}</h2>-->
<!--                </div>-->

<!--                <div class="asd">-->
<!--                    <h1 class="font-bold">{{ book4.bookTitle }}</h1>-->
<!--                    <h2 v-for="author in book4.bookAuthor">{{ author }}</h2>-->
<!--                </div>-->

<!--                <div class="asd">-->
<!--                    <h1 class="font-bold">{{ book5.bookTitle }}</h1>-->
<!--                    <h2 v-for="author in book5.bookAuthor">{{ author }}</h2>-->
<!--                </div>-->

<!--                <div class="asd">-->
<!--                    <h1 class="font-bold">{{ book6.bookTitle }}</h1>-->
<!--                    <h2 v-for="author in book6.bookAuthor">{{ author }}</h2>-->
<!--                </div>-->

<!--                <div class="asd">-->
<!--                    <h1 class="font-bold">{{ book7.bookTitle }}</h1>-->
<!--                    <h2 v-for="author in book7.bookAuthor">{{ author }}</h2>-->
<!--                </div>-->

<!--                <div class="asd">-->
<!--                    <h1 class="font-bold">{{ book8.bookTitle }}</h1>-->
<!--                    <h2 v-for="author in book8.bookAuthor">{{ author }}</h2>-->
<!--                </div>-->
<!--            </figure>-->
<!--        </div>-->
<!--        <UtilVerticalSpacer :height="2" units="rem"/>-->
<!--    </div>-->
</template>

<script>
// import {generateSingleBook, generateBooks, fillArrayWithBooks} from "../../composables/fetchBooksFromAPI.js";
// import CardCarousel from "../card/CardCarousel";

let bookCollection = []

export default {
    name: "SectionBookSelection",
    // components: {CardCarousel},
    //
    // data() {
    //     return {
    //         bookInformation: [],
    //         bookCollection: bookCollection,
    //         book1: {},
    //         book2: {},
    //         book3: {},
    //         book4: {},
    //         book5: {},
    //         book6: {},
    //         book7: {},
    //         book8: {},
    //         showing: false
    //     }
    // },
    // methods: {
    //     addBookToCollection(book) {
    //         this.bookCollection.push(book)
    //     }
    // },
    // computed: {},
    // mounted() {
    //     window.addEventListener('load', () => {
    //         var
    //             carousels = document.querySelectorAll('.carousel')
    //         ;
    //
    //         for (var i = 0; i < carousels.length; i++) {
    //             carousel(carousels[i]);
    //         }
    //     });
    //
    //     function carousel(root) {
    //         var
    //             figure = root.querySelector('figure'),
    //             nav = root.querySelector('nav'),
    //             images = figure.children,
    //             n = images.length,
    //             gap = root.dataset.gap || 0,
    //             bfc = 'bfc' in root.dataset,
    //
    //             theta = 2 * Math.PI / n,
    //             currImage = 0
    //
    //
    //
    //         ;
    //
    //         setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    //         window.addEventListener('resize', () => {
    //             setupCarousel(n, parseFloat(getComputedStyle(images[0]).width))
    //         });
    //
    //         setupNavigation();
    //
    //         function setupCarousel(n, s) {
    //             var
    //                 apothem = s / (2 * Math.tan(Math.PI / n))
    //             ;
    //
    //             figure.style.transformOrigin = `50% 50% ${-apothem}px`;
    //
    //             for (var i = 0; i < n; i++)
    //                 images[i].style.padding = `${gap}px`;
    //             for (i = 1; i < n; i++) {
    //                 images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
    //                 images[i].style.transform = `rotateY(${i * theta}rad)`;
    //             }
    //             if (bfc) {
    //                 for (i = 0; i < n; i++) {
    //                     images[i].style.backfaceVisibility = 'hidden';
    //
    //                 }
    //             }
    //
    //             rotateCarousel(currImage);
    //         }
    //
    //         function setupNavigation() {
    //             nav.addEventListener('click', onClick, true);
    //
    //             function onClick(e) {
    //                 e.stopPropagation();
    //
    //                 var t = e.target;
    //                 if (t.tagName.toUpperCase() !== 'BUTTON')
    //                     return;
    //
    //                 if (t.classList.contains('next')) {
    //                     currImage++;
    //                 } else {
    //                     currImage--;
    //                 }
    //
    //
    //                 // console.log("Logs: " + this.bookCollection[currImage].bookTitle);
    //                 // document.getElementById("title").innerHTML = this.bookCollection[currImage].bookTitle;
    //                 // document.getElementById("author").innerHTML = this.bookCollection[currImage].bookAuthor;
    //                 rotateCarousel(currImage);
    //             }
    //
    //         }
    //
    //         function rotateCarousel(imageIndex) {
    //             figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    //
    //             var items = document.getElementsByClassName("asd");
    //             // for(let i = 0; i < 8; i++) {
    //             //     info[i].style.display = "hidden";
    //             // }
    //             hideItems(items);
    //         }
    //
    //         function hideItems(items) {
    //             let value = currImage % 8;
    //
    //             if (value < 0) {
    //                 value = 8 - Math.abs(value);
    //             }
    //             for(var i=0, len = items.length; i < len; i++) {
    //                 items[i].style.display = "none";
    //             }
    //             items[Math.abs(value)].style.display = "block";
    //
    //         }
    //
    //
    //     }
    // },
    // async created() {
    //     // this.bookInformation = await generateBooks()
    //     //
    //     // console.log("BookInfo" + this.bookInformation);
    //     // for (const bookPair of this.bookInformation) {
    //     //     await bookPair.forEach(async (book) => {
    //     //         console.log("low")
    //     //         console.log(book)
    //     //         await this.bookCollection.push(book)
    //     //     })
    //     // }
    //
    //     this.bookCollection = await fillArrayWithBooks();
    //
    //     this.book1 = this.bookCollection[0];
    //     this.book2 = this.bookCollection[1];
    //     this.book3 = this.bookCollection[2];
    //     this.book4 = this.bookCollection[3];
    //     this.book5 = this.bookCollection[4];
    //     this.book6 = this.bookCollection[5];
    //     this.book7 = this.bookCollection[6];
    //     this.book8 = this.bookCollection[7];
    //     this.showing = true
    // }
}
</script>

<style scoped>
/*body {*/
/*    margin: 0;*/
/*    font-family: 'Roboto', sans-serif;*/
/*    font-size: 16px;*/
/*}*/

/*h1 {*/
/*    text-align: center;*/
/*    margin-bottom: 0.5em;*/
/*}*/

/*h2 {*/
/*    text-align: center;*/
/*    color: #555;*/
/*    margin-bottom: 0;*/
/*}*/

/*.carousel {*/
/*    perspective: 500px;*/
/*    overflow: hidden;*/
/*    display: flex;*/
/*    flex-direction: column;*/
/*    align-items: center;*/
/*}*/

/*.carousel > * {*/
/*    flex: 0 0 auto;*/
/*}*/

/*.carousel figure {*/
/*    margin: 0;*/
/*    transform-style: preserve-3d;*/
/*    transition: transform 0.5s;*/
/*}*/

/*.carousel figure img {*/
/*    width: 100%;*/
/*    box-sizing: border-box;*/
/*    padding: 0 0px;*/
/*}*/

/*.carousel figure img:not(:first-of-type) {*/
/*    position: absolute;*/
/*    left: 0;*/
/*    top: 0;*/
/*}*/

/*.carousel nav {*/
/*    display: flex;*/
/*    justify-content: center;*/
/*    margin: 20px 0 0;*/
/*}*/

/*.carousel nav button {*/
/*    flex: 0 0 auto;*/
/*    margin: 0 5px;*/
/*    cursor: pointer;*/
/*    color: #333;*/
/*    letter-spacing: 1px;*/
/*    padding: 5px 10px;*/
/*}*/

/*.asd {*/
/*    border-image-width: 10px;*/
/*}*/
</style>