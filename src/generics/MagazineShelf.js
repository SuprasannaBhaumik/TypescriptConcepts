"use strict";
exports.__esModule = true;
exports.MagazineShelf = void 0;
var MagazineShelf = /** @class */ (function () {
    function MagazineShelf() {
        this._magazines = [];
    }
    MagazineShelf.prototype.addMagazineToShelf = function (magazine) {
        console.log('add magazine to shelf');
    };
    MagazineShelf.prototype.removeMagazineFromShelf = function (magazine) {
        console.log('removed magazine from shelf');
    };
    return MagazineShelf;
}());
exports.MagazineShelf = MagazineShelf;
