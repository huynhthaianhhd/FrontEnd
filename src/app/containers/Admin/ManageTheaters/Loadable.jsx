import { lazyLoad } from 'utils/loadable';

export const ManageTheaters = lazyLoad(
  () => import('./index'),
  module => module.ManageTheaters,
);
