import { createSlice } from '@reduxjs/toolkit';
import set from 'lodash/fp/set';
import flow from 'lodash/fp/flow';
import { ACTION_STATUS } from 'utils/constants';

export const initialState = {
  searchMovie: {
    total: 0,
    data: null,
    status: '',
    error: null,
  },
};

const searchMovieSlice = createSlice({
  name: 'searchMovie',
  initialState,
  reducers: {
    searchMovie(state) {
      return flow(
        set('searchMovie.error', null),
        set('searchMovie.status', ACTION_STATUS.PENDING),
      )(state);
    },

    searchMovieSuccess(state, action) {
      const { rows, count } = action.payload;
      return flow(
        set('searchMovie.data', rows),
        set('searchMovie.total', count),
        set('searchMovie.status', ACTION_STATUS.SUCCESS),
      )(state);
    },

    searchMovieFailed(state, action) {
      return flow(
        set('searchMovie.error', action.payload),
        set('searchMovie.status', ACTION_STATUS.FAILED),
      )(state);
    },

    resetState() {
      return { ...initialState };
    },
  },
});

export const { actions, reducer, name: sliceKey } = searchMovieSlice;
