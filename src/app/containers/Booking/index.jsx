import React, { memo } from 'react';
import Button from 'app/components/Button';
import useHooks from './hooks';
import saga from './saga';
import { useInjectReducer, useInjectSaga } from 'utils/reduxInjectors';
import { reducer, sliceKey } from './slice';
import { StyledBooking } from './styles';
import CouchList from './CouchList';

export const Booking = props => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const { handlers, selectors } = useHooks(props);
  const { handleClickSeat, handleBook } = handlers;
  const { seats, pickedSeats } = selectors;

  return (
    <StyledBooking>
      <CouchList handleClickSeat={handleClickSeat} seats={seats} />
      <Button onClick={handleBook}>Book</Button>
    </StyledBooking>
  );
};

export default memo(Booking);
