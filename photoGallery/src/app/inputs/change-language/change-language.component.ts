import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Interface from '../../../models/interfaces';
import * as photoAction from '../../../store/photo.actions';

@Component({
  selector: 'app-change-language',
  template: `
    <button class="language-button" (click)="openLanguage()">RU</button>
  `,
  styleUrls: ['./change-language.component.scss'],
})
export class ChangeLanguageComponent implements OnInit {
  constructor(private store: Store<Interface.AppState>) {}

  public openLanguage(): void {
    this.store.dispatch(new photoAction.showLanguageAction(true));
  }

  ngOnInit(): void {}
}
