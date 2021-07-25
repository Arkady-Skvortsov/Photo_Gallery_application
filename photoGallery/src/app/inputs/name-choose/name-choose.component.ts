import { Component, OnInit, ViewChild } from '@angular/core';
import { input_checker } from '../../../models/decorators';

@Component({
  selector: 'app-name-choose',
  template: ` <div class="creational-name">
    <input
      placeholder="Введите название вашей"
      [(ngModel)]="name_of_media"
      class="creational-name__add-text input media-name"
    />
    <app-clear-button
      [type]="'close'"
      (clearInputValue)="clearInput2()"
    ></app-clear-button>
  </div>`,
  styleUrls: ['./name-choose.component.scss'],
})
export class NameChooseComponent implements OnInit {
  constructor() {}

  public name_of_media: string;

  //@checker - decorator
  public clearInput2(): void {
    this.name_of_media = '';
  }

  ngOnInit(): void {}
}
