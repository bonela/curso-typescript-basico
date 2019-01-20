function decoradorlola(...arg:any[]){
	return function(target: Function){
		target.prototype.firstdecorator = function() :void{
			console.log("Esto lo hace el decorador");
			alert("Esto es un decorador!!");
		}
	}

}


@decoradorlola()
class UsoDecorador{

	//sólo quiero ver que se ejecuta el decorador
	public nombre:string;


	getNombre(){
		return this.nombre;
	}

	setNombre(nombre:string){
		this.nombre  = nombre;
	}
}

var usoDecorador = new UsoDecorador();
usoDecorador.firstdecorator();