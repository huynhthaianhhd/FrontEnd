import { lazyLoad } from 'utils/loadable';

export const CinemaDetail = lazyLoad(
  () => import('./index'),
  module => module.CinemaDetail,
);
