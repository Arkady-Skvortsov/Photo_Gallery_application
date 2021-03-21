import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //C помощью ActivatedRoute - можем получить параметры из роута
import { Data } from '../data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute, private data: Data) {}

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.data); // получение даты из роута
  }

  public PleaseData() {
    //Так я и пойму предназначение mock, spy и прочих 'заменителей' для тестов
    return this.data.getData();
  }
}
