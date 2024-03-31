import { Component, OnInit } from '@angular/core';
import { ServicioRestService } from 'src/app/services/servicio-rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.page.html',
  styleUrls: ['./clinica.page.scss'],
})
export class ClinicaPage implements OnInit {
  public clinica: any = [];
  public agClinica: FormGroup;
  public acClinica: FormGroup;
  public clinicaSeleccionada: any;
  public isAgregarModalOpen = false;
  public isEditarModalOpen = false;

  constructor(
    private servicioRest: ServicioRestService,
    private fb: FormBuilder,
    private modalController: ModalController,
    private alertController: AlertController
  ) {
    // AGREGAR
    this.agClinica = this.fb.group({
      id_clinica: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      direccion: ['', Validators.required],
      num_tel: ['', Validators.required],
    });

    // ACTUALIZAR
    this.acClinica = this.fb.group({
      id_clinica: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      direccion: ['', Validators.required],
      num_tel: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.cargaClinica();
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
            this.cargaClinica(); // Recargar datos
            window.location.reload(); // Recargar la página despues de daar ok
          }
        }
      ]
    });
    await alert.present();
  }

  // GET
  public cargaClinica() {
    this.servicioRest.get('http://localhost:3000/api/v1/clinica').subscribe((respuesta) => {
      this.clinica = respuesta;
    });
  }

  // DELETE
  public eliminarClinica(id: number) {
    this.servicioRest.delete(`http://localhost:3000/api/v1/clinica/${id}`).subscribe((respuesta) => {
      console.log('Eliminado', respuesta);
    });
    this.mostrarAlerta('Clinica Eliminada');

  }

  // POST
  public agregarClinica() {
    const nuevaClinica = this.agClinica.value;
    this.servicioRest.post('http://localhost:3000/api/v1/clinica', nuevaClinica).subscribe(
      (respuesta) => {
        console.log('Clinica Agregado', respuesta);
      },
      (error) => {
        console.error('Error al crear la clínica', error);
      }
    );
    this.mostrarAlerta('Clínica creado con éxito');
    //this.cargaClinica();
    this.closeAgregarModal();
    this.agClinica.reset();
  }

  // PATCH
  public seleccionarClinica(clinica: any) {
    this.clinicaSeleccionada = { ...clinica };
    this.acClinica.patchValue(this.clinicaSeleccionada);
  }

  public actualizarClinica() {
    const clinicaActualizada = this.acClinica.value;
    this.servicioRest
      .patch(`http://localhost:3000/api/v1/clinica/${this.clinicaSeleccionada.id_clinica}`, clinicaActualizada)
      .subscribe(
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
    this.mostrarAlerta('Clínica actualizada exitosamente');
    this.cargaClinica();
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

  async openEditarModal(clinica: any) {
    this.clinicaSeleccionada = clinica;
    this.acClinica.patchValue(clinica);
    this.isEditarModalOpen = true;
  }

  closeEditarModal() {
    this.modalController.dismiss();
    this.clinicaSeleccionada = null;
    this.acClinica.reset();
  }

  didDismissEditarModal() {
    this.isEditarModalOpen = false;
    this.clinicaSeleccionada = null;
    this.acClinica.reset();
  }

  public cancelarActualizacion() {
    this.acClinica.reset();
    this.clinicaSeleccionada = null;
  }
}