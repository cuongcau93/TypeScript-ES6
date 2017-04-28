var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    Engine.prototype.start = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    Engine.prototype.stop = function (callback) {
        var _this = this;
        window.setTimeout(function () {
            callback(true, _this.engineType);
        }, 1000);
    };
    return Engine;
}());
var Accessory = (function () {
    function Accessory(accessoryNumber, title) {
        this.accessoryNumber = accessoryNumber;
        this.title = title;
    }
    return Accessory;
}());
var Auto = (function () {
    function Auto(basePrice, engine, make, model) {
        this.make = make;
        this.model = model;
        this.basePrice = basePrice;
        this.engine = engine;
    }
    Auto.prototype.calcualateTotal = function () {
        var taxRate = 0.08, result;
        result = (taxRate * this.basePrice) + this.basePrice;
        return result;
    };
    Auto.prototype.addAccessories = function () {
        var accessories = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            accessories[_i] = arguments[_i];
        }
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + ' <br/>';
        }
        return this.accessoryList;
    };
    Auto.prototype.getAccessoryList = function () {
        return this.accessoryList;
    };
    Object.defineProperty(Auto.prototype, "basePrice", {
        get: function () {
            return this._basePrice;
        },
        set: function (value) {
            if (value <= 0)
                throw 'price must be >= 0';
            this._basePrice = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Auto.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'Please supplt an engine.';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    return Auto;
}());
window.onload = function () {
    var ac1 = new Accessory(1, 'Mac the nhan'), ac2 = new Accessory(2, 'La bat vi'), engi1 = new Engine(11, 'LOL'), auto1 = new Auto(12, engi1, 'she is', 'Cuong');
    console.log('CalcualaTotal base Price of 12 = ' + auto1.calcualateTotal());
    console.log('addAccessories = ' + auto1.addAccessories(ac1, ac2));
};
//# sourceMappingURL=02-06-class-auto.js.map