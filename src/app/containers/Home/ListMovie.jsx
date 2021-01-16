import { Tabs, Image, List, Avatar, Button } from 'antd';
import { memo } from 'react';
import BHD from 'images/movie/BHD.png';
import { GetUrlGroup, GetUrlCinema } from 'utils/common';
import { Link } from 'react-router-dom';
const { TabPane } = Tabs;

export const ListMovie = memo(({ dataSource }) => {
  return (
    <Tabs defaultActiveKey="0" tabPosition="left" style={{ height: '80vh' }}>
      {dataSource.length &&
        dataSource.map((e, i) => (
          <TabPane
            tab={
              <Image
                src={GetUrlGroup(i)}
                className="img-tiny"
                preview={false}
              />
            }
            key={i}
          >
            <List
              className="list"
              itemLayout="horizontal"
              dataSource={e?.cinemas}
              renderItem={(item, index) => {
                return (
                  <List.Item
                    actions={[
                      <Button key="list-loadmore-edit" className="button">
                        <Link to={`/cinema/${e?.id}`}>Xem chi tiết</Link>
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={GetUrlCinema(index)} />}
                      title={item?.name}
                      description={item?.description}
                    />
                  </List.Item>
                );
              }}
            ></List>
          </TabPane>
        ))}
    </Tabs>
  );
});
