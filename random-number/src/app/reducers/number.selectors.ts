import { createFeatureSelector, createSelector } from '@ngrx/store';
import { nodePath, QuestionState } from './number.reducer';

const selectQuestionFeature = createFeatureSelector<QuestionState>(nodePath);

export const selectQuestion = createSelector(
  selectQuestionFeature,
  (state: QuestionState): number => state.question
);

export const selectInput = createSelector(
  selectQuestionFeature,
  (state: QuestionState): number => state.inputNumber
);

export const selectBool = createSelector(
  selectQuestionFeature,
  (state: QuestionState): boolean => state.showHide
);

export const selectText = createSelector(
  selectQuestionFeature,
  (state: QuestionState): string => state.text
);
