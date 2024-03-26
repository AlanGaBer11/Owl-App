import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

// prueba para importar datos de la variable de sesión de forma global 
import { UserService } from './services/user.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
  userData: any; 
 // URL DE PAGINAS
  public Pages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Pacientes', url: '/ver-paciente', icon: 'people' },
    { title: '¿Quién somos', url: '/', icon: 'heart' },
    { title: 'Procesos', url: '/', icon: 'settings' }
  ];

  darkMode: boolean = false;
  constructor(private userService: UserService) {}
  
  ngOnInit(): void{
      this.userService.userData$.subscribe(userData => {
        this.userData = userData; 
      }); 
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


}
