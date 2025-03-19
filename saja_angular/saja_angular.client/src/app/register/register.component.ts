import { Component } from '@angular/core';
import { ApiService } from '../servies_api/api.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private http: ApiService) {
  }

  ngOnInit() { }


  onSubmitData(data: any) {
    this.http.addUser(data).subscribe(() => {
      alert(
        "add Users")

    })
  }

}
