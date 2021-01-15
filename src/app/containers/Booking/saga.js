import { getBooking, editBooking } from 'fetchers/bookingFetcher';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { notifySuccess } from 'utils/notify';

function* getBookingWatcher() {
  yield takeLatest(actions.getBooking, getBookingTask);
}

function* getBookingTask() {
  const { response, error } = yield call(getBookingAPI);
  if (response) {
    yield put(actions.getBookingSuccess(response));
  } else {
    yield put(actions.getBookingFailed(error.data));
  }
}

function getBookingAPI() {
  return getBooking();
}

function* editBookingWatcher() {
  yield takeLatest(actions.editBooking, editBookingTask);
}

function* editBookingTask(action) {
  const { response, error } = yield call(editBookingAPI, action.payload);
  if (response) {
    yield put(actions.editBookingSuccess(response));
    notifySuccess('Update booking success');
  } else {
    yield put(actions.editBookingFailed(error.data));
  }
}

function editBookingAPI(payload) {
  return editBooking(payload);
}

export default function* defaultSaga() {
  yield all([fork(getBookingWatcher), fork(editBookingWatcher)]);
}
