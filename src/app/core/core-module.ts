import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initializeApp, provideFirebaseApp } from "@angular/fire/app"; 
import {provideAuth,getAuth} from "@angular/fire/auth";
import { environment } from 'src/environments/environment.prod';
import { Auth } from './providers/auth/auth';

const providers = [Auth];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    provideFirebaseApp(()=>initializeApp(environment.FirebaseApp_CONFIG)),
    provideAuth(()=>getAuth()),
    ...providers,
    
  ],
    
  
})
export class CoreModule { }
