import { WEB_API as BASE_URL } from 'configs';
import request, { handleGeneralError } from './index';

export const getNews = payload => {
  return request(BASE_URL, {
    url: `news/${payload}`,
    method: 'GET',
  })
    .then(response => response.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};

export const getManyNews = limit => {
  return request(BASE_URL, {
    url: `news`,
    method: 'GET',
    params: { limit },
  })
    .then(response => response.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};

export const addNews = payload => {
  return request(BASE_URL, {
    url: `news`,
    method: 'POST',
    data: payload,
  })
    .then(response => response.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};
