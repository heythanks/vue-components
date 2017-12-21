import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/login'
import	Main from '@/view/main'

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path: '/',
  		redirect: '/login'
  	},
    {
	    path: '/login',
	    name: 'Login',
	    component: Login
    },
    {
    	path: '/main',
    	component: Main
    }
  ]
})
