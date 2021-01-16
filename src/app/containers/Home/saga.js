import { getAll } from 'fetchers/cinema/groupCinema.service';
import { getAllMovie } from 'fetchers/cinema/movie.service';
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

function* fetchMovieWatcher() {
  yield takeLatest(actions.fetchListMovie, fetchMovieTask);
}

function* fetchMovieTask(action) {
  const { response, error } = yield call(fetchMovie);
  if (response.length > 0) {
    yield put(actions.fetchMovieSuccess(response));
    const temp = [...response];
    yield put(actions.setHighLightMovie(temp.splice(0, 8)));
  } else {
    yield put(actions.fetchMovieFailed(error));
  }
}

function fetchMovie() {
  return getAllMovie();
}
export default function* defaultSaga() {
  yield all([fork(fetchGroupListTask), fork(fetchMovieWatcher)]);
}
