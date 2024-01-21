// Exemple de service Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }
  getProcuts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }
  getCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/categories`);
  }

  // Autres méthodes (POST, PUT, DELETE, etc.) peuvent être ajoutées selon vos besoins
}
