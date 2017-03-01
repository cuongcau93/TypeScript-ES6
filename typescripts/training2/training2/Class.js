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
//Example 3.1: public by default
var Animal3 = (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    Animal3.prototype.move = function (distanceInmeters) {
        return this.name + " moved " + distanceInmeters + "m";
    };
    return Animal3;
}());
var animal3 = new Animal3("Nguyen Manh Cuong");
console.log("Example 3.1: " + animal3.name);
//Example 3.2: Understanding private
var Animal31 = (function () {
    function Animal31(theName) {
        this.name = theName;
    }
    return Animal31;
}());
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal31));
var Employee31 = (function () {
    function Employee31(theName) {
        this.name = theName;
    }
    return Employee31;
}());
var animal31 = new Animal31("Nguyen Manh Cuong");
var rhino = new Rhino();
var employee31 = new Employee31("Bob");
animal31 = rhino;
//animal31 = employee31; khong tuong thich
//console.log("Example 3: " + animal31.name);
//Example 3.3: Understanding protected
var Person33 = (function () {
    function Person33(name) {
        this.name = name;
    }
    return Person33;
}());
var Employee33 = (function (_super) {
    __extends(Employee33, _super);
    function Employee33(name, departement) {
        var _this = _super.call(this, name) || this;
        _this.departement = departement;
        return _this;
    }
    Employee33.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.departement + ".";
    };
    return Employee33;
}(Person33));
var test = new Person33("lol");
var howard = new Employee33("Cuong", "sales");
console.log("Example 3.3: " + howard.getElevatorPitch());
//console.log(howard.name); error because name in person is protected
//de protected or private then cac doi tuong ben ngoai se khong goi duoc no
//protected thi cac lop con van ke thua duoc
//Example 3.4: Inheritance in method protected
var Person34 = (function () {
    function Person34(theName) {
        this.name = theName;
    }
    return Person34;
}());
// Employee can extend Person
var Employee34 = (function (_super) {
    __extends(Employee34, _super);
    function Employee34(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee34.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee34;
}(Person34));
var howard34 = new Employee34("Howard", "Sales");
//let john = new Person34("John"); // Error: The 'Person' constructor is protected
//# sourceMappingURL=Class.js.map