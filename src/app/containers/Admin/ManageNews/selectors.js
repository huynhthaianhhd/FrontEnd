import get from 'lodash/fp/get';
import { createSelector } from 'reselect';

const selectNewsState = state => state.news;

export const selectNewsContent = createSelector(selectNewsState, news =>
  get('getNews.content', news),
);

export const selectNewsSummaryData = createSelector(selectNewsState, news =>
  get('newsSummary.data', news),
);

export const selectAddNewsStatus = createSelector(selectNewsState, news =>
  get('addNews.status', news),
);
