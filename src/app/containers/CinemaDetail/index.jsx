import { Tabs, Typography } from 'antd';
import { memo } from 'react';
import { Detail } from './Detail';
import { Header } from './Header';
import { Review } from './Review';
import { ShowTime } from './ShowTime';
import { Container, StyledSection } from './styles';
import { sliceKey, reducer } from './slice';
import saga from './saga';
import { useInjectSaga, useInjectReducer } from 'utils/reduxInjectors';
import { useHooks } from './hooks';
const { TabPane } = Tabs;
const { Title } = Typography;
export const CinemaDetail = memo(() => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const { selectors, handles } = useHooks();
  const { listCinema, defaultCinema } = selectors;
  const { onClickTab, changeDefaultCinema, onSubmitReview } = handles;
  return (
    <StyledSection>
      <Header {...defaultCinema} />
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Lịch Chiếu" key="Lịch Chiếu">
          <Container>
            <ShowTime
              cinemas={listCinema}
              onClickTab={onClickTab}
              onChangeTabCinema={changeDefaultCinema}
            />
          </Container>
        </TabPane>
        <TabPane tab="Thông tin" key="Thông tin">
          <Container>
            <Detail {...defaultCinema}></Detail>
          </Container>
        </TabPane>
        <TabPane tab="Đánh giá" key="Đánh giá">
          <Container>
            <Review {...defaultCinema} onSubmit={onSubmitReview}></Review>
          </Container>
        </TabPane>
      </Tabs>
    </StyledSection>
  );
});
