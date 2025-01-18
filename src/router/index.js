import { createRouter, createWebHistory } from 'vue-router'

// main layout pages
import MainPages from '@/shared/layouts/MainPages.vue'
import HomeView from '../views/HomeView.vue'

const routes = [

  {
    path: '/',
    component: MainPages,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
    ],
  },
 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
