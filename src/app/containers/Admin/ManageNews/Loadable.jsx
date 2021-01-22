import { lazyLoad } from 'utils/loadable';

export const ManageNews = lazyLoad(
  () => import('./index'),
  module => module.ManageNews,
);
