import { WEB_API } from 'configs';
import request, { handleGeneralError } from '../index';

export const getHighLight = () => {
  return request(WEB_API, {
    url: '/movie?limit=8',
    method: 'GET',
  })
    .then(res => res.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};

export const getAllMovie = () => {
  return request(WEB_API, {
    url: '/movie?limit=20',
    method: 'GET',
  })
    .then(res => res.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};
