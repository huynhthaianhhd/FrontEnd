import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

export const selectHomeState = state => state.homepage;

export const makeGroupList = createSelector(selectHomeState, groupCinemaList =>
  get('groupCinemaList', groupCinemaList),
);

export const makeStatus = createSelector(selectHomeState, status =>
  get('status', status),
);

export const makeListMovieHighLight = createSelector(
  selectHomeState,
  listMovieHighLight => get('listMovieHighLight', listMovieHighLight),
);

export const makeListMovie = createSelector(selectHomeState, listMovie =>
  get('listMovie', listMovie),
);

// currentCinemas: [{ name: 'Chọn rạp' }],
// currentDate: [{ name: 'Chọn ngày xem' }],
// currentShowTime: [{ name: 'Chọn suất chiếu' }],

export const makeCurrentCinemas = createSelector(
  selectHomeState,
  currentCinemas => get('currentCinemas', currentCinemas),
);
export const makeCurrentDate = createSelector(selectHomeState, currentDate =>
  get('currentDate', currentDate),
);
export const makeCurrentShowTime = createSelector(
  selectHomeState,
  currentShowTime => get('currentShowTime', currentShowTime),
);

export const selectNewsSummaryData = createSelector(
  selectHomeState,
  currentShowTime => get('newsSummary.data', currentShowTime),
);
