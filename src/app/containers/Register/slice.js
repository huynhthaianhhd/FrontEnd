import { createSlice } from '@reduxjs/toolkit';
import set from 'lodash/fp/set';
import flow from 'lodash/fp/flow';
import { ACTION_STATUS } from 'utils/constants';
export const initialState = {
  status: '',
  error: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    register(state) {
      return flow(
        set('error', null),
        set('status', ACTION_STATUS.PENDING),
      )(state);
    },

    registerSuccess(state) {
      return set('status', ACTION_STATUS.SUCCESS)(state);
    },

    registerFailed(state, action) {
      return flow(
        set('error', action.payload),
        set('status', ACTION_STATUS.FAILED),
      )(state);
    },

    resetState() {
      return initialState;
    },
  },
});

export const { actions, reducer, name: sliceKey } = registerSlice;
