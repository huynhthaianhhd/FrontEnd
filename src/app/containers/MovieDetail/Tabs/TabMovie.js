import React, { memo } from 'react';
import { Row, Avatar, Col } from 'antd';
import moment from 'moment';
import { StyledDivider } from './styles';

export const TabMovie = memo(props => {
  const { detailMovie } = props;
  return (
    <Row style={{ padding: '20px' }}>
      <div className="about-movie about">
        <span className="header-title">Nội dung phim </span>
        <div className="content-about">
          <span style={{ marginBottom: '15px' }}>
            {detailMovie?.description}
          </span>
          <Row>
            <Col className="title-type-info">
              <span>Ngày chiếu : </span>
            </Col>
            <Col>
              <span>
                {moment(detailMovie?.premiereTime).format('YYYY-MM-DD')}
              </span>
            </Col>
          </Row>
          <Row>
            <Col className="title-type-info">
              <span>Thể loại : </span>
            </Col>
            <Col>
              <span>{detailMovie?.category}</span>
            </Col>
          </Row>
          <Row>
            <Col className="title-type-info">
              <span>Thời lượng : </span>
            </Col>
            <Col>
              <span>{detailMovie?.duration} phút</span>
            </Col>
          </Row>
          <Row>
            <Col className="title-type-info">
              <span>Đạo diễn : </span>
            </Col>
            <Col>
              <span>{detailMovie?.director}</span>
            </Col>
          </Row>
          <Row>
            <Col className="title-type-info">
              <span>Quốc gia : </span>
            </Col>
            <Col>
              <span>{detailMovie?.language}</span>
            </Col>
          </Row>
        </div>
      </div>
      <StyledDivider />
      <div className="about-casts about">
        <span className="header-title">Diễn viên </span>
        <div className="content-about group-cast">
          {detailMovie?.casts?.map(cast => (
            <div className="avatar">
              <Avatar size={80} src="http://placeimg.com/300/300/people" />
              <span>{cast}</span>
            </div>
          ))}
        </div>
      </div>
    </Row>
  );
});

export default TabMovie;
