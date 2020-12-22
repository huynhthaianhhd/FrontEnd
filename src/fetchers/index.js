import axios from 'axios';
import isNil from 'lodash/fp/isNil';
import { getAccessToken } from 'utils/localStorageUtils';

const createClient = baseURL =>
  axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
      Authorization: getAccessToken() ? `Bearer ${getAccessToken()}` : '',
    },
  });

const request = (baseURL, options) => {
  const onSuccess = response => response;
  const onError = error => Promise.reject(error.response || error.message);
  const client = createClient(baseURL);
  return client(options).then(onSuccess).catch(onError);
};

export const handleGeneralError = error => {
  if (!isNil(error.response)) {
    return {
      error: error.response
        .clone()
        // json() method returns a promise that resolves with the result as JSON
        .json()
        .catch(() => error.response.text())
        .then(objData => ({
          error: { ...objData, status: error.response.status },
        })),
    };
  }
  return { error };
};

export default request;
