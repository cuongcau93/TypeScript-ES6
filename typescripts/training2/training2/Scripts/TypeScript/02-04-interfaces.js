// namespace is the preferred keyword over module
var demo_02_04;
(function (demo_02_04) {
    //Simple arrow function demo the slides
    var greetMe;
    greetMe = function (msg) { return msg; };
    console.log(greetMe("Hello"));
    var squareItBasic = function (num) { return num * num; };
    console.log('Square of 12 = ' + squareItBasic(12));
    var rectA = {
        h: 10
    };
    var squareIt = function (rect) { return rect.w === undefined ? rect.h * rect.h : rect.h * rect.w; };
    console.log('Rectangle h of 10 = ' + squareIt(rectA));
    var p = {
        name: 'John',
        age: 40,
        kids: 4,
        calcPets: function () { return p.kids * 2; },
        makeYounger: function (years) { return p.age -= years; },
        greet: function (msg) { return msg + ', ' + p.name; }
    };
    var pets = p.calcPets();
    console.log('pets = ' + pets);
    p.makeYounger(10);
    var newAge = p.age;
    console.log('New age = ' + newAge);
    var msg = p.greet('Hello');
    console.log('message: ' + msg);
    function sessionEvaluator() {
        var ratings = [];
        var addRating = function (rating) {
            if (rating === void 0) { rating = 5; }
            return ratings.push(rating);
        };
        ;
        var calcRating = function () {
            var sum = 0;
            ratings.forEach(function (score) { return sum += score; });
            return sum / ratings.length;
        };
        return {
            addRating: addRating,
            calcRating: calcRating
        };
    }
    var s = sessionEvaluator();
    s.addRating(4);
    s.addRating(5);
    s.addRating(6);
    console.log('Calc Rating = ' + s.calcRating());
})(demo_02_04 || (demo_02_04 = {}));
//# sourceMappingURL=02-04-interfaces.js.map