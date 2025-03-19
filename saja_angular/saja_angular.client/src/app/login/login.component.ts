import { Component } from '@angular/core';
import { ApiService } from '../servies_api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private service: ApiService, private _route: ActivatedRoute) { }

  ngOnit() { }

  users: any
  getData(enterUser: any) {
    this.service.getAllUsers().subscribe((data: any) => {
      this.users = data.find((p: any) => p.Email == enterUser.Email && p.password == enterUser.password);
      if (this.users) {
        alert("login successfully")
        }
      else {
        alert("Invalide email or password ")

      }
    })
  }
}
