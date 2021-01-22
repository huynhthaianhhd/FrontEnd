import { lazyLoad } from 'utils/loadable';

export const News = lazyLoad(
  () => import('./index'),
  module => module.News,
);
