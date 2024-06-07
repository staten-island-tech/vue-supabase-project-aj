import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import {userStore} from '@/stores/store.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SignView.vue'),
    },
    {
      path: '/signin',
      name: 'signin',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/SignIn.vue'),
    },
    {
      path: "/home",
      name: 'ya',
      component: () => import('../components/WelcomeView.vue'),
      beforeEnter: (to, from, next) => {
        if(userStore.isUserLoggedIn != true) {
            next('/');
        } else {
            next();
        }
    }
    },
    {
      path: '/fyp',
      name: 'fyp',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/ForYou.vue'),
      beforeEnter: (to, from, next) => {
        if(userStore.isUserLoggedIn != true) {
            next('/');
        } else {
            next();
        }
    }
    },
    {
      path: '/friends',
      name: 'friends',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/FriEnds.vue'),
/*       beforeEnter: (to, from, next) => {
        if(userStore.isUserLoggedIn != true) {
            next('/');
        } else {
            next();
        }
    } */
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/ImaGine.vue'),
      /* beforeEnter: (to, from, next) => {
        if(userStore.isUserLoggedIn != true) {
            next('/');
        } else {
            next();
        }
    } */
    },
    
  ]
})

export default router;
