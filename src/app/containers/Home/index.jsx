import React, { memo } from 'react';
import {
  StyledHome,
  StyledSection,
  StyledHelper,
  StyledListMovie,
} from './styles';
import NewsSummary from './NewsSummary';
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
    newsSummary,
  } = selectors;
  const {
    handleClickMovie,
    handleShowTrailer,
    confirmBooking,
    handleClickNews,
  } = handles;
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
          <div className="header">
            <h3 className="title">Cụm rạp</h3>
          </div>
          <StyledListMovie check={cinemaGroupList.length === 0}>
            <ListMovie dataSource={cinemaGroupList} />
          </StyledListMovie>
        </div>
      </StyledSection>
      <StyledSection id="news">
        <div className="container">
          <div className="header">
            <h3 className="title">Tin tức nổi bật</h3>
          </div>
          <NewsSummary handleClickNews={handleClickNews} data={newsSummary} />
        </div>
      </StyledSection>
    </StyledHome>
  );
});

export default Home;
