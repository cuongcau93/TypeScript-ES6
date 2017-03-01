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
//Example 4: Readonly modifier
console.log("readonly properties");
class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
        this.name = theName;
    }
}

let dad = new Octopus("Example 4.1: readonly properties");
//dad.name = "LOL"; error because name is type readonly

//Example 4.2: readonly parameter properties
class Octopuss {
    readonly numberOfLegs: number = 8;
    constructor(readonly name: string) {
        console.log("readonly parameter properties "+name);
    }
}

//Example 5:Set vs Get in TypeScript
let passcode = "secret passcode";
class Employee5 {
    private _fullName: string;
    get fullName(): string {
        return this._fullName;
    }
    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee5 = new Employee5();
employee5.fullName = "Nguyen Manh Cuong";
if (employee5.fullName) {
    console.log("Example 5.1: " + employee5.fullName);
}

//Example 6.1 static Properties in typeScript
class Grid {
    static origin = { x: 0, y: 0 };
    constructor(public scale: number) { }
    calculateDistanceFromOrigin(point: { x: number; y: number }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}
let grid = new Grid(1.0);
console.log("Example 6.1: " + grid.calculateDistanceFromOrigin({ x: 10, y: 20 }));

//Example 7: abstrack class
abstract class Department {
    constructor(public name: string) {

    }
    printName(): void {
        console.log("Department name: " + this.name);
    }
    abstract printMeeting(): void; //must be implemented in derived classes
}

class AccountingDepartment extends Department {
    constructor() {
        super("Nguyen Manh Cuong ab");
    }
    printMeeting(): void {
        console.log("Hello");
    }
    generateRepoets(): void {
        console.log("Goodbye");
    }
}
let department: Department; //ok to create a reference to an abstract type
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//department.generateRepoets(); // error: method doesn't exist on declared abstract type

//Example 8: Advanced Techniques
class Greeter8 {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter8: Greeter8;
greeter8 = new Greeter8("World");
console.log("Example 8.1: " + greeter8.greet());

class Greeter9 {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter9.standardGreeting;
        }
    }
}

let greeter1: Greeter9;
greeter1 = new Greeter9();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter9 = Greeter9;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter9 = new greeterMaker();
console.log(greeter2.greet());

