import { Actions, ActionType } from './number.actions';

export const nodePath = 'count';

export interface QuestionState {
  inputNumber: number;
  question: number;
  showHide: boolean;
  text: string;
}

export const initialState: QuestionState = {
  inputNumber: 0,
  question: 0,
  showHide: false,
  text: '',
};

//...state - копируем старое состояние (question), к примеру

export const countReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionType.inputAdd:
      return {
        ...state,
        inputNumber: state.inputNumber + action.payload.inputNum,
      };
    case ActionType.questAdd:
      return {
        ...state,
        question: action.payload.question,
      };
    case ActionType.clearVars:
      return {
        ...state,
        question: 0,
        inputNumber: 0,
      };
    case ActionType.showNotif:
      return {
        ...state,
        showHide: action.payload.show,
        text: action.payload.text,
      };
    default:
      return state;
  }
};
