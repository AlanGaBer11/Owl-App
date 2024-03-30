import { Component, OnInit } from '@angular/core';
import { ServicioRestService } from 'src/app/services/servicio-rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-prof',
  templateUrl: './nuevo-prof.page.html',
  styleUrls: ['./nuevo-prof.page.scss'],
})
export class NuevoProfPage implements OnInit {
  public agProf: FormGroup;


  constructor(private serviceRest: ServicioRestService, private fb: FormBuilder, private router: Router) { 
    this.agProf = this.fb.group({
      nom: ['', Validators.required],
      ap: ['', Validators.required],
      especialidad: ['', Validators.required],
      cedula_profesional: ['', Validators.required],
      num_telefono: ['', Validators.required],
      correo_elec: ['', Validators.required],
      horario: ['', Validators.required],
      nom_clinica: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  // POST
  public agregarProf() {
    const nuevoProf = this.agProf.value;
    this.serviceRest.post('http://localhost:3000/api/v1/profesional', nuevoProf).subscribe((respuesta) => {
      console.log('Profesional Agregado', respuesta);
        },
        (error) => {
          console.error('Error al crear el profesional', error);
        }
      );
    alert('Profesional creado con éxito');
    this.agProf.reset();
    
    this.router.navigateByUrl('/ver-prof');
  }

}
