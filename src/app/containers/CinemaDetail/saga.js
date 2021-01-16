import { getCinemaByGroup } from 'fetchers/cinema/groupCinema.service';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';

function* fetchCinemasTask() {
  yield takeLatest(actions.fetchListCinema, fetchListCinemaTask);
}

function* fetchListCinemaTask(action) {
  const { response, error } = yield call(fetchListCinemaAPI, action.payload);
  if (response?.cinemas) {
    yield put(actions.fetchCinemasSuccess(response?.cinemas));
  } else {
    yield put(actions.fetchCinemasFailed(error));
  }
}

function fetchListCinemaAPI(payload) {
  return getCinemaByGroup(payload);
}

export default function* defaultSaga() {
  yield all([fork(fetchCinemasTask)]);
}
