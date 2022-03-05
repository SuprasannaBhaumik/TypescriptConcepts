let CUSTOM_SYMBOL: symbol = Symbol('method');

class MyClass {

    title: string;

    constructor() {}

    //Usage1: as a constant value, this is immutable and will never change
    CONST_SYMBOL: symbol = Symbol('constant');

    //Usage 2: method as symbol
    [CUSTOM_SYMBOL]() {
        console.log('symbol used as method name');
    }

    //usage3: to override inferred behaviour
    // override instanceof
    // it is represented by the symbol: [symbol.hasInstance]
    //this has to be overriden
    /*static [Symbol.hasInstance](obj: any) {
        return obj.hasOwnProperty('title');
    }*/

}

let myClass: MyClass = new MyClass();
myClass[CUSTOM_SYMBOL]();

//to run: tsc -p .\tsconfig.json
// followed by node symbolUsage.js
//also make the change : "lib": [ "es2015.symbol" ]
