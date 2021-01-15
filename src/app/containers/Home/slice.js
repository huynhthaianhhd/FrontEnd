import { createSlice } from '@reduxjs/toolkit';
import set from 'lodash/fp/set';
import flow from 'lodash/fp/flow';
import { ACTION_STATUS } from 'utils/constants';

export const initialState = {
  groupCinemaList: [],
  status: '',
  listFilmHighLight: null,
  error: null,
};

const homePageSlice = createSlice({
  name: 'homepage',
  initialState: initialState,
  reducers: {
    fetchGroup(state) {
      return flow(
        set('status', ACTION_STATUS.PENDING),
        set('error', null),
      )(state);
    },

    fetchGroupSuccess(state, action) {
      return flow(
        set('groupCinemaList', action.payload),
        set('status', ACTION_STATUS.SUCCESS),
      )(state);
    },

    fetchGroupFailed(state, action) {
      return flow(
        set('error', action.payload),
        set('status', ACTION_STATUS.FAILED),
      )(state);
    },

    fetchListFilmHightLight(state) {
      return flow(
        set('error', null),
        set('status', ACTION_STATUS.PENDING),
      )(state);
    },
    fetchMovieHightLightSuccess(state, action) {
      return flow(
        set('listFilmHighLight', action.payload),
        set('status', ACTION_STATUS.SUCCESS),
      )(state);
    },
    fetchMovieHightLightFailed(state, action) {
      return flow(
        set('error', action.payload),
        set('status', ACTION_STATUS.SUCCESS),
      )(state);
    },
  },
});

export const { actions, reducer, name: sliceKey } = homePageSlice;
