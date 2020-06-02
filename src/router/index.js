import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id',
    name: 'MovieDetail',
    component: () => import(/* webpackChunkName: "MovieDetail" */ '../views/MovieDetail.vue')
  },
  {
    path: '/tv-shows',
    name: 'Tvshow',
    component: () => import(/* webpackChunkName: "Tvshow" */ '../views/Tvshow.vue')
  },
  {
    path: '/tv-show/:id',
    name: 'TvshowDetail',
    component: () => import(/* webpackChunkName: "TvshowDetail" */ '../views/TvshowDetail.vue')
  },
  {
    path: '/actors',
    name: 'Actor',
    component: () => import(/* webpackChunkName: "Actor" */ '../views/Actor.vue')
  },
  {
    path: '/actor/:id',
    name: 'ActorDetail',
    component: () => import(/* webpackChunkName: "ActorDetail" */ '../views/ActorDetail.vue')
  },
  {
    path: '/404',
    alias: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "404" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  routes,
  // mode : 'history'
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

export default router
