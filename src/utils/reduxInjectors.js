import {
  useInjectReducer as useReducer,
  useInjectSaga as useSaga,
} from 'redux-injectors';

export const useInjectReducer = params => useReducer(params);
export const useInjectSaga = params => useSaga(params);
