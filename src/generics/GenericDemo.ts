import {Book} from "../model/Book";
import {Shelf} from "./Shelf";
import {Magazine} from "../model/Magazine";
import {MagazineShelf} from "./MagazineShelf";

let book: Book = {
    genre: 'Horror',
    title: 'Dracula'
}

let magazine: Magazine = {
    name: 'Wisden Cricket',
    isbn: '1234456356456',
    publisher: 'Wisden'
}

let bookShelf: Shelf<Book> = new Shelf<Book>();
bookShelf.addItemToCatalog(book);


let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazineShelf.addItemToCatalog(magazine);
