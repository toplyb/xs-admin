import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import Layout from '@/views/layout/index.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
