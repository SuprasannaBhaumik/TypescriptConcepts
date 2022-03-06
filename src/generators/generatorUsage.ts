
function* myGenerator() {
    yield 1;
    console.log('completed 1st yield');
    yield 2;
}

let myGen: any = myGenerator();

console.log(myGen.next());// { value: 1, done: false }
console.log(myGen.next());// completed 1st yield  { value: 2, done: false }
console.log(myGen.next());// { value: undefined, done: true }


let person = {
    fname: 'Suprasanna',
    lname: 'Bhaumik'
}

person[Symbol.iterator] = function* () {
    let properties = Object.keys(person);
    for (let p of properties) {
        yield this[p];
    }
}

let myIterator = person[Symbol.iterator]();
console.log(myIterator.next());// { value: 'Suprasanna', done: false }
console.log(myIterator.next());// { value: 'Bhaumik', done: false }
console.log(myIterator.next());// { value: undefined, done: true }

