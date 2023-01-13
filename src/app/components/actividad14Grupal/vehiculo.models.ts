export class Vehiculo {
    placa:string ="";   
    sede:string ="";
    tipoUnidad:string ="";
    clase:string ="";
    marca:string ="";
    modelo:string ="";
    color:string ="";
    anio:string ="";

    constructor(placa:string, sede:string,tipoUnidad:string, clase:string,marca:string,modelo:string,color:string,anio:string) {
        this.placa = placa;
        this.sede = sede;
        this.tipoUnidad = tipoUnidad;
        this.clase = clase;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.anio = anio;
    }

}