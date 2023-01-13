import { Component,Input } from '@angular/core';
import { Persona } from '../persona.models';

@Component({
  selector: 'app-registro-persona-hijo',
  templateUrl: './registro-persona-hijo.component.html',
  styleUrls: ['./registro-persona-hijo.component.css']
})
export class RegistroPersonaHijoComponent {
  @Input() personaLista:Persona;
  @Input() indice:number;
}
