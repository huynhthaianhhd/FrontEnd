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
    url: '/movie?limit=24',
    method: 'GET',
  })
    .then(res => res.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};

export const searchMovies = data => {
  return request(WEB_API, {
    url: '/movie/search',
    method: 'POST',
    data,
  })
    .then(({ data }) => data.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};

export const getListMovieInDay = () => {
  return request(WEB_API, {
    url: '/movie/allInDay',
    method: 'GET',
  })
    .then(({ data }) => data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};
