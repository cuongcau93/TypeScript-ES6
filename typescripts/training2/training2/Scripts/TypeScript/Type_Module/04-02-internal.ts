namespace Shapes {
    export interface IRectangle {
        height: number;
        width: number;
        getArea(): number;
    }

    export class Rectangle implements IRectangle {
        height: number;
        width: number;
        constructor(height: number, width: number) {
            this.height = height;
            this.width = width;
        }
        getArea() {
            return this.height * this.width;
        }
    }
}

namespace MyProgram {
    function run() {
        var rec: Shapes.IRectangle = new Shapes.Rectangle(10, 4);
        var area = rec.getArea();
        toastr.info("area = " + area);
    }

    run();
}