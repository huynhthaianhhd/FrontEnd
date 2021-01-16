import { WEB_API as BASE_URL } from 'configs';
import request, { handleGeneralError } from './index';

export const getBookingInfo = payload => {
  return request(BASE_URL, {
    url: `booking/${payload}`,
    method: 'GET',
  })
    .then(response => response.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};

export const book = payload => {
  const { showTimeId, pickedSeats } = payload;
  return request(BASE_URL, {
    url: `booking/${showTimeId}`,
    method: 'POST',
    data: { pickedSeats },
  })
    .then(response => response.data)
    .then(data => ({ response: data }))
    .catch(handleGeneralError);
};
