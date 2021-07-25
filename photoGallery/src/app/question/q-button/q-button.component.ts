import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as Interface from '../../../models/interfaces';
import * as photoAction from '../../../store/photo.actions';

@Component({
  selector: 'app-q-button',
  template: `
    <div class="question-button" (click)="showQuestionFunction()">
      <img src="../../../assets/svg/question.svg" class="quest-image" />
    </div>
  `,
  styleUrls: ['./q-button.component.scss'],
})
export class QButtonComponent implements OnInit {
  constructor(public store: Store<Interface.AppState>) {}

  public showQuest$: Observable<Interface.b> =
    this.store.select('showQuestion');

  public showQuestionFunction(): void {
    this.store.dispatch(new photoAction.showQuestionAction(true));
  }

  ngOnInit(): void {}
}
