import React, { memo } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { publicRoutes, privateRoutes } from './routes';
import PublicRoute from './Public/Route';
import PrivateRoute from './Private/Route';
import PublicLayout from './Public/Layout';
import PrivateLayout from './Private/Layout';
import { useAuthenticatedRedirect } from './hooks';
import { useInjectSaga } from 'utils/reduxInjectors';
import saga from 'app/containers/Login/saga';
import { sliceKey } from 'app/containers/Login/slice';

export const AppLayout = () => {
  useInjectSaga({ key: sliceKey, saga });
  useAuthenticatedRedirect();

  return (
    <Switch>
      {publicRoutes.map(route => (
        <PublicRoute
          exact
          key={route.key}
          path={route.path}
          component={route.component}
          layout={PublicLayout}
        />
      ))}
      {privateRoutes.map(route => (
        <PrivateRoute
          exact
          key={route.key}
          path={route.path}
          component={route.component}
          layout={PrivateLayout}
        />
      ))}
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default memo(AppLayout);
