import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import IndexView from '../views/IndexView.vue'
import RegisterView from '../views/RegisterView.vue'
import OneContent from '../views/Content/OneContent.vue'
import TwoContent from '../views/Content/TwoContent.vue'
import ThreeContent from '../views/Content/ThreeContent.vue'
import FourContent from '../views/Content/FourContent.vue'
import UserMessageContent from '@/views/Content/UserMessageContent.vue'
import NotFound from '../views/NotFound.vue'
import { Message } from 'element-ui';
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/index',
    name: 'index',
    component: IndexView,
    children:[
      {
        path:'/one',
        name:'one',
        component:OneContent
      },
      {
        path:'/two',
        name:'two',
        component:TwoContent
      },
      {
        path:'/three',
        name:'three',
        component:ThreeContent
      },
      {
        path:'/four',
        name:'four',
        component:FourContent
      },
      {
        path:'/usermessage',
        name:'usermessage',
        component:UserMessageContent
      }
    ]
  },
  {
    path:'*',
    name:'*',
    component:NotFound
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (
    to.path == '/index' &&  
    to.path=='/one' &&
    to.path=='/two' &&
    to.path=='/three' && 
    to.path=='/four' &&
    to.path=='/usermessage' &&
    !localStorage.getItem('username')
  ) {
    {
      Message({
        message: "未登录，请先登录",
        type: 'error'
      })
    next('/login')
    }
  } else {
    next()
  }
})

// 解决Vue-Router升级导致的Uncaught(in promise) navigation guard问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}


export default router
