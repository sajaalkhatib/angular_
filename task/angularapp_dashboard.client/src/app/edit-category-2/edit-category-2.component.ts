import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category-2',
  standalone: false,
  templateUrl: './edit-category-2.component.html',
  styleUrl: './edit-category-2.component.css'
})
export class EditCategory2Component {

  category: {
    name: string,
    description: string
  }
    = { name: '',
    description: '' };


  id: any
  cat: any


  constructor(private _ser: ServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id');


    this._ser.getCategoryById(this.id).subscribe((data: any) => {
      this.category = data;

    });

    

  }

  updateCategory(form: any) {
    this.cat = form.value;
    this._ser.updateCategory(this.id, this.cat).subscribe(() => {

      alert('Category Updated Successfully');

      this.router.navigate(['/category']);
    });

  }
}
