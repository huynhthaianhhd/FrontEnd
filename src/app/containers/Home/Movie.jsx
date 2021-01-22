import { Image, Typography, Button, Tag, Rate } from 'antd';
import { StyledMovie } from './styles';
import {
  CaretRightOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';
import { Carousel } from 'antd';
import { indexBy } from 'lodash/fp';
const { Title } = Typography;

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <LeftOutlined
      className={className}
      style={{
        ...style,
        display: 'block',
        fontSize: 45,
        color: '#5C4D4B',
        left: -50,
        transform: 'translateY(-60px)',
        width: 'unset',
        opacity: 0.8,
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <RightOutlined
      className={className}
      style={{
        ...style,
        display: 'block',
        fontSize: 45,
        color: '#5C4D4B',
        right: -50,
        transform: 'translateY(-60px)',
        width: 'unset',
        opacity: 0.8,
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}

export const Movie = ({
  highLightMovie,
  handleClickMovie,
  handleShowTrailer,
}) => {
  const MoviePreview = ({
    name,
    src,
    classify,
    id,
    movieReviews,
    duration,
    trailerUrl,
  }) => {
    const point = movieReviews?.reduce(
      (totalRate, item) => totalRate + item.rating,
      0,
    );
    const numReviews = movieReviews?.length > 0 ? movieReviews?.length : 1;
    const pointRating = ((point * 10) / (numReviews * 5.0)).toFixed(1);
    const stars = pointRating > 0 ? Math.ceil(pointRating / 2.0) : 5;
    return (
      <StyledMovie>
        <div className="film">
          <div className="rate">
            <span>{pointRating}</span>
            <Rate className="stars" disabled defaultValue={stars} />
          </div>
          <div className="poster-group">
            <Image src={src} className="poster" preview={false} />
            <div className="overlay">
              <CaretRightOutlined
                className="play-icon"
                onClick={() => handleShowTrailer(trailerUrl)}
              />
            </div>
          </div>
          <div className="title-group">
            <div className="name-time">
              <Title className="title" level={5}>
                <Tag
                  className="tag"
                  color={classify === 'P' ? '#4DA858' : '#fb4226'}
                >
                  {classify}
                </Tag>
                {name}
              </Title>
              <span className="duration">{duration} phút</span>
            </div>
            <button
              className="button-buy"
              onClick={() => {
                handleClickMovie(id);
              }}
            >
              MUA VÉ
            </button>
          </div>
        </div>
      </StyledMovie>
    );
  };

  const list =
    highLightMovie.length > 0 &&
    highLightMovie
      ?.map((e, i) => (
        <MoviePreview key={e.id} {...e} id={e.id} src={e.posterUrl} />
      ))
      ?.reduce((acc, _, index, array) => {
        if (index % 8 === 0) {
          acc.push(
            <div key={index} className="block">
              {array.slice(index, index + 8)}
            </div>,
          );
        }
        return acc;
      }, []);

  return (
    <div className="container">
      <div className="header">
        <h3 className="title">Phim mới công chiếu</h3>
      </div>
      <Carousel
        dots={false}
        arrows
        effect="scrollx"
        easing="ease-in-out"
        nextArrow={<SampleNextArrow />}
        prevArrow={<SamplePrevArrow />}
      >
        {list?.length > 0 && list}
      </Carousel>
    </div>
  );
};
