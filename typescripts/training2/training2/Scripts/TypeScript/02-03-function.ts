namespace demo_02_03 {
    //Demo A
    //Type the parameters
    let
        squareItSimple: (h: number, w: number) => number
            = (a, b) => a * b;
    console.log('squareItSimple = ' + squareItSimple(7, 12));

    //Demo B 
    //Arrow function and returning void
    let
        helloWorld: (name?: string) => void
            = (a) => console.log('hello ' + (a || 'LOL'));
    helloWorld('Nguyen Manh Cuong');

    //Demo C
    //Pass an object literal as the parameter and use arrow functions
    let
        squareIt: (rect: { h: number; w?: number; }) => number
            = (rect) => rect.w === undefined ? rect.h * rect.h :
                    rect.h * rect.w, 
        rectA = { h: 10 },
        rectB = { h: 7, w: 12 };
    console.log(`Rectangle h of 10 = ${squareIt(rectA)}`);
    console.log(`Rectangle h of 7 and w of 12 = ${squareIt(rectB)}`);
}