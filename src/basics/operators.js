"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
exports.__esModule = true;
//Description on basic operator types:
// Optional
// Union
// Intersection
// Spread
// Destructuring arrays and objects
// Elvis
// Optional, title is not needed
var myBook = {
    genre: 'Fiction'
};
console.log(myBook);
//Union type: either assignment is okay
var article;
article = {
    date: '2022-02-28'
};
console.log(article);
//Intersection type: Must contain attributes of both
var additionalArticle;
additionalArticle = {
    article: 'Ukraine in trouble',
    date: '2022-02-28',
    section: 'Geo-politics'
};
console.log(additionalArticle);
var number1 = [1, 2, 3, 4, 5];
//Spread operator: copying array to another array
var number2 = __spreadArray([6, 7, 8], number1, true);
console.log(number2);
//destructing array: uses square brackets
var num1 = number1[0], num2 = number1[1];
console.log(num1);
console.log(num2);
//destructuring object: uses curly braces
var genre = myBook.genre;
console.log(genre);
//destructuring object with alias
var var1 = myBook.genre;
console.log(var1);
//elvis, even if library has no books, then below call will not fail
var library;
console.log((_a = library === null || library === void 0 ? void 0 : library.books[0]) === null || _a === void 0 ? void 0 : _a.genre); // gives undefined
console.log(library.books[0].genre); // throws exception
