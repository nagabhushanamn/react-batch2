


// ES5

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sayName = function () {
//     console.log('im ' + this.name)
// }
// Person.prototype.sayAge = function () {
//     console.log('im ' + this.age + " old");
// }


// ES6


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        console.log('Person::constructor')
    }
    sayName() {
        console.log('im ' + this.name)
    }
    sayAge() {
        console.log('im ' + this.age + " old");
    }
}


// const p1 = new Person('Nag', 35)

class Employee extends Person {
    constructor(name, age, salary) {
        super(name, age)
        this.salary = salary;
        console.log('Employee::constructor');
    }
    saySalary() {
        console.log('i wont');
    }
    askForRaise() {
        return this.salary * 0.02;
    }
}

// const e1 = new Employee('Nag', 35, 1000)

class Boss extends Employee {
    askForRaise() {
        return this.salary * 0.2 + super.askForRaise();
    }
}

const boss1 = new Boss('Nag', 35, 1000.00)

const boss2 = new Boss('Nag')



class Abc {
    static staMethod() {
        //
    }
}
Abc.staVar1 = 100
Abc.staVar2 = 200

Abc.staMethod();
