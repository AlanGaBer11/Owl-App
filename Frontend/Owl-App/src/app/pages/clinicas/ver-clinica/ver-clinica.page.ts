import { Component, OnInit } from '@angular/core';
import { ServicioRestService } from 'src/app/services/servicio-rest.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ver-clinica',
  templateUrl: './ver-clinica.page.html',
  styleUrls: ['./ver-clinica.page.scss'],
})
export class VerClinicaPage implements OnInit {
  public clinicas: any = [];
  public clinicaSeleccionada: any;

  constructor(private serviceRest: ServicioRestService, private router: Router) { }

  ngOnInit() {
    this.getClinica();
  }

  // GET
  public getClinica(){
    this.serviceRest.get('http://localhost:3000/api/v1/clinica').subscribe(respuesta => {
      this.clinicas = respuesta;
    });
  };

  //DELETE
  public deleteClinica(id: number){
    this.serviceRest.delete(`http://localhost:3000/api/v1/clinica/${id}`).subscribe((respuesta) => {
      console.log('Eliminado', respuesta);
    });
    alert('Clinica Eliminada');
    this.getClinica();
    window.location.reload();
  }

    // SELECCIONAR  
    public seleccionarClinica(clinica: any) {
      this.clinicaSeleccionada = { ...clinica };
      this.router.navigate(['/edi-clinica', clinica.id_clinica]); // Revisa que la ruta aquí coincida con la definida en app-routing.module.ts
    }
}
