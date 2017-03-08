//Type Compatibility (Loai tuong thich)
console.log("Type Compatibility");
interface Named {
    name: string;
    age: number;
}
class Persond {
    name: string;
    age: number;
}
let p: Named;
p = new Persond();

//Starting out
interface Named2 {
    name: string;
}
let x: Named2;
let y = {
    name: "Alice",
    location: "ssss"
};
x = y;

function greet(n: Named2) {
    console.log("Example 1.1: " + n.name);
}
greet(y);

interface Named3 {
    age: number;
    name: string;
}

let named3: Named3;
named3 = {
    age: 17,
    name: "Nguyen Manh Cuong"
};
let studentd3 = (n: Named3) => console.log("Example 1.2: " + n.age);
studentd3(named3);
console.log("---Comparing two functions---");
let a1 = (x: number) => 0;
let b1 = (y: number, s: string) => 0;
b1 = a1;
//a1 = b1; error because variable a1 not b1
//Array#forEach
let items = [1, 2, 3];
console.log("Array#forEach");
items.forEach(items => console.log(items));
console.log("---Function Parameter Bivariance---");
enum EventType {
    Mouse,
    Keyboard
}

interface Event {
    timestamp: number;
}

interface MouseEvent extends Event {
    a2: number;
    b2: number;
}
let mouseEvent = {
    timestamp: 12,
    a2: 12,
    b2: 23
};

interface KeyEvent extends Event {
    keyCode: number;
}

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    console.log("Nguyen Manh Cuong");
}

let tet = listenEvent(EventType.Mouse, (e: MouseEvent) => console.log(e.a2 + "," + e.b2));
console.log(tet);

//Advanced Types
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
} 
class Personm {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        return "Nguyen Manh Cuong";
    }
}
var jim = extend(new Personm("Jim"), new ConsoleLogger());
var n = jim.name;
var m = jim.log();
console.log("Example 2.1: " + n + "    " + m);

//Union Types
console.log("---Union Types---")
function padLeft(value: string, padding: any) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(`${padding}`) + value;
    }
    if (typeof padding === "string") {
        return padding + " " + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
console.log(padLeft("Hello ", 12));
//let indentedString = padLeft("Hello world", true);

interface Bird {
    fly();
    layEggs();
    num();
}
interface Fish {
    swim();
    layEggs();
    num();
}
function getSmallPet(): Fish | Bird {
    return;
}

let pet = getSmallPet();
//pet.layEggs();
//pet.num();
console.log("---Type Guards and Differentiating Types---")
//Kieu bao ve & kieu khac biet
//#
//if ((<Fish>pet).swim) {
//    (<Fish>pet).swim();
//}
//else {
//    (<Bird>pet).fly();
//}
console.log("User-Defined Type Guards");
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

console.log("---instanceof---")
interface Padder {
    getPaddingString(): string;
}
class SpaceRepeatingPadder implements Padder {
    constructor(private numSpace: number) {

    }
    getPaddingString() {
        return Array(this.numSpace + 1).join("mm");
    }
}
class StringPadder implements Padder {
    constructor(private value: string) { }
    getPaddingString() {
        return this.value;
    }
}

function getRandomPadder(){
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("ll");
}
// Type is 'SpaceRepeatingPadder | StringPadder'
let padder: Padder = getRandomPadder();
console.log("Example 3.1: " + padder.getPaddingString());
if (padder instanceof SpaceRepeatingPadder) {
    console.log("Example 3.1: " + padder.getPaddingString());
}
if (padder instanceof StringPadder) {
    console.log("Example 3.1: " + padder.getPaddingString());
}
//Cac loai khong dinh dang
console.log("---Nullable types---");
let s = "foo";
s = undefined;
console.log(s);
let sn: string | null = "bar";
sn = null;
sn = undefined;
console.log(sn);
let t: number = null;

function fuck(sn: string | null): string {
    if (sn == null) {
        return "default";
    }
    else {
        return sn;
    }
}
class C {
    a: number;
    b?: number;
}

let cc = new C();
cc.a = 12;
cc.a = undefined;

function fu(sn: string | null): string {
    return sn || "default";
}
function broken(name: string | null): string {
    function postfix(epithet: string) {
        return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
    }
    return;
}

//Polymorphic this types
class BassicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
}
let vv = new BassicCalculator(2).multiply(5).add(1).currentValue();
console.log(vv);

//class C1T5 {
//    foo: (i: number, s: string) => number = function (i) {
//        return i;
//    };
//    foo2(i: number, s: string): number {
//        return i;
//    }
//}
//let c1t5 = new C1T5();
//let c2t5 = c1t5.foo(3, "2");
//let c3t5 = c1t5.foo2(3, "2");
//console.log(c3t5);


