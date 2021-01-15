import { WEB_API as BASE_URL } from 'configs';
import request, { handleGeneralError } from './index';

export const getProfile = () => {
  return request(BASE_URL, {
    url: `user/info`,
    method: 'GET',
  })
    .then(response => response.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};

export const editProfile = payload => {
  return request(BASE_URL, {
    url: `user/info`,
    method: 'PUT',
    data: payload,
  })
    .then(response => response.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};
