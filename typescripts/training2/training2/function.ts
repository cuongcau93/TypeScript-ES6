//Example 1: Typing the function
console.log('Typing the function');
function add(x: number, y: number): number {
    return x + y; 
}
let myAdd = function (x: number, y: number): number {
    return x + y;
}
//Example 2: Writing the function type
let myAdd2: (x: number, y: number) => number =
    function (a, b): number { return a + b; };
console.log(myAdd(5, 6));

let MyWrite = function (write: string): string {
    return write;
}
console.log(MyWrite("I love you"));

let MyWrites:(write: string) => string =
    function (w: string): string {
        return w;
    }
console.log(MyWrite("Hello"));

function buildName(firstName: string, lastName: string = "Cuong") {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result1 = buildName("Bob");                  // works correctly now
let result3 = buildName("Bob", undefined);         // ah, just right
//de underfined thi no van giu nguyen
console.log(result3);

//Rest Parameters
function buidName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}
let empName = buidName("Cuong", "Mai", "Hi", "Ha", "Name");
console.log(empName);

//Inferring the types
let myAdd3: (a: number, b: number) => number =
    function (x, y): number {
        return x + y;
    }

//Option and Default Parameters
let buildName2: (firstName: string, lastName: string) => string =
    function (fName, lName): string {
        return fName + " " + lName;
    }

console.log("Example 1.1: " + buildName2("Nguyen", "Manh Cuong"));

//Option parameters
let buidName3: (firstName: string, lastName?: string) => string =
    function (fName, lName) {
        if (lName) {
            return fName + " " + lName;
        }
        else {
            return fName;
        }
    }

console.log("Example 1.2: " + buidName3("Nguyen"));
console.log("Example 1.3: " + buidName3("Nguyen", undefined));

//This and arrow function
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        let that = this;
        return function () {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: that.suits[pickedSuit],
                card: pickedCard % 13
            };
        }
    }
}

let cardPicker = deck.createCardPicker();
console.log("Example 2.1: " + cardPicker().suit)