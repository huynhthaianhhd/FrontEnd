import get from 'lodash/fp/get';
import { createSelector } from 'reselect';

const selectNewsState = state => state.news;

export const selectNewsContent = createSelector(selectNewsState, news =>
  get('content', news),
);
