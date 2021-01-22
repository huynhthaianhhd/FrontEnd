import { createSlice } from '@reduxjs/toolkit';
import flow from 'lodash/fp/flow';
import set from 'lodash/fp/set';
import { ACTION_STATUS } from 'utils/constants';

const initialState = {
  getNews: {
    content: '',
    status: '',
    error: null,
  },
  addNews: {
    status: '',
    error: null,
  },
  getNewsSummary: {
    data: [],
    status: '',
    error: null,
  },
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    getNewsSummary(state) {
      return flow(
        set('newsSummary.error', null),
        set('newsSummary.status', ACTION_STATUS.PENDING),
      )(state);
    },

    getNewsSummarySuccess(state, action) {
      return flow(
        set('newsSummary.data', action.payload),
        set('newsSummary.status', ACTION_STATUS.SUCCESS),
      )(state);
    },

    getNewsSummaryFailed(state, action) {
      return flow(
        set('newsSummary.error', action.payload),
        set('newsSummary.status', ACTION_STATUS.FAILED),
      )(state);
    },

    getNews(state) {
      return flow(
        set('getNews.error', null),
        set('getNews.status', ACTION_STATUS.PENDING),
      )(state);
    },

    getNewsSuccess(state, action) {
      const { content } = action.payload;
      return flow(
        set('getNews.content', content),
        set('getNews.status', ACTION_STATUS.SUCCESS),
      )(state);
    },

    getNewsFailed(state, action) {
      return flow(
        set('getNews.error', action.payload),
        set('getNews.status', ACTION_STATUS.FAILED),
      )(state);
    },

    addNews(state) {
      return flow(
        set('addNews.error', null),
        set('addNews.status', ACTION_STATUS.PENDING),
      )(state);
    },

    addNewsSuccess(state) {
      return set('addNews.status', ACTION_STATUS.SUCCESS)(state);
    },

    addNewsFailed(state, action) {
      return flow(
        set('addNews.error', action.payload),
        set('addNews.status', ACTION_STATUS.FAILED),
      )(state);
    },

    resetState() {
      return { ...initialState };
    },
  },
});

export const { actions, reducer, name: sliceKey } = newsSlice;
