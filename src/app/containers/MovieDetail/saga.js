import { getMovieById, getMovieReviewsById } from 'fetchers/movie/movieFetcher';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';

function* getDetailMovieWatcher() {
  yield takeLatest(actions.getDetailMovie, getDetailMovieTask);
}
function* getMovieReviewsWatcher() {
  yield takeLatest(actions.getMovieReviews, getMovieReviewsTask);
}

function* getDetailMovieTask(action) {
  const { response, error } = yield call(getDetailMovieAPI, action.payload);
  if (response) {
    yield put(actions.getDetailMovieSuccess(response));
  } else {
    yield put(actions.getDetailMovieFailed(error));
  }
}

function* getMovieReviewsTask(action) {
  const { response, error } = yield call(getMovieReviewsAPI, action.payload);
  if (response) {
    yield put(actions.getMovieReviewsSuccess(response));
  } else {
    yield put(actions.getMovieReviewsFailed(error));
  }
}

function getDetailMovieAPI(payload) {
  return getMovieById(payload);
}

function getMovieReviewsAPI(payload) {
  return getMovieReviewsById(payload);
}

export default function* defaultSaga() {
  yield all([fork(getDetailMovieWatcher), fork(getMovieReviewsWatcher)]);
}
