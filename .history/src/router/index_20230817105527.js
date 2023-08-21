/*
 * @Author: qjy
 * @Date: 2023-08-14 17:03:01
 * @LastEditors: hyman
 * @LastEditTime: 2023-08-17 10:55:27
 * @Description: 请填写简介
 */
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
          path: '/',
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
