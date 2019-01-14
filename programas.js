var Programa = /** @class */ (function () {
    function Programa() {
    }
    Programa.prototype.getNombre = function () {
        return this.nombre;
    };
    Programa.prototype.getVersion = function () {
        return this.version;
    };
    Programa.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Programa.prototype.setVersion = function (version) {
        this.version = version;
    };
    Programa.pintarArray = function () {
        var contenido = "";
        for (var i = 0; i < programas.length; i++) {
            var contenido = document.getElementById("listado").innerHTML;
            contenido += "<li id= " + i + ">" + programas[i].getNombre() + "<input type='button' value='Borrar' onClick='removeProgram(" + i + ");'/>/</li>";
        }
        document.getElementById("listado").innerHTML = contenido;
    };
    return Programa;
}());
var programas = [];
function guardar() {
    var nombre = document.getElementById("nombre").value.toString();
    var newPrograma = new Programa();
    newPrograma.setNombre(nombre);
    programas.push(newPrograma);
    var contenido = "";
    Programa.pintarArray();
    document.getElementById("nombre").value = "";
}
function removeProgram(idNumber) {
    programas.splice(idNumber, 1);
    Programa.pintarArray();
}
