import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as Interface from '../../models/interfaces';
import * as photoAction from '../../store/photo.actions';

@Component({
  selector: 'app-question',
  template: `
    <div class="main-question-component">
      <div class="items-block">
        <app-delete (delete)="deleteProperty()"></app-delete>
        <app-q-button></app-q-button>
      </div>

      <ol class="list-with-properties">
        <li *ngFor="data; of: [].constructor(7)" class="list">
          <div class="prop-name"><span class="name">Картинка</span></div>
          <div class="prop-content">
            <span class="content">URL</span>
          </div>
          <div class="prop-change" (click)="ChangeInformation()">
            <img src="../../assets/svg/notebook.svg" alt="" />
          </div>
        </li>
      </ol>

      <div class="count-array">
        <span>0/25</span>
      </div>

      <div class="type-of-the-item">
        <div class="item-image">
          <img src="../../assets/svg/photo.svg" alt="" />
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  constructor(private store: Store<Interface.b>) {}

  public array: object[] = [
    {
      name: 'Картинка',
      content: '[PNG]',
      icon: '../../assets/svg/notebook.svg',
    },
    {
      name: 'Название',
      content: '[PNG]',
      icon: '../../assets/svg/notebook.svg',
    },
    {
      name: 'Описание',
      content: '[PNG]',
      icon: '../../assets/svg/notebook.svg',
    },
    {
      name: 'Тэг',
      content: '[PNG]',
      icon: '../../assets/svg/notebook.svg',
    },
    {
      name: 'Эмодзи',
      content: '[PNG]',
      icon: '../../assets/svg/notebook.svg',
    },
    {
      name: 'Длинна',
      content: '[PNG]',
      icon: '../../assets/svg/notebook.svg',
    },
    {
      name: 'Рамка',
      content: '[PNG]',
      icon: '../../assets/svg/notebook.svg',
    },
  ];

  public RenderValues(): Object {
    return Object.values(this.array);
  }

  public deleteProperty(): void {
    console.log('Trash image or gallery');
  }

  public ChangeInformation(): void {
    this.store.dispatch(new photoAction.showChangeAction(true));
  }

  ngOnInit(): void {
    this.RenderValues();
  }
}
