import { Row, Col, Typography } from 'antd';
const { Title } = Typography;
export const Detail = ({ location, phone, description }) => {
  return (
    <Row>
      <Col span={12}>
        <Row gutter={16}>
          <Col span={8}>
            <Title level={5}>Địa Điểm</Title>
          </Col>
          <Col>{location}</Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Title level={5}>Điện Thoại</Title>
          </Col>
          <Col>{phone}</Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Title level={5}>Phòng Chiếu</Title>
          </Col>
          <Col>7 2D. 4 3D</Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Title level={5}>Giờ mở cửa</Title>
          </Col>
          <Col>8:00 - 24:00</Col>
        </Row>
      </Col>
      <Col span={12}>
        <Row gutter={16}>
          <Title level={5}>Giới Thiệu</Title>
        </Row>
        <Row gutter={16}>{description}</Row>
      </Col>
    </Row>
  );
};
