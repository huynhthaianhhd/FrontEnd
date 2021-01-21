import { getCinemaByGroup } from 'fetchers/cinema/groupCinema.service';
import {
  getReviewByCinema,
  addReviewCinema,
} from 'fetchers/cinema/cinema.service';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { notifySuccess } from 'utils/notify';

function* fetchCinemasTask() {
  yield takeLatest(actions.fetchListCinema, fetchListCinemaTask);
}

function* fetchListCinemaTask(action) {
  const { response, error } = yield call(fetchListCinemaAPI, action.payload);
  if (response) {
    yield put(actions.fetchCinemasSuccess(response));
    yield put(actions.fetchReviewOfCinema(response[0]));
  } else {
    yield put(actions.fetchCinemasFailed(error));
  }
}

function fetchListCinemaAPI(payload) {
  return getCinemaByGroup(payload);
}

//* get review
function* reviewCinemaWatcher() {
  yield takeLatest(actions.fetchReviewOfCinema, fetchReviewOfCinemaTask);
}

function* fetchReviewOfCinemaTask(action) {
  const { response, error } = yield call(fetchReviewAPI, action.payload);
  if (response) {
    yield put(actions.fetchReviewSuccess(response));
  } else {
    yield put(actions.fetchReviewFailed(error));
  }
}
function fetchReviewAPI(payload) {
  const { id } = payload;
  return getReviewByCinema({ id });
}

//*add review for cinema
function* addReviewCinemaWatcher() {
  yield takeLatest(actions.addReviewOfCinema, addReviewOfCinemaTask);
}
function* addReviewOfCinemaTask(action) {
  const { response, error } = yield call(addReviewAPI, action.payload);
  if (response) {
    yield put(actions.addReviewOfCinemaSuccess(response));
    notifySuccess('Thêm bình luận thành công');
    yield put(actions.fetchReviewOfCinema({ id: action.payload?.cinemaId }));
  } else {
    yield put(actions.addReviewOfCinemaFailed(error));
  }
}
function addReviewAPI(payload) {
  return addReviewCinema(payload);
}

export default function* defaultSaga() {
  yield all([
    fork(fetchCinemasTask),
    fork(reviewCinemaWatcher),
    fork(addReviewCinemaWatcher),
  ]);
}
