import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.page.html',
  styleUrls: ['./sing-up.page.scss'],
})
export class SingUpPage implements OnInit {
  allUsers: any[] = [];
  userData: any;
  formularioSingup: FormGroup;
  passwordFieldType: string = 'password'; // Inicialmente oculto


  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder,
    private alertController: AlertController
  ) {
    this.formularioSingup = this.fb.group({
      nom_usuario: ['', Validators.required],
      nombre_completo: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      passw: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/
          ),
        ],
      ],
      confirmPassw: ['', [Validators.required, this.confirmPasswordValidator.bind(this)]],
    });
  }

  ngOnInit() {
    this.getUsuario();
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
            this.router.navigate(['login']); // MUESTRA MENDAJE DESPUES DE CREAR UNA CUENTA Y  DESPUES DE DAR OK, REDIRECCIONA A LOGIN
          }
        }
      ]
    });
    await alert.present();
  }
  togglePasswordVisibility() {
    console.log('Cambiao')
    this.passwordFieldType = this.passwordFieldType === 'text' ? 'password' : 'text';
  }

  getErrorMessage(controlName: string) {
    const control = this.formularioSingup.get(controlName);
    if (control?.hasError('required')) {
      return 'Campo requerido';
    }
    if (control?.hasError('email')) {
      return 'Correo electrónico inválido';
    }
    if (control?.hasError('minlength')) {
      return 'Debe tener al menos 6 caracteres';
    }
    if (control?.hasError('pattern')) {
      return 'Debe contener al menos una mayúscula, un número y un signo especial (@$!%*?&)';
    }
    return '';
  }

  getUsuario() {
    this.http.get<any>('http://localhost:3000/api/v1/usuario').subscribe(
      (data) => {
        this.allUsers = data;
      },
      (error) => {
        console.error('Error al obtener usuarios: ', error);
      }
    );
  }

  getOneUsuario(idUsuario: number) {
    this.http
      .get<any>('http://localhost:3000/api/v1/usuario/' + idUsuario)
      .subscribe(
        (data) => {
          console.log('Usuarios: ', data);
        },
        (error) => {
          console.log('Error al obtener a el usaurio: ', error);
        }
      );
  }

  createOneUsuario() {
    if (this.formularioSingup.valid) {
      const email = this.formularioSingup.value.correo;
      const username = this.formularioSingup.value.nom_usuario;

      const emialExist = this.allUsers.some((user) => user.correo === email);
      const usernameExist = this.allUsers.some(
        (user) => user.nom_usuario === username
      );

      if (emialExist) {
        this.formularioSingup.controls['correo'].setErrors({
          emialExist: true,
        });
      }

      if (usernameExist) {
        this.formularioSingup.controls['nom_usuario'].setErrors({
          usernameExist: true,
        });
      }

      if (!emialExist && !usernameExist) {
        const nuevoUsuario = {
          nom_usuario: this.formularioSingup.value.nom_usuario,
          nombre_completo: this.formularioSingup.value.nombre_completo,
          correo: this.formularioSingup.value.correo,
          passw: this.formularioSingup.value.passw,
        };

        this.http
          .post<any>('http://localhost:3000/api/v1/usuario', nuevoUsuario)
          .subscribe(
            (response) => {
              console.log(response);
              this.userService.setUserData(response);
              this.userData = response;
            },
            (error) => {
              console.error('Error al agregar un usuario', error.error);
            }
          );
        this.mostrarAlerta("Cuante Creada");
      }
    }
  }

  deleteUsuario(idUsuario: number) {
    this.http
      .delete<any>('http://localhost:3000/api/v1/usuario/' + idUsuario)
      .subscribe(
        (response) => {
          console.log('Usuario eliminado', response);
        },
        (error) => {
          console.error('Error al eliminar el usuario', error);
        }
      );
  }
  // Método para validar la confirmación de contraseña
  confirmPasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (!this.formularioSingup || !this.formularioSingup.get('passw')) {
      return null; // Salir si el formulario o el control de contraseña no están disponibles
    }
  
    const password = this.formularioSingup.get('passw')?.value;
    const confirmPassword = control.value;
    return password === confirmPassword ? null : { confirmPassword: true };
  }
}
