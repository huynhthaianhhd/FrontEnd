import {
  StyledMovieDetail,
  StyledMovieList,
  StyledTime,
  StyledListTime,
} from './styles';
import { Image, Typography } from 'antd';
import { GetUrlCinema } from 'utils/common';
import BHD from 'images/movie/BHD.png';

const { Title } = Typography;
export const MovieList = ({ movies }) => {
  return (
    <StyledMovieList>
      {movies.length > 0 &&
        movies.map((movie, i) => (
          <OneMovieInList index={i} {...movie} key={i} />
        ))}
    </StyledMovieList>
  );
};

const OneMovieInList = ({
  name,
  duration,
  language,
  category,
  startTime,
  index,
}) => {
  return (
    <div>
      <StyledMovieDetail>
        <Image className="img-tiny" src={GetUrlCinema(index)} preview={false} />
        <div className="content">
          <Title level={5}>{name}</Title>
          <div className="sub-title">{`${duration} phút - Thể Loại: ${category} - Ngôn ngữ:${language}`}</div>
        </div>
      </StyledMovieDetail>
      <StyledListTime>
        <StyledTime>
          <div className="time">{startTime}</div>
          ~13:45
        </StyledTime>
      </StyledListTime>
    </div>
  );
};
