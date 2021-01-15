import axios from 'axios';
import isNil from 'lodash/fp/isNil';
import get from 'lodash/fp/get';
import { getAccessToken } from 'utils/localStorageUtils';
import { notifyError } from 'utils/notify';

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
  handleShowError(error);
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

const handleShowError = error => {
  const message = get('data.message', error);
  if (message) notifyError(message);
};

export default request;
