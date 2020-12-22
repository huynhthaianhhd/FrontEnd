import { combineReducers } from '@reduxjs/toolkit';
import { reducer as authenticationReducer } from 'app/containers/Login/slice';

export const createReducer = (injectedReducers = {}) => {
  return combineReducers({
    authentication: authenticationReducer,
    ...injectedReducers,
  });
};
