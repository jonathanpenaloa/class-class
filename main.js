class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    toString() {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
}

class Teacher extends Person {
    constructor(name, age, address, subject) {
        super(name, age, address);
        this.subject = subject;
    }
    toString() {
        return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}, Subject: ${this.subject}`;
    }
}

myPerson = new Person("John", 20, "London");
myTeacher = new Teacher("John", 20, "London", "Math");

console.log(myTeacher.toString());
console.log(myPerson.toString());