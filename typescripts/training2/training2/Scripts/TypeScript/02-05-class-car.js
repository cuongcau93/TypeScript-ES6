//class Engine {
//    constructor(public horsePower: number, public engineType: string) {
//    }
//}
//class Car {
//    private _engine: Engine;
//    constructor(engine: Engine) {
//        this.engine = engine;
//    }
//    get engine(): Engine {
//        return this._engine;
//    }
//    set engine(value: Engine) {
//        if (value == undefined) throw 'Please supply an engine';
//        this._engine = value;
//    }
//    start(): void {
//        alert('Car engine started ' + this._engine.engineType);
//    }
//}
//window.onload = function () {
//    var engine = new Engine(100, 'Nguyen Manh Cuong');
//    var car = new Car(engine);
//    alert(car.engine.engineType);
//    car.start()
//} 
//# sourceMappingURL=02-05-class-car.js.map