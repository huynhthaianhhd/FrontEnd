import {
  StyledCinemaDetail,
  StyledCinemaList,
  StyledTime,
  StyledListTime,
} from './styles';
import { Image, Typography } from 'antd';
import { GetUrlCinema } from 'utils/common';
import BHD from 'images/movie/BHD.png';

const { Title } = Typography;
export const CinemaList = ({ cinema }) => {
  return (
    <StyledCinemaList>
      {/* <OneMovieInList />
      <OneMovieInList />
      <OneMovieInList /> */}
    </StyledCinemaList>
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
    <div style={{ marginBottom: 10 }}>
      <StyledCinemaDetail>
        <Image
          className="img-tiny"
          src={
            'https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952137769.png'
          }
          preview={false}
        />
        <div className="content">
          <Title className="title" level={5}>
            BHD Star - Bitexco
          </Title>
          <div className="sub-title">L3-Bitexco Icon 68, 2 Hải Triều, Q.1</div>
        </div>
      </StyledCinemaDetail>
      <StyledListTime>
        <StyledTime>
          <div className="time">13:00</div>
          <span className="divider">-</span>
          <span>13:45</span>
        </StyledTime>
      </StyledListTime>
    </div>
  );
};
