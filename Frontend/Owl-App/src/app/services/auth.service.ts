import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; 
  errorMessage: any; 

  constructor(private afAuth: AngularFireAuth, private userService: UserService) { }

  async checkAuthState() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        this.userService.setUserData(user); // Almacena el dato del usuario al modelo 
      } else {
        this.userData = null;
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

  async logout() {
    try {
      await this.afAuth.signOut();
      this.userData = null;
    } catch (error: any) {
      console.error('Error al cerrar sesión:', error);
      throw error;
    }
  }
}
