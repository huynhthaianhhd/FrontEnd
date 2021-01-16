import get from 'lodash/fp/get';
import { createSelector } from 'reselect';

const selectBookingState = state => state.booking;

export const selectBookingData = createSelector(selectBookingState, booking =>
  get('data', booking),
);

export const selectBookingStatus = createSelector(selectBookingState, booking =>
  get('status', booking),
);

export const selectBookingSeats = createSelector(selectBookingState, booking =>
  get('seats', booking),
);

export const selectBookingPickedSeats = createSelector(
  selectBookingState,
  booking => get('pickedSeats', booking),
);
