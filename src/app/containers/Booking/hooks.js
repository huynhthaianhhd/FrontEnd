import useActions from 'hooks/useActions';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBookingData,
  selectBookingStatus,
  selectBookingSeats,
  selectBookingPickedSeats,
} from './selectors';
import { actions } from './slice';
import { ACTION_STATUS } from 'utils/constants';
import { useParams } from 'react-router-dom';

const useHooks = () => {
  const { showTimeId } = useParams();
  const status = useSelector(selectBookingStatus);
  const seats = useSelector(selectBookingSeats);
  const pickedSeats = useSelector(selectBookingPickedSeats);
  const data = useSelector(selectBookingData);

  const { getBookingInfo, updateSeatStatus, book } = useActions(
    {
      getBookingInfo: actions.getBookingInfo,
      updateSeatStatus: actions.updateSeatStatus,
      book: actions.book,
    },
    [actions],
  );

  useEffect(() => getBookingInfo(showTimeId), [getBookingInfo, showTimeId]);

  const handleClickSeat = ({ id, newStatus }) =>
    updateSeatStatus({ id, newStatus });

  const handleBook = () => book({ showTimeId, pickedSeats });

  return {
    handlers: { handleClickSeat, handleBook },
    selectors: {
      loading: status === ACTION_STATUS.PENDING,
      data,
      seats,
      pickedSeats,
    },
  };
};

export default useHooks;
