import { memo } from 'react';
import { StyledCouchList, Couch } from './styles';
import { faCouch } from '@fortawesome/free-solid-svg-icons';
import { Row } from 'antd';

const CouchList = ({ handleClickSeat, seats, seatPerRow = 10, ...rest }) => {
  const formattedSeats =
    seats.length > 0 &&
    seats.reduce((acc, _, index) => {
      if (index % seatPerRow === 0) {
        acc.push(
          <Row>
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
                  icon={faCouch}
                />
              );
            })}
          </Row>,
        );
        return acc;
      }
      return acc;
    }, []);

  return <StyledCouchList {...rest}>{formattedSeats}</StyledCouchList>;
};

export default memo(CouchList);
