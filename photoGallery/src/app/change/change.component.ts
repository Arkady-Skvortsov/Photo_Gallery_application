import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Interface from '../../models/interfaces';
import * as photoAction from '../../store/photo.actions';

@Component({
  selector: 'app-change',
  template: `<div class="change-main-block" (click)="CloseChange($event)">
    <!-- <div class="change-main__header">По какому критерию?</div> -->
    <div class="change-children-block">
      <div class="change-list-of-creterias" (click)="ShowList()">
        <div class="change-list-of-creterias__txt">Выбрать</div>

        <div class="arrow-down">
          <img
            src="../../assets/svg/arrow-down.svg"
            alt=""
            class="arrow-down__icon"
          />
        </div>
      </div>

      <div class="createrias-list" [ngClass]="{ hideList: hideList }">
        <div
          class="change-item"
          *ngFor="let arr of array; let i = index"
          (click)="selectOption(i + 1)"
        >
          <span class="change-item__txt">{{ arr.text }}</span>
        </div>
      </div>

      <div class="change-createrias-render">
        <div [ngSwitch]="index" *ngIf="index; else alertBlock">
          <app-name-choose *ngSwitchCase="1"></app-name-choose>
          <app-block-quote *ngSwitchCase="2"></app-block-quote>
          <app-tag-set *ngSwitchCase="3"></app-tag-set>
          <app-emoji-set *ngSwitchCase="4"></app-emoji-set>
          <app-choose-photo *ngSwitchCase="5"></app-choose-photo>
          <app-border-set *ngSwitchCase="6"></app-border-set>
          <app-length-set *ngSwitchCase="7"></app-length-set>
        </div>

        <ng-template #alertBlock
          ><p class="alert-text">
            Вы пока что ничего на выбрали :(
          </p></ng-template
        >
      </div>

      <div class="change-button" (click)="AddChanges()">
        <span>Применить изменение</span>
      </div>
    </div>
  </div>`,
  styleUrls: ['./change.component.scss'],
})
export class ChangeComponent implements OnInit {
  constructor(private store: Store<Interface.AppState>) {}

  public array: Array<object> = [
    { text: 'По названию' },
    { text: 'По описанию' },
    { text: 'По тегам' },
    { text: 'По эмодзи' },
    { text: 'По картинке' },
    { text: 'По рамке' },
    { text: 'По длинне (массив)' },
  ];

  public index: Object;

  public hideList: boolean = true;

  public CloseChange(event): void {
    if (event.target.className === 'change-main-block')
      this.store.dispatch(new photoAction.showChangeAction(false));

    return;
  }

  public selectOption(i): any {
    this.index = i;

    this.hideList = !this.hideList;

    return this.index;
  }

  public AddChanges(): void {
    this.store.dispatch(new photoAction.showChangeAction(false));
  }

  public ShowList(): void {
    this.hideList = !this.hideList;
  }

  ngOnInit(): void {}
}
