function holaMundo(nombre) {
    return "Hola Mundo, me llamo " + nombre;
    var coche = new Car();
    coche.color = "verde";
    console.log("otro coche " + coche.color);
}
var nombre = "lola";
var etiqueta = document.getElementById("container");
etiqueta.innerHTML = holaMundo(nombre);
