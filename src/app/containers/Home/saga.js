import { getAll } from 'fetchers/cinema/groupCinema.service';
import { getHighLight } from 'fetchers/cinema/cinema.service';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';

function* fetchGroupListTask() {
  yield takeLatest(actions.fetchGroup, fetchGroupTask);
}

function* fetchGroupTask(action) {
  const { response, error } = yield call(fetchGroupCinema);
  if (response) {
    yield put(actions.fetchGroupSuccess(response));
  } else {
    yield put(actions.fetchGroupFailed(error));
  }
}

function fetchGroupCinema() {
  return getAll();
}

function* fetchHighLightMovieWatcher() {
  yield takeLatest(actions.fetchListFilmHightLight, fetchHighLightMovieTask);
}

function* fetchHighLightMovieTask(action) {
  const { response, error } = yield call(fetchHighLightMovie);
  if (response) {
    yield put(actions.fetchMovieHightLightSuccess(response));
  } else {
    yield put(actions.fetchGroupFailed(error));
  }
}

function fetchHighLightMovie() {
  return getHighLight();
}
export default function* defaultSaga() {
  yield all([fork(fetchGroupListTask), fork(fetchHighLightMovieWatcher)]);
}
