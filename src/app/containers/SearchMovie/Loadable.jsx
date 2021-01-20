import { lazyLoad } from 'utils/loadable';

export const SearchMovie = lazyLoad(
  () => import('./index'),
  module => module.SearchMovie,
);
