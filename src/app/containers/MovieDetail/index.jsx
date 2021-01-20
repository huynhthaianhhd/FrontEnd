import React, { memo } from 'react';
import { StyledMovieDetail } from './styles';
import { Row, Col, Button } from 'antd';
import TabInfo from './Tabs/Tab';
import useHooks from './hooks';
import saga from './saga';
import { useInjectReducer, useInjectSaga } from 'utils/reduxInjectors';
import { reducer, sliceKey } from './slice';
import moment from 'moment';

export const MovieDetail = memo(() => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const { handlers, selectors } = useHooks();
  const { handleShowTrailer } = handlers;
  const { detailMovie, movieReviews, groupCinema } = selectors;
  const point = movieReviews.reduce(
    (totalRate, item) => totalRate + item.rating,
    0,
  );
  const numReviews = movieReviews.length > 0 ? movieReviews.length : 1;
  const pointRating = ((point * 10) / (numReviews * 5.0)).toFixed(1);
  const num = pointRating > 0 ? Math.ceil(pointRating / 2.0) : 5;
  const numStars = num ? [...Array(num).fill(null)] : [];
  return (
    <StyledMovieDetail background={detailMovie?.posterUrl}>
      <div className="overlay"></div>
      <div>
        <Row justify="space-between" className="group-movie-header">
          <Col span={16} className="group-movie-info">
            <div className="img-poster-main">
              <img src={detailMovie?.posterUrl} alt="Loading..." />
            </div>
            <div className="poster-main">
              <div className="info">
                <span>
                  {moment(detailMovie?.premiereTime).format('YYYY-MM-DD')}
                </span>
              </div>
              <div className="name-movie info">
                <span>{detailMovie?.name}</span>
              </div>
              <div className="info">
                <span>{detailMovie?.duration} phút - 0 IMDb - 2D/Digital</span>
              </div>
              <Button
                onClick={() => handleShowTrailer(detailMovie?.trailerUrl)}
                type="primary"
                danger
                className="info button-trailer"
              >
                Xem trailer
              </Button>
            </div>
          </Col>
          <Col span={8} className="header-rating">
            <div className="circlePercent">
              <div className="circleBorder">
                <span className="point">
                  {pointRating > 0 ? pointRating : 10}
                </span>
              </div>
            </div>
            <div className="group-star">
              {numStars.map(() => (
                <img
                  className="smallStar"
                  src="https://tix.vn/app/assets/img/icons/star1.png"
                  alt="Rating"
                />
              ))}
            </div>
            <div>
              <span>{movieReviews?.length} lượt đánh giá</span>
            </div>
          </Col>
        </Row>
      </div>
      <TabInfo
        detailMovie={detailMovie}
        movieReviews={movieReviews}
        groupCinema={groupCinema}
      />
    </StyledMovieDetail>
  );
});

export default MovieDetail;
