import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const BookingResult = ({ children, ...rest }) => {
  return (
    <Result
      status="success"
      title="Chúc mừng"
      subTitle="Bạn đã đặt vé thành công"
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
