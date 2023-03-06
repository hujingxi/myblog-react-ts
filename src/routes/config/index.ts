import React, { lazy } from 'react';

export interface RouterConfigProps {
  path: string;
  name?: string;
  component: React.LazyExoticComponent<React.FC<any>>;
  chhildren?: RouterConfigProps[];
}

const AccountPage = lazy(() => import('../../views/account/index'));
const NotFoundPage = lazy(() => import('../../views/not-found/index'));
const PortalPage = lazy(() => import('../../views/portal/index'));

// 路由表
const routes: RouterConfigProps[]= [
  {
    path: '/',
    name: 'INDEX',
    component: PortalPage,
  },
  {
    path: 'myblog/account',
    name: 'ACCOUNT',
    component: AccountPage,
  },
  {
    path: '*',
    name: 'NOT FOUND',
    component: NotFoundPage,
  },
];

export default routes;
