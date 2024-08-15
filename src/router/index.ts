// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/pages/LoginPage.vue'), // Lazy load para LoginPage
  },
  {
    path: '/professor',
    name: 'ProfessorDashboard',
    component: () => import('@/pages/professor/ProfessorDashboard.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
