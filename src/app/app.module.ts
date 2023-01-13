import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './components/empleado-hijo/empleado-hijo.component';
import { CaracteristicaEmpleadoComponent } from './components/caracteristica-empleado/caracteristica-empleado.component';
import { RegistroPersonaPadreComponent } from './components/actividad14/registro-persona-padre/registro-persona-padre.component';
import { RegistroPersonaHijoComponent } from './components/actividad14/registro-persona-hijo/registro-persona-hijo.component';
import { RegistroVehiculoPadreComponent } from './components/actividad14Grupal/registro-vehiculo-padre/registro-vehiculo-padre.component';
import { RegistroVehiculoHijoComponent } from './components/actividad14Grupal/registro-vehiculo-hijo/registro-vehiculo-hijo.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicaEmpleadoComponent,
    RegistroPersonaPadreComponent,
    RegistroPersonaHijoComponent,
    RegistroVehiculoPadreComponent,
    RegistroVehiculoHijoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


