import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: false,
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {


  constructor(private _ser: ServiceService, private router: Router) { }

  ngOnInit() {

    this.LoadPage();
  }

  category: any;

  LoadPage() {

    this._ser.categoryLoad().subscribe((data) => {

      this.category = data;

    });
  }
  
  editCategory(id: string) {
    debugger
    alert(`the id is : ${id} ` )
    this.router.navigate([`/home/Edit-Category/${id}`]);
  }
}
