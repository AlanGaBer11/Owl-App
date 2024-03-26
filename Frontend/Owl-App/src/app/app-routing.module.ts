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

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
