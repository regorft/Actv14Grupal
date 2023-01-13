import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caracteristica-empleado',
  templateUrl: './caracteristica-empleado.component.html',
  styleUrls: ['./caracteristica-empleado.component.css']
})
export class CaracteristicaEmpleadoComponent {
  @Output() caracteristicasEmpleados = new EventEmitter<string>();
  agregarCaracteristicas2(value: string){
    this.caracteristicasEmpleados.emit(value);
  }

}
