import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

export const selectSearchMovieState = state => state.searchMovie;

export const selectSearchMovieList = createSelector(
  selectSearchMovieState,
  searchMovie => get('searchMovie', searchMovie),
);
