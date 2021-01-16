import React, { memo } from 'react';
import { StyledTab } from './styles';
import { AndroidOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import TabMovie from './TabMovie';
import TabReview from './TabReview';
import useHooks from './hooks';
const { TabPane } = Tabs;

export const TabInfo = memo(props => {
  const { detailMovie, movieReviews } = props;
  const { handlers, selectors } = useHooks(props);
  const {
    handleChangeReview,
    handleChangeRating,
    handleSubmitReview,
  } = handlers;
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
        <TabMovie detailMovie={detailMovie} />
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
        <TabMovie detailMovie={detailMovie} />
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
        <TabReview
          movieReviews={movieReviews}
          handleChangeReview={handleChangeReview}
          handleChangeRating={handleChangeRating}
          handleSubmitReview={handleSubmitReview}
        />
      </TabPane>
    </StyledTab>
  );
});

export default TabInfo;
