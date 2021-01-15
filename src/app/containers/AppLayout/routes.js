import { Home } from 'app/containers/Home/Loadable';
import { Login } from 'app/containers/Login/Loadable';
import { Register } from 'app/containers/Register/Loadable';
import { MovieDetail } from '../MovieDetail/Loadable';
import { Profile } from 'app/containers/Profile/Loadable';
import { Booking } from 'app/containers/Booking/Loadable';

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
  {
    path: '/booking',
    component: Booking,
    key: 'booking',
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
  {
    path: '/',
    component: Home,
    key: 'home',
  },
];
