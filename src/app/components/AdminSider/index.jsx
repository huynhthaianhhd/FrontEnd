import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;
const { SubMenu } = Menu;

const AdminSider = ({ selectedKey }) => {
  return (
    <Sider>
      <Menu theme="dark" defaultSelectedKeys={[`${selectedKey}`]} mode="inline">
        <Menu.Item key="1">
          <Link to={'/admin/manage-users'}>Quản lý người dùng</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={'/admin/manage-movies'}>Quản lý phim</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to={'/admin/manage-theaters'}>Quản lý cụm rạp</Link>
        </Menu.Item>
        {/* <Menu.Item key="4">Quản lý rạp</Menu.Item> */}
        <SubMenu key="sub1" title="Quản lý rạp">
          <Menu.Item key="4">Quản lý đánh giá</Menu.Item>
          <Menu.Item key="5">Quản lý ghế</Menu.Item>
        </SubMenu>
        {/* <SubMenu key="sub2" title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9">Files</Menu.Item> */}
      </Menu>
    </Sider>
  );
};

export default AdminSider;
