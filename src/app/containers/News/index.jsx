import React, { memo } from 'react';
import { useInjectReducer, useInjectSaga } from 'utils/reduxInjectors';
import useHooks from './hooks';
import saga from './saga';
import { reducer, sliceKey } from './slice';
import { StyledNews } from './styles';

export const News = () => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const { handlers, selectors } = useHooks();
  const {} = handlers;
  const { content } = selectors;

  return (
    <StyledNews dangerouslySetInnerHTML={{ __html: content }}></StyledNews>
  );
};

export default memo(News);
