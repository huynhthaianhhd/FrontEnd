import React, { memo } from 'react';
import { Tabs, Image, Typography } from 'antd';
import BHD from 'images/movie/BHD.png';
import { StyledTabLeft, StyleTimeTab } from './styles';
import { DateTab } from './DateTab';
import moment from 'moment';

const { TabPane } = Tabs;
const { Title } = Typography;

export const TabShowTime = memo(props => {
  const { detailMovie, activeDate, handleActiveTabDate, groupCinema } = props;

  const OneTab = ({ name }) => {
    return (
      <StyledTabLeft>
        <Image src={BHD} className="img-tiny" preview={false} />
        <div className="content">
          <Title level={5}>{name}</Title>
        </div>
      </StyledTabLeft>
    );
  };
  return (
    <Tabs tabPosition="left" className="about-showtime about">
      {groupCinema.map(group => (
        <TabPane tab={<OneTab name={group.name} />} key={group.id}>
          <StyleTimeTab>
            <DateTab
              activeDate={activeDate}
              handleActiveTabDate={handleActiveTabDate}
            ></DateTab>
          </StyleTimeTab>
        </TabPane>
      ))}
    </Tabs>
  );
});

export default TabShowTime;
