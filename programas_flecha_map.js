var Programa = /** @class */ (function () {
    function Programa(nombre, version) {
        this.nombre = nombre;
        this.version = version;
    }
    return Programa;
}());
var programas = [
    new Programa("Java", 8),
    new Programa("PHP", 8),
    new Programa("Angular 7", 8)
];
//Recorremos el mapa y pintamos el contenido en la consola, usando función flecha y .map
programas.map(function (programa) {
    console.log(programa.nombre + "  " + programa.version);
});
