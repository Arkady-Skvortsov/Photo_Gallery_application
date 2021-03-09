import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Нужен для работы с API
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  Render() {
    //Adventure time AP
    return this.http.get(`https://randomfox.ca/floof/`);
  }
}
