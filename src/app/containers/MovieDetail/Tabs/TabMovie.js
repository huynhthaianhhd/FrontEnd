import React, { memo } from 'react';
import { Row, Avatar, Col } from 'antd';

export const TabMovie = memo(() => {
  return (
    <Row style={{ padding: '20px' }}>
      <div className="about-movie about">
        <span className="header-title">About the movie </span>
        <div className="content-about">
          <span>
            Phần hai Chị Mười Ba: 3 Ngày Sinh Tử được đầu tư hoành tráng hơn với
            những màn rượt đuổi ngẹt thở, những pha đánh đấm chân thật hơn, hứa
            hẹn “bùng cháy” mạnh mẽ và kịch tính vào tháng 12 này. Phần hai Chị
            Mười Ba: 3 Ngày Sinh Tử được đầu tư hoành tráng hơn với những màn
            rượt đuổi ngẹt thở, những pha đánh đấm chân thật hơn, hứa hẹn “bùng
            cháy” mạnh mẽ và kịch tính vào tháng 12 này.
          </span>
          <Row>
            <Col style={{ flex: 0.1, fontWeight: 'bolder' }}>
              <span>Ngày chiếu : </span>
            </Col>
            <Col>
              <span>2020/10/10</span>
            </Col>
          </Row>
          <Row>
            <Col style={{ flex: 0.1, fontWeight: 'bolder' }}>
              <span>Thể loại : </span>
            </Col>
            <Col>
              <span>Hành động</span>
            </Col>
          </Row>
          <Row>
            <Col style={{ flex: 0.1, fontWeight: 'bolder' }}>
              <span>Quốc gia : </span>
            </Col>
            <Col>
              <span>Việt nam</span>
            </Col>
          </Row>
        </div>
      </div>
      <div className="about-casts about">
        <span className="header-title">Casts </span>
        <div className="content-about group-cast">
          <div className="avatar">
            <Avatar
              size={80}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
            <span>Ronaldo</span>
          </div>
          <div className="avatar">
            <Avatar
              size={80}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
            <span>Ronaldo</span>
          </div>
          <div className="avatar">
            <Avatar
              size={80}
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
            <span>Ronaldo</span>
          </div>
        </div>
      </div>
    </Row>
  );
});

export default TabMovie;
