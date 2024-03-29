import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public articulos = [
    { img: '/assets/img/m.jpg', titulo: 'Salud Mental', url: '/art1'},
    { img: '/assets/img/depresion.jpg', titulo: 'Depresión', url: '/art2'},
    { img: '/assets/img/ansiedad.jpg', titulo: 'Ansiedad', url: '/art3'},
    { img: '/assets/img/estres.jpg', titulo: 'Estrés', url: '/art4'},
    { img: '/assets/img/suicidio.jpg', titulo: 'Suicidio', url:'/art5'},
  ];

  constructor() {}

}

