import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //C помощью ActivatedRoute - можем получить параметры из роута

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.data); // получение даты из роута
  }
}
