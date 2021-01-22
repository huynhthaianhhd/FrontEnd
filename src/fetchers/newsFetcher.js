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

export const getManyNews = () => {
  return request(BASE_URL, {
    url: `news`,
    method: 'GET',
  })
    .then(response => response.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};
