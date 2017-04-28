interface calculator{
    x: string;
    y: string;
    outputId: string;
}
class Calculator {
    private x: HTMLInputElement;
    private y: HTMLInputElement;
    private output: HTMLSpanElement;   

    constructor(cal: calculator) {
        this.x = <HTMLInputElement>document.getElementById(cal.x);
        this.y = <HTMLInputElement>document.getElementById(cal.y);
        this.output = <HTMLLabelElement>document.getElementById(cal.outputId);
        this.wrireEvents();
    }

    wrireEvents() {
        document.getElementById('Add').addEventListener('click',
            event => {
                this.output.innerHTML = this.add(parseInt(this.x.value), parseInt(this.y.value)).toString();
            });
        document.getElementById('Subtract').addEventListener('click',
            event => {
                this.output.innerHTML = this.subtract(parseInt(this.x.value), parseInt(this.y.value)).toString();
            });
    }

    add(x: number, y: number): number {
        return x + y;
    }

    subtract(x: number, y: number): number {
        return x - y;
    }
}

window.onload = function () {
    let cal = {
        x: 'X',
        y: 'Y',
        outputId: 'Output'
    }
    var calc = new Calculator(cal);
}