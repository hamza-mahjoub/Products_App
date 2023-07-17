import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(private http: HttpClient) {}

  private apiServerUrl = environment.API_URL;

  getAllTopics(): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/topics`);
  }

}
