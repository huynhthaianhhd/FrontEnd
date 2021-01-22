import { Tabs, Image, Typography } from 'antd';
import { GetUrlCinema } from 'utils/common';
import { StyledTab, StyleTimeTab } from './styles';
import { DateTab } from './DateTab';
import { MovieList } from './MovieList';
import { useState, memo } from 'react';

const { TabPane } = Tabs;
const { Title } = Typography;

export const ShowTime = memo(({ cinemas, onClickTab, onChangeTabCinema }) => {
  const [activeTab, setActiveTab] = useState(0);
  const onChangeTab = i => {
    setActiveTab(i);
  };
  return (
    <Tabs tabPosition="left">
      {cinemas.length > 0 &&
        cinemas.map((e, i) => (
          <TabPane
            tab={
              <OneTab
                {...e}
                index={i}
                onClick={() => onChangeTabCinema(i)}
                key={i}
              />
            }
            key={i}
          >
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
});

const OneTab = ({ name, location, index, onClick }) => {
  return (
    <StyledTab onClick={onClick}>
      <Image src={GetUrlCinema(index)} className="img-tiny" preview={false} />
      <div className="content">
        <Title level={5}>{name}</Title>
        <p>{location}</p>
      </div>
    </StyledTab>
  );
};
