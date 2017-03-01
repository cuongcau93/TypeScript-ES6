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
//Example 4: Readonly modifier
console.log("readonly properties");
var Octopus = (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Example 4.1: readonly properties");
//dad.name = "LOL"; error because name is type readonly
//Example 4.2: readonly parameter properties
var Octopuss = (function () {
    function Octopuss(name) {
        this.name = name;
        this.numberOfLegs = 8;
        console.log("readonly parameter properties " + name);
    }
    return Octopuss;
}());
//Example 5:Set vs Get in TypeScript
var passcode = "secret passcode";
var Employee5 = (function () {
    function Employee5() {
    }
    Object.defineProperty(Employee5.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee5;
}());
var employee5 = new Employee5();
employee5.fullName = "Nguyen Manh Cuong";
if (employee5.fullName) {
    console.log("Example 5.1: " + employee5.fullName);
}
//Example 6.1 static Properties in typeScript
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    return Grid;
}());
Grid.origin = { x: 0, y: 0 };
var grid = new Grid(1.0);
console.log("Example 6.1: " + grid.calculateDistanceFromOrigin({ x: 10, y: 20 }));
//Example 7: abstrack class
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Nguyen Manh Cuong ab") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("Hello");
    };
    AccountingDepartment.prototype.generateRepoets = function () {
        console.log("Goodbye");
    };
    return AccountingDepartment;
}(Department));
var department; //ok to create a reference to an abstract type
//department = new Department(); // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
//department.generateRepoets(); // error: method doesn't exist on declared abstract type
//Example 8: Advanced Techniques
var Greeter8 = (function () {
    function Greeter8(message) {
        this.greeting = message;
    }
    Greeter8.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter8;
}());
var greeter8;
greeter8 = new Greeter8("World");
console.log("Example 8.1: " + greeter8.greet());
var Greeter9 = (function () {
    function Greeter9() {
    }
    Greeter9.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter9.standardGreeting;
        }
    };
    return Greeter9;
}());
Greeter9.standardGreeting = "Hello, there";
var greeter1;
greeter1 = new Greeter9();
console.log(greeter1.greet());
var greeterMaker = Greeter9;
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
//# sourceMappingURL=Class.js.map