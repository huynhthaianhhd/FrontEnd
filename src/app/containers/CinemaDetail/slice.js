import { createSlice } from '@reduxjs/toolkit';
import set from 'lodash/fp/set';
import flow from 'lodash/fp/flow';
import { ACTION_STATUS } from 'utils/constants';

export const initialState = {
  listCinema: [],
  error: null,
  status: '',
  defaultCinema: [],
};
const cinemaDetailSlice = createSlice({
  name: 'cinemaDetail',
  initialState: initialState,
  reducers: {
    fetchListCinema(state) {
      return flow(
        set('status', ACTION_STATUS.PENDING),
        set('error', null),
      )(state);
    },
    fetchCinemasSuccess(state, action) {
      return flow(
        set('listCinema', action.payload),
        set('status', ACTION_STATUS.SUCCESS),
      )(state);
    },
    fetchCinemasFailed(state, action) {
      return flow(
        set('error', action.payload),
        set('status', ACTION_STATUS.FAILED),
      )(state);
    },
    setDefaultCinema(state, action) {
      return flow(set('defaultCinema', state.listCinema[action.payload] || []))(
        state,
      );
    },
    fetchReviewOfCinema(state) {
      return flow(
        set('status', ACTION_STATUS.PENDING),
        set('error', null),
      )(state);
    },
    fetchReviewSuccess(state, action) {
      return flow(
        set('defaultCinema', action.payload),
        set('status', ACTION_STATUS.SUCCESS),
      )(state);
    },
    fetchReviewFailed(state, action) {
      return flow(
        set('error', action.payload),
        set('status', ACTION_STATUS.FAILED),
      )(state);
    },
    addReviewOfCinema(state) {
      return flow(
        set('error', null),
        set('status', ACTION_STATUS.PENDING),
      )(state);
    },
    addReviewOfCinemaSuccess(state) {
      return flow(set('status', ACTION_STATUS.SUCCESS))(state);
    },
    addReviewOfCinemaFailed(state, action) {
      return flow(
        set('error', action.payload),
        set('status', ACTION_STATUS.FAILED),
      )(state);
    },
  },
});

export const { actions, reducer, name: sliceKey } = cinemaDetailSlice;
