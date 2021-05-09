
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/login', component: () => import('pages/login.vue') },
      { path: '/job-list', component: () => import('pages/job-list.vue') },
      { path: '/landing', component: () => import('pages/landing.vue') },
      { path: '/notification', component: () => import('pages/notification.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
