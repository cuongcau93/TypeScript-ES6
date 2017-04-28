var demo_02_03;
(function (demo_02_03) {
    //Demo A
    //Type the parameters
    var squareItSimple = function (a, b) { return a * b; };
    console.log('squareItSimple = ' + squareItSimple(7, 12));
    //Demo B 
    //Arrow function and returning void
    var helloWorld = function (a) { return console.log('hello ' + (a || 'LOL')); };
    helloWorld('Nguyen Manh Cuong');
    //Demo C
    //Pass an object literal as the parameter and use arrow functions
    var squareIt = function (rect) { return rect.w === undefined ? rect.h * rect.h :
        rect.h * rect.w; }, rectA = { h: 10 }, rectB = { h: 7, w: 12 };
    console.log("Rectangle h of 10 = " + squareIt(rectA));
    console.log("Rectangle h of 7 and w of 12 = " + squareIt(rectB));
})(demo_02_03 || (demo_02_03 = {}));
//# sourceMappingURL=02-03-function.js.map