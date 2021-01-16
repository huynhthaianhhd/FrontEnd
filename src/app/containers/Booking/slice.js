import { createSlice } from '@reduxjs/toolkit';
import flow from 'lodash/fp/flow';
import set from 'lodash/fp/set';
import { ACTION_STATUS } from 'utils/constants';

const initialState = {
  data: '',
  seats: [],
  pickedSeats: [],
  status: '',
  error: null,
  book: {
    status: '',
    error: null,
  },
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    getBookingInfo(state) {
      return flow(
        set('error', null),
        set('status', ACTION_STATUS.PENDING),
      )(state);
    },

    getBookingInfoSuccess(state, action) {
      const seat = [...action.payload.seat];
      const addedStatusSeats =
        seat.length > 0 &&
        seat
          .sort((a, b) => {
            if (a.row < b.row) return -1;
            if (a.row > b.row) return 1;
            return a.no - b.no;
          })
          .map(item => ({
            ...item,
            status: item.transaction ? 'UNAVAILABLE' : 'AVAILABLE',
          }));
      return flow(
        set('data', action.payload),
        set('seats', addedStatusSeats),
        set('status', ACTION_STATUS.SUCCESS),
        set('pickedSeats', []),
      )(state);
    },

    getBookingInfoFailed(state, action) {
      return flow(
        set('error', action.payload),
        set('status', ACTION_STATUS.FAILED),
      )(state);
    },

    updateSeatStatus(state, action) {
      const { id, newStatus } = action.payload;
      const seats = [...state.seats];
      const updatedSeats = seats.map(item => {
        if (item.id === id) return { ...item, status: newStatus };
        return item;
      });
      const updatePickedSeats = updatedSeats.filter(
        item => item.status === 'PICKED',
      );
      return flow(
        set('seats', updatedSeats),
        set('pickedSeats', updatePickedSeats),
      )(state);
    },

    book(state) {
      return flow(
        set('book.error', null),
        set('book.status', ACTION_STATUS.PENDING),
      )(state);
    },

    bookSuccess(state) {
      return flow(
        set('book.status', ACTION_STATUS.SUCCESS),
        set('pickedSeats', []),
      )(state);
    },

    bookFailed(state, action) {
      return flow(
        set('book.error', action.payload),
        set('book.status', ACTION_STATUS.FAILED),
      )(state);
    },

    resetData() {
      return { ...initialState };
    },
  },
});

export const { actions, reducer, name: sliceKey } = bookingSlice;
