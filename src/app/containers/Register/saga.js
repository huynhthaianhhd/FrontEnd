import { register } from 'fetchers/authFetcher';
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { notifySuccess } from 'utils/notify';

function* registerWatcher() {
  yield takeLatest(actions.register, registerTask);
}

function* registerTask(action) {
  const { response, error } = yield call(registerAPI, action.payload);
  if (response) {
    yield put(actions.registerSuccess());
    notifySuccess('Register success');
  } else {
    yield put(actions.registerFailed(error.data));
  }
}

function registerAPI(payload) {
  return register(payload);
}

export default function* defaultSaga() {
  yield all([fork(registerWatcher)]);
}
