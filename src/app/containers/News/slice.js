import { createSlice } from '@reduxjs/toolkit';
import flow from 'lodash/fp/flow';
import set from 'lodash/fp/set';
import { ACTION_STATUS } from 'utils/constants';

const initialState = {
  content: '',
  status: '',
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getNews(state) {
      return flow(
        set('error', null),
        set('status', ACTION_STATUS.PENDING),
      )(state);
    },

    getNewsSuccess(state, action) {
      const { content } = action.payload;
      return flow(
        set('content', content),
        set('status', ACTION_STATUS.SUCCESS),
      )(state);
    },

    getNewsFailed(state, action) {
      return flow(
        set('error', action.payload),
        set('status', ACTION_STATUS.FAILED),
      )(state);
    },
  },
});

export const { actions, reducer, name: sliceKey } = newsSlice;
