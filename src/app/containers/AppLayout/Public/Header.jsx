import React, { memo } from 'react';
import { StyledHeader } from '../styles';
import { Link } from 'react-router-dom';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export const PublicHeader = () => {
  return (
    <StyledHeader>
      <div className="logo" />
      <div className="category">
        <Link>Lịch chiếu</Link>
        <Link>Cụm rạp</Link>
        <Link>Tin tức</Link>
        <Link>Ứng dụng</Link>
      </div>
      <div className="control">
        <Button icon={<UserOutlined />} className="align-center button">
          Đăng nhập
        </Button>
      </div>
    </StyledHeader>
  );
};

export default memo(PublicHeader);
