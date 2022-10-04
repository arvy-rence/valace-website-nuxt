import Axios from 'axios'

const primary = [
    "programming", "medicine", "history", "geography", "mathematics","business", "law",
    "Action", "Adventure", "Art", "Architecture", "Alternate History", "Autobiography", "Anthology", "Biography",
    "Business/economics", "Children's", "Crafts/hobbies", "Classic", "Cookbook", "Comic book", "Diary",
    "Dictionary","Encyclopedia", "Guide", "Fairytale", "Health/fitness", "Fantasy", "History",
    "Home and garden", "Historical fiction", "Humor", "Journal", "Mystery", "Math",
    "Memoir", "Picture book","Poetry", "Health", "Career", "Life", "Infrastucture",
    "Textbook","Science fiction", "Review", "Short story", "Thesaurus",
    "Science","Self help","Sports", "Western", "Travel"
]

const secondary = [
    "flexible", "mystery", "possession", "canvas", "oppose", "fresh", "computing", "cattle", "full", "abundant"
]

export const fillArrayWithBooks = async () => {
    let fullBookList = [];
    let generatedBookies = await generateBooks();
    // console.log("Full");
    // console.log(generatedBookies);
    for (let y = 0; y < generatedBookies.length; y++) {
        for(let x = 0; x < generatedBookies[y].length; x++) {
            fullBookList.push(generatedBookies[y][x]);
        }
    }
    // console.log("Fuller");
    // console.log(fullBookList);
    return fullBookList;
}

export const generateBooks = async () => {
    let generatedBooks = []
    generatedBooks.push(await getBooksFromAPI());
    generatedBooks.push(await getBooksFromAPI());
    generatedBooks.push(await getBooksFromAPI());
    generatedBooks.push(await getBooksFromAPI());
    return generatedBooks
}

const getBooksFromAPI = async () => {
    try {
        let response = await generateResponse();
        while (response.data.docs.length < 10) {
            response = await generateResponse();
        }
        // console.log("Response");
        // console.log(response.data.docs.length);
        // console.log("1");
        const book1 = await getBookResponse(response);
        // console.log("2 " + book1.bookTitle);
        let book2 = await getBookResponse(response);
        // console.log("3 " + book2.bookTitle);
        while (book2.bookTitle === book1.bookTitle) {
            book2 = await getBookResponse(response);
        }
        // console.log("4");
        // console.log("Bookies");
        // console.log(book1);
        // console.log(book2);
        const arr = [book1, book2];
        return arr;
    } catch (e) {
        // console.log("ASD");
        // console.log(e)
    }
}

const generateResponse = async () => {
    // console.log("Kek")
    const API_URL = `https://openlibrary.org/search.json?q=${generateKeyword()}`;
    // console.log(API_URL)
    const response = await Axios.get(API_URL);
    // console.log(response)

    return response;
}

const generateKeyword = () => {
    let keyword = "";
    const primaryIndex = Math.floor(Math.random() * primary.length);
    const secondaryIndex = Math.floor(Math.random() * secondary.length);
    keyword = `${primary[primaryIndex]}+${secondary[secondaryIndex]}`;
    return keyword;
}


export const getBookResponse = async (response) => {
    const numberOfBooks = response.data.docs.length;
    let randomDocIndex = 0
    // console.log(numberOfBooks);
    // if (numberOfBooks > 99) {
    //     randomDocIndex = Math.floor(Math.random() * 99);
    // } else {
    //     randomDocIndex = Math.floor(Math.random() * numberOfBooks);
    // }
    randomDocIndex = Math.floor(Math.random() * numberOfBooks);
    // console.log("Random Doc Index");
    // console.log(randomDocIndex);

    if(!("cover_i" in response.data.docs[randomDocIndex])) {
        // console.log("No cover image");
        return getBookResponse(response)
    }

    return {
        bookTitle: response.data.docs[randomDocIndex].title,
        bookAuthor: response.data.docs[randomDocIndex].author_name,
        bookImageURL: `https://covers.openlibrary.org/b/id/${response.data.docs[randomDocIndex].cover_i}-L.jpg`
    }
}

export const generateSingleBook = async () => {
    return await getBooksFromAPI(generateKeyword())
}



// module.exports = { generatedBooks, generateBooks }

