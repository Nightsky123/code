import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/child/Hello'
import first from '@/components/child/first'
import second from '@/components/child/second'
import Main from '@/components/Main/Main'
import starFlow from '@/components/Main/starFlow'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        {  path: '/first', component: first},
        {  path: '/Hello', component: Hello},
        {  path: '/second', component: second}
        ]
    },
    {
      path: '/starFlow',
      name: 'starFlow',
      component: starFlow
    }
  ]
})
