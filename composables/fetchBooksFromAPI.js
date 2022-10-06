import Axios from 'axios'

export const getTrendingBooks = async () => {
    let api = "https://openlibrary.org/trending/daily.json"
    const books = await Axios.get(api);
    let bookList = [];

    for (let i = 0; i < 3; i++) {
        let randomDocIndex = Math.floor(Math.random() * 100);
        if (books.data.works[randomDocIndex].cover_i === undefined) {
            i--;
            continue;
        }
        let bookImageURL = `https://covers.openlibrary.org/b/id/${books.data.works[randomDocIndex].cover_i}-L.jpg`;
        let bookTitle = books.data.works[randomDocIndex].title;
        let authorName = books.data.works[randomDocIndex].author_name;

        bookList.push({
            bookTitle: bookTitle,
            bookAuthor: authorName,
            bookImageURL: bookImageURL
        });
    }

    return bookList;
}