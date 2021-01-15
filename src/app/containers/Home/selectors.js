import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

export const selectHomeState = state => state.homepage;

export const makeGroupList = createSelector(selectHomeState, groupCinemaList =>
  get('groupCinemaList', groupCinemaList),
);

export const makeStatus = createSelector(selectHomeState, status =>
  get('status', status),
);

export const makeListFilmHighLight = createSelector(
  selectHomeState,
  listFilmHighLight => get('listFilmHighLight', listFilmHighLight),
);
