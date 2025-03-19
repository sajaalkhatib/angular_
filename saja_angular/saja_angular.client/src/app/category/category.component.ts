import { Component } from '@angular/core';
import { ApiService } from '../servies_api/api.service';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {

  categories: any[] = [];


  constructor(private apiService: ApiService) { }



  ngOnInit(): void {

    this.fetchAllCategory();
  }

  fetchAllCategory() {
    this.apiService.getAllCategories().subscribe((data) => {
      this.categories = data;
      console.log('All Users:', this.categories);
    },
    (error) => {
      console.error('Error fetching users:', error);
    }
);
    
  }
}
