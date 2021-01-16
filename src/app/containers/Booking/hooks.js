import useActions from 'hooks/useActions';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  selectBookingData,
  selectBookingStatus,
  selectBookingSeats,
  selectBookingPickedSeats,
  selectBookingBookStatus,
} from './selectors';
import { actions } from './slice';
import { ACTION_STATUS } from 'utils/constants';
import { useParams, useHistory } from 'react-router-dom';
import get from 'lodash/fp/get';
import moment from 'moment';

const useHooks = () => {
  const { showTimeId } = useParams();
  const history = useHistory();
  const status = useSelector(selectBookingStatus);
  const bookStatus = useSelector(selectBookingBookStatus);
  const seats = useSelector(selectBookingSeats);
  const pickedSeats = useSelector(selectBookingPickedSeats);
  const data = useSelector(selectBookingData);
  const movie = get('showTime[0].movie', data);
  const startTime = moment(get('showTime[0].startTime', data)).format(
    'YYYY/MM/DD HH:mm',
  );
  const [paymentMethod, setPaymentMethod] = useState(1);

  const { resetData, getBookingInfo, updateSeatStatus, book } = useActions(
    {
      getBookingInfo: actions.getBookingInfo,
      updateSeatStatus: actions.updateSeatStatus,
      book: actions.book,
      resetData: actions.resetData,
    },
    [actions],
  );

  useEffect(() => getBookingInfo(showTimeId), [getBookingInfo, showTimeId]);

  useEffect(() => () => resetData(), [resetData]);

  useEffect(() => {
    if (bookStatus === ACTION_STATUS.SUCCESS) history.push('/');
  }, [bookStatus, history, resetData]);

  const handleClickSeat = ({ id, newStatus }) =>
    updateSeatStatus({ id, newStatus });

  const handleBook = () => book({ showTimeId, pickedSeats });

  const handleChangeRadio = e => {
    setPaymentMethod(e.target.value);
  };

  return {
    handlers: { handleClickSeat, handleBook, handleChangeRadio },
    selectors: {
      loading: status === ACTION_STATUS.PENDING,
      data,
      seats,
      pickedSeats,
      movie,
      startTime,
      paymentMethod,
    },
  };
};

export default useHooks;
