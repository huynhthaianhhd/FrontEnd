import { Tabs, Image } from 'antd';
import BHD from 'images/movie/BHD.png';

const { TabPane } = Tabs;
export const Detail = () => {
  return (
    <Tabs tabPosition="left">
      <TabPane tab="tab 1" key="1">
        Content of Tab 1
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
