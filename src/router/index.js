import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetail from '../views/MovieDetail.vue'

import Actor from '../views/Actor.vue'
import ActorDetail from '../views/ActorDetail.vue'

import Tvshow from '../views/Tvshow.vue'
import TvshowDetail from '../views/TvshowDetail.vue'

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
    component: MovieDetail
  },
  {
    path: '/tv-shows',
    name: 'Tvshow',
    component: Tvshow
  },
  {
    path: '/tv-show/:id',
    name: 'TvshowDetail',
    component: TvshowDetail
  },
  {
    path: '/actors',
    name: 'Actor',
    component: Actor
  },
  {
    path: '/actor/:id',
    name: 'ActorDetail',
    component: ActorDetail
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes,
  mode : 'history'
})

export default router
