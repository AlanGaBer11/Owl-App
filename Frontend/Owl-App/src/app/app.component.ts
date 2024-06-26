import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

// prueba para importar datos de la variable de sesión de forma global 
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
  userSesion: any; 
  userData: any; 
  darkMode: boolean = false;
  constructor(private userService: UserService, private authService: AuthService) {}
  
  ngOnInit(): void{
      this.userService.userData$.subscribe(userData => {
        this.userData = userData; 
      }); 

      this.userService.userSesion$.subscribe(userSesion =>{
        this.userSesion = userSesion; 
      })
    }

  chekModeApp(){
    const checkIsDarkMode = localStorage.getItem('darkModeIsActivated');
    checkIsDarkMode == 'true'
    ? (this.darkMode = true)
    : (this.darkMode = false);
    document.body.classList.toggle('dark', this.darkMode);
  }

  toggleDarkMode(){
    this.darkMode =!this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
    if(this.darkMode){
      localStorage.setItem('darkModeActivated', 'true')
    } else{
      localStorage.setItem('darkModeActivated', 'false')
    }
  }

  logout() {
    this.authService.logout();
  }
}
