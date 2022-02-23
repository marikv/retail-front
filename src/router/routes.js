const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'auth', component: () => import('pages/Auth.vue') },
      { path: 'dealers', component: () => import('pages/Dealers.vue') },
      { path: 'users', component: () => import('pages/Users.vue') },
      { path: 'calculator', component: () => import('pages/Calculator.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') },
      { path: 'bids', component: () => import('pages/Bids.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
