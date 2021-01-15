import get from 'lodash/fp/get';
import { createSelector } from 'reselect';

const selectProfileState = state => state.profile;

export const selectProfileInfo = createSelector(selectProfileState, profile =>
  get('info', profile),
);

export const selectEditProfileStatus = createSelector(
  selectProfileState,
  profile => get('edit.status', profile),
);

export const selectGetProfileStatus = createSelector(
  selectProfileState,
  profile => get('get.status', profile),
);
