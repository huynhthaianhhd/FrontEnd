import { Home } from 'app/containers/Home/Loadable';
import { Login } from 'app/containers/Login/Loadable';
import { Register } from 'app/containers/Register/Loadable';
import { MovieDetail } from '../MovieDetail/Loadable';
import { Row, Col } from 'antd';

export const privateRoutes = [
  {
    path: '/',
    component: Home,
    key: 'home',
  },
];

export const publicRoutes = [
  {
    path: '/login',
    component: Login,
    key: 'login',
  },
  {
    path: '/register',
    component: Register,
    key: 'register',
  },
  {
    path: '/movie/:id',
    component: MovieDetail,
    key: 'movieDetail',
  },
];
