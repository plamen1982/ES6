//ES5

function Car(options) {
    this.title = options.title;
}

Car.prototype.drive = function() {
    return 'vroom';
}

function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
    return 'beep';
}

const toyota = new Toyota({ title: 'Focus', color: 'white' });
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());

//ES6

class CarES6 {
    constructor({ title }) {
        this.title = title;
    }

    drive() {
        return 'vroom';
    }
}

class ToyotaES6 extends CarES6 {
    constructor(options) {
        //super calls parent constructor
        super(options);
        this.color = options.color;
    }
    
    honk() {
        return 'beep'
    }
}

const toyotaES6 = new ToyotaES6({ color: 'red', title: 'Corolla' });
console.log(toyotaES6);
console.log(toyotaES6.drive());
console.log(toyotaES6.honk());

