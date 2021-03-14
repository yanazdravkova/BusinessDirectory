import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../app-settings';
import { Business } from '../models/business';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Business[]> {
    return this.http.get<Business[]>(AppSettings.API_URL);
  }
}
