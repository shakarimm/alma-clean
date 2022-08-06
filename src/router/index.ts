import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import ProfileLayout from '@/layouts/ProfileLayout.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Order from '@/views/Order.vue';
import ProfileOrders from '@/views/Profile/ProfileOrders.vue';
import ProfileFreeOrders from '@/views/Profile/ProfileFreeOrders.vue';
import ProfileSettings from '@/views/Profile/ProfileSettings.vue';
import ProfileCleaners from '@/views/Profile/ProfileCleaners.vue';
import Auth from '@/views/Auth/Auth.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
  },
  {
    path: '/profile',
    name: 'Profile',
    redirect: (to) => ({
      path: '/profile/orders',
      query: to.query,
    }),
    component: ProfileLayout,
    children: [
      {
        path: '/profile/orders',
        name: 'ProfileOrders',
        component: ProfileOrders,
      },
      {
        path: '/profile/free-orders',
        name: 'ProfileFreeOrders',
        component: ProfileFreeOrders,
      },
      {
        path: '/profile/cleaners',
        name: 'ProfileCleaners',
        component: ProfileCleaners,
      },
      {
        path: '/profile/settings',
        name: 'ProfileSettings',
        component: ProfileSettings,
      },
    ],
  },
  {
    path: '/auth',
    redirect: '/auth/sign-up',
  },
  {
    path: '/auth/sign-in',
    alias: ['/auth/sign-up'],
    name: 'Auth',
    component: Auth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
