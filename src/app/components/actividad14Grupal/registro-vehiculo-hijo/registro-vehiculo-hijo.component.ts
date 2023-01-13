import { Component, Input } from '@angular/core';
import { Vehiculo } from '../vehiculo.models';

@Component({
  selector: 'app-registro-vehiculo-hijo',
  templateUrl: './registro-vehiculo-hijo.component.html',
  styleUrls: ['./registro-vehiculo-hijo.component.css']
})
export class RegistroVehiculoHijoComponent {
  @Input() vehiculoLista:Vehiculo;
  @Input() indice:number;

}
