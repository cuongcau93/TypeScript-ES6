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
