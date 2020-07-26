import Vue from 'vue'
import VueRouter from 'vue-router'
import HW from '../components/HelloWorld.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/com',
    name: 'com',
    component: HW
  },
  {
    path: '/movie',
    name: 'Movie',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/movie/index.vue'),
    children:[
      {
        path:'city',
        component:()=>import('@/components/City')
      },
      {
        path:'nowPlaying',
        component:()=>import('@/components/Nowplaying')
      },
      {
        path:'search',
        component:()=>import('@/components/Search')
      },
      {
        path:'comingSoon',
        component:()=>import('@/components/Comingsoon')
      },
      {
        path:'/movie',
        redirect:'/movie/nowPlaying'
      },
      
    ]
  },
  {
    path:'/cinema',
    name:'Cinema',
    component:() => import('../views/cinema/index.vue')
  },
  {
    path:'/center',
    name:'Center',
    component:() => import('../views/center/index.vue')
  },
  {
    path:'/*',
    redirect:'/movie'
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
