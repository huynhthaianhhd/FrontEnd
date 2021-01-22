import { createSlice } from '@reduxjs/toolkit';
import set from 'lodash/fp/set';
import flow from 'lodash/fp/flow';
import { ACTION_STATUS } from 'utils/constants';

export const initialState = {
  groupCinemaList: [],
  status: '',
  error: null,
  listMovie: [],
  currentError: null,
  listMovieToday: [],
  currentCinemas: [],
  currentShowTime: [],
  step: 0,
  loading: false,
  newsSummary: {
    data: [],
    status: '',
    error: null,
  },
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

    fetchNewsSummary(state) {
      return flow(
        set('newsSummary.error', null),
        set('newsSummary.status', ACTION_STATUS.PENDING),
      )(state);
    },
    fetchNewsSummarySuccess(state, action) {
      return flow(
        set('newsSummary.data', action.payload),
        set('newsSummary.status', ACTION_STATUS.SUCCESS),
      )(state);
    },
    fetchNewsSummaryFailed(state, action) {
      return flow(
        set('newsSummary.error', action.payload),
        set('newsSummary.status', ACTION_STATUS.FAILED),
      )(state);
    },

    setHighLightMovie(state, action) {
      return flow(set('listMovieHighLight', action.payload))(state);
    },

    //* get list in day
    getListMovieInDay(state) {
      return flow(
        set('error', null),
        set('status', ACTION_STATUS.PENDING),
      )(state);
    },
    getListMovieInDaySuccess(state, action) {
      return flow(
        set('listMovieToday', action.payload),
        set('status', ACTION_STATUS.SUCCESS),
      )(state);
    },
    getListMovieInDayFailed(state, action) {
      return flow(
        set('error', action.payload),
        set('status', ACTION_STATUS.FAILED),
      )(state);
    },

    setStep(state, action) {
      return flow(set('step', action.payload))(state);
    },
  },
});

export const { actions, reducer, name: sliceKey } = homePageSlice;
