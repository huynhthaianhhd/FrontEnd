import { getCinemaByGroup } from 'fetchers/cinema/groupCinema.service';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';

function* fetchCinemasTask() {
  yield takeLatest(actions.fetchListCinema, fetchListCinemaTask);
}

function* fetchListCinemaTask(action) {
  const { response, error } = yield call(fetchListCinemaAPI, action.payload);
  if (response) {
    yield put(actions.fetchCinemasSuccess(response));
    yield put(actions.setDefaultCinema(0));
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
