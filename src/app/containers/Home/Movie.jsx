import { Image, Typography, Button, Tag } from 'antd';
import { StyledMovie } from './styles';
import MovieSrc from 'images/movie/chimuoiba.png';
const { Title } = Typography;

export const Movie = ({ highLightMovie, handleClickMovie }) => {
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
    <div className="container">
      <div className="header">
        <Button size="large">Đang chiếu</Button>
        <Button size="large">Sắp chiếu</Button>
      </div>
      <div className="main">
        {highLightMovie?.length > 0 &&
          highLightMovie.map((e, i) => {
            return <MoviePreview {...e} id={e.id} src={MovieSrc} key={i} />;
          })}
      </div>
    </div>
  );
};
