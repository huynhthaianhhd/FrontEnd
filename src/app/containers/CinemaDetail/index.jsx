import { Tabs } from 'antd';
import { memo } from 'react';
import { Detail } from './Detail';
import { ShowTime } from './ShowTime';
import { Container, StyledSection } from './styles';
const { TabPane } = Tabs;

export const CinemaDetail = memo(() => {
  return (
    <StyledSection>
      <Tabs defaultActiveKey="1" centered>
        <TabPane tab="Lich Chiếu" key="1">
          <Container>
            <ShowTime />
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
