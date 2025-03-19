import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
//import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AdminComponent } from './admin/admin.component';
import { InsertcategoryComponent } from './admin/insertcategory/insertcategory.component';
import { FormsModule } from '@angular/forms';
import { AddProductComponent } from './admin/add-product/add-product.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  { path: "login", component: LoginComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "signup", component: RegisterComponent }, // corrected
  { path: "category", component: CategoryComponent }, // corrected
  { path: "product/:id", component: ProductComponent },
  { path: "product-details/:id", component: ProductDetailsComponent }, // changed to lowercase
  { path: "child", component: ChildComponent },
  { path: "parent", component: ParentComponent },
  //{ path: "addcategory", component: AddcategoryComponent },
  {
    path: "admin", component: AdminComponent, children: [
      { path: "insert", component: InsertcategoryComponent },
      { path: "addproduct", component: AddProductComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
