import { Component } from '@angular/core';
import { Vehiculo } from '../vehiculo.models';

@Component({
  selector: 'app-registro-vehiculo-padre',
  templateUrl: './registro-vehiculo-padre.component.html',
  styleUrls: ['./registro-vehiculo-padre.component.css']
})
export class RegistroVehiculoPadreComponent {

  tituloActv14Grupal = 'Registro de Vehiculo';

  vehiculos: Vehiculo[] = [];

  cuadroPlaca:string ="";   
  cuadroSede:string ="";
  cuadroTipoUnidad:string ="";
  cuadroClase:string ="";
  cuadroMarca:string ="";
  cuadroModelo:string ="";
  cuadroColor:string ="";
  cuadroAnio:string ="";

  agregarVehiculo(){
    let miVehiculo = new Vehiculo(
      this.cuadroPlaca,
      this.cuadroSede,
      this.cuadroTipoUnidad,
      this.cuadroClase,
      this.cuadroMarca,
      this.cuadroModelo,
      this.cuadroColor,
      this.cuadroAnio,
    );
    this.vehiculos.push(miVehiculo);
  }
}
