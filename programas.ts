class Programa {

	public nombre:string;
	public version:number;

	public getNombre(){
		return this.nombre;
	}

	public getVersion(){
		return this.version;
	}

	public setNombre(nombre:string){
		this.nombre = nombre;
	}

	public setVersion(version:number){
		this.version = version;
	}

	public static pintarArray(){

		 var contenido:string = "";

		    for(var i = 0; i < programas.length; i ++){
		    	var contenido = (<HTMLInputElement> document.getElementById("listado")).innerHTML;
		    	contenido +=  "<li id= "+ i +">" + programas[i].getNombre() + "<input type='button' value='Borrar' onClick='removeProgram("+i+");'/>/</li>";
		    }

    	(<HTMLInputElement> document.getElementById("listado")).innerHTML = contenido;


	}
	
}

var programas:Array<Programa> = [];

function guardar(){

	var nombre = (<HTMLInputElement> document.getElementById("nombre")).value.toString();
	var newPrograma = new Programa();
	newPrograma.setNombre(nombre);
    programas.push(newPrograma);

    var contenido:string = "";

    for(var i = 0; i < programas.length; i ++){
    	var contenido = (<HTMLInputElement> document.getElementById("listado")).innerHTML;
    	contenido +=  "<li id= "+ i +">" + programas[i].getNombre() + "<input type='button' value='Borrar' onClick='removeProgram("+i+");'/>/</li>";
    }

    (<HTMLInputElement> document.getElementById("listado")).innerHTML = contenido;
	(<HTMLInputElement> document.getElementById("nombre")).value = "";
}

function removeProgram(idNumber:number){

	programas.splice(idNumber, 1);
	Programa.pintarArray();

}