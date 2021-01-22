import { Image, Typography, Pagination, Tag, Rate } from 'antd';
import { StyledMovie } from './styles';
import { CaretRightOutlined } from '@ant-design/icons';
const { Title } = Typography;

export const Movie = ({
  searchMovieList,
  handleClickMovie,
  handleShowTrailer,
  myRef,
  handleChangePage,
  currentPage,
  total,
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

  return (
    <div className="container" ref={myRef}>
      <div className="header">
        <h3 className="title">Kết quả tìm kiếm</h3>
      </div>
      <div className="main">
        {searchMovieList?.length > 0 &&
          searchMovieList.map((e, i) => {
            return <MoviePreview {...e} id={e.id} src={e.posterUrl} key={i} />;
          })}
      </div>
      <Pagination
        className="pagination"
        showSizeChanger={false}
        current={currentPage}
        onChange={handleChangePage}
        total={total}
      />
    </div>
  );
};
