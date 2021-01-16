import { Tabs } from 'antd';
import { memo } from 'react';
import { Detail } from './Detail';
import { ShowTime } from './ShowTime';
import { Container, StyledSection } from './styles';
import { sliceKey, reducer } from './slice';
import saga from './saga';
import { useInjectSaga, useInjectReducer } from 'utils/reduxInjectors';
import { useHooks } from './hooks';
const { TabPane } = Tabs;

export const CinemaDetail = memo(() => {
  useInjectSaga({ key: sliceKey, saga });
  useInjectReducer({ key: sliceKey, reducer });
  const { selectors, handles } = useHooks();
  const { listCinema } = selectors;
  return (
    <StyledSection>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Lich Chiếu" key="1">
          <Container>
            <ShowTime cinemas={listCinema} />
          </Container>
        </TabPane>
        <TabPane tab="Thông tin" key="2">
          <Container>
            <Detail></Detail>
          </Container>
        </TabPane>
        <TabPane tab="Đánh giá" key="3">
          <Container></Container>
        </TabPane>
      </Tabs>
    </StyledSection>
  );
});
