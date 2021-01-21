import { StyledHeader } from './styles/StyledHeader';
import { Image, Progress, Row, Col, Typography, Button, Rate } from 'antd';
import { memo } from 'react';
import { CalcReviewPoint } from 'utils/common';
const { Title } = Typography;
export const Header = memo(({ name, location, cinemaReview }) => {
  return (
    <StyledHeader>
      <img
        src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952178872.png"
        alt=""
      />
      <div className="overlay">
        <div className="main">
          <Row className="layer">
            <Col span={8} className="center">
              <Image
                src="https://s3img.vcdn.vn/123phim/2021/01/bhd-star-bitexco-16105952220224.png"
                alt="hihi"
              />
            </Col>
            <Col span={8} className="center" style={{ paddingLeft: 20 }}>
              <Title level={3} style={{ color: '#333333' }}>
                {name || ''}
              </Title>
              <p>{location}</p>
              <Button style={{ marginTop: 20 }} type="danger" size="large">
                Mua vé
              </Button>
            </Col>
            <Col span={8} className="center-end">
              <Progress
                percent={(CalcReviewPoint(cinemaReview) / 5) * 100 || 83}
                type="circle"
                className="white"
                status="success"
                trailColor="#3A3A3A"
                width={137}
                format={per => Math.floor(per / 10)}
              />
              <Rate
                allowHalf
                value={CalcReviewPoint(cinemaReview)}
                disabled={true}
                style={{ color: '#FB4226' }}
              />
            </Col>
          </Row>
        </div>
      </div>
    </StyledHeader>
  );
});
