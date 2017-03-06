//Generics
function getSomeThing<yourType>(arg: yourType): yourType {
    return arg;
}
let str1 = getSomeThing<string>("Hello word");
console.log("Example 1.1: "+ str1);

let str2 = getSomeThing<number>(12345);
console.log("Example 1.2: " + str2);

function getLength<T>(arg: T[]): number {
    return arg.length;
}

let str3 = getLength<string>(["Anh", "Yeu", "Em"])
console.log("Example 2.1: " + str3);

let str4 = getLength<number>([1, 2, 3, 4, 5]);
console.log("Example 2.2: " + str4);

console.log("-------Generic - Custom Type---------");
interface CustomType {
    x: string;
    y: number;
}
function getCustomType<Custom>(arg: any): any {
    var d: Custom = arg;
    return d;
}

let str5 = getCustomType<CustomType>({
    x: "Nguyen Manh Cuong",
    y: 10
})

console.log(str5.x);
console.log("---Working with Generic Type Variables---");
function variableGeneric<T>(arg: T): T {
    return arg;
}
function variableGeneric2<T>(arg: T[]): T {
    return arg[0];
}

function variableGeneric3<T>(arg: Array<T>): Array<T> {
    return arg;
}
 
console.log("Example 1.1: " +variableGeneric<string>("Nguyen manh cuong"));
console.log("Example 1.2: " + variableGeneric2<string>(["Nguyen", "Manh", "Cuong"]));
console.log("Example 1.3: " + variableGeneric3<string>(["Nguyen", "Manh", "Cuong"]));

function identity<T>(arg: T): T {
    return arg;
}

let myIdentity: <U>(arg: U) => U = identity;
console.log("---Generic Classes---");
class GenericNumber<T>{
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
let x1 = myGenericNumber.zeroValue = 10;
let x2 = myGenericNumber.add = function (x, y) {
    return x + y;
};
console.log("Example 2.1: " + x1);
console.log("Example 2.2: " + x2(2, 3));
let stringNumeric = new GenericNumber<string>();
let str11 = stringNumeric.zeroValue = "I love you";
let str12 = stringNumeric.add = (x, y) => x + y;
console.log("Example 2.1: " + str11);
console.log("Example 2.2: " + str12("hello ", "world"));

interface Lengthwise {
    length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);
    return arg;
}
let str13 = loggingIdentity({ length: 10 });
console.log("Example 2.3: " + str13);
