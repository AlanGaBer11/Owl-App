import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData: any;
  formularioLogin: FormGroup;
  passwordFieldType: string = 'password';

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.formularioLogin = this.fb.group({
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    })
  }

  ngOnInit() {
    this.userService.userData$.subscribe(userData => {
      this.userData = userData;
    });
    this.authService.checkAuthState();
  }

  login() {
    const correo = this.formularioLogin.value.correo;
    const password = this.formularioLogin.value.password;

    this.http.post<any>('http://localhost:3000/api/v1/usuario/login', { correo, password }).subscribe(
      response => {
        console.log('Respuesta del servidor:', response);
        this.userData = response;
        this.userService.setUserData(response);

      },
      error => {
        console.error('Error al enviar la solicitud:', error);
        // Aquí puedes manejar el error, como mostrar un mensaje al usuario
      }
    );
  }

  async loginGoogle() {
    try {
      await this.authService.loginWithGoogle();
    } catch (error: any) {
      console.log("Error al iniciar sesión con Google");
    }
  }

  logout() {
    this.authService.logout();
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'text' ? 'password' : 'text';
  }
}
