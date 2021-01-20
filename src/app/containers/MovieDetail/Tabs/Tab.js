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
  const {
    handleSubmitReview,
    handleActiveTabDate,
    handleActiveTabGroup,
    handleBooking,
  } = handlers;
  const { activeDate, cinemaList } = selectors;
  return (
    <StyledTab defaultActiveKey="1" centered>
      <TabPane
        tab={<span style={{ fontSize: '16px' }}>Lịch chiếu</span>}
        key="1"
      >
        <TabShowTime
          detailMovie={detailMovie}
          activeDate={activeDate}
          groupCinema={groupCinema}
          cinemaList={cinemaList}
          handleActiveTabDate={handleActiveTabDate}
          handleActiveTabGroup={handleActiveTabGroup}
          handleBooking={handleBooking}
        />
      </TabPane>
      <TabPane
        tab={<span style={{ fontSize: '16px' }}>Thông tin</span>}
        key="2"
      >
        <TabMovie detailMovie={detailMovie} />
      </TabPane>

      <TabPane tab={<span style={{ fontSize: '16px' }}>Đánh giá</span>} key="3">
        <TabReview
          movieReviews={movieReviews}
          handleSubmitReview={handleSubmitReview}
        />
      </TabPane>
    </StyledTab>
  );
});

export default TabInfo;
