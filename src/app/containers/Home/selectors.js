import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

export const selectHomeState = state => state.homepage;

export const makeGroupList = createSelector(selectHomeState, groupCinemaList =>
  get('groupCinemaList', groupCinemaList),
);

export const makeStatus = createSelector(selectHomeState, status =>
  get('status', status),
);

// export const makeListMovieHighLight = createSelector(
//   selectHomeState,
//   listMovieHighLight => get('listMovieHighLight', listMovieHighLight),
// );

export const makeListMovie = createSelector(selectHomeState, listMovie =>
  get('listMovie', listMovie),
);

export const makeLoading = createSelector(selectHomeState, loading =>
  get('loading', loading),
);
export const makeCurrentError = createSelector(selectHomeState, currentError =>
  get('currentError', currentError),
);

export const makeListMovieToday = createSelector(
  selectHomeState,
  listMovieToday => get('listMovieToday', listMovieToday),
);
