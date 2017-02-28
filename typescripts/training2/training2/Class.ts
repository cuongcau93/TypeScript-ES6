// Class in TypeScript
//Example 1.1: Class-based
class Greater {
    greating: string;
    constructor(message: string) {
        this.greating = message;
    }
    greet() : string {
        return "Hello, " + this.greating;
    }
    static run(): string {
        return "Nguyen Manh Cuong";
    }
}

let greater = new Greater("World");
console.log("Example 1.1: " + greater.greet() + " " + Greater.run());

//Example 1.2: static in class
class Student {
    name: string;
    age: number;
    constructor(_name: string, _age: number) {
        this.name = _name;
        this.age = _age;
    }
    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
    getCount(count: number): number {
        return this.age + count;
    }
}
let st = new Student("Nguyen Manh Cuong", 19);
console.log("Example 1.2 " + st.getName() + " " + st.getAge() + " Count: " + st.getCount(1));

//Inheritance Class
//Example 2: Inheritance basic
console.log("Inheritance Class");
class Animals {
    name: string;
    constructor(theName: string) {
        this.name = "This is "+theName;
    }

    move(distanceInMeters: number = 0): string {
        let result = `${this.name} moved ${distanceInMeters}m.`;
        return result;
    }

    sum(a: number, b: number): string {
        return `a + b = ${a+b}`;
    }
}

class Snake extends Animals {
    constructor(name: string) {
        super(name);
        //console.log(super(name));
    }
    move(distanceInMeters: number = 5): string {
        let result = super.move(distanceInMeters);
        return result;
    }
}

class Horse extends Animals {
    constructor(name: string) {
        super(name);
    }
    move(distanceInMeters: number = 100): string {
        let result = super.move(distanceInMeters);
        return result;
    }
    sum(a: number, b: number): string {
        let result = super.sum(a, b);
        return result;
    }
}

let snake = new Snake("Snake");
console.log("Example 2.1: " + snake.move());
let horse = new Horse("Horse");
console.log("Example 2.2: " + horse.move());
console.log("Example 2.3: " + horse.sum(10, 20))

//Example 2.2
class Persons {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    run(): string {
        let result = `My name is ${this.name}`;
        return result;
    }
    say(): string {
        let result = `Hi ${this.name}. You are ${this.age} age`;
        return result;
    }
}

class Man extends Persons {
    gender: boolean;
    constructor(name: string, age: number, gender: boolean) {
        super(name, age);
        this.gender = gender;
    }

    run(): string {
        let result = super.run();
        return result;
    }

    getGender(): string {
        let result: string;
        if (this.gender) {
            result = "This is Male";
        } else {
            result = "This is Fmale";
        }
        return result;
    }
}

let man = new Man("CuongNm", 24, true);
console.log("Example 2.4: " + man.run() + " / " + man.getGender());

//public, private, and protected modifiers
