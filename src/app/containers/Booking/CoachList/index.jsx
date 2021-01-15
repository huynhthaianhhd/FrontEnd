import { memo } from 'react';
import { StyledCoachList, Couch } from './styles';
import { DATE_FORMAT } from 'utils/constants';

const CoachList = ({ ...rest }) => {
  return <StyledCoachList format={DATE_FORMAT} placeholder="" {...rest} />;
};

export default memo(CoachList);
