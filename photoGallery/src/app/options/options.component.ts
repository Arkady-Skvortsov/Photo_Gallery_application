import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Interface from '../../models/interfaces';
import * as photoAction from '../../store/photo.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-options',
  template: `
    <div class="main-options-block">
      <div class="options-list">
        <div class="options-list__choose-count">
          <span>Выбрано:</span>
          <span>{{ chooseArray.length }}</span>
        </div>

        <div class="choose-buttons">
          <button class="choose-buttons__buttons" (click)="CloseOptions()">
            Назад
          </button>
          <button class="choose-buttons__buttons">
            Объединить в 1 плейлист
          </button>
          <button class="choose-buttons__buttons">Редактировать</button>
        </div>
      </div>

      <div class="options-delete">
        <app-delete></app-delete>
      </div>
    </div>
  `,
  styleUrls: ['./options.component.scss'],
})
export class OptionsComponent implements OnInit {
  constructor(private store: Store<Interface.AppState>) {}

  public showOptions$: Observable<Interface.b> =
    this.store.select('showOptions');
  private get_options$: Observable<Interface.mediaItem[]> =
    this.store.select('optionsArray');

  public chooseArray: Interface.mediaItem[] = [];

  public CloseOptions(): void {
    this.store.dispatch(new photoAction.showOptionsAction(false));
  }

  public ClearChooseArray(): void {
    this.chooseArray.splice(0, this.chooseArray.length - 1);
  }

  ngOnInit(): void {
    this.get_options$.subscribe((get_options) => {
      this.chooseArray = get_options;
    });
  }
}
