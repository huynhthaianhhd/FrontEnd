import { lazyLoad } from 'utils/loadable';

export const Register = lazyLoad(
  () => import('./index'),
  module => module.Register,
);
