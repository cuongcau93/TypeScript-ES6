enum Derection {
    Up = 12,
    Down,
    Left,
    Right
}

console.log("Example 1.1: " + Derection.Down);
console.log("Example 1.2: " + Derection.Up);

enum FileAccess {
    None = 6,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    G = "123".length
}

console.log("Example 2.1: " + FileAccess[FileAccess.None]);
//Type Compatibility (Loai tuong thich)
console.log("Type Compatibility");
interface Named {
    name: string;
    age: number;
}
class Person {
    name: string;
    age: number;
}
let p: Named;
p = new Person();

//Starting out
interface Named2 {
    name: string;
}
let x: Named2;
let y = {
    name: "Alice",
    location: "ssss"
};
x = y;