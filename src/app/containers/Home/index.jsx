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

export const Home = memo(() => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const { selectors, handles } = useHooks();
  const {
    cinemaGroupList,
    listMovie,
    listMovieToday,
    currentError,
  } = selectors;
  const { handleClickMovie, handleShowTrailer, confirmBooking } = handles;
  return (
    <StyledHome>
      <StyledSection className="first-section">
        <Banner />
        <StyledHelper>
          <BookTicketQick
            listMovie={listMovieToday}
            error={currentError}
            onConfirm={confirmBooking}
          />
        </StyledHelper>
      </StyledSection>
      <StyledSection id="show-time">
        <Movie
          highLightMovie={listMovie}
          handleClickMovie={handleClickMovie}
          handleShowTrailer={handleShowTrailer}
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
});

export default Home;
