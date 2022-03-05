var CUSTOM_SYMBOL = Symbol('method');
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    //method as symbol
    MyClass.prototype[CUSTOM_SYMBOL] = function () {
        console.log('symbol used as method name');
    };
    return MyClass;
}());
var myClass = new MyClass();
myClass[CUSTOM_SYMBOL]();
