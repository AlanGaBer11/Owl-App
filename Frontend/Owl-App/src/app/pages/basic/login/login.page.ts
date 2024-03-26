import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData: any; 

  constructor(private authService: AuthService, private userService: UserService) { }
    
  ngOnInit() {    
    this.userService.userData$.subscribe(userData => {
      this.userData = userData; // Corregir la asignación de userData
    }); 
    this.authService.checkAuthState();
  }

  async loginGoogle() {
    try {
      await this.authService.loginWithGoogle();
    } catch (error: any) {
      console.log("Error al iniciar sesion con google"); 
    }
  }

  logout() {
    this.authService.logout();
  }
}
