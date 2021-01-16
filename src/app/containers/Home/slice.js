import { createSlice } from '@reduxjs/toolkit';
import set from 'lodash/fp/set';
import flow from 'lodash/fp/flow';
import { ACTION_STATUS } from 'utils/constants';

export const initialState = {
  groupCinemaList: [],
  status: '',
  listMovieHighLight: [],
  error: null,
  listMovie: [],
  currentCinemas: [],
  currentDate: [],
  currentShowTime: [],
  step: 0,
  loading: false,
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

    fetchListMovie(state) {
      return flow(
        set('error', null),
        set('status', ACTION_STATUS.PENDING),
      )(state);
    },
    fetchMovieSuccess(state, action) {
      return flow(
        set('listMovie', [...action.payload]),
        set('status', ACTION_STATUS.SUCCESS),
      )(state);
    },
    fetchMovieFailed(state, action) {
      return flow(
        set('error', action.payload),
        set('status', ACTION_STATUS.SUCCESS),
      )(state);
    },
    setHighLightMovie(state, action) {
      return flow(set('listMovieHighLight', action.payload))(state);
    },

    getListCinemaCurrent(state) {
      return flow(set('step', 0), set('loading', true))(state);
    },
    getListDateCurrent(state) {
      return flow(set('step', 1), set('loading', true))(state);
    },
    getListShowTimeCurrent(state) {
      return flow(set('step', 2), set('loading', true))(state);
    },

    setStep(state, action) {
      return flow(set('step', action.payload))(state);
    },
  },
});

export const { actions, reducer, name: sliceKey } = homePageSlice;
