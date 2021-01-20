import { Home } from 'app/containers/Home/Loadable';
import { Login } from 'app/containers/Login/Loadable';
import { Register } from 'app/containers/Register/Loadable';
import { MovieDetail } from '../MovieDetail/Loadable';
import { Profile } from 'app/containers/Profile/Loadable';
import { CinemaDetail } from 'app/containers/CinemaDetail/Loadable';
import { Booking } from 'app/containers/Booking/Loadable';
import { ManageUsers } from 'app/containers/ManageUsers/Loadable';
import { SearchMovie } from 'app/containers/SearchMovie/Loadable';
import BookingResult from 'app/components/BookingResult';

export const privateRoutes = [
  {
    path: '/profile',
    component: Profile,
    key: 'profile',
  },
  {
    path: '/booking/:showTimeId',
    component: Booking,
    key: 'booking',
  },
  {
    path: '/booking/:id/result',
    component: BookingResult,
    key: 'booking-result',
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
  {
    path: '/cinema/:id',
    component: CinemaDetail,
    key: 'cinema',
  },
  {
    path: '/admin/manage-user',
    component: ManageUsers,
    key: 'manageUsers',
  },
  {
    path: '/search',
    component: SearchMovie,
    key: 'searchMovie',
  },
];
