import {Book} from "../model/Book";
import {Newspaper} from "../model/Newspaper";
import {NewspaperAdditionalAttributes} from "../model/NewspaperAdditionalAttributes";
import {NestedLibrary} from "../model/NestedLibrary";

//Description on basic operator types:
// Optional
// Union
// Intersection
// Spread
// Destructuring arrays and objects
// Elvis

// Optional, title is not needed
let myBook: Book = {
    genre: 'Fiction'
}
console.log(myBook);

//Union type: either assignment is okay
let article: Book | Newspaper;
article = {
    date: '2022-02-28'
}
console.log(article);

//Intersection type: Must contain attributes of both
let additionalArticle: NewspaperAdditionalAttributes & Newspaper;
additionalArticle = {
    article: 'Ukraine in trouble',
    date: '2022-02-28',
    section: 'Geo-politics'
}
console.log(additionalArticle);

let number1: Array<number> = [1, 2, 3, 4, 5];

//Spread operator: copying array to another array
let number2: number[] = [6, 7, 8, ...number1];
console.log(number2);

//destructing array: uses square brackets
const [num1, num2] = number1;
console.log(num1);
console.log(num2);

//destructuring object: uses curly braces
const {genre} = myBook;
console.log(genre);

//destructuring object with alias
const {genre: var1} = myBook;
console.log(var1);

//elvis, even if library has no books, then below call will not fail
let library: NestedLibrary;

console.log(library?.books[0]?.genre);// gives undefined
console.log(library.books[0].genre);// throws exception

