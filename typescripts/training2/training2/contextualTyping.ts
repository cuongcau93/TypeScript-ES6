interface IFoo {
    n: number;
    s: string;
    f(i: number, s: string): string;
    a: number[];
}
interface IBar {
    foo: IFoo;
}
// CONTEXT: Class property declaration
class C1T5 {
    foo: (i: number, s: string) => number = function (l) {
        return l;
    }
}
let c1t5 = new C1T5();
console.log("Example 1.1: " + c1t5.foo(4, " "));

// CONTEXT: Module property declaration
module C2T5 {
    export var foo: (i: number, s: string) => number = function (i) {
        return i;
    }
}
let c2t5 = C2T5.foo(1,"");
console.log("Example 1.1: " + c2t5);

// CONTEXT: Variable declaration
let c3t1: (s: string) => string = (function (s) {
    return s
});

console.log("Example 1.2: " + typeof c3t1);
console.log("Example 1.2: " + c3t1("I love you"));
//object
let c3t2 = <IFoo>({
    n: 1,
    s: "cuog"
})
console.log("Example 1.3: " + typeof c3t2);
console.log("Example 1.3: " + c3t2.n);

//
var c3t3: number[] = [1, 2, 3];
console.log("Example 1.4: " + typeof c3t3);
console.log("Example 1.4: " + c3t3);

var c3t4: () => IFoo = function () {
    return <IFoo>({ n: 5 });
};

console.log("Example 1.5: " + typeof c3t4);
console.log("Example 1.5: " + c3t4().n);

var c3t5: (n: number) => IFoo = function (l) {
    return <IFoo>({n: l});
};
console.log("Example 1.6: " + typeof c3t5);
console.log("Example 1.6: " + c3t5(12).n);

var c3t6: (n: number, s: string) => IFoo = function (n, s) {
    return <IFoo>({
        n: n,
        s: s
    })
};
console.log("Example 1.7: " + typeof c3t6);
console.log("Example 1.7: " + c3t6(12, "Fucl").s);

//function
var c3t7: {
    (n: number): number;
    (s1: string): string;
    (l1: boolean): boolean;
} = function (nk) {
        return nk;
    };

console.log("Example 1.8: " + typeof c3t7);
console.log("Example 1.8: " + c3t7(true));

var c3t8: (n: number, s: string) => number = function (n) {
    return n;
}
console.log("Example 1.9: " + typeof c3t8);
console.log("Example 1.9: " + c3t8(null, null));

//var c3t9: number[][] = [[1, 2], [1,2]];
//console.log("Example 1.91: " + typeof c3t9);
//console.log("Example 1.91: " + c3t9[0][3]);
var c3t10: IFoo[] = [<IFoo>({ n: 10, s: "cuong" }), <IFoo>({ n: 11 })];
console.log("Example 1.91: " + typeof c3t10);
console.log("Example 1.91: " + c3t10[0].s);

//??????
var c3t11: { (n: number, s: string): string; }[] = [function (n, s) { return s;}]
console.log("Example 1.92: " + typeof c3t11);
//console.log("Example 1.92: " + c3t11(a: 3, s: "ddd"));

var c3t12: IBar = {
    foo: <IFoo>({n: 6})
}
console.log("Example 1.93: " + typeof c3t12);
console.log("Example 1.93: " + c3t12.foo.n);

var c3t13 = <IFoo>({
    f: function (i, s) {
        return s;
    }
});
console.log("Example 1.94: " + typeof c3t13);
console.log("Example 1.94: " + c3t13.f(3, "lol"));

var c3t14 = <IFoo>({
    a: [1, 2, 3],
});

// CONTEXT: Class property assignment
class C4T5 {
    foo: (i: number, s: string) => string;
    constructor() {
        this.foo = function (i, s) {
            return s;
        }
    }
}
let c4t5 = new C4T5();
console.log("Example 2.0: " + typeof c4t5);
console.log("Example 2.0: " + c4t5.foo(3, "hello"))

//CONTEXT: Module property assignment
module C5T5 {
    export var foo: (i: number, s: string) => string;
    foo = function (i, s) {
        return s;
    }
}
let c5t5 = C5T5;
console.log("Example 2.1: " + typeof c5t5);
console.log("Example 2.1: " + c5t5.foo(3, "assignment"))

//CONTEXT: Variable assigment
let c6t5: (n: number) => IFoo;
c6t5 = <(n: number) => IFoo>function (n) {
    return <IFoo>({});
}

