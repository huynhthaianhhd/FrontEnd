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
  const { selectors } = useHooks();
  const { cinemaGroupList, status, listFilmHighLight } = selectors;
  return (
    <StyledHome>
      <StyledSection>
        <Banner />
        <StyledHelper>
          <BookTicketQick />
        </StyledHelper>
      </StyledSection>
      <StyledSection>
        <Movie highLightMovie={listFilmHighLight} />
      </StyledSection>
      <StyledSection>
        <div className="container">
          <StyledListMovie>
            <ListMovie dataSource={cinemaGroupList} />
          </StyledListMovie>
        </div>
      </StyledSection>
    </StyledHome>
  );
});

export default Home;
