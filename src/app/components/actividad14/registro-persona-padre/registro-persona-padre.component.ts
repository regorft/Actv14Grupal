import { Component } from '@angular/core';
import { Persona } from '../persona.models';

@Component({
  selector: 'app-registro-persona-padre',
  templateUrl: './registro-persona-padre.component.html',
  styleUrls: ['./registro-persona-padre.component.css']
})
export class RegistroPersonaPadreComponent {
  tituloAtv14 = 'Registro de Personas'
  
  personas: Persona[] = [];

  agregarPersona(){
    let miPersona = new Persona(
      this.cuadroNombre,
      this.cuadroDni,
      this.cuadroEstadoCivil
    );
    this.personas.push(miPersona);
  }
  cuadroNombre: string = '';
  cuadroDni: number = 0;
  cuadroEstadoCivil: string = '';
}
