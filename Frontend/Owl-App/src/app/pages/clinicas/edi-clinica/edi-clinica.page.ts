import { Component, OnInit } from '@angular/core';
import { ServicioRestService } from 'src/app/services/servicio-rest.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edi-clinica',
  templateUrl: './edi-clinica.page.html',
  styleUrls: ['./edi-clinica.page.scss'],
})
export class EdiClinicaPage implements OnInit {
  public acClinica: FormGroup;
  public clinicaSeleccionada: any;

  constructor(private serviceRest: ServicioRestService, private fb: FormBuilder, private router: Router) {
    this.acClinica = this.fb.group({
      id_clinica: ['',Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      direccion: ['', Validators.required],
      num_tel: ['', Validators.required],
    })
  }

  ngOnInit() {}

  // SELECIONAR CLINICA
  public seleccionarClinica(clinica: any) {
    this.clinicaSeleccionada = { ...clinica };
    this.acClinica.patchValue(this.clinicaSeleccionada);
  }

 // PACTH
  public actualizarClinica() {
    const clinicaActualizada = this.acClinica.value;
    this.serviceRest.patch(`http://localhost:3000/api/v1/clinica/${this.clinicaSeleccionada.id_clinica}`, clinicaActualizada).subscribe(
      (respuesta) => {
        console.log('Clínica Actualizada', respuesta);
        // Limpiar el formulario y deseleccionar el alumno
        this.acClinica.reset();
        this.clinicaSeleccionada = null;
      },
      (error) => {
        console.error('Error al actualizar la clínica', error);
      }
    );
    alert('Clinica actualizada exitosamente');
    window.location.reload();
    this.router.navigateByUrl('/ver-clinica');
  }

}
