import { Image, Typography, Tag } from 'antd';
import { StyledMovie } from './styles';
const { Title } = Typography;

export const Movie = ({ searchMovieList, handleClickMovie, myRef }) => {
  const MoviePreview = ({ name, src, classify, id }) => {
    return (
      <StyledMovie>
        <div
          className="film"
          onClick={() => {
            handleClickMovie(id);
          }}
        >
          <Image src={src} className="image" preview={false} />
          <Title level={5}>
            <Tag color="#f50">{classify}</Tag>
            {name}
          </Title>
        </div>
      </StyledMovie>
    );
  };

  return (
    <div className="container" ref={myRef}>
      <div className="header">
        <Title level={5}>Kết quả tìm kiếm :</Title>
      </div>
      <div className="main">
        {searchMovieList?.length > 0 &&
          searchMovieList.map((e, i) => {
            return <MoviePreview {...e} id={e.id} src={e.posterUrl} key={i} />;
          })}
      </div>
    </div>
  );
};
