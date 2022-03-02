"use strict";
exports.__esModule = true;
var Shelf_1 = require("./Shelf");
var book = {
    genre: 'Horror',
    title: 'Dracula'
};
var magazine = {
    name: 'Wisden Cricket',
    isbn: '1234456356456',
    publisher: 'Wisden'
};
var bookShelf = new Shelf_1.Shelf();
bookShelf.addItemToCatalog(book);
var magazineShelf = new Shelf_1.Shelf();
magazineShelf.addItemToCatalog(magazine);
