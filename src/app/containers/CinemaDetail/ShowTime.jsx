import { Tabs, Image, Typography } from 'antd';
import BHD from 'images/movie/BHD.png';
import { StyledTab, StyleTimeTab } from './styles';
import { DateTab } from './DateTab';
const { TabPane } = Tabs;
const { Title } = Typography;

export const ShowTime = () => {
  return (
    <Tabs tabPosition="left">
      <TabPane tab={<OneTab name="hihaisd" location="ashdiuas" />} key="1">
        <StyleTimeTab>
          <DateTab></DateTab>
        </StyleTimeTab>
      </TabPane>
      <TabPane tab="Tab 2" key="2">
        Content of Tab 2
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        Content of Tab 3
      </TabPane>
    </Tabs>
  );
};

const OneTab = ({ name, location }) => {
  return (
    <StyledTab>
      <Image src={BHD} className="img-tiny" preview={false} />
      <div className="content">
        <Title level={5}>{name}</Title>
        <p>{location}</p>
      </div>
    </StyledTab>
  );
};
