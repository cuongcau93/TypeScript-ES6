//example basic 1
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    let result = "";
    console.log(result);
}
let myObj = {
    number: 10,
    label: "I LOVE YOU",
    age: 18
}
printLabel(myObj);

//Example basic 2
interface SquareConfig {
    color?: string;
    width?: number;
    //nếu bạn chắc chắn rằng đối tượng có thể có một số đặc tính bổ sung được sử dụng trong một số cách đặc biệt.
    //cach nay khong hay lam nen bo sung thuoc tinh vao day
    [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color : "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width
    }
    return newSquare;
}

let mySquare = createSquare({ color: "black" });
//sai nguyen mau
//let mySquare = createSquare({ colour: "black" });
//co the sua lai bang cach sau
//Tuc la minh co the gan gia tri ko can giong nguyen mau
let mySquares = createSquare({ width: 100, opacity: 0.5 });

console.log(mySquares);

//Readonly properties
//chi doc khong duoc thay doi
interface Point {
    readonly x: number;
    readonly y: number;
}
//su dung constructor cua Point de kiem tra
//sau khi gan thi x va y se khong the thay doi
let point1: Point = { x: 10, y: 20 };
//point1.x = 5; => error !

//Readonly array
//Khong thay doi mang khi ma da gan gia tri
let arr1: number[] = [1, 2, 3, 4, 5];
let ro: ReadonlyArray<number> = arr1;
//ro[0] = 12; //error "Khong thay doi duoc gia tri cua no"
//ro.push(5); error "khong them duoc nua"
//ro.length = 100; error "Kich thuoc khong doi"
//arr1 = ro; khong dung kieu, ko the giao mang cho cai khac ko phai readonly
arr1 = ro as number[]; // chi co the gan duoc khi thay doi kieu

//Function Types
console.log("Function Types Interface");

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

console.log(mySearch("aaa", "aaa"));
// Cach ma ten cac parameters khong can phai phu hop thi ke thua theo cach sau
console.log("Function TypeScript the names of the parameters do not need to match")

let mySearchFunction: SearchFunc;
mySearchFunction = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
}

//Indexable Types
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr);

//vd2
class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}

//interface NotOkay {
//    [x: number]: Animal;
//    [x: string]: Dog;
//}
var as = new Dog();
console.log(as);

//vd3
interface ReadonlyStringArray {
     readonly [index: number]: string;
}

let mya: ReadonlyStringArray;
mya = ["abc", "abc"];
// mya[0] = "12"; error because the index signature is readonly.
console.log(myArray[0]);

//Class types
console.log("----- Class types ----");
//vd1
interface ClockInter {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInter {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

//vd2:
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep")
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32)
console.log(digital.tick());


