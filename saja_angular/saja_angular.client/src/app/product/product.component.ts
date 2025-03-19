import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../servies_api/api.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'] // Fixed styleUrl to styleUrls
})
export class ProductComponent implements OnInit {

  product: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    const categoryId = this.route.snapshot.paramMap.get('id');
    if (categoryId) {
      this.fetchProductsById(categoryId);
    }
  }

  fetchProductsById(categoryId: string): void {
    this.apiService.getProductsByCategory(categoryId).subscribe(
      (data) => {
        this.product = data || [];
        console.log('Products in Category:', this.product);
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.product = [];
      }
    );
  }
}
