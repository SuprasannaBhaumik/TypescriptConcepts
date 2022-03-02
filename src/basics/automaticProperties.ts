
class Student {
    private name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

let student1 = new Student('Supra', 36);
console.log(student1);

class AutomaticStudent {
    constructor(private name: string, public age: number, public isAbsent: boolean) {
    }
}

let student2 = new AutomaticStudent('b2', 36, true);
console.log(student2);
