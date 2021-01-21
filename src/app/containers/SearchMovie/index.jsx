import React, { memo } from 'react';
import { StyledHome, StyledSection } from './styles';
import { Banner } from './Banner';
import { Movie } from './Movie';
import { sliceKey, reducer } from './slice';
import saga from './saga';
import { useInjectSaga, useInjectReducer } from 'utils/reduxInjectors';
import { useHooks } from './hooks';

export const SearchMovie = props => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const { selectors, handles } = useHooks(props);
  const { searchMovieList, myRef } = selectors;
  const { handleClickMovie } = handles;
  return (
    <StyledHome>
      <StyledSection>
        <Banner />
      </StyledSection>
      <StyledSection>
        <Movie
          handleClickMovie={handleClickMovie}
          searchMovieList={searchMovieList}
          myRef={myRef}
        />
      </StyledSection>
    </StyledHome>
  );
};

export default SearchMovie;
