var Car = /** @class */ (function () {
    function Car(color) {
        if (color === void 0) { color = null; }
        if (color != null) {
            this.color = color;
        }
        else {
            this.color = "BMW";
        }
    }
    Car.prototype.setColor = function (color) {
        this.color = color;
    };
    ;
    Car.prototype.getColor = function () {
        return this.color;
    };
    return Car;
}());
var coche = new Car();
console.log(coche.getColor());
var otroCoche = new Car("Astra");
console.log(otroCoche.getColor());
