class Programa {

	public nombre:string;
	public version:number;

	constructor(nombre, version){
		this.nombre = nombre;
		this.version = version;
	}

}

var programas:Array<Programa> = [
	 new Programa("Java", 8),
	 new Programa("PHP", 7),
	 new Programa("Angular", 7)
	];

//Recorremos el mapa y pintamos el contenido en la consola, usando función flecha y .map
programas.map( programa => {
	console.log(programa.nombre + "  " + programa.version);
	
});