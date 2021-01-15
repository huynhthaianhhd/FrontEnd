import { Tabs, Image, List, Avatar, Button, Skeleton } from 'antd';
import BHD from 'images/movie/BHD.png';
const { TabPane } = Tabs;
const data = [
  {
    name: 'ahihihi',
  },
];
export const ListMovie = ({ dataSource, groups }) => {
  return (
    <Tabs defaultActiveKey="1" tabPosition="left" style={{ height: '80vh' }}>
      {dataSource.length &&
        dataSource.map((e, i) => (
          <TabPane
            tab={<Image src={BHD} className="img-tiny" preview={false} />}
            key={i}
          >
            <List
              className="list"
              itemLayout="horizontal"
              dataSource={dataSource[i]?.cinemas}
              renderItem={item => (
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
                    title={<a href="https://ant.design">{item?.name}</a>}
                    description={item?.description}
                  />
                </List.Item>
              )}
            ></List>
          </TabPane>
        ))}
    </Tabs>
  );
};
