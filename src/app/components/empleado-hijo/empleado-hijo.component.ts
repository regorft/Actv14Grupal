import { Component, Input } from '@angular/core';
import { Empleado } from 'src/app/empleado.models';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent {
  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;

  //*Funcion de padre
  arrayCaracteristica = [''];

  agregarCaracteristica(nuevaCaracteristica: string){
    this.arrayCaracteristica.push(nuevaCaracteristica);

  }


}
