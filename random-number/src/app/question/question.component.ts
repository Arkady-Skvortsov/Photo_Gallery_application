import { ViewChild, Component, OnInit, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { QuestionState } from '../reducers/number.reducer';
import { QuestAdd, Show } from '../reducers/number.actions';

import {
  faQuestion,
  faTimes,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';
import {
  keyframes,
  trigger,
  transition,
  state,
  style,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  animations: [
    trigger('Question', [
      transition('* <=> *', [
        animate(
          '15000ms ease',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: 0 }),
            style({ transform: 'rotate(-20deg)', offset: 0.15 }),
            style({ transform: 'rotate(-10deg)', offset: 0.25 }),
            style({ transform: 'rotate(10deg)', offset: 0.45 }),
            style({ transform: 'rotate(20deg)', offset: 0.5 }),
            style({ transform: 'rotate(10deg)', offset: 0.65 }),
            style({ transform: 'rotate(-10deg)', offset: 0.75 }),
            style({ transform: 'rotate(-20deg)', offset: 0.85 }),
            style({ transform: 'rotate(-10deg)', offset: 0.95 }),
            style({ transform: 'rotate(0deg)', offset: 1.0 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class QuestionComponent implements OnInit {
  @ViewChild('minInput') minInput: ElementRef; //Получение доступа к элементу в HTML дереве
  @ViewChild('maxInput') maxInput: ElementRef;

  question: IconDefinition = faQuestion;
  close: IconDefinition = faTimes;

  min: number = 0;
  max: number = 0;
  random: number = 0; //Test variable

  constructor(public store$: Store<QuestionState>) {}

  ngOnInit(): void {}

  public Question(): void {
    if (
      parseFloat(this.minInput.nativeElement.value) === 0 ||
      parseFloat(this.maxInput.nativeElement.value) === 0
    ) {
      this.store$.dispatch(
        new Show({ show: true, text: 'Вы не загадали число' })
      );

      return;
    } else {
      this.min = this.minInput.nativeElement.value;
      this.max = this.maxInput.nativeElement.value;

      this.maxInput.nativeElement.value = '';
      this.minInput.nativeElement.value = '';

      this.random = Math.floor(Math.random() * (this.max - this.min)); //У меня получилось!)))

      this.store$.dispatch(new QuestAdd({ question: this.random }));

      this.store$.dispatch(
        new Show({ show: true, text: 'Число было загадано' })
      );
    }
  }

  public Clear(): void {
    this.minInput.nativeElement.value = '';
    this.maxInput.nativeElement.value = '';

    this.min = 0;
    this.max = 0;

    this.store$.dispatch(new Show({ show: true, text: 'Вы очистили поля' }));
  }
}
