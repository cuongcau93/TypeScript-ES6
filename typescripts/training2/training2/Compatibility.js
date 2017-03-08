//Type Compatibility (Loai tuong thich)
console.log("Type Compatibility");
var Persond = (function () {
    function Persond() {
    }
    return Persond;
}());
var p;
p = new Persond();
var x;
var y = {
    name: "Alice",
    location: "ssss"
};
x = y;
function greet(n) {
    console.log("Example 1.1: " + n.name);
}
greet(y);
var named3;
named3 = {
    age: 17,
    name: "Nguyen Manh Cuong"
};
var studentd3 = function (n) { return console.log("Example 1.2: " + n.age); };
studentd3(named3);
console.log("---Comparing two functions---");
var a1 = function (x) { return 0; };
var b1 = function (y, s) { return 0; };
b1 = a1;
//a1 = b1; error because variable a1 not b1
//Array#forEach
var items = [1, 2, 3];
console.log("Array#forEach");
items.forEach(function (items) { return console.log(items); });
console.log("---Function Parameter Bivariance---");
var EventType;
(function (EventType) {
    EventType[EventType["Mouse"] = 0] = "Mouse";
    EventType[EventType["Keyboard"] = 1] = "Keyboard";
})(EventType || (EventType = {}));
var mouseEvent = {
    timestamp: 12,
    a2: 12,
    b2: 23
};
function listenEvent(eventType, handler) {
    console.log("Nguyen Manh Cuong");
}
var tet = listenEvent(EventType.Mouse, function (e) { return console.log(e.a2 + "," + e.b2); });
console.log(tet);
//Advanced Types
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Personm = (function () {
    function Personm(name) {
        this.name = name;
    }
    return Personm;
}());
var ConsoleLogger = (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        return "Nguyen Manh Cuong";
    };
    return ConsoleLogger;
}());
var jim = extend(new Personm("Jim"), new ConsoleLogger());
var n = jim.name;
var m = jim.log();
console.log("Example 2.1: " + n + "    " + m);
//Union Types
console.log("---Union Types---");
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join("" + padding) + value;
    }
    if (typeof padding === "string") {
        return padding + " " + value;
    }
    throw new Error("Expected string or number, got '" + padding + "'.");
}
console.log(padLeft("Hello ", 12));
function getSmallPet() {
    return;
}
var pet = getSmallPet();
//pet.layEggs();
//pet.num();
console.log("---Type Guards and Differentiating Types---");
//Kieu bao ve & kieu khac biet
//#
//if ((<Fish>pet).swim) {
//    (<Fish>pet).swim();
//}
//else {
//    (<Bird>pet).fly();
//}
console.log("User-Defined Type Guards");
function isFish(pet) {
    return pet.swim !== undefined;
}
console.log("---instanceof---");
var SpaceRepeatingPadder = (function () {
    function SpaceRepeatingPadder(numSpace) {
        this.numSpace = numSpace;
    }
    SpaceRepeatingPadder.prototype.getPaddingString = function () {
        return Array(this.numSpace + 1).join("mm");
    };
    return SpaceRepeatingPadder;
}());
var StringPadder = (function () {
    function StringPadder(value) {
        this.value = value;
    }
    StringPadder.prototype.getPaddingString = function () {
        return this.value;
    };
    return StringPadder;
}());
function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("ll");
}
// Type is 'SpaceRepeatingPadder | StringPadder'
var padder = getRandomPadder();
console.log("Example 3.1: " + padder.getPaddingString());
if (padder instanceof SpaceRepeatingPadder) {
    console.log("Example 3.1: " + padder.getPaddingString());
}
if (padder instanceof StringPadder) {
    console.log("Example 3.1: " + padder.getPaddingString());
}
//Cac loai khong dinh dang
console.log("---Nullable types---");
var s = "foo";
s = undefined;
console.log(s);
var sn = "bar";
sn = null;
sn = undefined;
console.log(sn);
var t = null;
function fuck(sn) {
    if (sn == null) {
        return "default";
    }
    else {
        return sn;
    }
}
var C = (function () {
    function C() {
    }
    return C;
}());
var cc = new C();
cc.a = 12;
cc.a = undefined;
function fu(sn) {
    return sn || "default";
}
function broken(name) {
    function postfix(epithet) {
        return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
    }
    return;
}
//Polymorphic this types
var BassicCalculator = (function () {
    function BassicCalculator(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    BassicCalculator.prototype.currentValue = function () {
        return this.value;
    };
    BassicCalculator.prototype.add = function (operand) {
        this.value += operand;
        return this;
    };
    BassicCalculator.prototype.multiply = function (operand) {
        this.value *= operand;
        return this;
    };
    return BassicCalculator;
}());
var vv = new BassicCalculator(2).multiply(5).add(1).currentValue();
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
//# sourceMappingURL=Compatibility.js.map