import get from 'lodash/fp/get';
import { createSelector } from 'reselect';

const selectBookingState = state => state.booking;

export const selectBookingInfo = createSelector(selectBookingState, booking =>
  get('info', booking),
);

export const selectEditBookingStatus = createSelector(
  selectBookingState,
  booking => get('edit.status', booking),
);

export const selectGetBookingStatus = createSelector(
  selectBookingState,
  booking => get('get.status', booking),
);
