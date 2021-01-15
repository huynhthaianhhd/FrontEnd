import { call, put, all, fork, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { login, google, facebook } from 'fetchers/authFetcher';
import { storeAuthInfo, removeAuthInfo } from 'utils/localStorageUtils';

function* loginWatcher() {
  yield takeLatest(actions.login, loginTask);
}

function* loginTask(action) {
  const { response, error } = yield call(loginAPI, action.payload);
  if (response) {
    yield call(storeAuthInfo, response.result);
    yield put(actions.loginSuccess());
  } else {
    yield put(actions.loginFailed(error.data));
  }
}

function loginAPI(payload) {
  return login(payload);
}

function* loginServiceWatcher() {
  yield takeLatest(actions.loginService, loginServiceTask);
}

function* loginServiceTask(action) {
  let receivedData = null;
  switch (action.payload.service) {
    case 'google': {
      receivedData = yield call(loginServiceGoogleAPI, action.payload.data);
      break;
    }
    case 'facebook': {
      receivedData = yield call(loginServiceFacebookAPI, action.payload.data);
      break;
    }
    default:
      break;
  }
  const { response, error } = receivedData;
  if (response) {
    yield call(storeAuthInfo, response.result);
    yield put(actions.loginServiceSuccess());
  } else {
    yield put(actions.loginServiceFailed(error.data));
  }
}

function loginServiceGoogleAPI(payload) {
  return google(payload);
}

function loginServiceFacebookAPI(payload) {
  return facebook(payload);
}

function* logoutWatcher() {
  yield takeLatest(actions.logout, logoutTask);
}

function* logoutTask() {
  yield call(removeAuthInfo);
  yield put(actions.logoutSuccess());
}

export default function* defaultSaga() {
  yield all([
    fork(loginWatcher),
    fork(logoutWatcher),
    fork(loginServiceWatcher),
  ]);
}
