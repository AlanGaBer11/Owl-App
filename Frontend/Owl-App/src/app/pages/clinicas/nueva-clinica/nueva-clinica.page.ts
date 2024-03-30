import { Component, OnInit } from '@angular/core';
import { ServicioRestService } from 'src/app/services/servicio-rest.service';
import {  Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nueva-clinica',
  templateUrl: './nueva-clinica.page.html',
  styleUrls: ['./nueva-clinica.page.scss'],
})
export class NuevaClinicaPage implements OnInit {
  public agClinica: FormGroup;

  constructor(
    private serviceRest: ServicioRestService, private fb: FormBuilder, private router: Router) {
    this.agClinica = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      direccion: ['', Validators.required],
      num_tel: ['', Validators.required],
    });
  }

  ngOnInit() {}

  // POST
  public agregarClinica() {
    const nuevaClinica = this.agClinica.value;
    this.serviceRest.post('http://localhost:3000/api/v1/clinica', nuevaClinica).subscribe((respuesta) => {
      console.log('Clínica Agregada', respuesta);
        },
        (error) => {
          console.error('Error al crear la clínica', error);
        }
      );
    alert('Clínica creado con éxito');
    this.agClinica.reset();
    
    this.router.navigateByUrl('/ver-clinica');
  }
}
