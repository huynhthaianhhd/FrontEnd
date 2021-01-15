import { WEB_API } from 'configs';
import request, { handleGeneralError } from '../index';

export const getAll = () => {
  return request(WEB_API, {
    url: '/movie/group',
    method: 'GET',
  })
    .then(res => res.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};
