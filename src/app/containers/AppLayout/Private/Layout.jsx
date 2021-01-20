import React, { memo } from 'react';
import { StyledLayout, StyledContent } from '../styles';
import Header from '../Public/Header';

export const PrivateLayout = ({ children }) => (
  <StyledLayout>
    <Header />
    <StyledContent>{children}</StyledContent>
  </StyledLayout>
);

export default memo(PrivateLayout);
