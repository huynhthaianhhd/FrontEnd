import { memo } from 'react';
import { StyledDatePicker } from './styles';
import { DATE_FORMAT } from 'utils/constants';

const DatePicker = ({ ...rest }) => {
  return <StyledDatePicker format={DATE_FORMAT} placeholder="" {...rest} />;
};

export default memo(DatePicker);
