export class Persona {
    nombre:string = "";
    dni:number;
    estadoCivil:string="";
    constructor(nombre:string, dni:number, estadoCivil:string) {
        this.nombre = nombre;
        this.dni = dni;
        this.estadoCivil = estadoCivil;        
    }
}