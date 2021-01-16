import { lazyLoad } from 'utils/loadable';

export const ManageUsers = lazyLoad(
  () => import('./index'),
  module => module.ManageUsers,
);
