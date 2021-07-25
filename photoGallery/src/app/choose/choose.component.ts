import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as photoAction from '../../store/photo.actions';
import * as Interface from '../../models/interfaces';

@Component({
  selector: 'app-choose',
  template: `
    <div class="main-choose-container" (click)="hideChoose()">
      <div class="block-with-choose">
        <div *ngFor="let data of buttonsArr">
          <app-choose-block
            (chooseType)="chooseType($event)"
            [data]="data"
          ></app-choose-block>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./choose.component.scss'],
})
export class ChooseComponent implements OnInit {
  constructor(private store: Store<Interface.AppState>) {}

  public buttonsArr: Array<Object> = [
    {
      img: '../../assets/svg/photo.svg',
      name: 'Фото',
    },
    {
      img: '../../assets/svg/gallery.svg',
      name: 'Галлерея',
    },
  ];

  public hideChoose(): void {
    this.store.dispatch(new photoAction.showChooseAction(false));
  }

  public chooseType(event): void {
    this.store.dispatch(new photoAction.changeTypeAction(event));

    this.store.dispatch(new photoAction.showChooseAction(false));

    this.store.dispatch(new photoAction.showFormAction(true));
  }

  ngOnInit(): void {}
}
