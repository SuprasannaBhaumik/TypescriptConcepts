console.log('------Type guard instanceof ---------');
//instanceof
//used to compare typeof varialbe with class
class Phone {
    callSomeone() {
        console.log('call someone');
    }
}
class Tablet {
    watchMovie() {
        console.log('watching movie');
    }
}
let device: Phone | Tablet = new Phone();
if( device instanceof Phone) {
    device.callSomeone();
} else {
    (<Tablet>device).watchMovie();
}


//typeof, used to compare string, number, boolean and symbol
console.log('------Type guard typeof ---------');
let x: number | string = 123;
if( typeof x === 'string') {
    console.log(`${x} is a string`);
} else {
    console.log(`${x} is a number`);
}

//user defined: need a helper function to tell us if type is matching
console.log('------Custom type guard---------');
interface Vehicle {
    wheels: number;
}
const isVehicle = (v: any): v is Vehicle => {
    return <Vehicle>v.wheels !== undefined;
}

let myVehicle: Vehicle =  {
    wheels: 8
};

console.log(isVehicle(myVehicle));
