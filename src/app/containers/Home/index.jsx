import React, { memo } from 'react';
import {
  StyledHome,
  StyledSection,
  StyledHelper,
  StyledListMovie,
} from './styles';
import { Banner } from './Banner';
import { BookTicketQick } from './BookTicketQick';
import { Movie } from './Movie';
import { ListMovie } from './ListMovie';
import { sliceKey, reducer } from './slice';
import saga from './saga';
import { useInjectSaga, useInjectReducer } from 'utils/reduxInjectors';
import { useHooks } from './hooks';

export const Home = () => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const { selectors, handles } = useHooks();
  const {
    cinemaGroupList,
    status,
    listMovieHighLight,
    listMovie,
    currentCinemas,
    currentDate,
    currentShowTime,
  } = selectors;
  const { handleSelectMovie, handleClickMovie } = handles;
  return (
    <StyledHome>
      <StyledSection>
        <Banner />
        <StyledHelper>
          <BookTicketQick
            listMovie={listMovie}
            currentCinemas={currentCinemas}
            currentDate={currentDate}
            currentShowTime={currentShowTime}
            handleClick={handleSelectMovie}
          />
        </StyledHelper>
      </StyledSection>
      <StyledSection id="show-time">
        <Movie
          highLightMovie={listMovieHighLight}
          handleClickMovie={handleClickMovie}
        />
      </StyledSection>
      <StyledSection id="group-cinema">
        <div className="container">
          <StyledListMovie check={cinemaGroupList.length === 0}>
            <ListMovie dataSource={cinemaGroupList} />
          </StyledListMovie>
        </div>
      </StyledSection>
    </StyledHome>
  );
};

export default Home;
