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
//Example 3.1: public by default
class Animal3 {
    public name: string;
    public constructor(theName: string) {
        this.name = theName;
    }
    public move(distanceInmeters): string {
        return `${this.name} moved ${distanceInmeters}m`;
    }
}
let animal3 = new Animal3("Nguyen Manh Cuong");
console.log("Example 3.1: " + animal3.name);
//Example 3.2: Understanding private
class Animal31 {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
class Rhino extends Animal31 {
    constructor() {
        super("Rhino");
    }
}
class Employee31 {
    private name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}
let animal31 = new Animal31("Nguyen Manh Cuong");
let rhino = new Rhino();
let employee31 = new Employee31("Bob");
animal31 = rhino;
//animal31 = employee31; khong tuong thich
//console.log("Example 3: " + animal31.name);

//Example 3.3: Understanding protected
class Person33 {
    public name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Employee33 extends Person33 {
    private departement: string;
    constructor(name: string, departement: string) {
        super(name);
        this.departement = departement;
    }
    public getElevatorPitch(): string {
        return `Hello, my name is ${this.name} and I work in ${this.departement}.`;
    }
}
let test = new Person33("lol");
let howard = new Employee33("Cuong", "sales");
console.log("Example 3.3: " + howard.getElevatorPitch());
//console.log(howard.name); error because name in person is protected
//de protected or private then cac doi tuong ben ngoai se khong goi duoc no
//protected thi cac lop con van ke thua duoc
//Example 3.4: Inheritance in method protected
class Person34 {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee can extend Person
class Employee34 extends Person34 {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard34 = new Employee34("Howard", "Sales");
//let john = new Person34("John"); // Error: The 'Person' constructor is protected

