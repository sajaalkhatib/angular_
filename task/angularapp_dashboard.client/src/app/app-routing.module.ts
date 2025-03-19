import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { EditCategory2Component } from './edit-category-2/edit-category-2.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: SignupComponent },
  { path: "signin", component: SignupComponent },


  {
    path: "home", component: HomeComponent, children: [

      { path: "category", component: CategoryComponent },
      { path: "product", component: ProductComponent },
      { path: "AddCategory", component: AddCategoryComponent },
      { path: "AddProduct", component: AddProductComponent },
      { path: "Edit-Category/:id", component: EditCategory2Component },
      { path: "EditProduct/:id", component: EditProductComponent },

      { path: "", pathMatch: "full", component: CategoryComponent }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
