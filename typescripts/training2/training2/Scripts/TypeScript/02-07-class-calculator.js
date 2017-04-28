var Calculator = (function () {
    function Calculator(cal) {
        this.x = document.getElementById(cal.x);
        this.y = document.getElementById(cal.y);
        this.output = document.getElementById(cal.outputId);
        this.wrireEvents();
    }
    Calculator.prototype.wrireEvents = function () {
        var _this = this;
        document.getElementById('Add').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.add(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
        document.getElementById('Subtract').addEventListener('click', function (event) {
            _this.output.innerHTML = _this.subtract(parseInt(_this.x.value), parseInt(_this.y.value)).toString();
        });
    };
    Calculator.prototype.add = function (x, y) {
        return x + y;
    };
    Calculator.prototype.subtract = function (x, y) {
        return x - y;
    };
    return Calculator;
}());
window.onload = function () {
    var cal = {
        x: 'X',
        y: 'Y',
        outputId: 'Output'
    };
    var calc = new Calculator(cal);
};
//# sourceMappingURL=02-07-class-calculator.js.map