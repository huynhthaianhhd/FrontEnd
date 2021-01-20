import { createSlice } from '@reduxjs/toolkit';
import set from 'lodash/fp/set';
import flow from 'lodash/fp/flow';
import { ACTION_STATUS } from 'utils/constants';

export const initialState = {
  searchMovie: {
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
      return flow(
        set('searchMovie.data', action.payload),
        set('searchMovie.status', ACTION_STATUS.SUCCESS),
      )(state);
    },

    searchMovieFailed(state, action) {
      return flow(
        set('searchMovie.error', action.payload),
        set('searchMovie.status', ACTION_STATUS.FAILED),
      )(state);
    },
  },
});

export const { actions, reducer, name: sliceKey } = searchMovieSlice;
