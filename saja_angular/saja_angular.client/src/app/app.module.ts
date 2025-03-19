import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { AdminComponent } from './admin/admin.component';
import { InsertcategoryComponent } from './admin/insertcategory/insertcategory.component';
import { AddProductComponent } from './admin/add-product/add-product.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    ProductComponent,
    CategoryComponent,
    ProductDetailsComponent,
    AdminComponent,
    InsertcategoryComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
