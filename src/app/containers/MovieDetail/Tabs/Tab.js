import React, { memo } from 'react';
import { StyledTab } from './styles';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import { Tabs, Row, Avatar, Col } from 'antd';
import TabMovie from './TabMovie';
import TabReview from './TabReview';
const { TabPane } = Tabs;

export const TabInfo = memo(() => {
  return (
    <StyledTab defaultActiveKey="1" centered>
      <TabPane
        tab={
          <span style={{ fontSize: '20px' }}>
            <AndroidOutlined />
            Thông tin phim
          </span>
        }
        key="1"
      >
        <TabMovie />
      </TabPane>
      <TabPane
        tab={
          <span style={{ fontSize: '20px' }}>
            <AndroidOutlined />
            Lịch chiếu phim
          </span>
        }
        key="2"
      >
        <TabMovie />
      </TabPane>
      <TabPane
        tab={
          <span style={{ fontSize: '20px' }}>
            <AndroidOutlined />
            Đánh giá phim
          </span>
        }
        key="3"
      >
        <TabReview />
      </TabPane>
    </StyledTab>
  );
});

export default TabInfo;
