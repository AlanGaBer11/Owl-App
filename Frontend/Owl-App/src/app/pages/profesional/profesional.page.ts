import { Component, OnInit } from '@angular/core';
import { ServicioRestService } from 'src/app/services/servicio-rest.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profesional',
  templateUrl: './profesional.page.html',
  styleUrls: ['./profesional.page.scss'],
})
export class ProfesionalPage implements OnInit {
  public profesional: any = [];
  public agProf: FormGroup;
  public acProf: FormGroup;
  public profSeleccionado: any;
  public isAgregarModalOpen = false;
  public isEditarModalOpen = false;
  public clinicas: any = [];

  constructor(
    private servicioRest: ServicioRestService,
    private fb: FormBuilder,
    private modalController: ModalController,
    private alertController: AlertController
  ) {
    // AGREGAR
    this.agProf = this.fb.group({
      id_pro: ['', Validators.required],
      nom: ['', Validators.required],
      ap: ['', Validators.required],
      especialidad: ['', Validators.required],
      cedula_profesional: ['', Validators.required],
      num_telefono: ['', Validators.required],
      correo_elec: ['', Validators.required],
      horario: ['', Validators.required],
      nom_clinica: ['', Validators.required],
    });

    // ACTUALIZAR
    this.acProf = this.fb.group({
      id_pro: ['', Validators.required],
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
    this.cargaProf();
    this.obtenerClinicas();
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
            this.cargaProf(); // Recargar datos
            window.location.reload(); // Recargar la página despues de daar ok
          }
        }
      ]
    });
    await alert.present();
  }

  // GET
  public cargaProf() {
    this.servicioRest.get('http://localhost:3000/api/v1/profesional').subscribe((respuesta) => {
      this.profesional = respuesta;
    });
  }

  // DELETE
  public eliminarProf(id: number) {
    this.servicioRest.delete(`http://localhost:3000/api/v1/profesional/${id}`).subscribe((respuesta) => {
      console.log('Eliminado', respuesta);
    });
    this.mostrarAlerta('Profesional Eliminado');
  }

  // POST
  public agregarProf() {
    const nuevoProf = this.agProf.value;
    this.servicioRest.post('http://localhost:3000/api/v1/profesional', nuevoProf).subscribe((respuesta) => {
        console.log('Profesional Agregado', respuesta);
        },
        (error) => {
          console.error('Error al crear el profesional', error);
        }
      );
    this.mostrarAlerta('Profesional creado con éxito');
    this.closeAgregarModal();
    this.agProf.reset();
  }

  // PATCH
  public seleccionarProf(prof: any) {
    this.profSeleccionado = { ...prof };
    this.acProf.patchValue(this.profSeleccionado);
  }

  public actualizarProf() {
    const profActualizado = this.acProf.value;
    this.servicioRest.patch(`http://localhost:3000/api/v1/profesional/${this.profSeleccionado.id_pro}`,profActualizado
      )
      .subscribe(
        (respuesta) => {
          console.log('Profesional Actualizado', respuesta);
          // Limpiar el formulario y deseleccionar
          this.acProf.reset();
          this.profSeleccionado = null;
        },
        (error) => {
          console.error('Error al actualizar el profesional', error);
        }
      );
    this.mostrarAlerta('Profesional actualizado exitosamente');
    this.closeEditarModal();
    //window.location.reload();
  }

  obtenerClinicas() {
    this.servicioRest.get('http://localhost:3000/api/v1/clinica').subscribe((respuesta) => {
      this.clinicas = respuesta;
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

  async openEditarModal(prof: any) {
    this.profSeleccionado = prof;
    this.acProf.patchValue(prof);
    this.isEditarModalOpen = true;
  }

  closeEditarModal() {
    this.modalController.dismiss();
    this.profSeleccionado = null;
    this.acProf.reset();
  }

  didDismissEditarModal() {
    this.isEditarModalOpen = false;
    this.profSeleccionado = null;
    this.acProf.reset();
  }

  public cancelarActualizacion() {
    this.acProf.reset();
    this.profSeleccionado = null;
  }
}
