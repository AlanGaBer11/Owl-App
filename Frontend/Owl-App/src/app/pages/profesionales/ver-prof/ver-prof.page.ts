import { Component, OnInit } from '@angular/core';
import { ServicioRestService } from 'src/app/services/servicio-rest.service';

@Component({
  selector: 'app-ver-prof',
  templateUrl: './ver-prof.page.html',
  styleUrls: ['./ver-prof.page.scss'],
})
export class VerProfPage implements OnInit {
  public prof: any = [];

  constructor(private serviceRest: ServicioRestService) { }

  ngOnInit() {
    this.getProf();
  }

  public getProf(){
    this.serviceRest.get('http://localhost:3000/api/v1/profesional').subscribe(respuesta => {
      this.prof = respuesta;
    });
  }

  public deleteProf(id: number){
    this.serviceRest.delete(`http://localhost:3000/api/v1/profesional/${id}`).subscribe((respuesta) => {
      console.log('Eliminado', respuesta);
    });
    alert('Profesional Eliminado');
    this.getProf();
    window.location.reload();
  }
}
