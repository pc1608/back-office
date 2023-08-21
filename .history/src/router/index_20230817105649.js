import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'layout',
      component:()=>import('@/views/layout/index.vue'),
      meta:{
        title:"首页",icon:"sfont system-home",hideClose:true
      },
      children:[
        {
          path: '',
          redirect: '/home',
          meta:{
            title:"首页",icon:"sfont system-home",hideClose:false
          }
        },
        {
          path: '/home',
          name: 'home',
          component:()=>import('@/views/main/dashboard/index.vue'),
          meta:{
            title:"首页",icon:"sfont system-home",hideClose:false
          }
        },
        {
          path: '/user',
          name: 'user',
          component:()=>import('@/views/main/dashboard/index.vue'),
          meta:{
            title:"用户",icon:"sfont system-home",hideClose:false
          }
        },
        {
          path: '/employee',
          name: 'employee',
          component:()=>import('@/views/main/employee/index.vue'),
          meta:{
            title:"员工",icon:"sfont system-home",hideClose:false
          }
        }
      ]
    },
  ]
})

export default router
