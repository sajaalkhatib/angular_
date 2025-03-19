import { Component } from '@angular/core';
import { ApiService } from '../../servies_api/api.service';

@Component({
  selector: 'app-insertcategory',
  standalone: false,
  templateUrl: './insertcategory.component.html',
  styleUrl: './insertcategory.component.css'
})
export class InsertcategoryComponent {
  constructor(private http: ApiService) { }
  


  ngOnInit() { }

  postData(data: any) {
    this.http.insertCategory(data).subscribe(() => {
      alert("add new Product");
    });
  }
}
