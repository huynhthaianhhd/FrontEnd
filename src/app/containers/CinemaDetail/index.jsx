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
  const { onClickTab, changeDefaultCinema } = handles;
  return (
    <StyledSection>
      <Header {...defaultCinema} />
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab={<Title level={4}>Lịch Chiếu</Title>} key="1">
          <Container>
            <ShowTime
              cinemas={listCinema}
              onClickTab={onClickTab}
              onChangeTabCinema={changeDefaultCinema}
            />
          </Container>
        </TabPane>
        <TabPane tab={<Title level={4}>Thông tin</Title>} key="2">
          <Container>
            <Detail {...defaultCinema}></Detail>
          </Container>
        </TabPane>
        <TabPane
          tab={
            <Title level={4} onClick={() => {}}>
              Đánh giá
            </Title>
          }
          key="3"
        >
          <Container>
            <Review></Review>
          </Container>
        </TabPane>
      </Tabs>
    </StyledSection>
  );
});
