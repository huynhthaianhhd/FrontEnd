import { Tabs, Image, Typography } from 'antd';
import BHD from 'images/movie/BHD.png';
import { StyledTab, StyleTimeTab } from './styles';
import { DateTab } from './DateTab';
import { MovieList } from './MovieList';
import { useState } from 'react';
const { TabPane } = Tabs;
const { Title } = Typography;

export const ShowTime = ({ cinemas, onClickTab }) => {
  const [activeTab, setActiveTab] = useState(0);
  const onChangeTab = i => {
    setActiveTab(i);
  };
  return (
    <Tabs tabPosition="left">
      {cinemas.length > 0 &&
        cinemas.map((e, i) => (
          <TabPane tab={<OneTab {...e} />} key={i}>
            <StyleTimeTab>
              <DateTab
                activeTab={activeTab}
                onClickTab={onClickTab}
                onChangeTab={onChangeTab}
              ></DateTab>
            </StyleTimeTab>
            <MovieList movies={e?.movies || []} />
          </TabPane>
        ))}
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
