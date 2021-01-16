import React, { memo } from 'react';
import { StyledTab } from './styles';
import { AndroidOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import TabMovie from './TabMovie';
import TabReview from './TabReview';
import useHooks from './hooks';
import TabShowTime from './TabShowTime';
const { TabPane } = Tabs;

export const TabInfo = memo(props => {
  const { detailMovie, movieReviews, groupCinema } = props;
  const { handlers, selectors } = useHooks(props);
  const { handleSubmitReview, handleActiveTabDate } = handlers;
  const { activeDate } = selectors;
  return (
    <StyledTab defaultActiveKey="1" centered>
      <TabPane
        tab={
          <span style={{ fontSize: '16px' }}>
            <AndroidOutlined />
            Thông tin
          </span>
        }
        key="1"
      >
        <TabMovie detailMovie={detailMovie} />
      </TabPane>
      <TabPane
        tab={
          <span style={{ fontSize: '16px' }}>
            <AndroidOutlined />
            Lịch chiếu
          </span>
        }
        key="2"
      >
        <TabShowTime
          detailMovie={detailMovie}
          activeDate={activeDate}
          groupCinema={groupCinema}
          handleActiveTabDate={handleActiveTabDate}
        />
      </TabPane>
      <TabPane
        tab={
          <span style={{ fontSize: '16px' }}>
            <AndroidOutlined />
            Đánh giá
          </span>
        }
        key="3"
      >
        <TabReview
          movieReviews={movieReviews}
          handleSubmitReview={handleSubmitReview}
        />
      </TabPane>
    </StyledTab>
  );
});

export default TabInfo;
