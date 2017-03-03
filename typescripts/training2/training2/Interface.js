var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log("Properties Interface");
function printLabel(labelledObj) {
    var result = labelledObj.label;
    console.log("Example 1: " + result);
}
var myObj = {
    number: 10,
    label: "I LOVE YOU",
    age: 18
};
myObj.label = "Full";
printLabel(myObj);
var drawRectangle = function (option) {
    var width = option.width;
    var length = option.length;
    var height;
    if (option.height) {
        height = option.height;
    }
    {
        height = 0;
    }
    console.log("Example 1.2: " + width + " " + length + " " + height);
};
drawRectangle({
    width: 100,
    length: 200
});
var students = function (mask, obj) {
    var name = obj.name;
    var age = obj.age;
    var gender = obj.gender;
    var a = mask;
    console.log("Example 1.3: " + name + " " + age + " " + gender + " " + a);
};
students(9, {
    name: "Nguyen Manh Cuong",
    age: 19,
    gender: false
});
var student4 = function (obj) {
    var name = obj.name;
    var age = obj.age;
    var gender = obj.gender;
    var a = obj.a;
    console.log("Example 1.4: " + name + " " + age + " " + " " + gender + " " + a);
};
student4({
    name: "Nguyen Manh Cuong",
    age: 18,
    gender: false,
    a: 12
});
var po = {
    x: 10,
    y: 20
};
var point11;
point11 = po;
point11.x = 20;
console.log("Example 1.5: " + point11.x + " " + point11.y);
//bat buoc tra ve cai nay:{ color: string; area: number; lol: number }
function createSquare(config) {
    var newSquare = { color: "white", area: 100, lol: 10 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
//sai nguyen mau
//let mySquare = createSquare({ colour: "black" });
//co the sua lai bang cach sau
//Tuc la minh co the gan gia tri ko can giong nguyen mau
var mySquares = createSquare({ width: 100, opacity: 0.5 });
console.log(mySquares);
//su dung constructor cua Point de kiem tra
//sau khi gan thi x va y se khong the thay doi
var point1 = { x: 10, y: 20 };
//point1.x = 5; => error !
//Readonly array
//Khong thay doi mang khi ma da gan gia tri
var arr1 = [1, 2, 3, 4, 5];
var ro = arr1;
//ro[0] = 12; //error "Khong thay doi duoc gia tri cua no"
//ro.push(5); error "khong them duoc nua"
//ro.length = 100; error "Kich thuoc khong doi"
//arr1 = ro; khong dung kieu, ko the giao mang cho cai khac ko phai readonly
arr1 = ro; // chi co the gan duoc khi thay doi kieu
//2. Function Types
console.log("Function Types Interface");
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
console.log("Example 2: " + mySearch("aaa", "aaa"));
// Cach ma ten cac parameters khong can phai phu hop.
console.log("Function TypeScript the names of the parameters do not need to match");
var mySearchFunction;
mySearchFunction = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var getArr;
getArr = function (n) {
    n.push(5);
    //console.log(n.length);
    return n;
};
console.log("Example 2.1: " + getArr([1, 2]));
var checkGender;
checkGender = function (g) {
    return g;
};
console.log("Example 2.2: " + checkGender(true));
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
console.log("Example 3: " + myStr);
var myArr3;
myArr3 = ["Home", "School"];
myArr3.push("Hello");
console.log("Example 3.1: " + myArr3[0] + " " + myArr3[1] + " " + myArr3[2] + " " + "+Length: " + myArr3.length);
var myArr32;
var myObj32 = {
    1: 1,
    "age": 2,
    "gender": 3
};
myArr32 = myObj32;
console.log(myObj32['name']);
//vd2
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var as = new Dog();
console.log(as);
var mya;
mya = ["abc", "abc"];
// mya[0] = "12"; error because the index signature is readonly.
console.log(myArray[0]);
//Class types
console.log("----- Class types ----");
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
console.log(digital.tick());
$(document).ready(function () {
});
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
//# sourceMappingURL=Interface.js.map