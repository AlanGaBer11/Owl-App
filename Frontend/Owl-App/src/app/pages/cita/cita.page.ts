import { Component, OnInit } from '@angular/core';
import { ServicioRestService } from 'src/app/services/servicio-rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.page.html',
  styleUrls: ['./cita.page.scss'],
})
export class CitaPage implements OnInit {
  public cita: any = [];
  public agCita: FormGroup;
  public acCita: FormGroup;
  public citaSeleccionada: any;
  public isAgregarModalOpen = false;
  public isEditarModalOpen = false;
  public historialModalOpen = false;
  public pacientes: any = [];
  public clinicas: any = [];
  public profesionales: any = [];

  constructor(
    private servicioRest: ServicioRestService,
    private fb: FormBuilder,
    private modalController: ModalController,
    private alertController: AlertController
  ) {
    // AGREGAR
    this.agCita = this.fb.group({
      id_cita: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      id_usuario: ['', Validators.required],
      nom_paciente: ['', Validators.required],
      nom_profesional: ['', Validators.required],
      nom_clinica: ['', Validators.required]
    });

    // ACTUALIZAR
    this.acCita = this.fb.group({
      id_cita: ['', Validators.required],
      descripcion: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      id_usuario: ['', Validators.required],
      nom_paciente: ['', Validators.required],
      nom_profesional: ['', Validators.required],
      nom_clinica: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.cargaCita();
    this.obtenerPacientes();
    this.obtenerClinicas();
    this.obtenerProfesionales();
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
            this.cargaCita(); // Recargar datos
            window.location.reload(); // Recargar la página despues de daar ok
          }
        }
      ]
    });
    await alert.present();
  }

  // GET
  public cargaCita() {
    this.servicioRest.get('http://localhost:3000/api/v1/cita').subscribe((respuesta) => {
      this.cita = respuesta;
    });
  }

  // DELETE
  public eliminarCita(id: number) {
    this.servicioRest.delete(`http://localhost:3000/api/v1/cita/${id}`).subscribe((respuesta) => {
      console.log('Eliminado', respuesta);
    });
    this.mostrarAlerta('Cita Eliminada');
  }

  // POST
  public agregarCita() {
    const nuevaCita = this.agCita.value;
    this.servicioRest.post('http://localhost:3000/api/v1/cita', nuevaCita).subscribe((respuesta) => {
        console.log('Cita Agregada', respuesta);
        },
        (error) => {
          console.error('Error al crear la cita', error);
        }
      );
    this.mostrarAlerta('Cita creads con éxito');
    this.closeAgregarModal();
    this.agCita.reset();
  }

  // PATCH
  public seleccionarCita(cita: any) {
    this.citaSeleccionada = { ...cita };
    this.acCita.patchValue(this.citaSeleccionada);
  }

  public actualizarCita() {
    const citaActualizada = this.acCita.value;
    this.servicioRest.patch(`http://localhost:3000/api/v1/cita/${this.citaSeleccionada.id_pro}`,citaActualizada
      )
      .subscribe(
        (respuesta) => {
          console.log('Cita Actualizado', respuesta);
          // Limpiar el formulario y deseleccionar
          this.acCita.reset();
          this.citaSeleccionada = null;
        },
        (error) => {
          console.error('Error al actualizar la cita', error);
        }
      );
    this.mostrarAlerta('Cita actualizada exitosamente');
    this.closeEditarModal();
    //window.location.reload();
  }

  obtenerPacientes() {
    this.servicioRest.get('http://localhost:3000/api/v1/paciente').subscribe((respuesta) => {
      this.pacientes = respuesta;
    });
  }

  obtenerClinicas() {
    this.servicioRest.get('http://localhost:3000/api/v1/clinica').subscribe((respuesta) => {
      this.clinicas = respuesta;
    });
  }

  obtenerProfesionales() {
    this.servicioRest.get('http://localhost:3000/api/v1/profesional').subscribe((respuesta) => {
      this.profesionales = respuesta;
    });
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

  async openEditarModal(cita: any) {
    this.citaSeleccionada = cita;
    this.acCita.patchValue(cita);
    this.isEditarModalOpen = true;
  }

  closeEditarModal() {
    this.modalController.dismiss();
    this.citaSeleccionada = null;
    this.acCita.reset();
  }

  didDismissEditarModal() {
    this.isEditarModalOpen = false;
    this.citaSeleccionada = null;
    this.acCita.reset();
  }

  public cancelarActualizacion() {
    this.acCita.reset();
    this.citaSeleccionada = null;
  }

  async openHistorialModal(cita: any){
    this.citaSeleccionada = cita;
    this.historialModalOpen = true;
  }
  
  closeHistorialModal(){
    this.modalController.dismiss();
  }

  didDismissHistModal() {
    this.historialModalOpen = false;
  }
}
