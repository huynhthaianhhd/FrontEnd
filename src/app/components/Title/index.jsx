import React from 'react';
import { StyledTitle } from './styles';

const Title = ({ children, ...rest }) => {
  return (
    <StyledTitle level={2} {...rest}>
      {children}
    </StyledTitle>
  );
};

export default Title;
