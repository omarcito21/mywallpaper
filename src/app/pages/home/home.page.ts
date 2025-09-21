import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/core/providers/auth/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  constructor(private readonly auth:Auth, private readonly router:Router) { }
  async Salteya(){
    await this.auth.logOut();

    this.router.navigate(["/"])

  }



  ngOnInit() {
  }

}
