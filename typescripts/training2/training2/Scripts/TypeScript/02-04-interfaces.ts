// namespace is the preferred keyword over module
namespace demo_02_04 {
    //Simple arrow function demo the slides
    var greetMe: (msg: string) => void;
    greetMe = (msg) => msg;
    console.log(greetMe("Hello"))

    // Demo A 
    // user interfaces
    interface SquaringFunction {
        (x: number): number;
    }

    var squareItBasic: SquaringFunction = (num) => num * num;
    console.log('Square of 12 = '+squareItBasic(12));

    //Demo B
    // pass an object literal as the parameter and use arrow functions
    interface Rectangle {
        h: number;
        w?: number;
    }

    let rectA: Rectangle = {
        h: 10
    }

    //var squareIt: (rect: {h: number; w?: number;}) => number;
    interface Square {
        (Rectangle): number;
    }

    let squareIt: Square = (rect: Rectangle) => rect.w === undefined ? rect.h * rect.h : rect.h * rect.w;
    console.log('Rectangle h of 10 = ' + squareIt(rectA));

    //Demo C
    //Type the function, the parameter, and use arrow functions
    //Learn more about interfaces in Module 3
    interface Person {
        name: string;
        age?: number;
        kids: number;
        calcPets: () => number;
        makeYounger: (years: number) => void;
        greet: (msg: string) => string;
    }

    let p: Person = {
        name: 'John',
        age: 40,
        kids: 4,
        calcPets: () => p.kids * 2,
        makeYounger: (years) => p.age -= years,
        greet: (msg) => msg + ', ' + p.name 
    }

    let pets = p.calcPets();
    console.log('pets = ' + pets);

    p.makeYounger(10);
    let newAge = p.age;
    console.log('New age = ' + newAge);

    let msg: string = p.greet('Hello');
    console.log('message: ' + msg);

    // Demo D 
    // Returning an interface from a function
    interface SessionEval {
        addRating: (rating: number) => void;
        calcRating: () => number;
    }
    function sessionEvaluator(): SessionEval {
        var ratings: number[] = [];
        var addRating = (rating: number = 5) => ratings.push(rating);
        ;
        var calcRating = () => {
            var sum: number = 0;
            ratings.forEach((score) => sum += score);
            return sum / ratings.length;
        };
        return {
            addRating: addRating,
            calcRating: calcRating
        }
    }

    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(6)
    console.log('Calc Rating = ' + s.calcRating());
}