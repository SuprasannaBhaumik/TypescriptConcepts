import {Book} from "../model/Book";

export class BookShelf {

    _books: Book[] = [];

    addBookToShelf(newBook: Book) {
        console.log('added book');
    }

    removeBookFromShelf(book: Book) {
        console.log('Removed book from shelf');
    }

}
