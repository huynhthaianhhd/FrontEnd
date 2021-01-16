import get from 'lodash/fp/get';
import { createSelector } from 'reselect';

const selectDetailMovieState = state => state.detailMoviePage;

export const selectDetailMovie = createSelector(
  selectDetailMovieState,
  detailMovie => get('detailMovie', detailMovie),
);

export const selectMovieReviews = createSelector(
  selectDetailMovieState,
  detailMovie => get('movieReviews', detailMovie),
);

export const selectCreateMovieReview = createSelector(
  selectDetailMovieState,
  detailMovie => get('createReview', detailMovie),
);
