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
    this.getPaciente();
  }

 // GET
 public getPaciente(){
  this.serviceRest.get('http://localhost:3000/api/v1/paciente').subscribe(respuesta => {
    this.pacientes = respuesta;
  });
};

//DELETE
public deletePaciente(id: number){
  this.serviceRest.delete(`http://localhost:3000/api/v1/paciente/${id}`).subscribe((respuesta) => {
    console.log('Eliminado', respuesta);
  });
  alert('Paciente Eliminada');
  this.getPaciente();
  window.location.reload();
}
}
