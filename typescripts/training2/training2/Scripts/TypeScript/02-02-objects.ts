namespace demo_02_02 {
    let
        points1 = { x: 10, y: 20 },

        points2: {},
        //points2 = { x: 10, y: 20 }

        points3: Object = { x: 10, y: 20 },

        rectangle = {
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
    let
        squareIt1: (x: number) => number
            = function (x) {
            return x * x;
        },
        val1 = squareIt1(2);
    console.log(`squareIt1 = ${val1}`);

    let
        squareIt: (rec: { h: number; w?: number }) => number
            = function (rec) {
                let rectangle: number;
                if (rec.w === undefined) {
                    rectangle = rec.h * rec.h;
                } else {
                    rectangle = rec.h * rec.w;
                }
                return rectangle;
            };
    let sq1: number = squareIt({ h: 10 });
    console.log(`rectangle h of 10 = ${sq1}`);
    let sq2: number = squareIt({ h: 10, w: 20 })
    console.log(`rectangle h of 10 and width of 40 = ${sq2}`);
}