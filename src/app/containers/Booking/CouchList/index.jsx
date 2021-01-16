import { memo } from 'react';
import { StyledCouchList, Couch, StyledRow, VerticalRow } from './styles';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { Row, Col } from 'antd';

const CouchList = ({ handleClickSeat, seats, seatPerRow = 10, ...rest }) => {
  const formattedSeats =
    seats.length > 0 &&
    seats.reduce((acc, curr, index) => {
      if (index % seatPerRow === 0) {
        acc.push(
          <Row align="middle">
            <StyledRow>{curr.row}</StyledRow>
            <div>
              {seats.slice(index, index + seatPerRow).map(item => {
                return (
                  <Couch
                    onClick={() =>
                      handleClickSeat({
                        id: item.id,
                        newStatus:
                          item.status === 'AVAILABLE' ? 'PICKED' : 'AVAILABLE',
                      })
                    }
                    status={item.status}
                    row={item.row}
                    icon={faCouch}
                  />
                );
              })}
            </div>
          </Row>,
        );
        return acc;
      }
      return acc;
    }, []);

  return (
    <StyledCouchList {...rest}>
      <div className="seats">{formattedSeats}</div>
      <Row gutter={20} justify="center">
        <Col>
          <VerticalRow>
            <Couch
              disabled
              size={18}
              status="AVAILABLE"
              row="A"
              icon={faCouch}
            />
            <p>Ghế thường</p>
          </VerticalRow>
        </Col>
        <Col>
          <VerticalRow>
            <Couch
              disabled
              size={18}
              status="AVAILABLE"
              row="C"
              icon={faCouch}
            />
            <p>Ghế VIP</p>
          </VerticalRow>
        </Col>
        <Col>
          <VerticalRow>
            <Couch disabled size={18} status="PICKED" icon={faCouch} />
            <p>Ghế đang chọn</p>
          </VerticalRow>
        </Col>
        <Col>
          <VerticalRow>
            <Couch disabled size={18} status="UNAVAILABLE" icon={faCouch} />
            <p>Ghế đã có người chọn</p>
          </VerticalRow>
        </Col>
      </Row>
    </StyledCouchList>
  );
};

export default memo(CouchList);
