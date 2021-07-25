import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Interface from '../../../models/interfaces';
import * as photoAction from '../../../store/photo.actions';

@Component({
  selector: 'app-choose-filter',
  template: `
    <div class="choose-filter-block">
      <div class="choose-naming" (click)="open_close_options()">
        <div class="choose-txt">
          <span class="choose-txt__text">Выбрать</span>
        </div>
        <button class="filter-down">
          <img
            src="../../../assets/svg/arrow-down.svg"
            class="filter-down__icon"
          />
        </button>
      </div>
      <div class="choose-options" *ngIf="is_show">
        <div
          class="choose-options-block"
          *ngFor="let data of optionsArray; let i = index"
          (click)="sorting_filter_elements(i + 1)"
        >
          <span class="choose-options-block__text">{{ data.txt }}</span>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./choose-filter.component.scss'],
})
export class ChooseFilterComponent implements OnInit {
  constructor(private store: Store<Interface.AppState>) {}

  public is_show: boolean = false;

  public optionsArray: object[] = [
    { txt: 'Первые' },
    { txt: 'Последние' },
    { txt: 'По тэгам' },
    { txt: 'По названию' },
    { txt: 'По описанию' },
    { txt: 'Минимальный вес' },
    { txt: 'Максимальный вес' },
    { txt: 'Альбомы' },
    { txt: 'Фото' },
  ];

  public sorting_filter_elements(index: number): void {
    switch (index) {
      case 1:
        console.log(index);
        break;
      case 2:
        console.log(index);
        break;
      case 3:
        console.log(index);
        break;
      case 4:
        console.log(index);
        break;
      case 5:
        console.log(index);
        break;
    }

    this.is_show = false;
  }

  public open_close_options(): void {
    this.is_show = !this.is_show;
  }

  ngOnInit(): void {}
}
