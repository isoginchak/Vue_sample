import { createRouter, createWebHistory } from 'vue-router'
import SampleHome from '@/components/SampleHome.vue'
import SampleAbout from '@/components/SampleAbout.vue'
import TestPage01 from '@/components/SampleTest1.vue'
import TestPage02 from '@/components/SampleTest2.vue'
import PostShow from '@/components/PostShow.vue'


const routes = [
    {
        path: '/',
        name: 'SampleHome',
        component: SampleHome
      },
      {
        path: '/about',
        name: 'SampleAbout',
        component: SampleAbout
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
    },
    {
        path: '/post/:id',
        name: 'PostShow',
        component:PostShow,
        props:true,
      },
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
  export default router