var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decoradorlola() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    return function (target) {
        target.prototype.firstdecorator = function () {
            console.log("Esto lo hace el decorador");
            alert("Esto es un decorador!!");
        };
    };
}
var UsoDecorador = /** @class */ (function () {
    function UsoDecorador() {
    }
    UsoDecorador.prototype.getNombre = function () {
        return this.nombre;
    };
    UsoDecorador.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    UsoDecorador = __decorate([
        decoradorlola()
    ], UsoDecorador);
    return UsoDecorador;
}());
var usoDecorador = new UsoDecorador();
usoDecorador.firstdecorator();
