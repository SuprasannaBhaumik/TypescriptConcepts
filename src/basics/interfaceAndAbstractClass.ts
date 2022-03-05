export interface Person {
    title: string;
    getTitle(): string;
    age: number
}

class MyClass implements Person {
    age: number;
    title: string;

    constructor(age: number, title: string) {
        this.age = age;
        this.title = title;
    }

    getTitle = (): string => this.title;

}

const demo: MyClass = new MyClass(35, 'supra');
const title = demo.getTitle();
console.log(title);


