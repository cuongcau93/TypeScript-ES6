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
        console.log(this);
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
//this parameter
interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    creatCardPicker(this: Deck): () => Card;
}
let decks: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    creatCardPicker: function (this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: this.suits[pickedSuit],
                card: pickedCard % 13
            };
        }
    }
}

let cardPickers = decks.creatCardPicker();
let pickedCard = cardPickers();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
console.log("Example 2.2: " + cardPickers)
interface PersonD {
    name: string;
    age: number;
}

interface Doctor {
    names: string[];
    ages: number[];
    creatPersonDoctor(this: Doctor): () => PersonD;
    //creatPersonDoctor: (this: Doctor) => PersonD;
}
let doctor: Doctor = { 
    names: ["Nguyen", "Manh", "Cuong", "Dep", "Trai"],
    ages: Array(52),
    creatPersonDoctor: function (this: Doctor) {
        return () => {
            return {
                name: this.names[1],
                age: 13
            };
        }
    }
}
let doc = doctor.creatPersonDoctor();
console.log(doc().name);

interface AnimalD {
    name: string;
    age: number;
}

interface Dogs {
    names: string[];
    ages: number[];
    createDog(this: Dogs): () => AnimalD;
}

let dogs: Dogs = {
    names: ["H", "A", "T", "V"],
    ages: [1, 2, 3, 4],
    createDog(this: Dogs) {
        return () => {
            return {
                name: this.names[1],
                age: this.ages[1]
            }
        }
    }

}

//this parameters in callbacks
interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}
class Handler {
    info: string;
    onClickGood(this: void, e: Event) {
        console.log('Clicked!');
    }
}

let h = new Handler();
console.log(h);
//uiElement.addClickListener(h.onClickGood);

//Overloads
let suitss = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x): any {
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickCard;
    }
    else if (typeof x == "number") {
        let pickerdSuit = Math.floor(x / 13);
        return {
            suit: suitss[pickerdSuit],
            card: x % 13
        }
    }
}

let myDeck = [
    {
        suit: "diamonds",
        card: 2
    },
    {
        suit: "Nguyen Manh Cuong",
        card: 100
    }
];

let pickCarddd = myDeck[pickCard(myDeck)];
console.log(pickCarddd);
console.log("card: " + pickCarddd.card + " of " + pickCarddd.card);

let pickCardd = pickCard(13);
console.log(pickCardd.suit);
