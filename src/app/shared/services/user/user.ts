import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { Auth } from 'src/app/core/providers/auth/auth';
import { Query } from 'src/app/core/providers/query/query';
import { Iuser, IUserCreate } from 'src/interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class User {
  constructor(private readonly authsrv: Auth, 
    private readonly querysrv: Query)
    {}

    async create(User: IUserCreate):Promise<void>{
      try {
        console.log(User);
        const uid= await this.authsrv.register(User.email, User.password);
        await this.querysrv.create("users", {
          uid,
          name: User.name,
          lastname: User.lastName,

        });
        console.log("Bien hecho")
        
      } catch (error) {
        console.log (error);

        }
        
      }
    }
  

