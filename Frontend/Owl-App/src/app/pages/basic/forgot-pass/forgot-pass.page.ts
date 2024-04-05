import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.page.html',
  styleUrls: ['./forgot-pass.page.scss'],
})
export class ForgotPassPage implements OnInit {
  formularioRecuperar: FormGroup; 

  constructor(private fb: FormBuilder, private authService: AuthService) { 
    this.formularioRecuperar = this.fb.group({
        correo: ['', [Validators.required, Validators.email]], 
    }); 
  }

  ngOnInit() {

  }

  recuperarPass(){
    const correo = this.formularioRecuperar.value.correo; 
    this.authService.resetPass(correo).then(()=>{
      console.log('Correo de recuperacion enviado'); 
    }).catch(error =>{
      console.error('Error al enviar solicitud de recuperacion de contraseña ', error); 
    });  
  }

}
