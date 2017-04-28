// CONTEXT: Class property declaration
var C1T5 = (function () {
    function C1T5() {
        this.foo = function (l) {
            return l;
        };
    }
    return C1T5;
}());
var c1t5 = new C1T5();
console.log("Example 1.1: " + c1t5.foo(4, " "));
// CONTEXT: Module property declaration
var C2T5;
(function (C2T5) {
    C2T5.foo = function (i) {
        return i;
    };
})(C2T5 || (C2T5 = {}));
var c2t5 = C2T5.foo(1, "");
console.log("Example 1.1: " + c2t5);
// CONTEXT: Variable declaration
var c3t1 = (function (s) {
    return s;
});
console.log("Example 1.2: " + typeof c3t1);
console.log("Example 1.2: " + c3t1("I love you"));
//object
var c3t2 = ({
    n: 1,
    s: "cuog"
});
console.log("Example 1.3: " + typeof c3t2);
console.log("Example 1.3: " + c3t2.n);
//
var c3t3 = [1, 2, 3];
console.log("Example 1.4: " + typeof c3t3);
console.log("Example 1.4: " + c3t3);
var c3t4 = function () {
    return ({ n: 5 });
};
console.log("Example 1.5: " + typeof c3t4);
console.log("Example 1.5: " + c3t4().n);
var c3t5 = function (l) {
    return ({ n: l });
};
console.log("Example 1.6: " + typeof c3t5);
console.log("Example 1.6: " + c3t5(12).n);
var c3t6 = function (n, s) {
    return ({
        n: n,
        s: s
    });
};
console.log("Example 1.7: " + typeof c3t6);
console.log("Example 1.7: " + c3t6(12, "Fucl").s);
//function
var c3t7 = function (nk) {
    return nk;
};
console.log("Example 1.8: " + typeof c3t7);
console.log("Example 1.8: " + c3t7(true));
var c3t8 = function (n) {
    return n;
};
console.log("Example 1.9: " + typeof c3t8);
console.log("Example 1.9: " + c3t8(null, null));
//var c3t9: number[][] = [[1, 2], [1,2]];
//console.log("Example 1.91: " + typeof c3t9);
//console.log("Example 1.91: " + c3t9[0][3]);
var c3t10 = [({ n: 10, s: "cuong" }), ({ n: 11 })];
console.log("Example 1.91: " + typeof c3t10);
console.log("Example 1.91: " + c3t10[0].s);
//??????
var c3t11 = [function (n, s) { return s; }];
console.log("Example 1.92: " + typeof c3t11);
//console.log("Example 1.92: " + c3t11(a: 3, s: "ddd"));
var c3t12 = {
    foo: ({ n: 6 })
};
console.log("Example 1.93: " + typeof c3t12);
console.log("Example 1.93: " + c3t12.foo.n);
var c3t13 = ({
    f: function (i, s) {
        return s;
    }
});
console.log("Example 1.94: " + typeof c3t13);
console.log("Example 1.94: " + c3t13.f(3, "lol"));
var c3t14 = ({
    a: [1, 2, 3],
});
// CONTEXT: Class property assignment
var C4T5 = (function () {
    function C4T5() {
        this.foo = function (i, s) {
            return s;
        };
    }
    return C4T5;
}());
var c4t5 = new C4T5();
console.log("Example 2.0: " + typeof c4t5);
console.log("Example 2.0: " + c4t5.foo(3, "hello"));
//CONTEXT: Module property assignment
var C5T5;
(function (C5T5) {
    C5T5.foo = function (i, s) {
        return s;
    };
})(C5T5 || (C5T5 = {}));
var c5t5 = C5T5;
console.log("Example 2.1: " + typeof c5t5);
console.log("Example 2.1: " + c5t5.foo(3, "assignment"));
//CONTEXT: Variable assigment
var c6t5;
c6t5 = function (n) {
    return ({});
};
//Context: Array index assigment
var c7t2;
var lastName = "Cuong";
var firstName = "Nguyen Manh";
var fullName = "Ten toi la " + lastName + " " + firstName;
console.log(fullName);
var xx;
xx = ["Nguyen Manh Cuong", 19];
console.log(xx[0].substr(1));
var arr = ["Nguyen", "Manh", "Cuong"];
var arrlst = [1, 2, 3];
//# sourceMappingURL=contextualTyping.js.map