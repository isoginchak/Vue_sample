import { createRouter, createWebHistory } from 'vue-router'
import SampleHome from '@/components/SampleHome.vue'
import TestPage01 from '@/components/SampleTest1.vue'
import TestPage02 from '@/components/SampleTest2.vue'

const routes = [
    {
        path: '/',
        name: 'SampleHome',
        component: SampleHome
      },
    {
      path: '/test/1',
      name: 'SampleTest1',
      component:  TestPage01 
    },
    {
      path: '/test/2',
      name: 'SampleTest2',
      component: TestPage02 
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router