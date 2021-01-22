import { getAll } from 'fetchers/cinema/groupCinema.service';
import { getAllMovie, getListMovieInDay } from 'fetchers/cinema/movie.service';
// import { getCinemaByMovie } from 'fetchers/cinema/cinema.service';
import { getManyNews } from 'fetchers/newsFetcher';
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
function* fetchMovieTask() {
  const { response, error } = yield call(fetchMovie);
  if (response.length > 0) {
    yield put(actions.fetchMovieSuccess(response));
  } else {
    yield put(actions.fetchMovieFailed(error));
  }
}

function* getNewsSummaryWatcher() {
  yield takeLatest(actions.fetchNewsSummary, getNewsSummaryTask);
}

function* getNewsSummaryTask(action) {
  const { response, error } = yield call(getNewsSummaryAPI, action.payload);
  if (response) {
    yield put(actions.fetchNewsSummarySuccess(response));
  } else {
    yield put(actions.fetchNewsSummaryFailed(error.data));
  }
}

function getNewsSummaryAPI(payload) {
  return getManyNews(payload);
}

function fetchMovie() {
  return getAllMovie();
}

function* getListMovieInDayWatcher() {
  yield takeLatest(actions.getListMovieInDay, getListMovieInDayTask);
}
function* getListMovieInDayTask() {
  const { response, error } = yield call(getListMovieInDayAPI);
  if (response.length > 0) {
    yield put(actions.getListMovieInDaySuccess(response));
  } else {
    yield put(actions.getListMovieInDayFailed(error));
  }
}
function getListMovieInDayAPI() {
  return getListMovieInDay();
}
export default function* defaultSaga() {
  yield all([
    fork(fetchGroupListTask),
    fork(fetchMovieWatcher),
    fork(getListMovieInDayWatcher),
    fork(getNewsSummaryWatcher),
  ]);
}
