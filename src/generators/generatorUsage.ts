
function* myGenerator() {
    yield 1;
    console.log('completed 1st yeild');
    yield 2;
}

let myGen: any = myGenerator();

console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
