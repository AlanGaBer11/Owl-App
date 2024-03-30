import { Component, OnInit } from '@angular/core';

interface Clinica {
  nombre: string;
  descripcion: string;
  enlace: string;
  logoUrl: string;
}

@Component({
  selector: 'app-card-clinica',
  templateUrl: './card-clinica.page.html',
  styleUrls: ['./card-clinica.page.scss'],
})
export class CardClinicaPage implements OnInit {
  clinicas: Clinica[] = [
    {
      nombre: 'Resiliente',
      descripcion: 'Psicóloga Salud mental y bienestar emocional. Atención a niños, adolescentes, adultos y parejas.',
      enlace: 'https://www.facebook.com/PSIC.YOLANDAESPARZA/',
      logoUrl: '/assets/img/resiliente_logo_1.png',
    },
    {
      nombre: 'OWL',
      descripcion: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius harum molestiae iste, nihil doloribus fugiat distinctio ducimus maxime totam nulla fuga odio non aperiam eos?',
      enlace: '#',
      logoUrl: '/assets/img/Anny_pet_0.2.png',
    },
    // Agrega más objetos de clínica aquí
  ];

  constructor() { }

  ngOnInit() { }
}