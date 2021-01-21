import { createSelector } from 'reselect';
import get from 'lodash/fp/get';
//cinemaDetail

export const selectCinemaState = state => state.cinemaDetail;

export const makeListCinema = createSelector(selectCinemaState, listCinema =>
  get('listCinema', listCinema),
);

export const makeStatus = createSelector(selectCinemaState, status =>
  get('status', status),
);

export const makeDefaultCinema = createSelector(
  selectCinemaState,
  defaultCinema => get('defaultCinema', defaultCinema),
);
