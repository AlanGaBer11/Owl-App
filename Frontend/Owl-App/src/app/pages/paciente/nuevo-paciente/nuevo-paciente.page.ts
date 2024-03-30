import { Component, OnInit } from '@angular/core';
import { ServicioRestService } from 'src/app/services/servicio-rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-paciente',
  templateUrl: './nuevo-paciente.page.html',
  styleUrls: ['./nuevo-paciente.page.scss'],
})
export class NuevoPacientePage implements OnInit {
  public agPacientes: FormGroup;

  constructor(
    private serviceRest: ServicioRestService,
    private fb: FormBuilder
  ) {
    this.agPacientes = this.fb.group({
      id_paciente: ['', Validators.required],
      nombre_cliente: ['', Validators.required],
      ap_pa: ['', Validators.required],
      ap_ma: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      estado_civil: ['', Validators.required],
      contacto: ['', Validators.required],
      antecedentes_medicos: ['', Validators.required],
      medicamentos_actuales: ['', Validators.required],
      registro_online: ['', Validators.required],
    });
  }

  ngOnInit() {}

  // POST
  public agregarPaciente() {
    const nuevoPaciente = this.agPacientes.value;
    this.serviceRest
      .post('http://localhost:3000/api/v1/paciente', nuevoPaciente)
      .subscribe(
        (respuesta) => {
          console.log('Paciente Agregado', respuesta);
        },
        (error) => {
          console.error('Error al crear el paciente', error);
        }
      );
    alert('Paciente creado con éxito');
  }
}
