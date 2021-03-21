import { Component, OnInit } from '@angular/core';
import { faTimes, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Observable, Subscription, timer } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { QuestionState } from '../reducers/number.reducer';
import {
  selectInput,
  selectQuestion,
  selectBool,
} from '../reducers/number.selectors';
import { Clear, InputAdd, Show } from '../reducers/number.actions';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  constructor(public router: Router, public store$: Store<QuestionState>) {}

  public inputNum$: Observable<number> = this.store$.pipe(select(selectInput));
  public questNum$: Observable<number> = this.store$.pipe(
    select(selectQuestion)
  );
  public showHide$: Observable<boolean> = this.store$.pipe(select(selectBool));

  public times: IconDefinition = faTimes;
  public clear: boolean = false;
  public num: number = 0;
  public check: boolean = false;
  public secondString: string = '';

  ngOnInit(): void {
    this.secondString = 'LifeSycle hook';
  }

  public clearInput(): void {
    this.num = 0;

    this.clear = true;

    this.store$.dispatch(new Clear());
    this.store$.dispatch(new Show({ show: true, text: 'Вы очистили input' }));

    setTimeout(() => {
      this.clear = false;
    }, 500);
  }

  public GetAnswer(): void {
    this.questNum$.subscribe((i) => {
      if (i === 0 || this.num === 0) {
        return;
      } else {
        this.check = true;

        this.store$.dispatch(new InputAdd({ inputNum: this.num }));

        this.num = 0;

        timer(0).subscribe(() => {
          this.router.navigate(['/check']);
        });

        setTimeout(() => {
          this.check = false;
        }, 500);
      }
    });
  }
}
