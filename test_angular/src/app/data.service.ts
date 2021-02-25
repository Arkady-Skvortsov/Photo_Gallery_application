import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Нужен для работы с API
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  Render(id: number) {
    //Adventure time AP
    return this.http.get(`http://api.icndb.com/jokes/${id}`);
  }
}
