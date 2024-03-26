import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Imports para el login 
import { AngularFireModule } from '@angular/fire/compat'; 
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDPPA8gKSl4Z2W_mJmApkWMQk5dVtLD1Bk",
  authDomain: "owlapp-f56d2.firebaseapp.com",
  projectId: "owlapp-f56d2",
  storageBucket: "owlapp-f56d2.appspot.com",
  messagingSenderId: "169718927688",
  appId: "1:169718927688:web:a384932e7c9dfd9c84e37d",
  measurementId: "G-993NDFKYR7"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    // Imports de los modulos para el login 
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireAuthModule,
    AngularFirestoreModule],
    
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
