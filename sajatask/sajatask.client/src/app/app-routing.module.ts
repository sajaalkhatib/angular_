import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "navbar", component: NavbarComponent },
  { path: "singup", component: RegisterComponent },
  { path: "product", component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
