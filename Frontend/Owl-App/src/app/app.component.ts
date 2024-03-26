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

  public Pages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Login', url: '/login', icon: 'log-in' },
    { title: 'Pacientes', url: '/ver-paciente', icon: 'people' },
    { title: '¿Quién somos', url: '/', icon: 'heart' },
    { title: 'Procesos', url: '/', icon: 'settings' }
  ];

  constructor(private userService: UserService) {}
  
  ngOnInit(){
      this.userService.userData$.subscribe(userData => {
        this.userData = userData; 
      }); 
    }
}
