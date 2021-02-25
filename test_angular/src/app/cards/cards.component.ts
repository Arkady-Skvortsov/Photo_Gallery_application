import { Component, OnInit } from '@angular/core';
import { faRandom } from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit {
  nextIcon = faRandom;
  index: number = 23;
  dota: any;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.Render(this.index).subscribe((data) => {
      this.dota = data;
    });
  }
}
