import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

export const selectRegisterState = state => state.register;

export const makeSelectRegisterStatus = createSelector(
  selectRegisterState,
  register => get('status', register),
);

export const makeSelectRegisterError = createSelector(
  selectRegisterState,
  register => get('error', register),
);
