import {
  makeSelectIsAuthenticated,
  selectUserInfoAuthenticate,
} from 'app/containers/Login/selectors';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

export const useHooks = () => {
  const isAuthenticated = useSelector(makeSelectIsAuthenticated);

  return {
    selectors: {
      isAuthenticated,
    },
    handler: {},
  };
};

export const useAuthenticatedRedirect = () => {
  const history = useHistory();
  const location = useLocation();
  const user = useSelector(selectUserInfoAuthenticate);
  const isRedirect = ['/login', '/register'].includes(location.pathname);
  const { from } = location.state || { from: { pathname: '/' } };
  const isAuthenticated = useSelector(makeSelectIsAuthenticated);

  useEffect(() => {
    if (isAuthenticated && isRedirect) {
      history.replace(from);
    }
  }, [isAuthenticated, history, from, isRedirect]);

  useEffect(() => {
    if (
      user &&
      user.roles?.includes('admin') &&
      !location.pathname.includes('admin')
    )
      history.push('/admin/manage-users');
  }, [history, location, user]);

  useEffect(() => {
    if (
      user &&
      !user.roles?.includes('admin') &&
      location.pathname.includes('admin')
    )
      history.push('/');
  }, [history, location, user]);
};

export default useHooks;
