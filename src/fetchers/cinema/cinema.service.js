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

export const getCinemaByGroupNTime = payload => {
  return request(WEB_API, {
    url: '/cinema',
    method: 'POST',
    data: payload,
  })
    .then(({ data }) => data.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};
