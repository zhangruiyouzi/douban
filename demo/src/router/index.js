import Vue from 'vue'
import Router from 'vue-router'
import movies from '../pages/movies'
import audios from '../pages/audios'
import books from '../pages/books'
import groups from '../pages/groups'
import others from '../pages/others'
import index from '../pages/index'
import register from '../pages/register'
import login from '../pages/login'
import sss from '../pages/sss'

Vue.use(Router)

export default new Router({
  
  routes: [
    {
    path:"/",
    redirect:'/index',
    },
    {
      path: '/movies',
      name: 'movies',
      component: movies
    },
   
    {
      path: '/audios',
      name: 'audios',
      component: audios
    }
    ,
    {
      path: '/books',
      name: 'books',
      component: books
    },
    {
      path: '/groups',
      name: 'groups',
      component: groups
    },
    {
      path: '/others',
      name: 'others',
      component: others
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
    ,
    {
      path: '/login',
      name: 'login',
      component: login
    }  ,
    {
      path: '/sss',
      name: 'sss',
      component: sss
    }
  ]
})
