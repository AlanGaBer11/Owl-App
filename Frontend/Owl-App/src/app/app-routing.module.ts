import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'ver-paciente',
    loadChildren: () => import('./pages/paciente/ver-paciente/ver-paciente.module').then( m => m.VerPacientePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/basic/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'sing-up',
    loadChildren: () => import('./pages/basic/sing-up/sing-up.module').then( m => m.SingUpPageModule)
  },
  {
    path: 'error',
    loadChildren: () => import('./pages/basic/error/error.module').then( m => m.ErrorPageModule)
  },
  {
    path: 'art1',
    loadChildren: () => import('./pages/articulos/art1/art1.module').then( m => m.Art1PageModule)
  },
  {
    path: 'art2',
    loadChildren: () => import('./pages/articulos/art2/art2.module').then( m => m.Art2PageModule)
  },
  {
    path: 'art3',
    loadChildren: () => import('./pages/articulos/art3/art3.module').then( m => m.Art3PageModule)
  },
  {
    path: 'art4',
    loadChildren: () => import('./pages/articulos/art4/art4.module').then( m => m.Art4PageModule)
  },
  {
    path: 'art5',
    loadChildren: () => import('./pages/articulos/art5/art5.module').then( m => m.Art5PageModule)
  },
  {
    path: 'nosotros',
    loadChildren: () => import('./pages/articulos/nosotros/nosotros.module').then( m => m.NosotrosPageModule)
  },
  {
    path: 'nuevo-paciente',
    loadChildren: () => import('./pages/paciente/nuevo-paciente/nuevo-paciente.module').then( m => m.NuevoPacientePageModule)
  },
  {
    path: 'edi-paciente',
    loadChildren: () => import('./pages/paciente/edi-paciente/edi-paciente.module').then( m => m.EdiPacientePageModule)
  },
  {
    path: 'ver-clinica',
    loadChildren: () => import('./pages/clinicas/ver-clinica/ver-clinica.module').then( m => m.VerClinicaPageModule)
  },
  {
    path: 'nueva-clinica',
    loadChildren: () => import('./pages/clinicas/nueva-clinica/nueva-clinica.module').then( m => m.NuevaClinicaPageModule)
  },
  {
    path: 'edi-clinica',
    loadChildren: () => import('./pages/clinicas/edi-clinica/edi-clinica.module').then( m => m.EdiClinicaPageModule)
  },
  {
    path: 'card-clinica',
    loadChildren: () => import('./pages/clinicas/card-clinica/card-clinica.module').then( m => m.CardClinicaPageModule)
  },
  {
    path: 'ver-prof',
    loadChildren: () => import('./pages/profesionales/ver-prof/ver-prof.module').then( m => m.VerProfPageModule)
  },
  {
    path: 'nuevo-prof',
    loadChildren: () => import('./pages/profesionales/nuevo-prof/nuevo-prof.module').then( m => m.NuevoProfPageModule)
  },
  {
    path: 'edi-prof',
    loadChildren: () => import('./pages/profesionales/edi-prof/edi-prof.module').then( m => m.EdiProfPageModule)
  },
  {
    path: 'ver-cita',
    loadChildren: () => import('./pages/citas/ver-cita/ver-cita.module').then( m => m.VerCitaPageModule)
  },
  {
    path: 'nueva-cita',
    loadChildren: () => import('./pages/citas/nueva-cita/nueva-cita.module').then( m => m.NuevaCitaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
