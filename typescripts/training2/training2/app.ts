class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;
    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }
}

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
    let greet;
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
let a = 10;
var b = 20;
if (a == 10) {
    let a = 20;
    var b = 30;
}
console.log(a + " " + b)

//diffirent let and var in loop for
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}
for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000)
}

//const in TypeScript
const c = 20;
const obj = {
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
let isDone: boolean = true;
//Number
let Decimal: number = 200;
//string
let color: string = "black";
color = "blue"
let sentence: string = `Tong hai so la ${Decimal + 1}
Color is ${color}
`;
//array
let list: number[] = [1, 2, 3];
let list2: Array<string> = ["anh", "yeu", "em"];
//Tuple kieu nhu mang nhung phai khai bao truoc cac phan tu
//cac gia tri ban dau kieu tuple phai trung vs dang khai bao, con lai thif dc thoai mai nhung phair la hai kieu l kb do
let tuple: [string, number];
tuple = ["cuon", 12, 12, , "cuong"];
tuple[3] = "aaaa";
console.log("tuple");
console.log(tuple[7]);
//console.log(tuple[0].substr(1));
//const
enum Color { Red, Green, Blue };
let c1: Color = Color.Green;
console.log(c1);

//any
let member: any;
member = 12;
member = "cuong";
let listMember: any[] = [12, "Cuong", false, true];

function warnUser(): void {
    alert("This is my warning message");
}

//class in typeScript
//khong ho tro hoiting
//thuc chat la function
class Person {
    //method constructor
    constructor(name) {
        //this.name = name;
        //console.log(this.name + "constructor Person");
    }
    //method static
    //class se goi duoc truc tiep khong can thong qua object
    static color() {
        console.log("RED")
    }

    run() {
        console.log("person is runtime...");
    }

    getId() {
        return 10;
    }
}
Person.color();
let p1 = new Person("Nguyen manh cuong");
p1.run();

//inheritance TypeScripts
console.log("Inheritace Employee");
class Employee extends Person {
    constructor(name) {
        super(name);
        //console.log(this.name+ "constructor Employee");
    }

    getId() {
        return super.getId();
    }

    getMoney() {
        return super.getId();
    }
} 

let emp1 = new Employee("Tom");
console.log(emp1.getMoney());

//example constructor
//No co hai cach gan gia tri
//c1 public properties
//c2 public variable

class student{
    public lastName: string;
    public firstName: string;
    constructor(lname: string, fname: string) {
        this.lastName = lname;
        this.firstName = fname;
    }
} 

class student1 {
    constructor(public lname: string, public fname: string) {
        this.lname = lname;
        this.fname = fname;
    }
} 

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
window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
