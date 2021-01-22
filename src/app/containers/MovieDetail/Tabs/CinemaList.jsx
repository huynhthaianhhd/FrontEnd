import {
  StyledCinemaDetail,
  StyledCinemaList,
  StyledTime,
  StyledListTime,
} from './styles';
import { Image, Typography } from 'antd';
import moment from 'moment';

const { Title } = Typography;
export const CinemaList = ({ cinemaList, handleBooking }) => {
  const cinemas = cinemaList[0] ? cinemaList[0].cinemas : [];
  const movie = cinemaList[0];
  return (
    <StyledCinemaList>
      {cinemas.map((cinema, i) => (
        <OneMovieInList
          movie={movie}
          handleBooking={handleBooking}
          {...cinema}
          key={i}
        />
      ))}
    </StyledCinemaList>
  );
};

const OneMovieInList = ({ name, location, showTime, handleBooking, movie }) => {
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
            {name}
          </Title>
          <div className="sub-title">{location}</div>
        </div>
      </StyledCinemaDetail>
      <StyledListTime>
        {showTime?.map(item => (
          <StyledTime
            onClick={() => {
              handleBooking(item.id);
            }}
          >
            <div className="time">
              {moment(item?.startTime).format('HH:mm')}
            </div>
            <span className="divider">-</span>
            <span>
              {moment(item?.startTime)
                .add(movie.duration, 'minute')
                .format('HH:mm')}
            </span>
          </StyledTime>
        ))}
      </StyledListTime>
    </div>
  );
};
