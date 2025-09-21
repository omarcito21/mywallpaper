import { Injectable } from '@angular/core';
import {Auth as Authfirebase, createUserWithEmailAndPassword} from "@angular/fire/auth";
import { Router } from '@angular/router';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  constructor(private readonly authFirebase:Authfirebase, private readonly router:Router){ }
   async  register(email: string, password: string){
      const res = await createUserWithEmailAndPassword(this.authFirebase, email, password);
      return res.user.uid;
  }
  async login(email:string, password:string){
    try {
      const res = await signInWithEmailAndPassword(this.authFirebase,email,password);
      if(res){
        this.router.navigate(['/home']);
      }
      console.log(res);

    } catch (error) {
      console.log((error as any).message);
      
    }
    
  }

   async logOut(){
    try {
      
      await signOut(this.authFirebase)
    } catch (error) {
      console.log((error as any).message);
      
    }
   }
  
}
