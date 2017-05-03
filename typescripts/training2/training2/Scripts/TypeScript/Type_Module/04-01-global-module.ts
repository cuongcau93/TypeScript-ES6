interface IPoint {
    getDist(): number;
}

class Point implements IPoint {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this.xx = x;
        this.yy = y;
    }
    get xx(): number {
        return this._x;
    }
    set xx(value: number) {
        if (value <= 0) throw 'xx must be than 0';
        this._x = value;
    }
    get yy() {
        return this._y;
    }
    set yy(value: number) {
        if (value <= 0) throw 'yy must be than 0'
        this._y = value;
    }
    getDist(): number {
        return Math.sqrt(this.xx * this.xx + this.yy * this.yy);
    }
}

var pp: IPoint = new Point(3, 4);
var dist = pp.getDist();
toastr.info("distance = " + dist);