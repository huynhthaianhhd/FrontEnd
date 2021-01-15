import { createSlice } from '@reduxjs/toolkit';
import flow from 'lodash/fp/flow';
import set from 'lodash/fp/set';
import { ACTION_STATUS } from 'utils/constants';

const initialState = {
  info: null,
  get: {
    status: '',
    error: null,
  },
  edit: {
    status: '',
    error: null,
  },
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    getBooking(state) {
      return flow(
        set('get.error', null),
        set('get.status', ACTION_STATUS.PENDING),
      )(state);
    },

    getBookingSuccess(state, action) {
      const { user } = action.payload;
      return flow(
        set('info', user),
        set('get.status', ACTION_STATUS.SUCCESS),
      )(state);
    },

    getBookingFailed(state, action) {
      return flow(
        set('get.error', action.payload),
        set('get.status', ACTION_STATUS.FAILED),
      )(state);
    },

    editBooking(state) {
      return flow(
        set('edit.error', null),
        set('edit.status', ACTION_STATUS.PENDING),
      )(state);
    },

    editBookingFailed(state, action) {
      return flow(
        set('error', action.payload),
        set('edit.status', ACTION_STATUS.FAILED),
      )(state);
    },

    editBookingSuccess(state, action) {
      const { user } = action.payload;
      return flow(
        set('info', user),
        set('edit.status', ACTION_STATUS.SUCCESS),
      )(state);
    },
  },
});

export const { actions, reducer, name: sliceKey } = bookingSlice;
