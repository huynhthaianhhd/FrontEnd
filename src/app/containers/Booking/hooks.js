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
import { actions as popupActions } from 'app/containers/Popup/slice';
import { POPUP_TYPE } from 'app/containers/Popup/constants';
import { nameOfSeats } from './helper';

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

  const {
    resetData,
    getBookingInfo,
    updateSeatStatus,
    book,
    openPopup,
  } = useActions(
    {
      getBookingInfo: actions.getBookingInfo,
      updateSeatStatus: actions.updateSeatStatus,
      book: actions.book,
      resetData: actions.resetData,
      openPopup: popupActions.openPopup,
    },
    [actions, popupActions],
  );

  useEffect(() => getBookingInfo(showTimeId), [getBookingInfo, showTimeId]);

  useEffect(() => () => resetData(), [resetData]);

  useEffect(() => {
    if (bookStatus === ACTION_STATUS.SUCCESS)
      history.push({
        pathname: `/booking/${showTimeId}/result`,
        state: {
          movie,
          startTime,
          pickedSeats: nameOfSeats(pickedSeats),
        },
      });
  }, [
    bookStatus,
    history,
    movie,
    pickedSeats,
    resetData,
    showTimeId,
    startTime,
  ]);

  const handleClickSeat = ({ id, newStatus }) =>
    updateSeatStatus({ id, newStatus });

  const handleBook = () => book({ showTimeId, pickedSeats });

  const handleConfirmBook = () => {
    openPopup({
      key: 'confirmBook',
      type: POPUP_TYPE.CONFIRM,
      message: 'Bạn có chắc chắn với thông tin đặt vé ?',
      cancelText: 'Hủy',
      handleConfirm: handleBook,
      loading: bookStatus === ACTION_STATUS.PENDING,
    });
  };

  const handleChangeRadio = e => {
    setPaymentMethod(e.target.value);
  };

  return {
    handlers: { handleClickSeat, handleConfirmBook, handleChangeRadio },
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
