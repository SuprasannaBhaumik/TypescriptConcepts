var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    return Student;
}());
var student1 = new Student('Supra', 36);
console.log(student1);
var AutomaticStudent = /** @class */ (function () {
    function AutomaticStudent(name, age, isAbsent) {
        this.name = name;
        this.age = age;
        this.isAbsent = isAbsent;
    }
    return AutomaticStudent;
}());
var student2 = new AutomaticStudent('b2', 36, true);
console.log(student2);
