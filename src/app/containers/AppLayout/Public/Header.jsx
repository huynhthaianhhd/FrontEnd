import React, { memo } from 'react';
import { StyledHeader } from '../styles';
import { Link } from 'react-router-dom';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
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
        <Link>Tin tức</Link>
      </div>
      <div className="control">
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
    </StyledHeader>
  );
};

export default memo(PublicHeader);
