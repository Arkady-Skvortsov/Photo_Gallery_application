import { Component, OnInit } from '@angular/core';
import * as Interface from '../../models/interfaces';
import * as photoAction from '../../store/photo.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-languages',
  template: `
    <div class="main-languages" (click)="Close($event)">
      <div
        class="main-languages__lang-container"
        *ngFor="let item of arr; let i = index"
      >
        <app-block
          [items]="item"
          [index]="i"
          (chooseLanguage)="chooseLanguage()"
        ></app-block>
      </div>
    </div>
  `,
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent implements OnInit {
  constructor(private store: Store) {}

  public arr: Array<Object> = [
    { English: 'EN' },
    { Suomi: 'SU' },
    { Russian: 'RU' },
    { Espanol: 'ES' },
    { Swedish: 'SW' },
  ];

  private chooseLanguage(str: number): void {
    console.log(str);

    //this.store.dispatch(new photoAction.showLanguageaction(false));
  }

  public Close(event): void {
    if (event.target.className === 'main-languages') {
      this.store.dispatch(new photoAction.showLanguageAction(false));
    }

    return;
  }

  ngOnInit(): void {}
}
