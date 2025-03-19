import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({//بقدر استخدمها باي componant 
  providedIn: 'root'//مرئي لكل ال application
})
export class ApiService {
  private apiUrl = 'https://67cd64b6dd7651e464ee3d63.mockapi.io/categories';
  private apiUrlProduct = 'https://67cd64b6dd7651e464ee3d63.mockapi.io/products';

  constructor(private http: HttpClient)// لحتى اقدر اتعامل مع CRUD ف ال
  {

  }

  getAllCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProductsByCategory(categoryId: string): Observable<any> {
    // Fixed the query string URL format
    return this.http.get<any[]>(`${this.apiUrlProduct}?categoryId=${categoryId}`);
  }
  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrlProduct}/${id}`);
  }
  addUser(data: any) {
    return this.http.post<any>("https://67cea6ee125cd5af757b6514.mockapi.io/Users", data);
  }

  getAllUsers() {
    return this.http.get("https://67cea6ee125cd5af757b6514.mockapi.io/Users");
  }

  addCategory(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  insertCategory(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl,data)
  }
  // In ApiService
  getCategories() {
    return this.http.get<any[]>(this.apiUrl);  // Ensure apiUrl is correct for fetching categories
  }

  postProduct(data: any) {
    return this.http.post(this.apiUrlProduct, data);  // Ensure apiUrlProduct is correct for posting product
  }


}
