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

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getProfile(state) {
      return flow(
        set('get.error', null),
        set('get.status', ACTION_STATUS.PENDING),
      )(state);
    },

    getProfileSuccess(state, action) {
      const { user } = action.payload;
      return flow(
        set('info', user),
        set('get.status', ACTION_STATUS.SUCCESS),
      )(state);
    },

    getProfileFailed(state, action) {
      return flow(
        set('get.error', action.payload),
        set('get.status', ACTION_STATUS.FAILED),
      )(state);
    },

    editProfile(state) {
      return flow(
        set('edit.error', null),
        set('edit.status', ACTION_STATUS.PENDING),
      )(state);
    },

    editProfileFailed(state, action) {
      return flow(
        set('error', action.payload),
        set('edit.status', ACTION_STATUS.FAILED),
      )(state);
    },

    editProfileSuccess(state, action) {
      const { user } = action.payload;
      return flow(
        set('info', user),
        set('edit.status', ACTION_STATUS.SUCCESS),
      )(state);
    },
  },
});

export const { actions, reducer, name: sliceKey } = profileSlice;
