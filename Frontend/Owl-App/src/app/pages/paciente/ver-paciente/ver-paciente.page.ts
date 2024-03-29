import { Component, OnInit } from '@angular/core';
import { ServicioRestService } from 'src/app/services/servicio-rest.service';

@Component({
  selector: 'app-ver-paciente',
  templateUrl: './ver-paciente.page.html',
  styleUrls: ['./ver-paciente.page.scss'],
})
export class VerPacientePage implements OnInit {
  public pacientes: any = [];

  constructor(private serviceRest: ServicioRestService) { }

  ngOnInit(): void {
    this.cargarPacientes();
  }

  public cargarPacientes() {
    const url = 'http://localhost:3000/api/v1/paciente';
    this.serviceRest.get(url).subscribe(
      (respuesta: any) => {
        this.pacientes = respuesta;
      },
      (error: any) => {
        console.error('Error al obtener los pacientes:', error);
      }
    );
  }

  public eliminarPaciente(id: number) {
    const url = `http://localhost:3000/api/v1/paciente/${id}`;
    this.serviceRest.delete(url).subscribe(
      () => {
        console.log('Paciente eliminado correctamente.');
        this.cargarPacientes(); // Actualizar la lista después de eliminar
      },
      (error: any) => {
        console.error('Error al eliminar el paciente:', error);
      }
    );
  }
}
