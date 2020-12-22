import moment from 'moment';
import isNil from 'lodash/fp/isNil';
import { AUTH_INFO_KEY } from './constants';

export const storeAuthInfo = authInfo => {
  localStorage.setItem(AUTH_INFO_KEY, JSON.stringify(authInfo));
};

export const isValidAuthInfo = authInfo => {
  const expiresIn = authInfo?.token?.expiresIn;
  return expiresIn && moment(expiresIn) >= moment();
};

export const getAuthInfo = () => {
  const authInfo = JSON.parse(localStorage.getItem(AUTH_INFO_KEY));
  if (!isNil(authInfo) && isValidAuthInfo(authInfo)) {
    return authInfo;
  }
  return null;
};

export const getAccessToken = () => {
  return getAuthInfo()?.token?.accessToken;
};

export const getRefreshToken = () => {
  return getAuthInfo()?.token?.refreshToken;
};

export const getEmailUser = () => {
  return getAuthInfo()?.user?.email;
};

export const isAuthenticated = () => {
  const authInfo = getAuthInfo();
  return !isNil(authInfo);
};

export const removeAuthInfo = () => localStorage.removeItem(AUTH_INFO_KEY);
