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
var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
function greatPerson(name) {
    if (name === "cuong") {
        var greet = "Hello cuong";
    }
    else {
        var greet = "fuck";
    }
    console.log(greet);
}
greatPerson("cuong");
//key let
//hoisting
function greatPer(name) {
    var greet;
    if (name === "cuong") {
        greet = "Hello cuong";
    }
    else {
        greet = "love";
    }
    console.log(greet);
}
greatPer("aaaa");
//canot re-assign
var a = 10;
var b = 20;
if (a == 10) {
    var a_1 = 20;
    var b = 30;
}
console.log(a + " " + b);
//diffirent let and var in loop for
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1);
    }, 1000);
};
for (var i_1 = 1; i_1 <= 5; i_1++) {
    _loop_1(i_1);
}
//const in TypeScript
var c = 20;
var obj = {
    name: "Nguyen Manh Cuong"
};
obj.name = "Nguyen Thi Mai";
//Not because obj is const
//obj = {
//    name: "aaa"
//}
//console.log(obj);
//Basic Types
//Boolean
var isDone = true;
//Number
var Decimal = 200;
//string
var color = "black";
color = "blue";
var sentence = "Tong hai so la " + (Decimal + 1) + "\nColor is " + color + "\n";
//array
var list = [1, 2, 3];
var list2 = ["anh", "yeu", "em"];
//Tuple kieu nhu mang nhung phai khai bao truoc cac phan tu
//cac gia tri ban dau kieu tuple phai trung vs dang khai bao, con lai thif dc thoai mai nhung phair la hai kieu l kb do
var tuple;
tuple = ["cuon", 12, 12, , "cuong"];
tuple[3] = "aaaa";
console.log("tuple");
console.log(tuple[7]);
//console.log(tuple[0].substr(1));
//const
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c1 = Color.Green;
console.log(c1);
//any
var member;
member = 12;
member = "cuong";
var listMember = [12, "Cuong", false, true];
function warnUser() {
    alert("This is my warning message");
}
//class in typeScript
//khong ho tro hoiting
//thuc chat la function
var Person = (function () {
    //method constructor
    function Person(name) {
        //this.name = name;
        //console.log(this.name + "constructor Person");
    }
    //method static
    //class se goi duoc truc tiep khong can thong qua object
    Person.color = function () {
        console.log("RED");
    };
    Person.prototype.run = function () {
        console.log("person is runtime...");
    };
    Person.prototype.getId = function () {
        return 10;
    };
    return Person;
}());
Person.color();
var p1 = new Person("Nguyen manh cuong");
p1.run();
//inheritance TypeScripts
console.log("Inheritace Employee");
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        return _super.call(this, name) || this;
        //console.log(this.name+ "constructor Employee");
    }
    Employee.prototype.getId = function () {
        return _super.prototype.getId.call(this);
    };
    Employee.prototype.getMoney = function () {
        return _super.prototype.getId.call(this);
    };
    return Employee;
}(Person));
var emp1 = new Employee("Tom");
console.log(emp1.getMoney());
//example constructor
//No co hai cach gan gia tri
//c1 public properties
//c2 public variable
var student = (function () {
    function student(lname, fname) {
        this.lastName = lname;
        this.firstName = fname;
    }
    return student;
}());
var student1 = (function () {
    function student1(lname, fname) {
        this.lname = lname;
        this.fname = fname;
        this.lname = lname;
        this.fname = fname;
    }
    return student1;
}());
var s1 = new student("Nguyen", "Manh Cuong");
var s2 = new student1("Nguyen", "Manh Cuong");
console.log(s1.lastName + " " + s1.firstName + " constructor");
console.log(s2.fname + "-" + s2.lname);
function f() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g() {
        return a;
    }
}
f(); // returns '2'
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
//# sourceMappingURL=app.js.map