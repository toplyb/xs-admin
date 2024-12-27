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
        name: 'Index',
        component: () => import('@/views/index/index.vue'),
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/user/index.vue'),
      },
      {
        path: '/user/add',
        name: 'UserAdd',
        component: () => import('@/views/user/add.vue'),
      },
      {
        path: '/role',
        name: 'Role',
        component: () => import('@/views/role/index.vue'),
      },
      {
        path: '/role/add',
        name: 'RoleAdd',
        component: () => import('@/views/role/add.vue'),
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
