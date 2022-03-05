"use strict";
exports.__esModule = true;
var MyClass = /** @class */ (function () {
    function MyClass(age, title) {
        var _this = this;
        this.getTitle = function () { return _this.title; };
        this.age = age;
        this.title = title;
    }
    return MyClass;
}());
var demo = new MyClass(35, 'supra');
var title = demo.getTitle();
console.log(title);
