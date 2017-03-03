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
console.log(typeof str5);
//# sourceMappingURL=Generics.js.map