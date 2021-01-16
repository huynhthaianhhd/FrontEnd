import { createSlice } from '@reduxjs/toolkit';
import set from 'lodash/fp/set';
import flow from 'lodash/fp/flow';
import { ACTION_STATUS } from 'utils/constants';

export const initialState = {
  listCinema: [],
  error: null,
  status: '',
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
  },
});

export const { actions, reducer, name: sliceKey } = cinemaDetailSlice;
