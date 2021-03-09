import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  keyframes,
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Store, select } from '@ngrx/store';
import { QuestionState } from '../reducers/number.reducer';
import {
  selectQuestion,
  selectInput,
  selectBool,
  selectText,
} from '../reducers/number.selectors';
import { Observable } from 'rxjs';
import { Show } from '../reducers/number.actions';

@Component({
  selector: 'app-notification',
  template: `
    <div class="notification-main-block" [@PopOverState] (click)="Select()">
      <!-- @PopOverState - trigger() -->
      <span class="notif-text txt">{{ text$ | async }}</span>
      <!-- v-if, v-else-if, v-else -->
    </div>
  `,
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('PopOverState', [
      state(
        'show',
        style({
          opacity: 1,
        })
      ),
      state(
        'hide',
        style({
          opacity: 0,
        })
      ),
      transition('* => *', animate('500ms ease')),
    ]),
  ],
})
export class NotificationComponent implements OnInit {
  constructor(public store$: Store<QuestionState>) {}

  public otgadan$: Observable<number> = this.store$.pipe(select(selectInput));
  public zagadan$: Observable<number> = this.store$.pipe(
    select(selectQuestion)
  );
  public show$: Observable<boolean> = this.store$.pipe(select(selectBool));
  public text$: Observable<string> = this.store$.pipe(select(selectText));

  ngOnInit(): void {}

  public Animate(): any {
    this.show$.subscribe((s) => {
      return s ? 'show ' : 'hide';
    });
  }

  public Select(): any {
    this.store$.dispatch(new Show({ show: true, text: 'Привет' }));
  }
}
