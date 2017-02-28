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
// Class in TypeScript
//Example 1.1: Class-based
var Greater = (function () {
    function Greater(message) {
        this.greating = message;
    }
    Greater.prototype.greet = function () {
        return "Hello, " + this.greating;
    };
    Greater.run = function () {
        return "Nguyen Manh Cuong";
    };
    return Greater;
}());
var greater = new Greater("World");
console.log("Example 1.1: " + greater.greet() + " " + Greater.run());
//Example 1.2: static in class
var Student = (function () {
    function Student(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getAge = function () {
        return this.age;
    };
    Student.prototype.getCount = function (count) {
        return this.age + count;
    };
    return Student;
}());
var st = new Student("Nguyen Manh Cuong", 19);
console.log("Example 1.2 " + st.getName() + " " + st.getAge() + " Count: " + st.getCount(1));
//Inheritance Class
//Example 2: Inheritance basic
console.log("Inheritance Class");
var Animals = (function () {
    function Animals(theName) {
        this.name = "This is " + theName;
    }
    Animals.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        var result = this.name + " moved " + distanceInMeters + "m.";
        return result;
    };
    Animals.prototype.sum = function (a, b) {
        return "a + b = " + (a + b);
    };
    return Animals;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
        //console.log(super(name));
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        var result = _super.prototype.move.call(this, distanceInMeters);
        return result;
    };
    return Snake;
}(Animals));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 100; }
        var result = _super.prototype.move.call(this, distanceInMeters);
        return result;
    };
    Horse.prototype.sum = function (a, b) {
        var result = _super.prototype.sum.call(this, a, b);
        return result;
    };
    return Horse;
}(Animals));
var snake = new Snake("Snake");
console.log("Example 2.1: " + snake.move());
var horse = new Horse("Horse");
console.log("Example 2.2: " + horse.move());
console.log("Example 2.3: " + horse.sum(10, 20));
//Example 2.2
var Persons = (function () {
    function Persons(name, age) {
        this.name = name;
        this.age = age;
    }
    Persons.prototype.run = function () {
        var result = "My name is " + this.name;
        return result;
    };
    Persons.prototype.say = function () {
        var result = "Hi " + this.name + ". You are " + this.age + " age";
        return result;
    };
    return Persons;
}());
var Man = (function (_super) {
    __extends(Man, _super);
    function Man(name, age, gender) {
        var _this = _super.call(this, name, age) || this;
        _this.gender = gender;
        return _this;
    }
    Man.prototype.run = function () {
        var result = _super.prototype.run.call(this);
        return result;
    };
    Man.prototype.getGender = function () {
        var result;
        if (this.gender) {
            result = "This is Male";
        }
        else {
            result = "This is Fmale";
        }
        return result;
    };
    return Man;
}(Persons));
var man = new Man("CuongNm", 24, true);
console.log("Example 2.4: " + man.run() + " / " + man.getGender());
//public, private, and protected modifiers
//# sourceMappingURL=Class.js.map