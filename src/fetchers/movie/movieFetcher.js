import { WEB_API as BASE_URL } from 'configs';
import request, { handleGeneralError } from '../index';

export const getMovieById = ({ id }) => {
  return request(BASE_URL, {
    url: `/movie/${id}`,
    method: 'GET',
  })
    .then(({ data }) => data.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};

export const getMovieReviewsById = ({ id }) => {
  return request(BASE_URL, {
    url: `/movie/reviews/${id}`,
    method: 'GET',
  })
    .then(({ data }) => data.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};

export const createMovieReview = payload => {
  return request(BASE_URL, {
    url: `/movie/reviews`,
    method: 'POST',
    data: payload,
  })
    .then(({ data }) => data.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};
