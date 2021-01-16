import {
  getMovieById,
  getMovieReviewsById,
  createMovieReview,
} from 'fetchers/movie/movieFetcher';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';

function* getDetailMovieWatcher() {
  yield takeLatest(actions.getDetailMovie, getDetailMovieTask);
}
function* getMovieReviewsWatcher() {
  yield takeLatest(actions.getMovieReviews, getMovieReviewsTask);
}
function* createMovieReviewWatcher() {
  yield takeLatest(actions.createMovieReview, createMovieReviewTask);
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

function* createMovieReviewTask(action) {
  const { response, error } = yield call(createMovieReviewAPI, action.payload);
  if (response) {
    yield put(actions.createMovieReviewSuccess(response));
  } else {
    yield put(actions.createMovieReviewFailed(error));
  }
}

function getDetailMovieAPI(payload) {
  return getMovieById(payload);
}

function getMovieReviewsAPI(payload) {
  return getMovieReviewsById(payload);
}

function createMovieReviewAPI(payload) {
  return createMovieReview(payload);
}

export default function* defaultSaga() {
  yield all([
    fork(getDetailMovieWatcher),
    fork(getMovieReviewsWatcher),
    fork(createMovieReviewWatcher),
  ]);
}
