import { getBookingInfo, book } from 'fetchers/bookingFetcher';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';

function* getBookingInfoWatcher() {
  yield takeLatest(actions.getBookingInfo, getBookingInfoTask);
}

function* getBookingInfoTask(action) {
  const { response, error } = yield call(getBookingInfoAPI, action.payload);
  if (response) {
    yield put(actions.getBookingInfoSuccess(response));
  } else {
    yield put(actions.getBookingInfoFailed(error.data));
  }
}

function getBookingInfoAPI(payload) {
  return getBookingInfo(payload);
}

function* bookWatcher() {
  yield takeLatest(actions.book, bookTask);
}

function* bookTask(action) {
  const { response, error } = yield call(bookAPI, action.payload);
  if (response) {
    yield put(actions.bookSuccess(response));
  } else {
    yield put(actions.bookFailed(error.data));
  }
}

function bookAPI(payload) {
  return book(payload);
}
export default function* defaultSaga() {
  yield all([fork(getBookingInfoWatcher), fork(bookWatcher)]);
}
