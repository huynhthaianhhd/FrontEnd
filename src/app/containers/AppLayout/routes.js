import { Home } from 'app/containers/Home/Loadable';
import { Login } from 'app/containers/Login/Loadable';
import { Register } from 'app/containers/Register/Loadable';
import { MovieDetail } from '../MovieDetail/Loadable';
import { Profile } from 'app/containers/Profile/Loadable';
import { CinemaDetail } from 'app/containers/CinemaDetail/Loadable';
import { Booking } from 'app/containers/Booking/Loadable';
import { ManageUsers } from 'app/containers/Admin/ManageUsers/Loadable';
import { SearchMovie } from 'app/containers/SearchMovie/Loadable';
import { News } from 'app/containers/News/Loadable';
import { ManageNews } from 'app/containers/Admin/ManageNews/Loadable';
import BookingResult from 'app/components/BookingResult';
import ManageTheaters from '../Admin/ManageTheaters';
import ManageMovies from '../Admin/ManageMovies';
import ManageTransactions from '../Admin/ManageTransactions';

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
    path: '/search',
    component: SearchMovie,
    key: 'searchMovie',
  },
  {
    path: '/news/:id',
    component: News,
    key: 'news',
  },
];

export const adminRoutes = [
  {
    path: '/admin/manage-users',
    component: ManageUsers,
    key: 'ManageUsers',
  },
  {
    path: '/admin/manage-movies',
    component: ManageMovies,
    key: 'ManageMovies',
  },
  {
    path: '/admin/manage-theaters',
    component: ManageTheaters,
    key: 'ManageTheaters',
  },
  {
    path: '/admin/manage-news',
    component: ManageNews,
    key: 'ManageNews',
  },
  {
    path: '/admin/manage-transactions',
    component: ManageTransactions,
    key: 'ManageTransactions',
  },
];
