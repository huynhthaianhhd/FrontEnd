import React, { memo } from 'react';
import { Tabs, Image, Typography } from 'antd';
import { StyledTabLeft, StyleTimeTab } from './styles';
import { DateTab } from './DateTab';
import moment from 'moment';
import { CinemaList } from './CinemaList';

const { TabPane } = Tabs;
const { Title } = Typography;

export const TabShowTime = memo(props => {
  const { detailMovie, activeDate, handleActiveTabDate, groupCinema } = props;

  const OneTab = ({ name, logo }) => {
    return (
      <StyledTabLeft>
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
          tab={<OneTab logo={group.logo} name={group.name} />}
          key={group.id}
        >
          <StyleTimeTab>
            <DateTab
              activeDate={activeDate}
              handleActiveTabDate={handleActiveTabDate}
            ></DateTab>
          </StyleTimeTab>
          <CinemaList />
        </TabPane>
      ))}
    </Tabs>
  );
});

export default TabShowTime;
