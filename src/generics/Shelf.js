"use strict";
exports.__esModule = true;
exports.Shelf = void 0;
var Shelf = /** @class */ (function () {
    function Shelf() {
        this._items = [];
    }
    Shelf.prototype.addItemToCatalog = function (item) {
        console.log('added item to catalog');
        console.log(item);
    };
    Shelf.prototype.removeItemFromCatalog = function (item) {
        console.log('remove item from catalog');
    };
    return Shelf;
}());
exports.Shelf = Shelf;
