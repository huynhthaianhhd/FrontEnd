import React, { memo } from 'react';
import { StyledHome, StyledSection } from './styles';
import { Banner } from './Banner';
import { Movie } from './Movie';
import { sliceKey, reducer } from './slice';
import saga from './saga';
import { useInjectSaga, useInjectReducer } from 'utils/reduxInjectors';
import { useHooks } from './hooks';

export const SearchMovie = () => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const { selectors, handles } = useHooks();
  const { searchMovieList } = selectors;
  const { handleClickMovie, handleChangeInput } = handles;
  return (
    <StyledHome>
      <StyledSection>
        <Banner />
      </StyledSection>
      <StyledSection>
        <Movie
          handleChangeInput={handleChangeInput}
          handleClickMovie={handleClickMovie}
          searchMovieList={searchMovieList}
        />
      </StyledSection>
    </StyledHome>
  );
};

export default SearchMovie;
