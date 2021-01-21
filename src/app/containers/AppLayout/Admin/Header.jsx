import Avatar from 'app/components/Avatar';
import Dropdown from 'app/components/Dropdown';
import Menu from 'app/components/Menu';
import {
  useLogout,
  useGetUserInfoAuthenticate,
} from 'app/containers/Login/hooks';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledHeader } from './styles';

export const Header = () => {
  const user = useGetUserInfoAuthenticate();
  const { t } = useTranslation();
  const { handlers } = useLogout();
  const { onLogout } = handlers;

  return (
    <StyledHeader style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <div>
        <Dropdown
          trigger={['click']}
          overlay={
            <Menu>
              <Menu.Item onClick={onLogout}>{t('Header.linkLogout')}</Menu.Item>
            </Menu>
          }
        >
          <Avatar src={user?.avatar} />
        </Dropdown>
      </div>
    </StyledHeader>
  );
};

export default memo(Header);
