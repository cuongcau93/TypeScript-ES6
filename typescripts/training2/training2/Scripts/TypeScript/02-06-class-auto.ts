class Engine {
    constructor(public horsePower: number, public engineType: string) { }

    start(callback: (startStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }

    stop(callback: (stopStatus: boolean, engineType: string) => void) {
        window.setTimeout(() => {
            callback(true, this.engineType);
        }, 1000);
    }
}

class Accessory {
    constructor(public accessoryNumber: number, public title: string) { }
}
    
class Auto {
    private _basePrice: number;
    private _engine: Engine;
    make: string;
    model: string;
    accessoryList: string;

    constructor(basePrice: number, engine: Engine, make: string, model: string) {
        this.make = make;
        this.model = model;
        this.basePrice = basePrice;
        this.engine = engine;
    }

    calcualateTotal(): number {
        let
            taxRate = 0.08,
            result: number;
        result = (taxRate * this.basePrice) + this.basePrice;
        return result;
    }

    addAccessories(...accessories: Accessory[]): string  {
        this.accessoryList = '';
        for (var i = 0; i < accessories.length; i++) {
            var ac = accessories[i];
            this.accessoryList += ac.accessoryNumber + ' ' + ac.title + ' <br/>';
        }
        return this.accessoryList;
    }

    getAccessoryList(): string {
        return this.accessoryList;
    }

    get basePrice(): number {
        return this._basePrice;
    }

    set basePrice(value: number) {
        if (value <= 0) throw 'price must be >= 0';
        this._basePrice = value;
    }

    get engine(): Engine {
        return this._engine;
    }

    set engine(value: Engine) {
        if (value == undefined) throw 'Please supplt an engine.';
        this._engine = value
    }
}

window.onload = () => {
    let ac1 = new Accessory(1, 'Mac the nhan'),
        ac2 = new Accessory(2, 'La bat vi'),
        engi1 = new Engine(11, 'LOL'),  
        auto1 = new Auto(12, engi1, 'she is', 'Cuong');
    console.log('CalcualaTotal base Price of 12 = ' + auto1.calcualateTotal());
    console.log('addAccessories = ' + auto1.addAccessories(ac1, ac2));
}