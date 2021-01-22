import { getNews } from 'fetchers/newsFetcher';
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

export default function* defaultSaga() {
  yield all([fork(getNewsWatcher)]);
}
