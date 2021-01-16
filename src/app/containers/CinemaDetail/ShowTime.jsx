import { Tabs, Image, Typography } from 'antd';
import BHD from 'images/movie/BHD.png';
import { StyledTab, StyleTimeTab } from './styles';
import { DateTab } from './DateTab';
import { MovieList } from './MovieList';
const { TabPane } = Tabs;
const { Title } = Typography;

export const ShowTime = ({ cinemas }) => {
  return (
    <Tabs tabPosition="left">
      {cinemas.length > 0 &&
        cinemas.map((e, i) => (
          <TabPane tab={<OneTab {...e} />} key={i}>
            <StyleTimeTab>
              <DateTab></DateTab>
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
