import React, { memo } from 'react';
import useHooks from './hooks';
import saga from './saga';
import { useInjectReducer, useInjectSaga } from 'utils/reduxInjectors';
import { reducer, sliceKey } from './slice';
import {
  StyledBooking,
  VerticalRow,
  BookingButton,
  MovieName,
  SideBar,
  MovieInfo,
  Border,
  Price,
  PickedSeats,
  Payments,
} from './styles';
import CouchList from './CouchList';
import { Row, Col, Radio, Input } from 'antd';
import screenImage from 'assets/png/screen.png';
import { calcPrice, nameOfSeats } from './helper';

export const Booking = props => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const { handlers, selectors } = useHooks(props);
  const { handleClickSeat, handleBook, handleChangeRadio } = handlers;
  const { seats, pickedSeats, movie, startTime, paymentMethod } = selectors;

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  };

  return (
    <StyledBooking>
      <Row>
        <Col span={18} style={{ marginTop: '90px' }}>
          <VerticalRow>
            <VerticalRow>
              <MovieName>{movie?.name}</MovieName>
              <p>{startTime}</p>
            </VerticalRow>
            <Col>
              <img src={screenImage} alt="screen" />
            </Col>
            <Col>
              <CouchList handleClickSeat={handleClickSeat} seats={seats} />
            </Col>
          </VerticalRow>
        </Col>
        <Col span={6}>
          <SideBar>
            <div className="content">
              <Price>{calcPrice(pickedSeats)}</Price>
              <Border />
              <MovieInfo>
                <img src={movie?.posterUrl} alt="poster" />
                <div>
                  <MovieName>{movie?.name}</MovieName>
                  <h4>{`${startTime} - ${movie?.duration} phút`}</h4>
                </div>
              </MovieInfo>
              <Border />
              <PickedSeats>
                <h3>Ghế</h3>
                <h4>{`${
                  nameOfSeats(pickedSeats)
                    ? nameOfSeats(pickedSeats)
                    : 'Chưa có ghế nào'
                }`}</h4>
              </PickedSeats>
              <Border />
              <Payments>
                <h3>Hình thức thanh toán</h3>
                <Radio.Group onChange={handleChangeRadio} value={paymentMethod}>
                  <Radio style={radioStyle} value={1}>
                    Ví điện tử
                  </Radio>
                  <Radio style={radioStyle} value={2}>
                    Thẻ ATM nội địa
                  </Radio>
                  <Radio style={radioStyle} value={3}>
                    Visa, Master, JCB
                  </Radio>
                </Radio.Group>
              </Payments>
            </div>
            <BookingButton
              disabled={pickedSeats?.length === 0}
              onClick={handleBook}
            >
              Đặt vé
            </BookingButton>
          </SideBar>
        </Col>
      </Row>
    </StyledBooking>
  );
};

export default memo(Booking);
