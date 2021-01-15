import useActions from 'hooks/useActions';
import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectBookingInfo, selectEditBookingStatus } from './selectors';
import { actions } from './slice';
import Form from 'app/components/Form';
import { ACTION_STATUS } from 'utils/constants';

const useHooks = () => {
  const [form] = Form.useForm();
  const info = useSelector(selectBookingInfo);
  const statusUpdate = useSelector(selectEditBookingStatus);
  const { getBooking, editBooking } = useActions(
    {
      getBooking: actions.getBooking,
      editBooking: actions.editBooking,
    },
    [actions],
  );

  useEffect(() => getBooking(), [getBooking]);

  useEffect(() => form.resetFields(), [info, form]);

  const onFinish = useCallback(
    values => {
      editBooking(values);
    },
    [editBooking],
  );

  return {
    handlers: { onFinish },
    selectors: {
      loading: statusUpdate === ACTION_STATUS.PENDING,
      info,
      form,
    },
  };
};

export default useHooks;
