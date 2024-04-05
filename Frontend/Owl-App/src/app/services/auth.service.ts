import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; 
  userSesion: any;
  errorMessage: any; 

  constructor(private afAuth: AngularFireAuth, private userService: UserService, private router: Router) { }

  async checkAuthState() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        this.userService.setUserData(user); // Almacena el dato del usuario al modelo         
        this.router.navigate(['/home']); 
      } else {
        this.userData = null;
        this.userSesion.setCurrentSesion(null); 
        this.userService.setUserData(null); // Borra la información del usuario 
      }
    });
  }

  
  async loginWithGoogle() {
    try {
      const res = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      const user = res.user;
      if (user) {
        this.userData = user;
        console.log(user); 
        console.log("Inicio de sesión exitoso"); 
      }
    } catch (error: any) {
      this.errorMessage = error.message;
      console.error('Error al iniciar sesión con Google:', error);
      throw error;
    }
  }

  async verifyEmail() {
    try {
      const user = await this.afAuth.currentUser;
      if (user) {
        await user.sendEmailVerification();
        console.log('Correo de verificación enviado');
      } else {
        console.error('Usuario no autenticado');
      }
    } catch (error: any) {
      this.errorMessage = error.message;
      console.error('Error al enviar el correo de verificación: ', error);
      throw error;
    }
  }

  async resetPass(email: string){
    try{
      await this.afAuth.sendPasswordResetEmail(email); 
      console.log('correo de restauracion enviado '); 
    } catch(error: any){
      this.errorMessage = error.message; 
      console.error('Error al enviar metodo para recueprar correo', error); 
      throw error; 
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      this.userData = null;
      this.userService.setUserData(null); 
      this.userService.setCurrentSesion(null); 
      this.router.navigate(['/home']); 
    } catch (error: any) {
      console.error('Error al cerrar sesión:', error);
      throw error;
    }
  }
}
