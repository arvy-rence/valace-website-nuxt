<template>
    <div class="py-[4rem]" id="book-section">
        <h1 class="font-bold text-4xl md:text-6xl text-primary text-center font-khula">BOOK SELECTION</h1>
        <div class="cards">
            <div class="card bg-white" data-card="0">
                <div class="card__detail">
                    <img :src="book1.bookImageURL" class="h-full"/>
                </div>
            </div>
            <div class="card bg-white" data-card="1">
                <div class="card__detail">
                    <img :src="book2.bookImageURL" class="h-full"/>
                </div>
            </div>
            <div class="card bg-white" data-card="2">
                <div class="card__detail">
                    <img :src="book3.bookImageURL" class="h-full"/>
                </div>
            </div>
        </div>
        <div class="titles">
            <div class="title">
                <h1 class="text-3xl font-bold text-primary font-kulim">{{book1.bookTitle}}</h1>
                <p class="text-2xl text-primary font-kulim" v-for="author in book1.bookAuthor">{{ author }}</p>
            </div>
            <div class="title">
                <h1 class="text-3xl font-bold text-primary font-kulim">{{book2.bookTitle}}</h1>
                <p class="text-2xl text-primary font-kulim" v-for="author in book2.bookAuthor">{{ author }}</p>
            </div>
            <div class="title">
                <h1 class="text-3xl font-bold text-primary font-kulim">{{book3.bookTitle}}</h1>
                <p class="text-2xl text-primary font-kulim" v-for="author in book3.bookAuthor">{{ author }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import {getTrendingBooks} from "../../composables/fetchBooksFromAPI";

export default {
    name: "SectionNewBookSelection",

    mounted() {
        window.addEventListener('DOMContentLoaded', () => {
            setTimeout(init, 1)
        }, true);

        function init(e) {
            if (document.querySelector(".cards")) {
                let cards = document.querySelector(".cards");
                cards.addEventListener('click', clicked, false);
                document.querySelectorAll(".cards .card")[1].click();
            }
        }

        function clicked(e) {
            let card = e.target;
            if (card.getAttribute("data-card")) {
                rearrange(card.getAttribute("data-card"));
            }
        }

        function rearrange(card) {
            let cards = document.querySelectorAll(".cards .card");
            for (let n = 0; n < cards.length; n++) {
                cards[n].classList.remove("card--left");
                cards[n].classList.remove("card--center");
                cards[n].classList.remove("card--right");
            }
            cards[card].classList.add("card--center");
            if (card == 0) {
                cards[2].classList.add("card--left");
                cards[1].classList.add("card--right");

            }
            if (card == 1) {
                cards[0].classList.add("card--left");
                cards[2].classList.add("card--right");
            }
            if (card == 2) {
                cards[1].classList.add("card--left");
                cards[0].classList.add("card--right");
            }

            let titles = document.getElementsByClassName("title");
            for (let i = 0; i < titles.length; i++) {
                titles[i].style.display = "none";
            }
            titles[card].style.display = "block";
        }


        init();
    },
    data() {
        return {
            books: [],
            book1: {},
            book2: {},
            book3: {}
        }
    },

    async created() {
        this.books = await getTrendingBooks()
        this.book1 = this.books[0];
        this.book2 = this.books[1];
        this.book3 = this.books[2];
        // console.log(this.books)
    }
}
</script>

<style scoped>
.fill-purple {
    background-image: linear-gradient(90deg, #4addff, #a34dfe);
}

.fill-green {
    background-image: linear-gradient(90deg, #ffe40c, #33d497);
}

.fill-blue {
    background-image: linear-gradient(90deg, #285ca5, #18d5ff);
}

.fill-orange {
    background-image: linear-gradient(90deg, #fcf595, #ff954d);
}

.cards {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 30rem;
    width: 100%;
    padding: 2rem 0 0 0;
}

.card {
    display: flex;
    width: 22rem;
    height: 25.25rem;
    border-radius: 0.5rem;
    transform-origin: center center;
    transform: scale(1) translate(0px, 0px) perspective(750px) rotateY(0deg);
    transition-timing-function: cubic-bezier(0.42, 0, 0.58, 1);
    transition-duration: 0.5s;
    position: absolute;
    top: 20;
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.1);
    z-index: 3;
    cursor: pointer;
    overflow: hidden;
}

.card * {
    pointer-events: none;
}

.card--left {
    transform: scale(0.75) translate(-335px, 0px) perspective(750px) rotateY(10deg);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
    z-index: 1;
}

.card--center {
    transform: scale(1) translate(0px, 0px) perspective(750px) rotateY(0deg);
    box-shadow: 0 30px 50px rgba(0, 0, 0, 0.1);
    z-index: 3;
}

.card--right {
    transform: scale(0.75) translate(335px, 0px) perspective(750px) rotateY(-10deg);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
    z-index: 1;
}

.card__detail {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.titles {
    text-align: center;
    margin-top: 0;
}

@media only screen and (max-width: 736px) {
    .cards {
        flex-direction: column;
        margin: auto 0;
    }

    .card {
        display: flex;
        width: 50%;
        height: 70%;
    }

    .card--left {
        transform: scale(0.75) translate(-220px, 0px) perspective(750px) rotateY(0) rotateX(-10deg) translateZ(-5px);
    }

    .card--center {
        transform: scale(1) translate(0px, 0px) perspective(750px) rotateY(0deg) rotateX(0deg) translateZ(5px);
    }

    .card--right {
        transform: scale(0.75) translate(220px, 0px) perspective(750px) rotateY(0) rotateX(10deg) translateZ(-5px);
    }
    .titles {
        margin-top: 0rem;
    }
}

@media only screen and (max-width: 490px) {
    .cards {
        flex-direction: column;
        margin: auto 0;
    }

    .card {
        display: flex;
        width: 50%;
        height: 50%;
        top: 30px;
    }

    .card--left {
        transform: scale(0.75) translate(-120px, 0px) perspective(750px) rotateY(0) rotateX(-10deg) translateZ(-5px);
    }

    .card--center {
        transform: scale(1) translate(0px, 0px) perspective(750px) rotateY(0deg) rotateX(0deg) translateZ(5px);
    }

    .card--right {
        transform: scale(0.75) translate(120px, 0px) perspective(750px) rotateY(0) rotateX(10deg) translateZ(-5px);
    }
    .titles {
        margin-top: -10rem;
    }
}

.hidden {
    display: none;
}
</style>