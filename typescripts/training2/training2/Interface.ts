﻿console.log("Properties Interface");
//example basic 1
interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue) {
    let result = labelledObj.label;
    console.log("Example 1: "+result);
}

let myObj = {
    number: 10,
    label: "I LOVE YOU",
    age: 18
}

myObj.label = "Full";
printLabel(myObj);

//Example 1.2
interface RectangleOption {
    width: number;
    length: number;
    height?: number;
}

let drawRectangle = function (option: RectangleOption) {
    let width = option.width;
    let length = option.length;
    let height;
    if (option.height) {
        height = option.height;
    } {
        height = 0;
    }
    console.log("Example 1.2: " + width + " " + length + " " + height);
}
drawRectangle({
    width: 100,
    length: 200
});

//Example 1.3
interface Employees {
    name: string;
    age: number;
    gender: boolean;
}

let students = function (mask: number, obj: Employees) {
    let name = obj.name;
    let age = obj.age;
    let gender = obj.gender;
    let a = mask;
    console.log("Example 1.3: " + name + " " + age + " " + gender + " " + a);
}

students(9, {
    name: "Nguyen Manh Cuong",
    age: 19,
    gender: false
});

//Example 1.4 
interface Employess4 {
    name: string;
    age: number;
    [propName: string]: any; 
}

let student4 = function (obj: Employess4) {
    let name = obj.name;
    let age = obj.age;
    let gender = obj.gender;
    let a = obj.a;
    console.log("Example 1.4: " + name + " " + age + " " + " " + gender + " "+ a);
}

student4({
    name: "Nguyen Manh Cuong",
    age: 18,
    gender: false,
    a: 12
})

//Example 1.5
interface Point1 {
    x: number;
    readonly y: number;
}
let po = {
    x: 10,
    y: 20
}

let point11: Point1;
point11 = po;
point11.x = 20;
console.log("Example 1.5: " + point11.x + " " + point11.y);

//Example 1.6: Readonly Array

//Example basic 2
interface SquareConfig {
    color?: string;
    width?: number;
    //nếu bạn chắc chắn rằng đối tượng có thể có một số đặc tính bổ sung được sử dụng trong một số cách đặc biệt.
    //cach nay khong hay lam nen bo sung thuoc tinh vao day
    [propName: string]: any;
}

//bat buoc tra ve cai nay:{ color: string; area: number; lol: number }
function createSquare(config: SquareConfig): { color: string; area: number; lol: number } {
    let newSquare = { color : "white", area: 100, lol:10  };
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
//let point1: Point = { x: 10, y: 20 };
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

//2. Function Types
console.log("Function Types Interface");

interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
console.log("Example 2: "+mySearch("aaa", "aaa"));
// Cach ma ten cac parameters khong can phai phu hop.
console.log("Function TypeScript the names of the parameters do not need to match")
let mySearchFunction: SearchFunc;
mySearchFunction = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
}

//Example 2.1 
interface Arr {
    (numberArr: number[]): number[];
}
let getArr: Arr;
getArr = function (n: number[]) {
    n.push(5);
    //console.log(n.length);
    return n;
}
console.log("Example 2.1: " + getArr([1,2]));
//Example 2.2
interface check {
    (gender: boolean): boolean;
}
let checkGender: check;
checkGender = function (g: boolean) {
    return g;
}
console.log("Example 2.2: " + checkGender(true));


//Example 3: Indexable Types
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ["Bob", "Fred"];
let myStr: string = myArray[0];
console.log("Example 3: " + myStr);

//Example 3.1:
interface StringArray3 {
    [index: number]: string;
    length: number;
    push: any;
}
let myArr3: StringArray3;
myArr3 = ["Home", "School"];
myArr3.push("Hello");
console.log("Example 3.1: " + myArr3[0] + " " + myArr3[1] + " " + myArr3[2] + " " + "+Length: " + myArr3.length);

//Example 3.2
interface StringArray32{
    [index: string]: Number; 
}

let myArr32: StringArray32;
let myObj32: StringArray32 = {
    1: 1,
    "age": 2,
    "gender": 3
};
myArr32 = myObj32;
console.log(myObj32['name']);

//vd2
class Animal {
    name: string;
}

class Dog extends Animal {
    breed: string;
}
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

//Example4: Class Interface
interface PersonInterface {
    name: string;
    age: number;
    getName(): string;
    setName(name: string): any;
    getAge(): number;
    setAge(age: number): any;
    getPerson(): any;
    setPerson({
        name: string,
        age: number
    }): any;
}
$(document).ready(function () {
    
})
//class Persons implements PersonInterface() {
//    name: string;
//    age: number;
//    constructor(name: string, age: number) {
//        this.setPerson({
//            name: name,
//            age: age
//        });
//    }

//}
