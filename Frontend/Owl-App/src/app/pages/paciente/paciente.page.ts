import { Component, OnInit } from '@angular/core';
import { ServicioRestService } from 'src/app/services/servicio-rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacientePage implements OnInit {
  public paciente: any = [];
  public agPaciente: FormGroup;
  public acPaciente: FormGroup;
  public pacienteSeleccionado: any;
  public isAgregarModalOpen = false;
  public isEditarModalOpen = false;

  constructor(
    private servicioRest: ServicioRestService,
    private fb: FormBuilder,
    private modalController: ModalController,
    private alertController: AlertController
  ) {
    // AGREGAR
    this.agPaciente = this.fb.group({
      id_paciente: ['', Validators.required],
      registro_online: ['', Validators.required],
      id_usuario: ['', Validators.required],
      nombre_cliente: ['', Validators.required],
      ap_pa: ['', Validators.required],
      ap_ma: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      estado_civil: ['', Validators.required],
      contacto: ['', Validators.required],
      antecedentes_medicos: ['', Validators.required],
      medicamentos_actuales: ['',Validators.required]
    });

    // ACTUALIZAR
    this.acPaciente = this.fb.group({
      id_paciente: ['', Validators.required],
      registro_online: ['', Validators.required],
      id_usuario: ['', Validators.required],
      nombre_cliente: ['', Validators.required],
      ap_pa: ['', Validators.required],
      ap_ma: ['', Validators.required],
      fecha_nacimiento: ['', Validators.required],
      genero: ['', Validators.required],
      estado_civil: ['', Validators.required],
      contacto: ['', Validators.required],
      antecedentes_medicos: ['', Validators.required],
      medicamentos_actuales: ['',Validators.required]
    });
  }

  ngOnInit() {
    this.cargaPaciente();
  }
  // Método para mostrar una alerta
  public async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: mensaje,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.cargaPaciente(); // Recargar datos
            window.location.reload(); // Recargar la página despues de daar ok
          }
        }
      ]
    });
    await alert.present();
  }

  // GET
  public cargaPaciente() {
    this.servicioRest.get('http://localhost:3000/api/v1/paciente').subscribe((respuesta) => {
      this.paciente = respuesta;
    });
  }

  // DELETE
  public eliminarPaciente(id: number) {
    this.servicioRest.delete(`http://localhost:3000/api/v1/paciente/${id}`).subscribe((respuesta) => {
      console.log('Eliminado', respuesta);
    });
    this.mostrarAlerta('Paciente Eliminado');
  }

  // POST
  public agregarPaciente() {
    const nuevoPaciente = this.agPaciente.value;
    this.servicioRest.post('http://localhost:3000/api/v1/paciente', nuevoPaciente).subscribe(
      (respuesta) => {
        console.log('Paciente Agregado', respuesta);
      },
      (error) => {
        console.error('Error al crear el paciente', error);
      }
    );
    this.mostrarAlerta('Paciente creado con éxito');
    this.cargaPaciente();
    this.closeAgregarModal();
    this.agPaciente.reset();
  }

  // PATCH
  public seleccionarPaciente(paciente: any) {
    this.pacienteSeleccionado = { ...paciente };
    this.acPaciente.patchValue(this.pacienteSeleccionado);
  }

  public actualizarPaciente() {
    const pacienteActualizado = this.acPaciente.value;
    this.servicioRest
      .patch(`http://localhost:3000/api/v1/clinica/${this.pacienteSeleccionado.id_paciente}`, pacienteActualizado)
      .subscribe(
        (respuesta) => {
          console.log('Clínica Actualizada', respuesta);
          // Limpiar el formulario y deseleccionar
          this.acPaciente.reset();
          this.pacienteSeleccionado = null;
        },
        (error) => {
          console.error('Error al actualizar el paciente', error);
        }
      );
    this.mostrarAlerta('Paciente actualizado exitosamente');
    this.cargaPaciente();
    this.closeEditarModal();
  }

  // Modales
  async openAgregarModal() {
    this.isAgregarModalOpen = true;
  }

  closeAgregarModal() {
    this.modalController.dismiss();
  }

  didDismissAgregarModal() {
    this.isAgregarModalOpen = false;
  }

  async openEditarModal(paciente: any) {
    this.pacienteSeleccionado = paciente;
    this.acPaciente.patchValue(paciente);
    this.isEditarModalOpen = true;
  }

  closeEditarModal() {
    this.modalController.dismiss();
    this.pacienteSeleccionado = null;
    this.acPaciente.reset();
  }

  didDismissEditarModal() {
    this.isEditarModalOpen = false;
    this.pacienteSeleccionado = null;
    this.acPaciente.reset();
  }

  public cancelarActualizacion() {
    this.acPaciente.reset();
    this.pacienteSeleccionado = null;
  }
}