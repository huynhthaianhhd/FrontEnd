import React, { memo } from 'react';
import Button from 'app/components/Button';
import Form from 'app/components/Form';
import Input from 'app/components/Input';
import { Avatar } from 'antd';
import { Row, Col } from 'app/components/Grid';
import useHooks from './hooks';
import saga from './saga';
import { useInjectReducer, useInjectSaga } from 'utils/reduxInjectors';
import { reducer, sliceKey } from './slice';
import { StyledBooking } from './styles';
import { useTranslation } from 'react-i18next';
import { Typography } from 'antd';

const { Title } = Typography;

export const Booking = () => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const { handlers, selectors } = useHooks();
  const { onFinish } = handlers;
  const { info, form, loading } = selectors;
  const { t } = useTranslation();

  return <StyledBooking></StyledBooking>;
};

export default memo(Booking);
