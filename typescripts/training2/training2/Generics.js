//Generics
function getSomeThing(arg) {
    return arg;
}
var str1 = getSomeThing("Hello word");
console.log("Example 1.1: " + str1);
var str2 = getSomeThing(12345);
console.log("Example 1.2: " + str2);
function getLength(arg) {
    return arg.length;
}
var str3 = getLength(["Anh", "Yeu", "Em"]);
console.log("Example 2.1: " + str3);
var str4 = getLength([1, 2, 3, 4, 5]);
console.log("Example 2.2: " + str4);
console.log("-------Generic - Custom Type---------");
function getCustomType(arg) {
    var d = arg;
    return d;
}
var str5 = getCustomType({
    x: "Nguyen Manh Cuong",
    y: 10
});
console.log(str5.x);
console.log("---Working with Generic Type Variables---");
function variableGeneric(arg) {
    return arg;
}
function variableGeneric2(arg) {
    return arg[0];
}
function variableGeneric3(arg) {
    return arg;
}
console.log("Example 1.1: " + variableGeneric("Nguyen manh cuong"));
console.log("Example 1.2: " + variableGeneric2(["Nguyen", "Manh", "Cuong"]));
console.log("Example 1.3: " + variableGeneric3(["Nguyen", "Manh", "Cuong"]));
function identity(arg) {
    return arg;
}
var myIdentity = identity;
console.log("---Generic Classes---");
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
var x1 = myGenericNumber.zeroValue = 10;
var x2 = myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log("Example 2.1: " + x1);
console.log("Example 2.2: " + x2(2, 3));
var stringNumeric = new GenericNumber();
var str11 = stringNumeric.zeroValue = "I love you";
var str12 = stringNumeric.add = function (x, y) { return x + y; };
console.log("Example 2.1: " + str11);
console.log("Example 2.2: " + str12("hello ", "world"));
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var str13 = loggingIdentity({ length: 10 });
console.log("Example 2.3: " + str13);
//# sourceMappingURL=Generics.js.map