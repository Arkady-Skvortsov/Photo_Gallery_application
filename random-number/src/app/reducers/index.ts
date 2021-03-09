import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { QuestionState, countReducer } from './number.reducer';
import { nodePath } from './number.reducer';

export interface State {
  [nodePath]: QuestionState;
}

export const reducers: ActionReducerMap<State> = {
  [nodePath]: countReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
