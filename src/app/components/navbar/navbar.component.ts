import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  user: any;

  constructor(public auth: AuthService, public router:Router) { }

  logout() {
    this.auth.logout();
  }
  abrirformulario(){
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    this.user = this.auth.user;
  }
}
