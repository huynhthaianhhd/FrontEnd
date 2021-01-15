import { getProfile, editProfile } from 'fetchers/profileFetcher';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { notifySuccess } from 'utils/notify';

function* getProfileWatcher() {
  yield takeLatest(actions.getProfile, getProfileTask);
}

function* getProfileTask() {
  const { response, error } = yield call(getProfileAPI);
  if (response) {
    yield put(actions.getProfileSuccess(response));
  } else {
    yield put(actions.getProfileFailed(error.data));
  }
}

function getProfileAPI() {
  return getProfile();
}

function* editProfileWatcher() {
  yield takeLatest(actions.editProfile, editProfileTask);
}

function* editProfileTask(action) {
  const { response, error } = yield call(editProfileAPI, action.payload);
  if (response) {
    yield put(actions.editProfileSuccess(response));
    notifySuccess('Update profile success');
  } else {
    yield put(actions.editProfileFailed(error.data));
  }
}

function editProfileAPI(payload) {
  return editProfile(payload);
}

export default function* defaultSaga() {
  yield all([fork(getProfileWatcher), fork(editProfileWatcher)]);
}
