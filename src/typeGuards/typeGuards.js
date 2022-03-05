console.log('------Type guard instanceof ---------');
//instanceof
//used to compare typeof varialbe with class
var Phone = /** @class */ (function () {
    function Phone() {
    }
    Phone.prototype.callSomeone = function () {
        console.log('call someone');
    };
    return Phone;
}());
var Tablet = /** @class */ (function () {
    function Tablet() {
    }
    Tablet.prototype.watchMovie = function () {
        console.log('watching movie');
    };
    return Tablet;
}());
var device = new Phone();
if (device instanceof Phone) {
    device.callSomeone();
}
else {
    device.watchMovie();
}
//typeof, used to compare string, number, boolean and symbol
console.log('------Type guard typeof ---------');
var x = 123;
if (typeof x === 'string') {
    console.log("".concat(x, " is a string"));
}
else {
    console.log("".concat(x, " is a number"));
}
//user defined: need a helper function to tell us if type is matching
console.log('------Custom type guard---------');
var isVehicle = function (v) {
    return v.wheels !== undefined;
};
var myVehicle = {
    wheels: 8
};
console.log(isVehicle(myVehicle));
