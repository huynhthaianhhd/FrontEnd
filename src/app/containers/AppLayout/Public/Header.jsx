import React, { memo } from 'react';
import { StyledHeader } from '../styles';

export const PublicHeader = () => {
  return (
    <StyledHeader>
      <div className="logo" />
    </StyledHeader>
  );
};

export default memo(PublicHeader);
