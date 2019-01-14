class Car{
	public color:string;

	constructor(color:string = null ){
		if(color != null){
			this.color = color;
		} else {
		    this.color = "BMW";
		}
	}

	public setColor(color:string){
		this.color  = color;
	};

	public getColor(){

		return this.color;
	}
}
var coche = new Car();
console.log(coche.getColor());
var otroCoche = new Car("Astra");
console.log(otroCoche.getColor());
 