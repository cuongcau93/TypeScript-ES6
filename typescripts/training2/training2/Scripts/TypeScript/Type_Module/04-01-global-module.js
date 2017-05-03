var Point = (function () {
    function Point(x, y) {
        this.xx = x;
        this.yy = y;
    }
    Object.defineProperty(Point.prototype, "xx", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value <= 0)
                throw 'xx must be than 0';
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "yy", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (value <= 0)
                throw 'yy must be than 0';
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    Point.prototype.getDist = function () {
        return Math.sqrt(this.xx * this.xx + this.yy * this.yy);
    };
    return Point;
}());
var pp = new Point(3, 4);
var dist = pp.getDist();
toastr.info("distance = " + dist);
//# sourceMappingURL=04-01-global-module.js.map