import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public Pages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Login', url: '/', icon: 'log-in' },
    { title: 'Pacientes', url: '/ver-paciente', icon: 'people' },
    { title: '¿Quién somos', url: '/', icon: 'heart' },
    { title: 'Procesos', url: '/', icon: 'settings' }
  ];

  constructor() {}
}
