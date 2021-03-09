import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionType, InputAdd } from './number.actions';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';

//Возвращает action c дополнительными параметрами

@Injectable()
export class AppEffects {
  constructor(public actions$: Actions) {}

  @Effect()
  public inputAdd$(): any {
    return this.actions$.pipe(
      ofType(ActionType.inputAdd, ActionType.questAdd),
      map(() => {
        return 'Hello There';
      })
    );
  }
}
