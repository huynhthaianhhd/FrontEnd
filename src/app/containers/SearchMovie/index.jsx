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
  const { searchMovieList, myRef, currentPage, total } = selectors;
  const { handleClickMovie, handleChangePage, handleShowTrailer } = handles;
  return (
    <StyledHome>
      <StyledSection className="first-section">
        <Banner />
      </StyledSection>
      <StyledSection>
        <Movie
          handleClickMovie={handleClickMovie}
          searchMovieList={searchMovieList}
          myRef={myRef}
          handleShowTrailer={handleShowTrailer}
          handleChangePage={handleChangePage}
          currentPage={currentPage}
          total={total}
        />
      </StyledSection>
    </StyledHome>
  );
};

export default SearchMovie;
