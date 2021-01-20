import React, { memo } from 'react';
import { Tabs, Image, Typography } from 'antd';
import { StyledTabLeft, StyleTimeTab } from './styles';
import { DateTab } from './DateTab';
import moment from 'moment';
import { CinemaList } from './CinemaList';

const { TabPane } = Tabs;
const { Title } = Typography;

export const TabShowTime = memo(props => {
  const {
    cinemaList,
    activeDate,
    handleActiveTabDate,
    groupCinema,
    handleActiveTabGroup,
    handleBooking,
  } = props;

  const OneTab = ({ name, logo, idGroup }) => {
    return (
      <StyledTabLeft onClick={() => handleActiveTabGroup(idGroup)}>
        <Image src={logo} className="img-tiny" preview={false} />
        <div className="content">
          <Title level={5}>{name}</Title>
        </div>
      </StyledTabLeft>
    );
  };
  return (
    <Tabs tabPosition="left" className="about-showtime about">
      {groupCinema.map(group => (
        <TabPane
          tab={
            <OneTab logo={group.logo} name={group.name} idGroup={group.id} />
          }
          key={group.id}
        >
          <StyleTimeTab>
            <DateTab
              activeDate={activeDate}
              handleActiveTabDate={handleActiveTabDate}
            ></DateTab>
          </StyleTimeTab>
          <CinemaList cinemaList={cinemaList} handleBooking={handleBooking} />
        </TabPane>
      ))}
    </Tabs>
  );
});

export default TabShowTime;
