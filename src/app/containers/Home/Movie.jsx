import { Image, Typography, Button, Tag } from 'antd';
import { StyledMovie } from './styles';
import MovieSrc from 'images/movie/chimuoiba.png';
const { Title } = Typography;

export const Movie = ({ highLightMovie }) => {
  return (
    <div className="container">
      <div className="header">
        <Button size="large">Đang chiếu</Button>
        <Button size="large">Sắp chiếu</Button>
      </div>
      <div className="main">
        {highLightMovie?.length > 0 &&
          highLightMovie.map((e, i) => {
            return <MoviePreview {...e} src={MovieSrc} key={i} />;
          })}
      </div>
    </div>
  );
};

const MoviePreview = ({ name, src, classify }) => {
  return (
    <StyledMovie>
      <div className="film">
        <Image src={src} className="image" />
        <Title level={5}>
          <Tag color="#f50">{classify}</Tag>
          {name}
        </Title>
      </div>
    </StyledMovie>
  );
};
