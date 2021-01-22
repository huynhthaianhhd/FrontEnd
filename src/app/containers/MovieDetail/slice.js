import { createSlice } from '@reduxjs/toolkit';
import flow from 'lodash/fp/flow';
import set from 'lodash/fp/set';
import { ACTION_STATUS } from 'utils/constants';

const initialState = {
  detailMovie: {
    data: null,
    status: '',
    error: null,
  },
  movieReviews: {
    data: null,
    status: '',
    error: null,
  },
  createReview: {
    data: null,
    status: '',
    error: null,
  },
  groupCinema: {
    data: null,
    status: '',
    error: null,
  },
  cinemaList: {
    data: null,
    status: '',
    error: null,
  },
};

const detailMovieSlice = createSlice({
  name: 'detailMoviePage',
  initialState,
  reducers: {
    getDetailMovie(state) {
      return flow(
        set('detailMovie.error', null),
        set('detailMovie.status', ACTION_STATUS.PENDING),
      )(state);
    },

    getDetailMovieSuccess(state, action) {
      return flow(
        set('detailMovie.data', action.payload),
        set('detailMovie.status', ACTION_STATUS.SUCCESS),
      )(state);
    },

    getDetailMovieFailed(state, action) {
      return flow(
        set('detailMovie.error', action.payload),
        set('detailMovie.status', ACTION_STATUS.FAILED),
      )(state);
    },

    getMovieReviews(state) {
      return flow(
        set('movieReviews.error', null),
        set('movieReviews.status', ACTION_STATUS.PENDING),
      )(state);
    },

    getMovieReviewsSuccess(state, action) {
      return flow(
        set('movieReviews.data', action.payload),
        set('movieReviews.status', ACTION_STATUS.SUCCESS),
      )(state);
    },

    getMovieReviewsFailed(state, action) {
      return flow(
        set('movieReviews.error', action.payload),
        set('movieReviews.status', ACTION_STATUS.FAILED),
      )(state);
    },

    createMovieReview(state) {
      return flow(
        set('createReview.error', null),
        set('createReview.status', ACTION_STATUS.PENDING),
      )(state);
    },

    createMovieReviewSuccess(state, action) {
      return flow(
        set('createReview.data', action.payload),
        set('createReview.status', ACTION_STATUS.SUCCESS),
      )(state);
    },

    createMovieReviewFailed(state, action) {
      return flow(
        set('createReview.error', action.payload),
        set('createReview.status', ACTION_STATUS.FAILED),
      )(state);
    },

    fetchGroup(state) {
      return flow(
        set('groupCinema.status', ACTION_STATUS.PENDING),
        set('groupCinema.error', null),
      )(state);
    },

    fetchGroupSuccess(state, action) {
      return flow(
        set('groupCinema.data', action.payload),
        set('groupCinema.status', ACTION_STATUS.SUCCESS),
      )(state);
    },

    fetchGroupFailed(state, action) {
      return flow(
        set('groupCinema.error', action.payload),
        set('groupCinema.status', ACTION_STATUS.FAILED),
      )(state);
    },

    getCinemaList(state) {
      return flow(
        set('cinemaList.error', null),
        set('cinemaList.status', ACTION_STATUS.PENDING),
      )(state);
    },

    getCinemaListSuccess(state, action) {
      return flow(
        set('cinemaList.data', action.payload),
        set('cinemaList.status', ACTION_STATUS.SUCCESS),
      )(state);
    },

    getCinemaListFailed(state, action) {
      return flow(
        set('cinemaList.error', action.payload),
        set('cinemaList.status', ACTION_STATUS.FAILED),
      )(state);
    },
  },
});

export const { actions, reducer, name: sliceKey } = detailMovieSlice;
