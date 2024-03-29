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
  },  {
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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
