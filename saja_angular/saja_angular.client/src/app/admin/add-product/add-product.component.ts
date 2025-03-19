import { Component } from '@angular/core';
import { ApiService } from '../../servies_api/api.service';

@Component({
  selector: 'app-add-product',
  standalone: false,
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  categories: any = [];

  constructor(private http: ApiService) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.http.getAllCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  postData(data: any) {
    this.http.postProduct(data).subscribe(() => {
      alert("Product added successfully!");
    });
  }
}
