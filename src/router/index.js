import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      component: () => import('@/views/home/index.vue')
    },
    {
      path: '/table',
      component: () => import('@/views/table/index.vue')
    },
  ],
})

export default router