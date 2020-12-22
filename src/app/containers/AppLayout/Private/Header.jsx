import Avatar from 'app/components/Avatar';
import Dropdown from 'app/components/Dropdown';
import Menu from 'app/components/Menu';
import { useLogout } from 'app/containers/Login/hooks';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { StyledHeader } from '../styles';

export const Header = () => {
  const { t } = useTranslation();
  const { handlers } = useLogout();
  const { onLogout } = handlers;

  return (
    <StyledHeader>
      <div className="left">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Link to="/">{t('Header.linkHome')}</Link>
          </Menu.Item>
        </Menu>
      </div>
      <div className="right">
        <Dropdown
          trigger={['click']}
          overlay={
            <Menu>
              <Menu.Item>
                <Link to="/profile">{t('Header.linkProfile')}</Link>
              </Menu.Item>
              <Menu.Item onClick={onLogout}>{t('Header.linkLogout')}</Menu.Item>
            </Menu>
          }
        >
          <Avatar />
        </Dropdown>
      </div>
    </StyledHeader>
  );
};

export default memo(Header);
