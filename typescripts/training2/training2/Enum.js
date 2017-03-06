var Derection;
(function (Derection) {
    Derection[Derection["Up"] = 12] = "Up";
    Derection[Derection["Down"] = 13] = "Down";
    Derection[Derection["Left"] = 14] = "Left";
    Derection[Derection["Right"] = 15] = "Right";
})(Derection || (Derection = {}));
console.log("Example 1.1: " + Derection.Down);
console.log("Example 1.2: " + Derection.Up);
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["None"] = 6] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log("Example 2.1: " + FileAccess[FileAccess.None]);
//# sourceMappingURL=Enum.js.map