import React, { memo } from 'react';
import { StyledHeader } from '../styles';
import { Link } from 'react-router-dom';
import { Avatar, Button, Input } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import Dropdown from 'app/components/Dropdown';
import Menu from 'app/components/Menu';
import {
  useLogout,
  useGetUserInfoAuthenticate,
} from 'app/containers/Login/hooks';
import { useHistory } from 'react-router-dom';

export const PublicHeader = () => {
  const user = useGetUserInfoAuthenticate();
  const history = useHistory();
  const { handlers } = useLogout();
  const { onLogout } = handlers;

  return (
    <StyledHeader>
      <div className="logo" />
      <div className="category">
        <Link to="/">Trang chủ</Link>
        <a href="/#show-time">Lịch chiếu</a>
        <a href="/#group-cinema">Cụm rạp</a>
        <a href="/#news">Tin tức</a>
      </div>

      <div className="control">
        <div className="search">
          <Input
            placeholder="Tìm kiếm"
            suffix={<SearchOutlined />}
            onPressEnter={event => {
              const input = event.target.value;
              history.push(`/search?q=${input}`);
            }}
          />
        </div>
        <div>
          {user ? (
            <Dropdown
              trigger={['click']}
              overlay={
                <Menu>
                  <Menu.Item>
                    <Link to="/profile">Profile</Link>
                  </Menu.Item>
                  <Menu.Item onClick={onLogout}>Log out</Menu.Item>
                </Menu>
              }
            >
              <Avatar src={user?.avatar} />
            </Dropdown>
          ) : (
            <Button
              onClick={() => history.push('/login')}
              icon={<UserOutlined />}
              className="align-center button"
            >
              Đăng nhập
            </Button>
          )}
        </div>
      </div>
    </StyledHeader>
  );
};

export default memo(PublicHeader);
