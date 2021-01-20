import { searchMovies } from 'fetchers/cinema/movie.service';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';

function* searchMovieWatcher() {
  yield takeLatest(actions.searchMovie, searchMovieTask);
}

function* searchMovieTask(action) {
  const { response, error } = yield call(searchMovieAPI, action.payload);
  if (response) {
    yield put(actions.searchMovieSuccess(response));
  } else {
    yield put(actions.searchMovieFailed(error));
  }
}

function searchMovieAPI(payload) {
  return searchMovies(payload);
}
export default function* defaultSaga() {
  yield all([fork(searchMovieWatcher)]);
}
