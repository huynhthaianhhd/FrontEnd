import moment from 'moment';
import isNil from 'lodash/fp/isNil';
import get from 'lodash/fp/get';
import { AUTH_INFO_KEY } from './constants';

export const storeAuthInfo = authInfo => {
  localStorage.setItem(AUTH_INFO_KEY, JSON.stringify(authInfo));
};

export const isValidAuthInfo = authInfo => {
  const expires = get('tokens.access.expires', authInfo);
  return moment(expires) >= moment().utc();
};

export const getAuthInfo = () => {
  try {
    const authInfo = JSON.parse(localStorage.getItem(AUTH_INFO_KEY));
    if (!isNil(authInfo) && isValidAuthInfo(authInfo)) {
      return authInfo;
    }
    return null;
  } catch (error) {
    console.log('Error: ', error);
    return null;
  }
};

export const getAccessToken = () => {
  const authInfo = getAuthInfo();
  return get('tokens.access.token', authInfo);
};

export const getRefreshToken = () => {
  const authInfo = getAuthInfo();
  return get('tokens.refresh.token', authInfo);
};

export const getUser = () => {
  const authInfo = getAuthInfo();
  return get('user', authInfo);
};

export const isAuthenticated = () => {
  const authInfo = getAuthInfo();
  return !isNil(authInfo);
};

export const removeAuthInfo = () => localStorage.removeItem(AUTH_INFO_KEY);
