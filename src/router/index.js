import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/edit',
    name: 'edit',
    component: Home,
  },
  {
    path: '/',
    name: 'land',
    component: () => import( /* webpackChunkName: "about" */ '../views/LandingPage.vue'),
  },
  {
    path: '/photo/:id',
    name: 'photo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Photo.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router