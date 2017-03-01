//Example 1: Typing the function
console.log('Typing the function');
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) {
    return x + y;
};
//Example 2: Writing the function type
var myAdd2 = function (a, b) { return a + b; };
console.log(myAdd(5, 6));
var MyWrite = function (write) {
    return write;
};
console.log(MyWrite("I love you"));
var MyWrites = function (w) {
    return w;
};
console.log(MyWrite("Hello"));
function buildName(firstName, lastName) {
    if (lastName === void 0) { lastName = "Cuong"; }
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); // works correctly now
var result3 = buildName("Bob", undefined); // ah, just right
//de underfined thi no van giu nguyen
console.log(result3);
//Rest Parameters
function buidName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var empName = buidName("Cuong", "Mai", "Hi", "Ha", "Name");
console.log(empName);
//Inferring the types
var myAdd3 = function (x, y) {
    return x + y;
};
//Option and Default Parameters
var buildName2 = function (fName, lName) {
    return fName + " " + lName;
};
console.log("Example 1.1: " + buildName2("Nguyen", "Manh Cuong"));
//Option parameters
var buidName3 = function (fName, lName) {
    if (lName) {
        return fName + " " + lName;
    }
    else {
        return fName;
    }
};
console.log("Example 1.2: " + buidName3("Nguyen"));
console.log("Example 1.3: " + buidName3("Nguyen", undefined));
//This and arrow function
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var that = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return {
                suit: that.suits[pickedSuit],
                card: pickedCard % 13
            };
        };
    }
};
var cardPicker = deck.createCardPicker();
console.log("Example 2.1: " + cardPicker().suit);
//# sourceMappingURL=function.js.map