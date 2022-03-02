import {Book} from "../model/Book";

let developerBook = {
    title: 'Understanding Algos',
    genre: 'Computer Science',
    year: 2009,
    publisher: 'Tata McGrawHill'
}

// This declaration works because of the concept of duck typing
// which is possible since it matches all attributes of Book interface
// along-with the new ones defined in the object.
let myBook: Book = developerBook;

console.log(myBook);
