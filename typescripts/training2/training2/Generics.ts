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

console.log(typeof str5);
