import { Action } from '@ngrx/store';

export enum ActionType {
  questAdd = '[ADD] questAdd',
  inputAdd = '[ADD] inputAdd',
  clearVars = '[CLEAR] clearVars',
  showNotif = '[SHOW] Notification',
}

export class QuestAdd implements Action {
  readonly type = ActionType.questAdd;

  constructor(
    public payload: {
      question: number;
    }
  ) {}
}

export class InputAdd implements Action {
  readonly type = ActionType.inputAdd;

  constructor(
    public payload: {
      inputNum: number;
    }
  ) {}
}

export class Clear implements Action {
  readonly type = ActionType.clearVars;
}

export class Show implements Action {
  readonly type = ActionType.showNotif;

  constructor(
    public payload: {
      show?: boolean;
      text?: string;
    }
  ) {}
}

export type Actions = QuestAdd | InputAdd | Clear | Show;
