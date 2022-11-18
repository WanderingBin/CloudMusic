import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store  from '@/store'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/musiclistitem',
    name: 'musiclistitem',
    component: () => import('../views/MusicListItem')
  },
  {
    path:"/search",
    name:'search',
    component:()=>import('../views/Search')
  },
  {
    path:"/login",
    name:'login',
    component:()=>import('../views/Login')
  },
  {
    path:"/userInfo",
    name:'userInfo',
    component:()=>import('../views/UserInfo'),
    beforeEnter: (to, from, next) => {
      if(store.state.isLogin||store.state.token||localStorage.getItem("token")){
        next()
      }else{
        next('/login')
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to,from)=>{
  if(to.path=='/login'){
    store.state.isFooterShow=false
    store.commit("updateIsBtnShow", true);
  }else{
    store.state.isFooterShow=true
  }
})

export default router
