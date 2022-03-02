// Arrow function
const myFirstArrowFunc = (x: number, y: string): string => {
    return y+x;
}
console.log(myFirstArrowFunc(34, 'supra'));

//Function reference, always defined with let and colon
let myFunRef: (num: number, str: string) => string;

//assign it directly without any arguments, or signatures
myFunRef = myFirstArrowFunc;

//call it
console.log(myFunRef(26, 'b2'));
