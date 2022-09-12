import Axios from 'axios'

const primary = [
    "programming", "medicine", "history", "geography", "mathematics", "philosophy", "psychology", "business", "law"
]

const secondary = [
    "flexible", "mystery", "possession", "canvas", "oppose", "fresh", "computing", "cattle", "full", "abundant"
]

const generateKeyword = () => {
    let keyword = "";
    const primaryIndex = Math.floor(Math.random() * primary.length);
    const secondaryIndex = Math.floor(Math.random() * secondary.length);
    keyword = `${primary[primaryIndex]}+${secondary[secondaryIndex]}`;
    return keyword;
}

const getBooksFromAPI = async (query) => {
    try {
        const API_URL = `https://openlibrary.org/search.json?q=${query}`
        const response = await Axios.get(API_URL);
        const numberOfBooks = await response.data.numFound;
        let randomDocIndex = 0
        console.log(numberOfBooks);
        if (numberOfBooks > 99) {
            randomDocIndex = Math.floor(Math.random() * 99);
        } else {
            randomDocIndex = Math.floor(Math.random() * numberOfBooks);
        }
        if(!("cover_i" in await response.data.docs[randomDocIndex])) {
            console.log("No cover image");
            return getBooksFromAPI(generateKeyword())
        }
        return {
            bookTitle: response.data.docs[randomDocIndex].title,
            bookAuthor: response.data.docs[randomDocIndex].author_name,
            bookImageURL: `http://covers.openlibrary.org/b/id/${response.data.docs[randomDocIndex].cover_i}-L.jpg`
        }
    } catch (e) {
        console.log(e)
    }
}



export const generateBooks = async () => {
    let generatedBooks = []
    generatedBooks.push(await getBooksFromAPI(generateKeyword()));
    generatedBooks.push(await getBooksFromAPI(generateKeyword()));
    generatedBooks.push(await getBooksFromAPI(generateKeyword()));
    generatedBooks.push(await getBooksFromAPI(generateKeyword()));
    console.log(generatedBooks)
    return generatedBooks
}

export const generateSingleBook = async () => {
    return await getBooksFromAPI(generateKeyword())
}

// module.exports = { generatedBooks, generateBooks }

