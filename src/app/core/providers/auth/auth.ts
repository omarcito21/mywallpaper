import { Injectable } from '@angular/core';
import {Auth as Authfirebase, createUserWithEmailAndPassword} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class Auth {
  constructor(private readonly authFirebase:Authfirebase){ }
   async  register(email: string, password: string){
      await createUserWithEmailAndPassword(this.authFirebase, email, password);
  }
  async login(){}
  
}
