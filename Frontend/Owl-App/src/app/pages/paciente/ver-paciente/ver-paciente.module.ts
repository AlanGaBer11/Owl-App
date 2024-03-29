import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { VerPacientePageRoutingModule } from './ver-paciente-routing.module';
import { VerPacientePage } from './ver-paciente.page';
import { ServicioRestService } from 'src/app/services/servicio-rest.service'; // Importa tu servicio aquí

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerPacientePageRoutingModule
  ],
  declarations: [VerPacientePage],
  providers: [ServicioRestService] // SERVICIO PARA GET, POST, PATCH, DELETE
})
export class VerPacientePageModule {}
