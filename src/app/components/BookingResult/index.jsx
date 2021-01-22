import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const BookingResult = ({ children, location, ...rest }) => {
  const { movie, pickedSeats, startTime } = location.state;
  return (
    <Result
      {...rest}
      status="success"
      title="Bạn đã đặt vé thành công"
      subTitle={`Phim ${movie?.name} - ${startTime} - Ghế: ${pickedSeats}`}
      extra={[
        <Link to="/">
          <Button type="primary" key="home">
            Về trang chủ
          </Button>
        </Link>,
      ]}
    />
  );
};

export default BookingResult;
