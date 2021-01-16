import { Home } from 'app/containers/Home/Loadable';
import { Login } from 'app/containers/Login/Loadable';
import { Register } from 'app/containers/Register/Loadable';
import { Profile } from 'app/containers/Profile/Loadable';
import { CinemaDetail } from 'app/containers/CinemaDetail/Loadable';

export const privateRoutes = [
  {
    path: '/abc',
    component: Home,
    key: 'home',
  },
  {
    path: '/profile',
    component: Profile,
    key: 'profile',
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
    path: '/',
    component: Home,
    key: 'home',
  },
  {
    path: '/cinema',
    component: CinemaDetail,
    key: 'cinema',
  },
];
