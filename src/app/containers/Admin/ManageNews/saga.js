import { getNews, getManyNews, addNews } from 'fetchers/newsFetcher';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';

function* getNewsWatcher() {
  yield takeLatest(actions.getNews, getNewsTask);
}

function* getNewsTask(action) {
  const { response, error } = yield call(getNewsAPI, action.payload);
  if (response) {
    yield put(actions.getNewsSuccess(response));
  } else {
    yield put(actions.getNewsFailed(error.data));
  }
}

function getNewsAPI(payload) {
  return getNews(payload);
}

function* getNewsSummaryWatcher() {
  yield takeLatest(actions.getNewsSummary, getNewsSummaryTask);
}

function* getNewsSummaryTask(action) {
  const { response, error } = yield call(getNewsSummaryAPI, action.payload);
  if (response) {
    yield put(actions.getNewsSummarySuccess(response));
  } else {
    yield put(actions.getNewsSummaryFailed(error.data));
  }
}

function getNewsSummaryAPI(payload) {
  return getManyNews(payload);
}

function* addNewsWatcher() {
  yield takeLatest(actions.addNews, addNewsTask);
}

function* addNewsTask(action) {
  const { response, error } = yield call(addNewsAPI, action.payload);
  if (response) {
    yield put(actions.addNewsSuccess(response));
    yield put(actions.getNewsSummary());
  } else {
    yield put(actions.addNewsFailed(error.data));
  }
}

function addNewsAPI(payload) {
  return addNews(payload);
}

export default function* defaultSaga() {
  yield all([
    fork(getNewsWatcher),
    fork(getNewsSummaryWatcher),
    fork(addNewsWatcher),
  ]);
}
