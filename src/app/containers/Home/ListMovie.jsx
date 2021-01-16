import { Tabs, Image, List, Avatar, Button, Skeleton } from 'antd';
import { memo } from 'react';
import BHD from 'images/movie/BHD.png';
const { TabPane } = Tabs;

export const ListMovie = ({ dataSource }) => {
  return (
    <Tabs defaultActiveKey="0" tabPosition="left" style={{ height: '80vh' }}>
      {dataSource.length &&
        dataSource.map((e, i) => (
          <TabPane
            tab={<Image src={BHD} className="img-tiny" preview={false} />}
            key={i}
          >
            <List
              className="list"
              itemLayout="horizontal"
              dataSource={e?.cinemas}
              renderItem={item => {
                return (
                  <List.Item
                    actions={[
                      <Button key="list-loadmore-edit" className="button">
                        Xem chi tiết
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                      }
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
};
