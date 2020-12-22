import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'sanitize.css/sanitize.css';
import 'antd/dist/antd.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { App } from 'app';
import Popup from 'app/containers/Popup';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'store/configureStore';

import { isAuthenticated } from 'utils/localStorageUtils';
import './locales/i18n';

const initialState = {
  authentication: {
    isAuthenticated: isAuthenticated(),
  },
};

const store = configureAppStore(initialState);
const MOUNT_NODE = document.getElementById('root');

const ConnectedApp = ({ Component }) => (
  <Provider store={store}>
    <HelmetProvider>
      <React.StrictMode>
        <Component />
        <Popup />
      </React.StrictMode>
    </HelmetProvider>
  </Provider>
);

const render = Component => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

if (module.hot) {
  module.hot.accept(['./app'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    const App = require('./app').App;
    render(App);
  });
}

render(App);
