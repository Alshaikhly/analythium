import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '@/views/Home.vue'
import VariableA from '@/views/VariableA.vue'


const routes = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/variableA',
    name: 'VariableA',
    component: VariableA
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
