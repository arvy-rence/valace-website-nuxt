<template>
    <div class="pt-[82.8px]"></div>
    <h2>Hidden backfaces</h2>
    <div class="carousel" data-gap="0" data-bfc>
        <figure class="w-4/5 md:w-1/4">
            <img class="h-52 lg:h-96 object-contain hover:object-scale-down" :src="book1.bookImageURL" alt="">
            <img class="h-52 lg:h-96 object-contain hover:object-scale-down" :src="book2.bookImageURL" alt="">
            <img class="h-52 lg:h-96 object-contain hover:object-scale-down" :src="book3.bookImageURL" alt="">
            <img class="h-52 lg:h-96 object-contain hover:object-scale-down" :src="book4.bookImageURL" alt="">
            <img class="h-52 lg:h-96 object-contain hover:object-scale-down" :src="book5.bookImageURL" alt="">
            <img class="h-52 lg:h-96 object-contain hover:object-scale-down" :src="book6.bookImageURL" alt="">
            <img class="h-52 lg:h-96 object-contain hover:object-scale-down" :src="book7.bookImageURL" alt="">
            <img class="h-52 lg:h-96 object-contain hover:object-scale-down" :src="book8.bookImageURL" alt="">
        </figure>
        <nav>
            <button class="nav prev">Prev</button>
            <button class="nav next">Next</button>
        </nav>
    </div>
</template>

<script>
import {generateBooks} from "../composables/fetchBooksFromAPI.js";
import CardCarousel from "../components/card/CardCarousel";

export default {
    name: "test2",
    components: {CardCarousel},
    data() {
        return {
            bookInformation: [],
            bookCollection: [],
            book1: {},
            book2: {},
            book3: {},
            book4: {},
            book5: {},
            book6: {},
            book7: {},
            book8: {},
        }
    },
    methods: {
        addBookToCollection(book) {
            this.bookCollection.push(book)
        }
    },
    mounted() {
        window.addEventListener('load', () => {
            var
                carousels = document.querySelectorAll('.carousel')
            ;

            for (var i = 0; i < carousels.length; i++) {
                carousel(carousels[i]);
            }
        });

        function carousel(root) {
            var
                figure = root.querySelector('figure'),
                nav = root.querySelector('nav'),
                images = figure.children,
                n = images.length,
                gap = root.dataset.gap || 0,
                bfc = 'bfc' in root.dataset,

                theta = 2 * Math.PI / n,
                currImage = 0
            ;

            setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
            window.addEventListener('resize', () => {
                setupCarousel(n, parseFloat(getComputedStyle(images[0]).width))
            });

            setupNavigation();

            function setupCarousel(n, s) {
                var
                    apothem = s / (2 * Math.tan(Math.PI / n))
                ;

                figure.style.transformOrigin = `50% 50% ${-apothem}px`;

                for (var i = 0; i < n; i++)
                    images[i].style.padding = `${gap}px`;
                for (i = 1; i < n; i++) {
                    images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
                    images[i].style.transform = `rotateY(${i * theta}rad)`;
                }
                if (bfc)
                    for (i = 0; i < n; i++)
                        images[i].style.backfaceVisibility = 'hidden';

                rotateCarousel(currImage);
            }

            function setupNavigation() {
                nav.addEventListener('click', onClick, true);

                function onClick(e) {
                    e.stopPropagation();

                    var t = e.target;
                    if (t.tagName.toUpperCase() !== 'BUTTON')
                        return;

                    if (t.classList.contains('next')) {
                        currImage++;
                    } else {
                        currImage--;
                    }

                    rotateCarousel(currImage);
                }

            }

            function rotateCarousel(imageIndex) {
                figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
            }

        }
    },
    async created() {
        this.bookInformation = await generateBooks()
        this.bookInformation.forEach((bookPair) => {
            bookPair.forEach((book) => {
                this.bookCollection.push(book)
            })
        })
        this.book1 = this.bookCollection[0];
        this.book2 = this.bookCollection[1];
        this.book3 = this.bookCollection[2];
        this.book4 = this.bookCollection[3];
        this.book5 = this.bookCollection[4];
        this.book6 = this.bookCollection[5];
        this.book7 = this.bookCollection[6];
        this.book8 = this.bookCollection[7];
        console.log(this.bookCollection)
    }
}
</script>

<style scoped>
body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
}

h1 {
    text-align: center;
    margin-bottom: 1.5em;
}

h2 {
    text-align: center;
    color: #555;
    margin-bottom: 0;
}

.carousel {
    padding: 20px;
    perspective: 500px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.carousel > * {
    flex: 0 0 auto;
}

.carousel figure {
    margin: 0;
    transform-style: preserve-3d;
    transition: transform 0.5s;
}

.carousel figure img {
    width: 100%;
    box-sizing: border-box;
    padding: 0 0px;
}

.carousel figure img:not(:first-of-type) {
    position: absolute;
    left: 0;
    top: 0;
}

.carousel nav {
    display: flex;
    justify-content: center;
    margin: 20px 0 0;
}

.carousel nav button {
    flex: 0 0 auto;
    margin: 0 5px;
    cursor: pointer;
    color: #333;
    background: none;
    border: 1px solid;
    letter-spacing: 1px;
    padding: 5px 10px;
}

</style>