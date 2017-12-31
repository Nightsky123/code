import Vue from 'vue'
import Router from 'vue-router'
import VueLazyload from 'vue-lazyload'  //引入懒加载
import echarts from 'echarts/src/echarts'   // 引入echarts
import VueQuillEditor from 'vue-quill-editor'  //富文本编辑器

import leaveMessage from '@/components/child/leaveMessage'
import aboutMe from '@/components/child/aboutMe'
import second from '@/components/child/second'
import myTrial from '@/components/child/myTrial'

import Main from '@/components/Main/Main'
import global from '@/components/Main/global'
import contactMe from '@/components/Main/contactMe'

import keyboard from '@/components/sixArticle/keyboard'
import guitar from '@/components/sixArticle/guitar'
import sightseeing from '@/components/sixArticle/sightseeing'
import music from '@/components/sixArticle/music'
import freephoto from '@/components/sixArticle/freephoto'
import me from '@/components/sixArticle/me'
import tips from '@/components/tips/tips'

Vue.prototype.$echarts = echarts;
Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: require('../assets/coding.jpg'),
  loading: '',
  attempt: 6,
  listenEvents: [ 'scroll', 'mousewheel' ]
});

Vue.use(VueQuillEditor)
Vue.use(Router)

export default new Router({
  mode: 'history', //用history模式可以 去掉 地址 的 #
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        {  path: '/aboutMe', component: aboutMe},
        {  path: '/second', component: second},
        {  path: '/leaveMessage', component: leaveMessage},
        {  path: '/myTrial', component: myTrial},
        {  path: '/contactMe', component: contactMe},

        //那些文章
        {  path: '/keyboard', component: keyboard},
        {  path: '/guitar', component: guitar},
        {  path: '/sightseeing', component: sightseeing},
        {  path: '/starFlow', component: music},
        {  path: '/freephoto', component: freephoto},
        {  path: '/music', component: music},
        {  path: '/me', component: me},
        ]
    },
    {
      path: '/global', //同级别路径这么写
      component: global
    }
  ]
})


