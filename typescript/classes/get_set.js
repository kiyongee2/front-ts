"use strict";
class Car {
    _brand;
    constructor(brand) {
        this._brand = brand;
    }
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }
}
const car = new Car("Hyundai");
console.log(car.brand); // Output: Hyundai
