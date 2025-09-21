import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initializeApp, provideFirebaseApp } from "@angular/fire/app"; 
import {provideAuth,getAuth} from "@angular/fire/auth";
import {provideFirestore,getFirestore} from "@angular/fire/firestore"
import { environment } from 'src/environments/environment.prod';
import { Auth } from './providers/auth/auth';
import { Query } from './providers/query/query';


const providers = [Auth, Query];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    provideFirebaseApp(()=>initializeApp(environment.FirebaseApp_CONFIG)),
    provideAuth(()=>getAuth()),
    provideFirestore(()=>getFirestore()),
    ...providers,
    
  ],
    
  
})
export class CoreModule { }
