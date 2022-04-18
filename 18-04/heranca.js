class Car {
    constructor(brand) {
        this.carname = brand;
    }

    present() {
        return 'I have a ' + this.carname;
    }
}

let car1 = new Car("Kombi")
//console.log(car1.present())

class Model extends Car {
    constructor(brand, mod) {
        super(brand);
        this.model = mod;
    }

    show() {
        return this.carname + ', it is a ' + this.model;
    }
}

let model1 = new Model('kombi', 'Série luxo')
console.log(model1.show())