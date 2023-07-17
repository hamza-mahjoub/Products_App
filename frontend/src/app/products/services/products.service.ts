import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private apiServerUrl = environment.API_URL;

  getAllProducts(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/products`);
  }

  getFilteredProducts(after: string, before: string): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/products`, {
      date: {
        before,
        after,
      },
    });
  }
}
