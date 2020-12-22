import React, { memo } from 'react';
import Title from 'app/components/Title';
import { StyledHome } from './styles';

export const Home = memo(() => {
  return (
    <StyledHome>
      <Title>Hello World !</Title>
    </StyledHome>
  );
});

export default Home;
