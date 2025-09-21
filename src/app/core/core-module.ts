import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { initializeApp, provideFirebaseApp } from "@angular/fire/app"; 
import {provideAuth,getAuth} from "@angular/fire/auth";
import {provideFirestore,getFirestore} from "@angular/fire/firestore"
import { environment } from 'src/environments/environment.prod';
import { Auth } from './providers/auth/auth';
import { Query } from './providers/query/query';
import { NativeToast } from './providers/nativeToast/native-toast';
import { File } from './providers/file/file';
import { Capacitor } from '@capacitor/core';


const providers = [Auth, Query, NativeToast, File];

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
export class CoreModule { 
  constructor(private readonly filesrv:File){
    if(!Capacitor.isNativePlatform()){
      this.filesrv.requestpermission();

    }
  }
}
