import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-length-set',
  template: `
    <div class="creational-length">
      <div class="creational-length__length-part">
        <input
          type="text"
          placeholder="Укажите длинну вашего плейлиста"
          class="creational-length__add-length input"
          maxLength="2"
          [(ngModel)]="album_length"
        />

        <button class="creational-length__length icon-button">
          <span>{{ album_length }}/50</span>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./length-set.component.scss'],
})
export class LengthSetComponent implements OnInit {
  constructor() {}

  public album_length: string;

  ngOnInit(): void {}
}
