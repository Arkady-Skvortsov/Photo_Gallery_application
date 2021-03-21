import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './models/model';

@Injectable({
  providedIn: 'root',
})
export class Data {
  constructor(private data: HttpClient) {}

  public getData() {
    return this.data.get<Post[]>(
      `https://jsonplaceholder.typicode.com/todos/1`
    );
  }
}
