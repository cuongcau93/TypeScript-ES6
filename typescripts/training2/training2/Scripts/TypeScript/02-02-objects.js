var demo_02_02;
(function (demo_02_02) {
    var points1 = { x: 10, y: 20 }, points2, 
    //points2 = { x: 10, y: 20 }
    points3 = { x: 10, y: 20 }, rectangle = {
        h: 10,
        w: 20,
        calcArea: function () {
            return this.h * this.w;
        }
    };
    points2 = { x: 10, y: 20 };
    points3 = { foo: 'join' };
    console.log('rectangle are = ' + rectangle.calcArea());
    //Function
    var squareIt1 = function (x) {
        return x * x;
    }, val1 = squareIt1(2);
    console.log("squareIt1 = " + val1);
    var squareIt = function (rec) {
        var rectangle;
        if (rec.w === undefined) {
            rectangle = rec.h * rec.h;
        }
        else {
            rectangle = rec.h * rec.w;
        }
        return rectangle;
    };
    var sq1 = squareIt({ h: 10 });
    console.log("rectangle h of 10 = " + sq1);
    var sq2 = squareIt({ h: 10, w: 20 });
    console.log("rectangle h of 10 and width of 40 = " + sq2);
})(demo_02_02 || (demo_02_02 = {}));
//# sourceMappingURL=02-02-objects.js.map