import { memo, useState } from 'react';
import Layout from 'app/components/Layout';
import Menu from 'app/components/Menu';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
const { Sider } = Layout;
const MenuItemSider = [
  {
    key: '1',
    title: 'Users',
    path: '/admin/manage-user',
    icon: <UserOutlined />,
  },
];
export const StyledSider = memo(props => {
  const [collapsed, setCollapsed] = useState(true);
  const onCollapse = collapse => {
    setCollapsed(collapse);
  };
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        trigger={null}
      >
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[`${props.location?.state?.key || 1}`]}
          mode="inline"
        >
          {MenuItemSider.map(item => (
            <Menu.Item key={item?.key} icon={item?.icon}>
              <Link
                to={{
                  pathname: item?.path,
                  state: {
                    key: item?.key,
                  },
                }}
              >
                {item?.title}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
    </>
  );
});
export default StyledSider;
