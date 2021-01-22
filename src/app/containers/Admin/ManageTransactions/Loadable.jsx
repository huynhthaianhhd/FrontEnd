import { lazyLoad } from 'utils/loadable';

export const ManageTransactions = lazyLoad(
  () => import('./index'),
  module => module.ManageTransactions,
);
