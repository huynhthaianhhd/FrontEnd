import { createSelector } from 'reselect';
import get from 'lodash/fp/get';

export const selectPopupState = state => state.popup;

export const makeSelectPopups = createSelector(selectPopupState, state =>
  get('popups', state),
);
