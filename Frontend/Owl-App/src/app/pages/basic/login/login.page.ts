import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

//import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  passwordFieldType: string = 'password';
  allUsers: any[] = [];
  userData: any; 
  userSesion: any; 
  formularioLogin: FormGroup; 

  constructor(private authService: AuthService, private userService: UserService,  private fb: FormBuilder, private http: HttpClient) { 
    this.formularioLogin = this.fb.group({
      'correo': new FormControl("", Validators.required), 
      'password': new FormControl("", Validators.required)
    })
  }
  
  ngOnInit() {    
    this.userService.userData$.subscribe(userData => {
      this.userData = userData; // Corregir la asignación de userData
    }); 
    this.authService.checkAuthState();    
  }

  async login(){
    const correo = this.formularioLogin.value.correo; 
    const password = this.formularioLogin.value.password; 

    this.http.post<any>('http://localhost:3000/api/v1/usuario/login', { correo, password }).subscribe(
      response => {
        console.log('Respuesta del servidor:', response);
        this.userData = response;                 
      },
      error => {
        console.error('Error al enviar la solicitud:', error);        
      }
    );
    try{
      await this.initCurrentSesion();       
    } catch (error: any){
      console.log("Error al establecer la sesión actual"); 
    }   
  }
 
  async loginGoogle() {
    try {
      await this.authService.loginWithGoogle();      
      await this.saveGoogleUser(); 
      try{
        await this.initCurrentSesion();         
      } catch (error: any){
        console.log("Error al establecer la sesión actual"); 
      }
    } catch (error: any) {
      console.log("Error al iniciar sesion con google"); 
    }
  }

  logout() {
    this.authService.logout();
  }
  
  getUsuario(){
    return this.http.get<any>('http://localhost:3000/api/v1/usuario').toPromise(); 
  }
  
  getOneEmail(correo: string): Promise<any>{
    return new Promise((resolve, reject) => {
      this.http.post<any>('http://localhost:3000/api/v1/usuario/get-email', { correo }).subscribe(data =>{      
      this.userSesion = data[0]; 
      console.log('User sesion: ', this.userSesion); 
      if (Object.keys(this.userSesion).length > 0){
        console.log(":D"); 
      }
      resolve(this.userSesion); 
    }, error =>{            
      console.log('Error al obtener a el usaurio: ', error);       
      reject(error); 
      });
    });     
  } 

  async initCurrentSesion(correo?: string){
    if(!correo){
      correo = this.userService.getUserData()?.email || this.formularioLogin.get('correo')?.value; 
      console.log("Correo encontrado: ",  correo); 
    }

    if(!correo){
      console.error('No se pudo obtener un correo valido'); 
      return; 
    }
    
    try{
      await this.getOneEmail(correo); 
      const dataSesion = this.userSesion;
      console.log('Data sesion:', dataSesion);

      if(dataSesion){
        this.userService.setCurrentSesion(dataSesion); 
        console.log('Usuario de sesión actual: ', dataSesion); 
      } else {
        console.error('No se encontró ningún usuario con el correo proporcionado '); 
      }

    } catch ( error ) {
      console.error('Error al obtener el usuario ', error); 
    }
  }

  async saveGoogleUser(){    
    try {
      const response = await this.getUsuario(); 
      this.allUsers = response; 
      console.log('Datos del usuario obtenidos', response); 
    } catch (error){
      console.error('Error al obtener a los usuarios: ', error); 
    }
    
    const userData = this.userService.getUserData(); 

    if(userData){
      const email = userData.email; 
      const emailExist = this.allUsers.some(user => user.correo === email); 

      if (emailExist){
        this.formularioLogin.controls['correo'].setErrors({ emailExist: true }); 	
        console.log(email); 
      } else {
        console.log('Email válido', email); 
      }

      if (!emailExist){
        const nuevoGoogleUsuario = {
          nom_usuario: userData.displayName,
          nombre_completo: userData.displayName,
          correo: userData.email, 
          passw: 'GooglePass'
        }; 
        this.http.post<any>('http://localhost:3000/api/v1/usuario', nuevoGoogleUsuario).subscribe(response => {
          console.log('Usuario de google agregado con exito', response); 
        }, error => {
          console.error('Error al agregar al usuario de google', error); 
          }
        );	
        this.authService.verifyEmail(); 
        console.log("Correo enviado");
        alert("Se envió al correo " + email + ". Confirma para verificar"); 
      }
    } else {
      console.error('No se encontraron datos de usuario'); 
    }
  }  
  
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'text' ? 'password' : 'text';
  }

}
