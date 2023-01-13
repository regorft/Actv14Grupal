import { Component } from '@angular/core';
import { Empleado } from './empleado.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ejemplo14-prof';
  titulo = 'Listado de empleados';
  empleados: Empleado[] = [
    new Empleado('juan', 'diaz', 'profesor', 2500),
    new Empleado('juana', 'sandoval', 'profesora', 2500),
    new Empleado('nestor', 'zapata', 'profesor', 3500),
    new Empleado('juan de dios ', 'romero', 'director', 5500),
  ];
  agregarempleado() {
    let miempleado = new Empleado(
      this.cuadronombre,
      this.cuadroapellido,
      this.cuadrocargo,
      this.cuadrosalario
    );
    this.empleados.push(miempleado);
  }

  cuadronombre: string = '';
  cuadroapellido: string = '';
  cuadrocargo: string = '';
  cuadrosalario: number = 0;
}
