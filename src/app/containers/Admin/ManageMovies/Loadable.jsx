import { lazyLoad } from 'utils/loadable';

export const ManageMovies = lazyLoad(
  () => import('./index'),
  module => module.ManageMovies,
);
