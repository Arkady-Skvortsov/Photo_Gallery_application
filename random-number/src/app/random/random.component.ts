import { Component, Input, OnInit } from '@angular/core';
import { faAngleLeft, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { QuestionState } from '../reducers/number.reducer';
import { selectQuestion, selectInput } from '../reducers/number.selectors';
import { Clear } from '../reducers/number.actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import {
  animate,
  trigger,
  style,
  transition,
  state,
} from '@angular/animations';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
  animations: [
    trigger('Arrow', [
      state(
        'first',
        style({
          background: 'white',
          color: 'black',
        })
      ),
      state(
        'second',
        style({
          background: 'black',
          color: 'white',
        })
      ),
      transition('first => second', animate('2s ease-in-out')),
      transition('second => first', animate('400ms ease')),
    ]),
  ],
})
export class RandomComponent implements OnInit {
  constructor(public router: Router, public store$: Store<QuestionState>) {}

  angle: IconDefinition = faAngleLeft;

  zagadannoe$: Observable<number> = this.store$.pipe(select(selectQuestion));
  otgadannoe$: Observable<number> = this.store$.pipe(select(selectInput));

  numCheck: boolean = false; //Будет определять, ложное значние или истинное

  animCheck: boolean = false;

  ngOnInit(): void {}

  public Navigate(): void {
    this.store$.dispatch(new Clear());

    this.router.navigateByUrl('');
  }

  public Versus(): void {
    console.log(this.otgadannoe$, this.zagadannoe$);

    return this.zagadannoe$ === this.otgadannoe$
      ? alert('Значения совпали')
      : alert('Значения не совпали');
  }

  public get AnimationArr(): string {
    return this.animCheck ? 'first' : 'second';
  }

  public Animation(): boolean {
    return (this.animCheck = !this.animCheck);
  }

  public Increment(num: number): number {
    return num * 2;
  }
}
