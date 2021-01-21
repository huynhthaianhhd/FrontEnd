import AppLayout from 'app/containers/AppLayout';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyle } from 'styles/globalStyles';

export const App = () => {
  return (
    <BrowserRouter>
      <Helmet titleTemplate="%s - AT" defaultTitle="AE1N Tickets">
        <meta name="description" content="A React application" />
      </Helmet>
      <Switch>
        <Route component={AppLayout} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
};
